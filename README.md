# Portfolio (Robert Fernandez)

This repository contains a personal portfolio website built in React/TypeScript/TailwindCSS. The site showcases game development, tools, and projects built with frameworks like SFML, Love2D, and modern web tooling. It also contains a nested project, `src/aviationpro`, which is an airplane utility app included as a regular directory.

## Main Pages & Features

- **PortfolioHome** (Home Page):
  - Landing page with about, skills, featured work, and a detailed timeline of my journey and achievements.
- **Projects**:
  - Showcases a collection of my software, games, and creative coding projects.
- **Art**:
  - Gallery of digital art, game art, and creative works.
- **AviationPro** (Aviation):
  - Dedicated section for my all-in-one pilot app, AviationPro, with features, screenshots, and details.
- **Streaming**:
  - Information and links about my Twitch and YouTube channels, including streaming highlights and content focus.
- **Blog** (optional):
  - [Currently undecided] — May be used for devlogs, tutorials, or personal posts in the future.

## What this repo is for

- Host a living snapshot of Robert's portfolio website and project assets.
- Provide source for the web UI (Vite + React/TypeScript + Tailwind CSS) and supporting media assets.
- Include the `AviationPro` app sources under `src/aviationpro` for reference and development.

## Technologies

- Vite
- React (TypeScript / .tsx files)
- Tailwind CSS, PostCSS
- Static assets served from `public/`

## Repo layout (quick)

- `public/` — images and static assets used by the site.
- `src/` — primary site source files (React components, styles, entry points).
- `src/aviationpro/` — an included application (full project) related to AviationPro.
- `.gitignore` — common ignores for node artifacts and IDE files.

## Development (local)

You need Node.js and npm installed. From the repository root (PowerShell example):

```powershell
cd "C:\Users\User\Documents\Bolt_ai\portfolio"
npm install
npm run dev
```

Typical npm scripts (if present) you'll find in `package.json`:
- `dev` — start development server
- `build` — build for production
- `preview` — preview built output locally

## Notes and suggestions

- Large binary assets are included under `public/assets`; consider moving large or build-only assets to a release or separate storage if the repo grows.
- If you plan to publish GitHub Pages via `gh-pages`, add a deploy step or use the Vercel/Netlify auto-deploy for the `main` branch.
- `src/aviationpro` is a full project; open it separately if you want to run or maintain it as a standalone app.

## License

Add a `LICENSE` file if you want to specify terms. Currently no explicit license is included in this snapshot.

---

If you'd like, I can also:
- Add a short `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`.
- Create a GitHub Actions workflow for CI (lint/build).
- Add a small homepage README blurb and badges.

If you want any changes to the README tone or content, tell me which parts to expand or shorten.
