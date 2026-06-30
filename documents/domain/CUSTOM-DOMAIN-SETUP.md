# Custom Domain Setup for GitHub Pages

## Domain: aeronofray.com

---

## Overview

This guide covers how to connect a custom domain (aeronofray.com) to a GitHub Pages site deployed from this repository.

---

## Steps

### 1. Purchase Your Domain

Purchase `aeronofray.com` from a domain registrar (e.g., Namecheap, Google Domains, Cloudflare, GoDaddy, Porkbun).

### 2. Add CNAME File to Repository

A `CNAME` file must exist in the root of the deployed site (in this repo, the project root since it gets copied to `dist/` during build via `public/` or workflow config).

**File:** `CNAME`  
**Contents:**
```
aeronofray.com
```

> This file already exists in the repository root.

### 3. Configure DNS at Your Domain Registrar

#### Option A: Apex Domain (aeronofray.com) — Recommended

Add **A records** pointing to GitHub Pages IP addresses:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Also add **AAAA records** for IPv6:

| Type | Host | Value |
|------|------|-------|
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |

#### Option B: www Subdomain (optional, redirect to apex)

Add a **CNAME record** for `www`:

| Type | Host | Value |
|------|------|-------|
| CNAME | www | <your-github-username>.github.io |

### 4. Configure GitHub Pages in Repository Settings

1. Go to your repository on GitHub: `Settings` > `Pages`
2. Under **"Custom domain"**, enter: `aeronofray.com`
3. Click **Save**
4. Wait for DNS check to pass (can take a few minutes to hours)
5. Check **"Enforce HTTPS"** once the certificate is provisioned

### 5. Verify DNS Propagation

Use these tools to verify DNS is correctly configured:

```bash
# Check A records
dig aeronofray.com +noall +answer

# Or use nslookup
nslookup aeronofray.com
```

Online tools:
- https://www.whatsmydns.net/#A/aeronofray.com
- https://dnschecker.org/#A/aeronofray.com

### 6. Verify HTTPS Certificate

GitHub automatically provisions a Let's Encrypt certificate. This can take up to 24 hours after DNS propagates. Once ready:

1. Go to `Settings` > `Pages`
2. Ensure "Enforce HTTPS" is checked

---

## Vite Configuration

When using a custom domain, the `base` path in `vite.config.ts` must be `/` (not the repo name):

```ts
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // Use '/' when deploying with a custom domain
})
```

> This is already configured in this project.

---

## Troubleshooting

### DNS not resolving
- DNS propagation can take 24-48 hours
- Verify records at your registrar dashboard
- Use `dig` or online DNS checkers

### 404 errors after deploy
- Ensure the `CNAME` file is in the build output (`dist/`)
- Place CNAME in the `public/` folder so Vite copies it to dist, OR keep it in the repo root and ensure the deploy workflow handles it

### HTTPS not available
- Wait up to 24 hours after DNS propagates
- Ensure no CAA records block Let's Encrypt
- GitHub must verify domain ownership first

### Site shows repo path (e.g., /react-portfolio/)
- Change `base` in `vite.config.ts` to `'/'`
- Rebuild and redeploy

---

## File Checklist

- [x] `CNAME` file contains `aeronofray.com`
- [x] `vite.config.ts` has `base: '/'`
- [x] GitHub Pages workflow deploys from `dist/`
- [ ] DNS A records configured at registrar
- [ ] GitHub Pages custom domain set in repo settings
- [ ] HTTPS enforced

---

## References

- [GitHub Docs: Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub Docs: Verifying your custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [GitHub Pages IP addresses](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)
