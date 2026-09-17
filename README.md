# V³ — Vishnu Vardhan Vemula · Portfolio

<div align="center">

<img src="public/homepage.jpg" alt="V³ Portfolio" width="800" />

**A production-grade, multi-page personal portfolio** for a Full-Stack Developer & AI/ML Enthusiast — fast, responsive, SEO-optimized, and fully customizable through a single data layer.

[![CI](https://github.com/vishnu-vemula/React-Web-Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/vishnu-vemula/React-Web-Portfolio/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18-61dafb.svg)](https://react.dev)
[![Node](https://img.shields.io/badge/Node-%3E%3D16-339933.svg)](https://nodejs.org)

</div>

---

## About

**V³** ("V-Cube") takes its name from the three V's — **V**ishnu **V**ardhan **V**emula. It is a modern personal portfolio built with React that showcases projects, articles, skills, and professional experience. Every piece of content lives in a single, well-organized data layer, so the entire site can be customized without touching any component code.

## Features

- **Multi-page layout** — Home, About, Projects, Articles, Article reader, and Contact pages, plus a custom 404 page
- **Fully responsive** — optimized for mobile, tablet, and desktop
- **Route-based code splitting** — pages are lazy-loaded for a faster first paint
- **Error boundary** — graceful failure handling instead of a white screen
- **SEO ready** — per-page titles, meta descriptions, keywords, Open Graph / Twitter cards, and JSON-LD structured data
- **Google Analytics 4** — pluggable via environment variables, disabled by default
- **Zero-hardcoding** — all content (profile, socials, projects, articles, SEO) is driven from `/src/data`
- **Continuous Integration** — automated build + test checks on every push and pull request

## Tech Stack

| Category | Technology |
| --- | --- |
| Framework | React 18 (Create React App) |
| Routing | React Router v6 |
| Styling | CSS (custom design system), Styled Components |
| Icons | Font Awesome |
| SEO | React Helmet |
| Analytics | react-ga4 (Google Analytics 4) |
| Testing | React Testing Library + Jest |
| CI | GitHub Actions |

## Getting Started

### Prerequisites

- **Node.js** ≥ 16 (LTS recommended)
- **npm** ≥ 8
- **Git**

### Installation

```bash
git clone https://github.com/vishnu-vemula/React-Web-Portfolio.git
cd React-Web-Portfolio
npm install
```

### Development

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) — the app hot-reloads on edits.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Runs the app in development mode |
| `npm run build` | Creates an optimized production bundle in `build/` |
| `npm test` | Runs tests in interactive watch mode |
| `npm run test:ci` | Runs tests once (used in CI) |
| `npm run eject` | Ejects from CRA (one-way operation — not recommended) |

## Configuration

All portfolio content is managed from **`/src/data`** — no component changes required:

| File | Purpose |
| --- | --- |
| `user.js` | Personal details, social links, and project listings |
| `articles.js` | Article/blog content rendered on the Articles pages |
| `seo.js` | Per-page SEO titles, descriptions, and keywords |
| `tracking.js` | Google Analytics entry point (reads from env) |
| `styles.css` | Global theme — colors, fonts, and UI variables |

### Environment Variables

Copy the example file and add your values:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `REACT_APP_GA_MEASUREMENT_ID` | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`). Leave empty to disable analytics. |

## Project Structure

```
v3-portfolio/
├── public/                  # Static assets served as-is (images, favicon)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── about/           #   About-page widgets (socials)
│   │   ├── articles/        #   Article cards
│   │   ├── common/          #   NavBar, Footer, Logo, ErrorBoundary
│   │   └── homepage/        #   Homepage sections (works, article previews)
│   ├── data/                # ✏️  All editable content lives here
│   ├── pages/               # Page-level layouts + page-specific styles
│   ├── App.js               # Routes (lazy-loaded) + analytics bootstrap
│   └── index.js             # Application entry point
├── .github/                 # Issue templates, PR template, CI workflow
└── package.json
```

## Testing

```bash
npm run test:ci
```

Smoke tests verify that the app renders correctly with its core navigation. See `src/App.test.js` as a starting point and extend coverage as the project grows.

## Deployment

The production build outputs a static site — deployable anywhere static files are supported.

<details>
<summary><b>Vercel</b></summary>

```bash
npm i -g vercel
vercel
```
Framework preset: **Create React App** (auto-detected).

</details>

<details>
<summary><b>Netlify</b></summary>

- Build command: `npm run build`
- Publish directory: `build`

Add a `public/_redirects` file with `/* /index.html 200` to support client-side routing.

</details>

<details>
<summary><b>Apache / self-hosted</b></summary>

```bash
npm run build
scp -r build/* user@example.com:/var/www/html
```

Enable SPA routing with `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

</details>

## Continuous Integration

GitHub Actions (`.github/workflows/ci.yml`) runs on every push and pull request:

1. `npm ci` — clean, reproducible installs
2. `npm run test:ci` — test suite
3. `npm run build` — production build

Tested against Node.js 18 and 20.

## FAQ

**Q: Subpages 404 when refreshing or opening a direct URL.**
Client-side routing requires all requests to fall through to `index.html`. Use the redirects/rewrite configuration shown in the [Deployment](#deployment) section for your host.

**Q: Analytics isn't showing data.**
Ensure `REACT_APP_GA_MEASUREMENT_ID` is set in your environment **at build time** (CRA inlines env vars during `npm run build`).

## Contributing

Issues and pull requests are welcome. Please use the issue templates in `.github/ISSUE_TEMPLATE/` and the PR checklist when submitting changes.

## License

Distributed under the [MIT License](LICENSE).

## Credits

- **Vishnu Vardhan Vemula** — author & maintainer · [GitHub](https://github.com/Vishnu122101) · [LinkedIn](https://www.linkedin.com/in/vishnu-vardhan-vemula-a249191b8/)
- Initially based on [Reactfolio](https://github.com/1ucius/reactfolio) by Tharindu N. Madhusanka, substantially customized and extended.
