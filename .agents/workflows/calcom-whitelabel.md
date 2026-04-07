---
description: Custom Nginx reverse proxy architecture for CSS injection and Cal.com white-labeling.
---

# Cal.com White-Labeling & Nginx Proxy Arch

To achieve a 100% white-labeled booking experience, we rely on a custom Nginx reverse proxy wrapped around the `calcom-web` Next.js container on the VPS.

## Why This Architecture?
Cal.com's self-hosted community edition hardcodes the "Powered by Cal.com" badge, default favicons, and certain SVGs inside the Next.js bundle. Standard CSS or dashboard settings cannot remove this without Enterprise keys.

Instead of forking the Cal.com Next.js repository (which makes updating impossible), we use an **Nginx `sub_filter`** to dynamically rewrite the HTML string payload before it ever reaches the browser.

## Key Files ( Located on VPS )
All proxy configuration lives directly on the VPS at `/root/calcom/`.

1. **`docker-compose.yml`**:
   - `calcom-web` runs isolated on port `3000`.
   - `calcom-proxy` (Nginx) is exposed on port `3001` (which the Cloudflare Tunnel `brandbase-booking` points to).
   
2. **`nginx.conf`**:
   The core intelligence of the white-labeling. It proxies traffic to `http://web:3000` but intercepts the response body.

## Code Injection & Favicons
If a future agent needs to change the Favicon, calendar colors, or hide new elements, they MUST edit the `/root/calcom/nginx.conf` file on the VPS and restart the proxy container (`docker restart calcom-proxy`).

### Current Nginx Injection:
The Nginx config rewrites standard strings at runtime:
1. **Total Favicon Swapping:** Replaces all `<link rel="icon" ...>` defaults to load from `https://brandbase.in/favicon/favicon.ico`.
2. **Dark Mode Lockdown:** Binds `.dark` themes directly to `light` to freeze out unwanted UI variants.
3. **Branding Annihilation:** Identifies `a[href*="https://cal.com?utm_source="]` and visually nukes it with `display: none !important;` inside a native `<style>` block planted right before the `</head>`.

If caching acts up, restart the proxy on the VPS via SSH!
