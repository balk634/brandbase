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
  ssh -i ~/.ssh/tagg_vps_key root@72.61.226.137
  ```
- **Password (Fallback)**: `Treetree@9801` (Only use if key is unauthorized).

> [!IMPORTANT]
> The SSH key `tagg_vps_key` is authorized for `root`. Use it for all automated commands to avoid interactive prompts.

---

## Infrastructure Details

### 1. Cal.com Hosting
- **Architecture**: Self-hosted Cal.com instance (Next.js) running via `docker-compose`.
- **Reverse Proxy**: Nginx (Alpine) is used as a reverse proxy for CSS injection and white-labeling.
- **Directory**: `/root/brandbase/calcom/`
- **Key Services**:
  - `calcom-proxy`: Nginx container listening on **Port 3000** (internally proxies to `calcom-web:3000`).
  - `calcom-web`: The application container (Next.js).
  - `calcom-db`: PostgreSQL container (Port 5432).

### 2. File Persistence & Customization
- **Configuration**: Managed via `/root/brandbase/calcom/docker-compose.yml`.
- **Nginx Config**: `/root/brandbase/calcom/nginx.conf` (Controls CSS injection).
- **Logo Persistence**: The BrandBase logo is mounted from `/root/brandbase/calcom/logo.svg` to `/next/public/logo.svg`.

### 3. Management Commands
- **Restart Stack**: 
  ```bash
  cd /root/brandbase/calcom/ && docker compose down && docker compose up -d
  ```
- **Restart Proxy Only**:
  ```bash
  docker compose restart nginx
  ```
- **View Logs**:
  ```bash
  docker logs -f calcom-web
  ```