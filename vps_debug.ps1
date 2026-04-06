$maxRetries = 5
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

Write-Host "=== DNS Resolution Check ==="
nslookup booking.basebrand.in
Resolve-DnsName -Name booking.basebrand.in -ErrorAction SilentlyContinue

Write-Host "`n=== VPS Service Check ==="
$sshScript = @"
echo '--- DOCKER STATS ---'
docker ps -a | grep basebrand

echo '--- CLOUDFLARED STATUS ---'
ps aux | grep cloudflared | grep -v grep
systemctl status cloudflared --no-pager 2>/dev/null || echo "No systemd service"

echo '--- PORT 3001 ---'
ss -tlnp | grep 3001
"@

Invoke-WithRetry { ssh -o StrictHostKeyChecking=no -o ConnectTimeout=15 -i ~/.ssh/tagg_vps_key root@72.61.226.137 $sshScript } "Checking VPS logs and status"
