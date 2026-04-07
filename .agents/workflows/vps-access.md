---
description: How to access and manage the BrandBase production VPS.
---

# VPS Access Workflow

## Connection Information
- **IP Address:** `72.61.226.137`
- **Username:** `root`
- **Password:** `Treetree@9801` (Fallback)

### How to Authenticate
- **SSH Key (Preferred)**: Use the `tagg_vps_key` for passwordless login.
  ```bash
  ssh -o StrictHostKeyChecking=no -i ~/.ssh/tagg_vps_key root@72.61.226.137
  ```
- **Password (Fallback)**: `Treetree@9801` (Only use if key is unauthorized).

> [!IMPORTANT]
> The SSH key `tagg_vps_key` is authorized for `root`. Use it for all automated commands to avoid interactive prompts. Use `-o StrictHostKeyChecking=no` to bypass prompt blocks.

---

## Infrastructure Details

### 1. Cal.com Hosting
- **Architecture**: Self-hosted Cal.com instance (Next.js) running via Docker Compose.
- **Directory**: `/root/calcom/` (Note: not `/root/brandbase/calcom/`).
- **Cloudflare Tunnel**: `brandbase-booking` routes `booking.brandbase.in` directly to `http://localhost:3001` on the VPS.
- **Key Services**:
  - `calcom-web`: The application container (Next.js) mapped to `127.0.0.1:3001`.
  - `calcom-db`: PostgreSQL container.

### 2. File Persistence & Configuration
- **Configuration**: Managed via `/root/calcom/docker-compose.yml`.
- **Environment (*CRITICAL*)**: Because Cal.com uses Next.js and has many internal redirects, **all** domain environment variables must be explicitly defined in `/root/calcom/.env` to avoid phantom redirects or localhost fallbacks:
  ```env
  NEXT_PUBLIC_WEBSITE_URL=https://booking.brandbase.in
  NEXT_PUBLIC_WEBAPP_URL=https://booking.brandbase.in
  WEBAPP_URL=https://booking.brandbase.in
  NEXTAUTH_URL=https://booking.brandbase.in
  ALLOWED_HOSTNAMES=["booking.brandbase.in"]
  ```

### 3. Management Commands
- **Restart Stack**: 
  ```bash
  cd /root/calcom/ && docker compose down -v && docker compose up -d
  ```

---

## User Management (DB Access)

Manage accounts directly via the PostgreSQL container:

**1. Show all users**
```bash
docker exec calcom-db psql -U calcom_user -d calcom -c 'SELECT id, email, username, role FROM users;'
```

**2. Delete a user by email**
```bash
docker exec calcom-db psql -U calcom_user -d calcom -c "DELETE FROM users WHERE email='user@example.com';"
```

**3. Promote a user to ADMIN**
```bash
docker exec calcom-db psql -U calcom_user -d calcom -c "UPDATE users SET role='ADMIN' WHERE email='user@example.com';"
```

---

## Troubleshooting Guide: Phantom Redirects & Next.js Cache

> [!WARNING]
> **Cloudflare Edge Cache + Next.js Immutable Chunks Issue**

If the server configuration, database, and `.env` have been completely wiped and verified clean, but the client still experiences a persistent browser redirect to an old domain (e.g., `basebrand.in` from a previous installation):

**The Root Cause:** Next.js generates static Javascript chunks with unique hashes (e.g., `_next/static/chunks/pages/auth/login-xxxxxx.js`). These are served with `Cache-Control: immutable`. Cloudflare caches them **at the edge node indefinitely**. If you clean the server but deploy the exact same Cal.com Docker image tag (e.g., `v6.0.6`), Next.js generates the exact same chunk hashes. Cloudflare assumes the files haven't changed and serves the old, cached `.js` chunks containing the old hardcoded domain strings.

**The Fix:**
1. Do not blame the browser cache (incognito won't fix edge caching).
2. **Bump the Cal.com Docker image version** in `docker-compose.yml` (e.g., change `v6.0.6` to `v6.2.0`).
3. Re-deploy the stack: `docker-compose down -v && docker-compose up -d`.
4. Bumping the version forces Next.js to compile brand new chunk hashes. Cloudflare will experience a cache-miss for the new filenames and pull the fresh, correct Javascript from the newly deployed VPS.