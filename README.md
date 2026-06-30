# Aeron Ray Manriza — Portfolio

A minimal, dark-themed personal portfolio built with React + Vite + TypeScript + Tailwind CSS v4, inspired by [antfu.me](https://antfu.me).

## Stack

- **React 19** + **TypeScript**
- **Vite 8** (build tool)
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **React Router v7** (HashRouter for GitHub Pages compatibility)
- **GitHub Actions** (CI/CD → GitHub Pages)

## Pages

| Route | Description |
|---|---|
| `/` | Home — bio, quick links, social links |
| `/experience` | Work experience timeline |
| `/skills` | Tech stack and skill tags |

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

### One-time setup

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Source** and select **GitHub Actions**.
3. Update the `base` in `vite.config.ts` to match your repo name:
   ```ts
   base: '/your-repo-name/',
   ```

### Automatic deployment

Every push to `main` triggers the GitHub Actions workflow at `.github/workflows/deploy.yml`, which builds and deploys to `https://<username>.github.io/<repo-name>/`.
