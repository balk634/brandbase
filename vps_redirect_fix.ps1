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

Invoke-WithRetry { scp -o StrictHostKeyChecking=no -i ~/.ssh/tagg_vps_key .\vps_env.txt root@72.61.226.137:/root/basebrand-booking/.env } "Upload Corrected Env"

$sshFix = @"
cd /root/basebrand-booking
docker compose up -d --force-recreate basebrand-web
"@
Invoke-WithRetry { ssh -o StrictHostKeyChecking=no -i ~/.ssh/tagg_vps_key root@72.61.226.137 $sshFix } "Apply Env Redirect Fix"
