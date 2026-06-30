# GitHub Pages Deployment Setup

This guide explains how the automated GitHub Actions deployment works for this portfolio.

---

## How It Works

```
Push to main → GitHub Actions triggers → npm ci + build → Upload dist/ → Deploy to Pages
```

The workflow file is at `.github/workflows/deploy.yml`.

---

## Prerequisites

1. A GitHub repository (public or private with GitHub Pro)
2. Node.js 20+ (used in the CI environment)
3. GitHub Pages enabled on the repository

---

## Initial Setup

### 1. Create the GitHub repository

```bash
cd react-portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/react-portfolio.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Build and deployment → Source**, select **GitHub Actions**
3. That's it — the workflow will handle the rest on the next push

### 3. Verify the deployment

- Go to the **Actions** tab to see the workflow run
- Once complete, your site is live at:
  - With custom domain: `https://aeronofray.com`
  - Without custom domain: `https://<username>.github.io/react-portfolio/`

---

## Workflow Explained

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]       # Triggers on every push to main
  workflow_dispatch:        # Also allows manual trigger from Actions tab

permissions:
  contents: read           # Read repo contents
  pages: write             # Write to Pages
  id-token: write          # Required for Pages deployment

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Setup Node.js 20 with npm cache
      - npm ci (install dependencies from lock file)
      - npm run build (TypeScript check + Vite build)
      - Upload dist/ as a Pages artifact

  deploy:
    needs: build
    steps:
      - Deploy the uploaded artifact to GitHub Pages
```

---

## Important Notes

### With Custom Domain (`base: '/'`)

When using a custom domain (CNAME), the Vite config should have:
```ts
base: '/',
```

### Without Custom Domain (`base: '/repo-name/'`)

If NOT using a custom domain, change vite.config.ts:
```ts
base: '/react-portfolio/',
```

And update `index.html` favicon path:
```html
<link rel="icon" type="image/svg+xml" href="/react-portfolio/favicon.svg" />
```

---

## Manual Deployment

You can also manually trigger the workflow:

1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow** (on `main`)

---

## Environment & Secrets

No secrets are needed. GitHub Pages deployment uses the built-in `GITHUB_TOKEN` with the permissions declared in the workflow.

---

## Build Output

After `npm run build`, the output is in `dist/`:

```
dist/
├── CNAME                   # Copied from public/CNAME
├── favicon.svg             # Copied from public/
├── index.html              # Entry point
└── assets/
    ├── index-*.css         # Tailwind CSS bundle
    └── index-*.js          # React app bundle
```
