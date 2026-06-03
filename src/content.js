// =============================================================
// SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO CONTENT
// Edit the values below to fill in your real details, projects,
// skills, featured deep dive, and reflection. The UI updates
// automatically. Placeholders are marked with TODO.
// =============================================================

export const profile = {
  name: "Somtochukwu Emmanuel Umeh", // TODO: your full name
  title: "Full Stack and DevOps Engineer", // TODO: your role / title
  bio: "Full Stack and DevOps engineer focused on building reliable APIs and services. I spent the HNG internship shipping real systems under real deadlines.", // TODO
  location: "Northampton, United Kingdom (GMT+1)", // TODO: location or timezone
  email: "emmanueldennise99@gmail.com",
  github: "https://github.com/Nuel-09",
  linkedin: "https://www.linkedin.com/in/somtochukwu-umeh-3727271aa/",
  twitter: "", // optional, leave "" to hide
  resume: "", // optional link to resume/CV, leave "" to hide
};

// One entry per significant project. A project can expose multiple repos via
// the `links` array (e.g. backend + CLI + web portal). Simpler projects can use
// the single `repo`/`demo` fields instead. Leave a field "" / [] to hide it.
export const projects = [
  {
    name: "Insighta Labs — Queryable Intelligence Engine",
    description:
      "A profile-intelligence platform built around a queryable API. It enriches person-profile data (gender, age, nationality) from external providers and exposes advanced filtering, sorting, pagination, and rule-based natural-language search. Shipped with a global CLI and a React web portal as first-class clients.",
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "GitHub OAuth (PKCE)",
      "React",
      "Vite",
    ],
    contribution:
      "Built the full system end to end: the Express/MongoDB API (GitHub OAuth with PKCE, JWT access/refresh with rotation, RBAC, rule-based NL search, streaming CSV ingestion, in-memory query cache with deterministic query normalization, rate limiting, request logging, CI), the global Node.js CLI client, and the React + Vite web portal (HTTP-only cookies, CSRF).",
    links: [
      { label: "Backend API", url: "https://github.com/Nuel-09/HNG_STAGE-1" },
      { label: "CLI", url: "https://github.com/Nuel-09/Insighta-Cli" },
      { label: "Web Portal", url: "https://github.com/Nuel-09/Insighta-WebPortal" },
    ],
    image: "", // screenshot path/URL (leave "" to hide)
  },
  // --- Placeholders for upcoming projects. Fill or delete as projects come in. ---
  {
    name: "Project Title",
    description: "Short description of what this project does.",
    stack: ["Node.js"],
    contribution: "What you personally built and owned.",
    repo: "", // GitHub URL (leave "" to hide the link)
    demo: "", // live/deployment URL (leave "" to hide)
    image: "",
  },
  {
    name: "Project Title",
    description: "Short description of what this project does.",
    stack: ["Node.js"],
    contribution: "What you personally built and owned.",
    repo: "",
    demo: "",
    image: "",
  },
];

// Each skill should point back to a project (per the rubric).
// Remove any skill you can't back with a project.
const INSIGHTA = "Insighta Labs — Queryable Intelligence Engine";

export const skills = [
  { name: "API Design", project: INSIGHTA },
  { name: "Authentication (OAuth/PKCE + JWT)", project: INSIGHTA },
  { name: "Databases (MongoDB)", project: INSIGHTA },
  { name: "Caching", project: INSIGHTA },
  { name: "Data Ingestion (streaming CSV)", project: INSIGHTA },
  { name: "Testing (CI)", project: INSIGHTA },
  { name: "Logging", project: INSIGHTA },
  { name: "Deployment (Railway + GitHub Actions)", project: INSIGHTA },
  { name: "Documentation", project: INSIGHTA },
];

// Pick one project and go deeper.
export const featured = {
  projectName: "Featured Project Title", // TODO
  summary: "One-line summary of the project.", // TODO
  problem: "Describe the problem this project solved and why it mattered.", // TODO
  architecture:
    "Describe the architecture and request flow: how a request enters the system, what it touches (auth, services, database, cache, queues), and how a response is returned.", // TODO
  endpoints: [
    { method: "POST", path: "/api/auth/login", purpose: "Authenticate a user and issue a token." },
    { method: "GET", path: "/api/resource", purpose: "List resources for the authenticated user." },
    { method: "POST", path: "/api/resource", purpose: "Create a new resource." },
  ],
  challenge: "Describe one real technical challenge you ran into.", // TODO
  solution: "Describe how you diagnosed and solved it.", // TODO
};

// Honest, specific, concise.
export const reflection = [
  "What you learned during HNG — be specific about the skills and habits you picked up.",
  "How you improved as a backend developer — concrete before/after, decisions you now make differently.",
];
