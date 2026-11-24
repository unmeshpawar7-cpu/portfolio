# Unmesh Pawar · Portfolio

Personal portfolio website for Unmesh Pawar, RPA and automation developer (Blue Prism, Tulip, Python/FastAPI).
A single-page React app that presents skills, featured automation projects, certifications, experience, education
and contact links.

![React 19](https://img.shields.io/badge/React-19-61DAFB)
![Vite 7](https://img.shields.io/badge/Vite-7-646CFF)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4)
![ESLint 9](https://img.shields.io/badge/ESLint-9-4B32C3)

[At a glance](#at-a-glance) · [Phases](#project-phases) · [Sections](#page-sections) · [Tech stack](#technology-stack) · [Structure](#project-structure) · [Run locally](#running-locally) · [Edit content](#editing-the-content) · [Deploy](#deployment) · [Roadmap](#roadmap)

## At a glance

| Area | Summary |
|---|---|
| **What it is** | A single-page personal portfolio with a fixed navigation bar and anchor links to each section |
| **Stack** | React 19 · Vite 7 · Tailwind CSS 4 (through `@tailwindcss/vite`) · lucide-react icons · ESLint 9 |
| **Sections** | Home · Technical Expertise · Featured Projects · Certifications · Experience · Education · Contact |
| **Content** | All text lives in plain data arrays at the top of `components/Portfolio.jsx`, so updating the site means editing data, not layout |
| **Build** | `npm run build` produces static files in `dist/` that any static host can serve |
| **Run it** | `npm install && npm run dev` → `http://localhost:5173` |

## Project phases

How the site was built, from the goal to a deployable build.

| # | Phase | What was delivered |
|---|---|---|
| 1 | **Goal** | One page that presents an RPA and automation profile to recruiters and clients, with clear calls to action (View Projects, Contact Me) |
| 2 | **Design** | Dark gradient theme, fixed top navigation, card layouts and responsive grids |
| 3 | **Build** | React components with data-driven sections: skills with levels, projects with client, role, tech and impact, certificates with images |
| 4 | **Styling** | Tailwind CSS 4 utility classes through the Vite plugin; lucide-react icons |
| 5 | **Quality** | ESLint 9 flat config with the React Hooks and React Refresh rules |
| 6 | **Delivery** | Vite production build to static files in `dist/`, ready for GitHub Pages, Netlify or Vercel |

## Page sections

| Section | What it shows | Data source |
|---|---|---|
| **Home** | Profile photo, title, short summary, *View Projects* and *Contact Me* buttons, Blue Prism / Tulip / FastAPI badges | Hero markup in `Portfolio.jsx`, photo in `src/assets/` |
| **Technical Expertise** | Skill bars for Blue Prism, Tulip, Python/FastAPI, React and Process Automation | `skills` |
| **Featured Projects** | Blue Prism automation projects for insurance and banking clients, with role, tech stack and impact | `projects` |
| **Certifications** | Tulip University certificates with images | `certificates`, `public/cert*.png` |
| **Experience** | Roles, companies, dates and responsibilities | `experiences` |
| **Education** | Degrees, institutions and dates | `education` |
| **Contact** | Email, LinkedIn and GitHub links | Contact list in `Portfolio.jsx` |

## Technology Stack

| Area | Choice |
|---|---|
| UI | React 19 (function components, `useState`) |
| Build and dev server | Vite 7 with `@vitejs/plugin-react` (fast refresh) |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite`, imported in `src/index.css` |
| Icons | lucide-react |
| Linting | ESLint 9 flat config, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` |

## Project Structure

```text
portfolio/
├── components/
│   └── Portfolio.jsx    page layout and all section data
├── public/              certificate images (cert1–3.png) and favicon
├── src/
│   ├── main.jsx         React entry point
│   ├── App.jsx          renders <Portfolio />
│   ├── assets/          profile photo
│   ├── index.css        Tailwind CSS import (linked from index.html)
│   └── App.css
├── index.html
├── vite.config.js       React and Tailwind CSS plugins
├── eslint.config.js
└── package.json
```

## Running Locally

Prerequisites: Node.js 20.19+ or 22.12+ (required by Vite 7).

```bash
git clone https://github.com/unmeshpawar7-cpu/portfolio.git
cd portfolio
npm install
npm run dev        # http://localhost:5173
```

| Script | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint over the project |

## Editing the Content

Everything shown on the page comes from arrays at the top of `components/Portfolio.jsx`:

| Array | Fields |
|---|---|
| `skills` | `name`, `level` (0–100), `color` (Tailwind class) |
| `projects` | `title`, `client`, `role`, `tech`, `description`, `impact` |
| `experiences` | `role`, `company`, `period`, `description` |
| `education` | `course`, `college`, `period`, `description` |
| `certificates` | `title`, `provider`, `image` (a path under `public/`) |

To change the photo, replace `src/assets/image.png`. To add a certificate, put the image in `public/` and add an entry
to `certificates`.

## Deployment

`npm run build` writes a static site to `dist/`. Upload that folder to any static host:

- **Netlify or Vercel:** import the repository; build command `npm run build`, output directory `dist`.
- **GitHub Pages:** the site is served from `/portfolio/`, so set `base: '/portfolio/'` in `vite.config.js` before
  building, then publish `dist/` (for example with a GitHub Actions Pages workflow).

## Roadmap

- Deploy the site and add the live link to this README.
- Add the backend projects (AI Rule Engine, Workflow Orchestrator, MDR Document Platform, AI Requirements Agent,
  Resume-Job Matching) to *Featured Projects* with links to their repositories.
- Add Experience and Education to the navigation bar.
- Compress the profile photo (about 5.6 MB today) to speed up the first load.
