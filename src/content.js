// =============================================================
// SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO CONTENT
// Edit the values below to fill in your real details, projects,
// skills, featured deep dive, and reflection. The UI updates
// automatically. Placeholders are marked with TODO.
// =============================================================

export const profile = {
  name: "Your Name", // TODO: your full name
  title: "Backend Engineer", // TODO: your role / title
  bio: "Backend engineer focused on building reliable APIs and services. I spent the HNG internship shipping real systems under real deadlines.", // TODO
  location: "City, Country (GMT+1)", // TODO: location or timezone
  email: "you@example.com", // TODO
  github: "https://github.com/your-username", // TODO
  linkedin: "https://linkedin.com/in/your-username", // TODO
  twitter: "", // optional, leave "" to hide
  resume: "", // optional link to resume/CV, leave "" to hide
};

// One entry per significant HNG project/task (stages 1-7).
// Fill repo/demo/image as you send each GitHub project.
export const projects = [
  {
    name: "Stage 1 — Project Title",
    description: "Short description of what this project does.",
    stack: ["Node.js", "Express"],
    contribution: "What you personally built and owned.",
    repo: "", // GitHub URL (leave "" to hide the link)
    demo: "", // live/deployment URL (leave "" to hide)
    image: "", // screenshot path/URL (leave "" to hide)
  },
  {
    name: "Stage 2 — Project Title",
    description: "Short description of what this project does.",
    stack: ["Node.js", "PostgreSQL"],
    contribution: "What you personally built and owned.",
    repo: "",
    demo: "",
    image: "",
  },
  {
    name: "Stage 3 — Project Title",
    description: "Short description of what this project does.",
    stack: ["Python", "FastAPI"],
    contribution: "What you personally built and owned.",
    repo: "",
    demo: "",
    image: "",
  },
  {
    name: "Stage 4 — Project Title",
    description: "Short description of what this project does.",
    stack: ["Node.js", "Redis"],
    contribution: "What you personally built and owned.",
    repo: "",
    demo: "",
    image: "",
  },
  {
    name: "Stage 5 — Project Title",
    description: "Short description of what this project does.",
    stack: ["Django", "PostgreSQL"],
    contribution: "What you personally built and owned.",
    repo: "",
    demo: "",
    image: "",
  },
  {
    name: "Stage 6 — Project Title",
    description: "Short description of what this project does.",
    stack: ["Node.js", "Docker"],
    contribution: "What you personally built and owned.",
    repo: "",
    demo: "",
    image: "",
  },
  {
    name: "Stage 7 — Project Title",
    description: "Short description of what this project does.",
    stack: ["React", "Vite"],
    contribution: "What you personally built and owned.",
    repo: "",
    demo: "",
    image: "",
  },
];

// Each skill should point back to a project (per the rubric).
// Remove any skill you can't back with a project.
export const skills = [
  { name: "API Design", project: "Stage 2 — Project Title" },
  { name: "Authentication", project: "Stage 3 — Project Title" },
  { name: "Databases", project: "Stage 2 — Project Title" },
  { name: "Background Jobs", project: "Stage 4 — Project Title" },
  { name: "Caching", project: "Stage 4 — Project Title" },
  { name: "Testing", project: "Stage 5 — Project Title" },
  { name: "Logging", project: "Stage 5 — Project Title" },
  { name: "Deployment", project: "Stage 6 — Project Title" },
  { name: "Documentation", project: "Stage 6 — Project Title" },
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
