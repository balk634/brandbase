$maxRetries = 20
$retryIntervalSec = 10

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

$sshScript = @"
cd /root/basebrand-booking
nohup docker compose up -d --build basebrand-web > /tmp/calcom-rebuild.log 2>&1 &
"@

Invoke-WithRetry { ssh -o StrictHostKeyChecking=no -o ConnectTimeout=15 -i ~/.ssh/tagg_vps_key root@72.61.226.137 $sshScript } "Rebuild Docker image with new embedded logo assets"
