#!/bin/bash
set -e

cat <<'EOF' > /root/basebrand-booking/docker-compose.yml
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
EOF

cat <<'EOF' > /root/basebrand-booking/nginx.conf
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
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header Accept-Encoding "";
            sub_filter 'Powered by Cal.com' '';
            sub_filter 'Cal.com' 'Basebrand';
            sub_filter 'cal.com' 'brandbase.in';
            sub_filter '</head>' '<style>:root { --brand-color: #111827 !important; }</style></head>';
            sub_filter_once off;
        }
    }
}
EOF

echo "Restoration Complete"
