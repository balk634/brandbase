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
    environment:
      DATABASE_DIRECT_URL: postgresql://basebrand_user:Bb!Cal2024Secure@basebrand-db:5432/basebrand_cal
    volumes:
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

Out-File -FilePath .\docker-compose-proxy.yml -InputObject $dockerComposeRaw -Encoding ASCII

$maxRetries = 5
$retryIntervalSec = 3

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

Invoke-WithRetry { scp -o StrictHostKeyChecking=no -o ConnectTimeout=15 -i ~/.ssh/tagg_vps_key .\docker-compose-proxy.yml root@72.61.226.137:/root/basebrand-booking/docker-compose.yml } "SCP Compose Fix"

$sshFix = @"
cd /root/basebrand-booking
docker compose up -d --force-recreate basebrand-web
sleep 5
docker exec basebrand-web npx prisma migrate deploy
"@
Invoke-WithRetry { ssh -o StrictHostKeyChecking=no -o ConnectTimeout=15 -i ~/.ssh/tagg_vps_key root@72.61.226.137 $sshFix } "Apply Migration Force Recreate"
