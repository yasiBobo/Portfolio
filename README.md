# Portfolio (Old Version)

An elegant, responsive personal portfolio built with React + Vite — showcasing projects, work history, and contact information in a clean, component-driven layout.

---

## Table of Contents
- [About](#about)
- [Demo / Preview](#demo--preview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project structure](#project-structure)
- [How it fits together](#how-it-fits-together)
- [Getting started](#getting-started)
- [Build & deploy](#build--deploy)
- [Customize](#customize)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

---

## About
This repository contains a polished, component-based personal portfolio site. It focuses on clarity, accessibility, and a lightweight front-end experience suitable for showcasing projects, experience, and contact details.

---

## Demo / Preview
- Open `index.html` in your browser for the static preview.
- A production build is also included as `dist.zip` (ready to extract and serve).

---

## Features
- Clean, responsive layout with clear sections for About, Work, Projects, Portfolio, Contact.
- Reusable UI components (Header, Nav, Footer).
- Component-level styling with modular CSS files.
- Simple build and preview flow using Vite.

---

## Tech Stack
- Language(s): JavaScript, CSS, HTML
- Framework / runtime: React (JSX) + Vite
- Notable tools: Vite (dev server & build), React (component model)

(See `package.json` for the full list of dependencies and scripts.)

---

## Project structure
Top-level layout and important files:
```
.
├─ index.html                 # Static entry (lightweight preview)
├─ package.json               # npm scripts & dependency manifest
├─ package-lock.json
├─ vite.config.js             # Vite configuration
├─ dist.zip                   # Production build archive
├─ public/                    # Static assets (served by Vite / for build)
└─ src/
   ├─ main.jsx                # App entry
   ├─ App.jsx                 # Top-level React component
   ├─ index.css               # Global base styles
   ├─ App.css                 # App-level styles
   ├─ variants.js             # animation variants / helpers
   ├─ images/                 # project & profile images
   └─ components/
      ├─ About/               # About.jsx + about.css
      ├─ Contact/             # Contact.jsx + contact.css
      ├─ Footer/              # Footer.jsx + footer.css
      ├─ Header/              # Header.jsx + header.css
      ├─ Nav/                 # Nav.jsx + nav.css
      ├─ Portfolio/           # Portfolio.jsx + portfolio.css
      ├─ Projects/            # Projects components
      └─ Work/                # Work / experience components
```

---

## How it fits together
The app is a single-page React site bootstrapped by Vite. `main.jsx` mounts the React tree; `App.jsx` composes the page using the component folder entries (Header, Nav, About, Portfolio, Projects, Work, Contact, Footer). Styling is modular: each component has a corresponding CSS file for scoped styles. `variants.js` contains shared animation/transition values used across components.

---

## Getting started

Prerequisites
- Node.js (v14+ recommended) and npm installed.

Quick start (development)
```bash
# 1. clone
git clone https://github.com/yasi005/Portfolio-old-version.git
cd Portfolio-old-version

# 2. install
npm install

# 3. run dev server
npm run dev
```

Common scripts (if you use Vite defaults; otherwise check package.json)
- npm run dev — start development server
- npm run build — create production build
- npm run preview — locally preview the production build

Static preview (no build)
- Open `index.html` in the project root (or serve it via a static file server).

---

## Build & deploy
Create a production build and deploy the contents of the build directory (or `dist.zip` after extraction) to any static hosting service (Netlify, Vercel, GitHub Pages, or an S3 bucket).

```bash
npm run build
# after build, upload the output folder (often `dist/`) or extract & upload dist.zip
```

For quick GitHub Pages deployment, you can push the built files to a branch configured to serve Pages or use an automated CI step.

---

## Customize
- Update content: edit the JSX files under `src/components/*` to change text, links, and structure.
- Replace images: add or replace files in `src/images/` and update component references.
- Theme/colors: edit `src/index.css` and `src/App.css` or component CSS files to change the overall look.
- Animations: tune `src/variants.js` and the components that import it.

---

## Contributing
Thanks for your interest! Suggested workflow:
1. Fork the repository
2. Create a feature branch (git checkout -b feat/your-change)
3. Make changes and commit with clear messages
4. Open a pull request describing your change

If you'd like help picking a first issue or feature, open an issue and mark it "good first issue".

---

## License
No license file is included in this repository. If you want others to reuse or contribute under clear terms, add a LICENSE (for example, MIT).

---

## Contact
Maintainer: yasi005  
GitHub: https://github.com/yasi005

---

## Acknowledgements
- Built with Vite and React — thanks to the open-source ecosystem.
- Inspired by minimal, accessible portfolio designs.

---

If you'd like, I can:
- Add badges (build / license / author),
- Generate a short project description suitable for a GitHub repository summary,
- Or produce a ready-to-commit README.md file with a suggested MIT license header included.
