# Basebrand Booking - Setup & Management Handoff

## 1. Adding a Standard Client (Shared Instance)
Standard clients run within the main shared instance at `booking.basebrand.in`. They do not require any new infrastructure.
1. Log into Cal.com admin UI at `https://booking.basebrand.in` using the admin account.
2. Go to **Teams**.
3. Click **Create New Team** and name it after your client.
4. Go to the team settings and invite the client as a member or admin of that team.
5. Their booking page will be instantly live at `https://booking.basebrand.in/<team-slug>`.
6. Emails will automatically route through the pre-configured Resend integration, using `booking@basebrand.in`.

## 2. Spinning Up a Premium Isolated Instance (Step-by-Step)
For premium clients paying for their own domain and isolated data, deploy a dedicated instance.
*Keep an eye on RAM (~500MB per instance). The VPS handles roughly ~12 isolated instances before an upgrade is needed.*

1. **Copy the Basebrand Setup**
   Each premium client needs their own directory inside `/root/clients/`.
   ```bash
   mkdir -p /root/clients/
   cp -r /root/basebrand-booking /root/clients/<client-name>-booking
   cd /root/clients/<client-name>-booking
   ```

2. **Wait for Brand Assets**
   Replace these files with the client's assets:
   - `apps/web/public/logo.svg`
   - `apps/web/public/favicon.ico`
   - `apps/web/public/apple-icon.png`
   - `apps/web/public/og-image.png`
   - Global tokens / colors in `apps/web/styles/`
   - Email templates in `packages/emails/`
   *(This ensures zero "Powered by Cal.com" or Basebrand branding is present.)*

3. **Update `docker-compose.yml`**
   Edit `/root/clients/<client-name>-booking/docker-compose.yml`:
   - Change `basebrand-web` -> `<client-name>-web`
   - Change `basebrand-db` -> `<client-name>-db`
   - **Update the port:** Change `127.0.0.1:3001:3000` to the next available port (e.g., `127.0.0.1:3002:3000`).
   - Update volume: `basebrand_pgdata` -> `<client-name>_pgdata`

4. **Setup `.env`**
   Copy the example and update it:
   ```bash
   cp .env.example .env
   # Generate new secrets
   openssl rand -base64 32 # NextAuth secret
   openssl rand -base64 24 && openssl rand -hex 16 # Calendso secrets
   ```
   Modify the `.env`:
   - `DATABASE_URL=postgresql://<client_db_user>:<strong_password>@<client-name>-db:5432/<client_cal>`
   - `NEXTAUTH_URL=https://booking.<client-domain>.com`
   - `NEXT_PUBLIC_WEBAPP_URL=https://booking.<client-domain>.com`
   - `EMAIL_FROM=booking@<client-domain>.com`
   - `EMAIL_SERVER_PASSWORD=<client-resend-api-key>`

5. **Cloudflare Tunnel Configuration**
   - Head to Cloudflare dashboard and create a new Zero Trust Tunnel.
   - Point the tunnel's Public Hostname (`booking.<client-domain>.com`) to the service `http://localhost:<next-port>`.
   - Ask the client to add the CNAME record mapping `booking.<client-domain>.com` to your `<tunnel-uuid>.cfargotunnel.com`.

6. **Build and Launch**
   ```bash
   cd /root/clients/<client-name>-booking
   docker compose up -d --build
   ```

## 3. Checking RAM Usage Across Instances
To monitor resource usage across the VPS and flag when it's approaching 10+ isolated instances:
```bash
# Check Docker container memory usage live
docker stats --no-stream --format "table {{.Name}}\t{{.MemUsage}}\t{{.MemPerc}}"

# Check total system memory availability
free -h
```

## 4. Port Tracking for Isolated Instances
- `3001`: `booking.basebrand.in` (Shared Tier 1)
- `3002`: Next Available (Premium Client 1)
- `3003`: Next Available (Premium Client 2)
- `3004`: Next Available (Premium Client 3)
*Be sure to increment by +1 for each new isolated instance to avoid port conflicts!*
