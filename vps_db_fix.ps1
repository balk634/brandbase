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

Invoke-WithRetry { scp -o StrictHostKeyChecking=no -i ~/.ssh/tagg_vps_key root@72.61.226.137:/root/basebrand-booking/.env .\vps_env.txt } "Download Env"

$envContent = Get-Content .\vps_env.txt -Raw
if (-not ($envContent -match "DATABASE_DIRECT_URL")) {
    $envContent += "`nDATABASE_DIRECT_URL=postgresql://basebrand_user:Bb!Cal2024Secure@basebrand-db:5432/basebrand_cal"
    Set-Content -Path .\vps_env.txt -Value $envContent -Encoding ASCII
}

Invoke-WithRetry { scp -o StrictHostKeyChecking=no -i ~/.ssh/tagg_vps_key .\vps_env.txt root@72.61.226.137:/root/basebrand-booking/.env } "Upload Env"

$sshFix = @"
cd /root/basebrand-booking
docker compose restart basebrand-web
sleep 5
docker exec basebrand-web npx prisma migrate deploy
"@
Invoke-WithRetry { ssh -o StrictHostKeyChecking=no -i ~/.ssh/tagg_vps_key root@72.61.226.137 $sshFix } "Apply Migration"
