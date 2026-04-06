#!/bin/bash
set -e

echo "=== Creating .env.example ==="
cat > /root/basebrand-booking/.env.example << 'EOF'
# BrandBase Booking - Environment Variables Template
# Copy to .env and fill in values. NEVER commit .env to git.

DATABASE_URL=postgresql://basebrand_user:YOUR_DB_PASSWORD@basebrand-db:5432/basebrand_cal
NEXTAUTH_SECRET=
NEXTAUTH_URL=https://booking.basebrand.in
CALENDSO_ENCRYPTION_KEY=
NEXT_PUBLIC_WEBAPP_URL=https://booking.basebrand.in
NEXT_PUBLIC_WEBSITE_URL=https://booking.basebrand.in
NEXT_PUBLIC_APP_NAME="Basebrand Booking"
CALCOM_TELEMETRY_DISABLED=1
EMAIL_FROM=booking@basebrand.in
EMAIL_FROM_NAME=Basebrand Booking
EMAIL_SERVER_HOST=smtp.resend.com
EMAIL_SERVER_PORT=465
EMAIL_SERVER_USER=resend
EMAIL_SERVER_PASSWORD=YOUR_RESEND_API_KEY
EOF
echo "=== .env.example DONE ==="

echo "=== Verifying .env and docker-compose.yml ==="
ls -la /root/basebrand-booking/.env /root/basebrand-booking/docker-compose.yml

echo "=== Starting DB first ==="
cd /root/basebrand-booking
docker compose up -d basebrand-db
echo "=== DB started, waiting 15s for health ==="
sleep 15
docker inspect basebrand-db --format '{{.State.Health.Status}}'

echo "=== SETUP COMPLETE ==="
