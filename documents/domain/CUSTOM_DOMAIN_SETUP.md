# Custom Domain Setup for GitHub Pages

This guide covers how to configure your purchased domain to work with your GitHub Pages portfolio.

---

## Overview of Steps

1. Add CNAME file to the repository
2. Configure GitHub Pages in repo settings
3. Add DNS records at your domain registrar
4. Enable HTTPS
5. Verify deployment

---

## Step 1: CNAME File

The `CNAME` file tells GitHub Pages which custom domain to serve.

- Location: `public/CNAME` (Vite copies it to `dist/` during build)
- Content: your bare domain (no `https://`, no trailing slash)

```
aeronofray.com
```

> **Important:** If you change your domain, update BOTH `CNAME` (root) and `public/CNAME`.

---

## Step 2: GitHub Repository Settings

1. Go to your repo on GitHub: `https://github.com/<username>/react-portfolio`
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Under **Custom domain**, enter your domain: `aeronofray.com`
5. Click **Save**

GitHub will attempt to verify your domain and show a status indicator.

---

## Step 3: DNS Configuration at Your Domain Registrar

Go to your domain registrar (GoDaddy, Namecheap, CloudFlare, etc.) and add the following DNS records:

### Option A: Apex domain (e.g., `aeronofray.com`)

Add **four A records** pointing to GitHub's IPs:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

### Option B: www subdomain (e.g., `www.aeronofray.com`)

Add a **CNAME record**:

| Type | Name | Value |
|------|------|-------|
| CNAME | `www` | `<username>.github.io` |

### Recommended: Both apex + www

Set up **both** Option A and Option B so that both `aeronofray.com` and `www.aeronofray.com` work.

### If using CloudFlare

- Set the DNS records as above
- Set the **Proxy status** to **DNS only** (gray cloud) — not Proxied (orange cloud) — until GitHub verifies the domain. After verification, you can re-enable the proxy if desired.
- If using CloudFlare's proxy, set **SSL/TLS** mode to **Full** (not Flexible)

---

## Step 4: Enable HTTPS

1. After DNS propagates (can take 5 minutes to 48 hours), go back to **Settings → Pages**
2. Check **Enforce HTTPS**
3. GitHub will automatically provision a Let's Encrypt certificate

> **Note:** You cannot enable HTTPS until the DNS check passes. If it says "DNS check not yet successful," wait and try again.

---

## Step 5: Verify Deployment

1. Push any commit to `main` (or manually trigger the workflow in **Actions** tab)
2. Wait for the GitHub Actions workflow to complete (~1-2 minutes)
3. Visit `https://aeronofray.com` — your portfolio should be live

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| 404 after deploy | Ensure `public/CNAME` exists and contains the correct domain |
| Page shows GitHub's 404 | DNS hasn't propagated yet. Wait up to 48 hours |
| HTTPS not available | DNS check must pass first. Ensure A records are correct |
| Assets not loading | Ensure `vite.config.ts` has `base: '/'` (not `/react-portfolio/`) |
| Routing broken on refresh | We use HashRouter (`/#/experience`) which works without server config |
| GitHub says "domain already taken" | Another repo in your account may have the same CNAME. Remove it there first |

---

## DNS Propagation Check

Use these tools to verify your DNS records have propagated:

- https://www.whatsmydns.net/ (check A records for your domain)
- `nslookup aeronofray.com` (command line)
- `dig aeronofray.com` (Linux/Mac)

---

## File Structure Reference

```
react-portfolio/
├── CNAME                    # Root-level CNAME (for reference)
├── public/
│   └── CNAME                # This gets copied to dist/ during build
├── vite.config.ts           # base: '/' for custom domain
└── .github/workflows/
    └── deploy.yml           # Auto-deploys on push to main
```
