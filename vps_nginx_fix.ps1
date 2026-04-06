$nginxConfRaw = @"
worker_processes 1;
events { worker_connections 1024; }
http {
    include       mime.types;
    default_type  application/octet-stream;
    
    server {
        listen 80;
        server_name _;

        location / {
            proxy_pass http://basebrand-web:3000/;
            proxy_set_header Host `$host;
            proxy_set_header X-Real-IP `$remote_addr;
            proxy_set_header X-Forwarded-For `$proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto `$scheme;

            # --- CSS Injections & HTML Sub_Filtering ---
            proxy_set_header Accept-Encoding ""; 
            
            sub_filter 'Powered by Cal.com' '';
            sub_filter 'Cal.com' 'Basebrand';
            sub_filter 'cal.com' 'brandbase.in';
            
            sub_filter '</head>' '<style>:root { --brand-color: #111827 !important; }</style></head>';
            
            sub_filter_once off;
        }
    }
}
"@

Out-File -FilePath .\nginx.conf -InputObject $nginxConfRaw -Encoding ASCII

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

Invoke-WithRetry { scp -o StrictHostKeyChecking=no -o ConnectTimeout=15 -i ~/.ssh/tagg_vps_key .\nginx.conf root@72.61.226.137:/root/basebrand-booking/nginx.conf } "SCP Nginx Conf Fix"

$sshScriptLaunch = @"
cd /root/basebrand-booking
docker compose up -d
docker compose restart nginx
"@
Invoke-WithRetry { ssh -o StrictHostKeyChecking=no -o ConnectTimeout=15 -i ~/.ssh/tagg_vps_key root@72.61.226.137 $sshScriptLaunch } "Restart Nginx proxy"
