# Local Development Setup

This guide explains how to run the portfolio locally for development.

---

## Requirements

- **Node.js** 20 or higher
- **npm** 9 or higher

---

## Installation

```bash
# Clone the repository
git clone https://github.com/<username>/react-portfolio.git
cd react-portfolio

# Install dependencies
npm install
```

---

## Development

```bash
npm run dev
```

This starts the Vite dev server at `http://localhost:5173` with hot module replacement (HMR).

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Type-check with TypeScript, then build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint for code quality checks |

---

## Project Structure

```
src/
├── main.tsx                 # Entry point — renders App
├── index.css                # Tailwind CSS v4 imports + dark theme
├── App.tsx                  # HashRouter + route definitions
├── components/
│   ├── Layout.tsx           # Page wrapper (Navbar + main + footer)
│   └── Navbar.tsx           # Fixed top nav with links + social icons
└── pages/
    ├── Home.tsx             # Hero section with bio + quick links
    ├── Experience.tsx       # Work experience timeline
    └── Skills.tsx           # Tech stack tag groups
```

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19 | UI library |
| TypeScript | 6 | Type safety |
| Vite | 8 | Build tool + dev server |
| Tailwind CSS | 4 | Utility-first CSS |
| React Router | 7 | Client-side routing (HashRouter) |

---

## Routing

The app uses **HashRouter** for GitHub Pages compatibility. Routes look like:

- `https://aeronofray.com/#/` — Home
- `https://aeronofray.com/#/experience` — Work Experience
- `https://aeronofray.com/#/skills` — Skills

HashRouter is used because GitHub Pages doesn't support server-side URL rewriting.

---

## Adding a New Page

1. Create `src/pages/NewPage.tsx`
2. Add a route in `src/App.tsx`:
   ```tsx
   import NewPage from './pages/NewPage'
   // inside <Routes>
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add a nav link in `src/components/Navbar.tsx`:
   ```tsx
   { label: 'New Page', to: '/new-page' },
   ```

---

## Customization

### Changing colors

Edit `src/index.css` — the theme variables are defined in the `@theme` block:

```css
@theme {
  --color-bg: #121212;
  --color-surface: #1a1a1a;
  --color-text: #e8e8e8;
  --color-muted: #888888;
  --color-accent: #a8c5da;
}
```

### Changing fonts

1. Update the Google Fonts link in `index.html`
2. Update `--font-sans` in `src/index.css`

### Updating personal info

- Bio text: `src/pages/Home.tsx`
- Work experience: `src/pages/Experience.tsx`
- Skills: `src/pages/Skills.tsx`
- Social links: `src/components/Navbar.tsx`
