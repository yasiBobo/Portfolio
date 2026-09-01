# ✨ Portfolio (Old Version) ✨

Hello there! I'm Yasi 👋 — this is a cute little portfolio site built with React + Vite to showcase projects, work, and ways to say hi. It's lightweight, component-y, and sprinkled with friendly vibes.

---

## Table of Contents
- [About](#about)
- [Peek / Demo](#peek--demo)
- [Cute Features](#cute-features)
- [Tech Stack](#tech-stack)
- [Project structure](#project-structure)
- [How it fits together](#how-it-fits-together)
- [Getting started](#getting-started)
- [Build & deploy](#build--deploy)
- [Customize (make it yours)](#customize-make-it-yours)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About
This little site is a personal portfolio with an emphasis on clarity and charm — think clean layouts, cozy colors, and delightful micro-interactions. Perfect for showing off projects and letting folks say hello.

---

## Peek / Demo
- Open `index.html` for a quick static preview.
- A ready-to-serve production build is tucked in `dist.zip` (extract & deploy!).

---

## Cute Features 🐣
- Friendly, responsive layout with clear sections: About, Work, Projects, Portfolio, Contact.
- Thoughtful, reusable components (Header, Nav, Footer).
- Each component has its own CSS so styles stay tidy.
- Light animation helpers in `src/variants.js` for tiny motion and personality.

---

## Tech Stack
- Language(s): JavaScript, CSS, HTML
- Framework / runtime: React (JSX) + Vite
- Notable tools: Vite (dev server & build), React (component model)

(See `package.json` for the dependency list and available scripts.)

---

## Project structure
```
.
├─ index.html                 # Static entry (quick preview)
├─ package.json               # npm scripts & dependency manifest
├─ package-lock.json
├─ vite.config.js             # Vite config
├─ dist.zip                   # Production build archive (aww, ready-made!)
├─ public/                    # Static assets served by Vite / build
└─ src/
   ├─ main.jsx                # App entry (mounts the React app)
   ├─ App.jsx                 # Top-level React component (page composer)
   ├─ index.css               # Base styles (theme & layout)
   ├─ App.css                 # App-level styles
   ├─ variants.js             # animation variants / helpers
   ├─ images/                 # project & profile images
   └─ components/             # small, focused UI parts
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
Vite boots a tiny dev server and `main.jsx` mounts the React app. `App.jsx` stitches together the page sections (Header, Nav, About, Portfolio, Projects, Work, Contact, Footer). Each component imports its own CSS for neatness, and `variants.js` provides shared animation values so everything wiggles just right.

---

## Getting started (dev)
Prereqs: Node.js (v14+), npm

```bash
# clone
git clone https://github.com/yasi005/Portfolio-old-version.git
cd Portfolio-old-version

# install
npm install

# run dev server
gently start with:
npm run dev
```

Common scripts (double-check `package.json`):
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview the production build locally

Static preview: open `index.html` in the repo root or serve it with any static server.

---

## Build & deploy
Make a production build and upload the resulting `dist/` (or the extracted `dist.zip`) to Netlify, Vercel, GitHub Pages, or any static host.

```bash
npm run build
# then upload the `dist/` folder (or extract and upload dist.zip)
```

---

## Customize (make it yours!) 🎨
- Change text/content: edit JSX files in `src/components/*`.
- Swap images: replace files in `src/images/` and update the JSX references.
- Tweak colors & spacing: edit `src/index.css`, `src/App.css`, or component CSS files.
- Adjust animations: open `src/variants.js` and give the site more (or less) bounce.

---

## Contributing
Nice of you to consider it! A light workflow:
1. Fork the repo
2. Create a branch: `git checkout -b feat/your-cute-idea`
3. Commit changes with friendly messages
4. Open a PR and tell me why it's adorable

---

## License
There isn't a license file in this repo yet. If you'd like to let others reuse or remix this work, I can add a license for you (MIT, Apache-2.0, GPL-3.0, etc.). Just say the word! ✨

---

## Contact
Maintainer: yasi005  
GitHub: https://github.com/yasi005

---

Love the idea of adding screenshots, a demo GIF, or playful badges — I can add any of those for you and commit them. What should I do next?