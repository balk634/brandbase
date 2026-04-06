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

Invoke-WithRetry { scp -o StrictHostKeyChecking=no -o ConnectTimeout=15 -i ~/.ssh/tagg_vps_key "C:\Users\balk6\OneDrive\Desktop\brandbase\public\brand\logo-dark.svg" root@72.61.226.137:/root/basebrand-booking/apps/web/public/logo.svg } "Uploading logo.svg"
Invoke-WithRetry { scp -o StrictHostKeyChecking=no -o ConnectTimeout=15 -i ~/.ssh/tagg_vps_key "C:\Users\balk6\OneDrive\Desktop\brandbase\public\favicon\favicon.ico" root@72.61.226.137:/root/basebrand-booking/apps/web/public/favicon.ico } "Uploading favicon.ico"
Invoke-WithRetry { scp -o StrictHostKeyChecking=no -o ConnectTimeout=15 -i ~/.ssh/tagg_vps_key "C:\Users\balk6\OneDrive\Desktop\brandbase\public\favicon\apple-touch-icon.png" root@72.61.226.137:/root/basebrand-booking/apps/web/public/apple-icon.png } "Uploading apple-touch-icon.png"
Invoke-WithRetry { scp -o StrictHostKeyChecking=no -o ConnectTimeout=15 -i ~/.ssh/tagg_vps_key "C:\Users\balk6\OneDrive\Desktop\brandbase\public\og-image.png" root@72.61.226.137:/root/basebrand-booking/apps/web/public/og-image.png } "Uploading og-image.png"

# Inject the Resend key and rewrite colors/app names in the NEXT codebase
$sshScript = @"
sed -i 's/RESEND_API_KEY_PLACEHOLDER/re_hVTpxpHA_J317arerg8haJXxachPnm54D/g' /root/basebrand-booking/.env

# Overwrite Cal.com branding placeholders with Basebrand booking
find /root/basebrand-booking/apps/web/components -type f -exec sed -i -e 's/"Powered by Cal.com"/" "/g' -e 's/Powered by Cal.com//g' {} +
find /root/basebrand-booking/packages/ui -type f -exec sed -i -e 's/"Powered by Cal.com"/" "/g' -e 's/Powered by Cal.com//g' {} +
find /root/basebrand-booking/packages/emails/ -type f -exec sed -i -e 's/Cal.com/Basebrand/g' {} +
find /root/basebrand-booking/packages/emails/ -name "*footer*" -exec sed -i -e 's/href="https:\/\/cal.com[^"]*"/href="https:\/\/basebrand.in"/g' {} +
"@

Invoke-WithRetry { ssh -o StrictHostKeyChecking=no -o ConnectTimeout=15 -i ~/.ssh/tagg_vps_key root@72.61.226.137 $sshScript } "Update Env and Purge Branding"
