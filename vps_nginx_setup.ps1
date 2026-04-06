$maxRetries = 10
$retryIntervalSec = 5

Function Invoke-WithRetry ($CommandBlock, $Description) {
    for ($i = 1; $i -le $maxRetries; $i++) {
        Write-Host "Attempt $i for $Description..."
        $process = & $CommandBlock
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Success: $Description"
            return $true
        }
        Write-Host "Failed. Waiting $retryIntervalSec seconds..."
        Start-Sleep -Seconds $retryIntervalSec
    }
    Write-Host "Gave up on: $Description"
    return $false
}

$sshScriptDrop = @"
echo 'Dropping old build and tmux sessions'
tmux kill-session -t calbuild 2>/dev/null || true
cd /root/basebrand-booking
docker compose down -v
"@
Invoke-WithRetry { ssh -o StrictHostKeyChecking=no -o ConnectTimeout=15 -i ~/.ssh/tagg_vps_key root@72.61.226.137 $sshScriptDrop } "Teardown old builds"

$dockerComposeRaw = @"
version: '3.8'

services:
  nginx:
    image: nginx:alpine
    container_name: basebrand-proxy
    restart: unless-stopped
    ports:
      - "127.0.0.1:3001:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - basebrand-web

  basebrand-web:
    image: calcom/cal.com:latest
    container_name: basebrand-web
    restart: unless-stopped
    env_file: .env
    volumes:
      # Injecting standard logos via bind mount
      - ./apps/web/public/logo.svg:/calcom/apps/web/public/logo.svg:ro
      - ./apps/web/public/favicon.ico:/calcom/apps/web/public/favicon.ico:ro
      - ./apps/web/public/apple-icon.png:/calcom/apps/web/public/apple-icon.png:ro
      - ./apps/web/public/og-image.png:/calcom/apps/web/public/og-image.png:ro
    depends_on:
      basebrand-db:
        condition: service_healthy

  basebrand-db:
    image: postgres:15
    container_name: basebrand-db
    restart: unless-stopped
    environment:
      POSTGRES_USER: basebrand_user
      POSTGRES_PASSWORD: Bb!Cal2024Secure
      POSTGRES_DB: basebrand_cal
    volumes:
      - basebrand_pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U basebrand_user -d basebrand_cal"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  basebrand_pgdata:
"@

$nginxConfRaw = @"
worker_processes 1;
events { worker_connections 1024; }
http {
    include       mime.types;
    default_type  application/octet-stream;
    
    server {
        listen 80;
        server_name booking.basebrand.in;

        location / {
            proxy_pass http://basebrand-web:3000/;
            proxy_set_header Host `$host;
            proxy_set_header X-Real-IP `$remote_addr;
            proxy_set_header X-Forwarded-For `$proxy_addrs;
            proxy_set_header X-Forwarded-Proto `$scheme;

            # --- CSS Injections & HTML Sub_Filtering ---
            # Remove compression from upstream so sub_filter can read HTML
            proxy_set_header Accept-Encoding "";
            
            # White-labeling text injection
            sub_filter 'Powered by Cal.com' '';
            sub_filter 'Cal.com' 'Basebrand';
            sub_filter 'cal.com' 'basebrand.in';
            
            # Sub filter CSS color injections
            sub_filter '</head>' '<style>:root { --brand-color: #111827 !important; }</style></head>';
            
            sub_filter_once off;
            sub_filter_types text/html;
        }
    }
}
"@

Out-File -FilePath .\docker-compose-proxy.yml -InputObject $dockerComposeRaw -Encoding ASCII
Out-File -FilePath .\nginx.conf -InputObject $nginxConfRaw -Encoding ASCII

Invoke-WithRetry { scp -o StrictHostKeyChecking=no -o ConnectTimeout=15 -i ~/.ssh/tagg_vps_key .\docker-compose-proxy.yml root@72.61.226.137:/root/basebrand-booking/docker-compose.yml } "SCP Docker Compose"
Invoke-WithRetry { scp -o StrictHostKeyChecking=no -o ConnectTimeout=15 -i ~/.ssh/tagg_vps_key .\nginx.conf root@72.61.226.137:/root/basebrand-booking/nginx.conf } "SCP Nginx Conf"

$sshScriptLaunch = @"
cd /root/basebrand-booking
docker compose up -d
"@
Invoke-WithRetry { ssh -o StrictHostKeyChecking=no -o ConnectTimeout=15 -i ~/.ssh/tagg_vps_key root@72.61.226.137 $sshScriptLaunch } "Launch robust setup"
