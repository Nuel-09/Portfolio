# HNG Backend Portfolio

A single-page portfolio showcasing the backend work I completed during the HNG
internship (stages 1–7). It is built to be reviewed in 3–5 minutes: clear
profile, project list with technical detail, skills mapped to projects, one
featured deep dive, an honest learning reflection, and easy-to-find contact
details.

## Submission Note

- **Stack used:** React 18 + Vite, plain CSS (no UI framework). Deployed on
  Vercel.
- **What the portfolio communicates:** the kind of backend engineer I am — what
  I built during HNG, the skills I actually used (each backed by a project), and
  how I think about architecture and problem-solving through a featured deep
  dive. The goal is a clear, honest, no-filler view of my backend capability.

## Editing the Content

All text and data live in one file: [`src/content.js`](src/content.js).
Update the exported objects there and the UI updates automatically:

- `profile` — name, title, bio, location/timezone, email, social links.
- `projects` — one entry per HNG stage. Fill `repo`, `demo`, and `image` as the
  GitHub projects come in. Empty fields hide their links automatically.
- `skills` — each skill maps back to a project (per the rubric). Remove any
  skill you can't back with a project.
- `featured` — the deep dive: problem, architecture/request flow, endpoints,
  challenge, and solution.
- `reflection` — an array of paragraphs.

No component or style changes are needed to add real content.

## Run Locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, "Add New → Project" and import the repo.
3. Vercel auto-detects Vite (build `vite build`, output `dist`). Click Deploy.

## Sections

1. Profile
2. HNG Projects
3. Backend Skills
4. Featured Project Deep Dive
5. Learning Reflection
6. Contact
