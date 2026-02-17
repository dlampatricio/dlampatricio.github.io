export const PROJECTS = [
  {
    id: "saitec-platform",
    title: "Saitec Platform",
    year: "2026",
    desc: "A high-stakes educational ecosystem designed for administrative efficiency.",
    tags: ["Docker", "GitLab CI/CD", "Next.js", "Pug", "JSreport", "Moodle API"],
    category: "Architecture • Platform"
  },
  {
    id: "broncos-market",
    title: "Broncos Market",
    year: "2025",
    desc: "A performance-oriented e-commerce engine.",
    tags: ["Next.js", "Strapi", "PostgreSQL"],
    category: "E-commerce • UX"
  },
  {
    id: "angel-pets",
    title: "Angel Pets",
    year: "2025",
    desc: "Comprehensive pet-shop dashboard and real-time inventory management system.",
    tags: ["Next.js", "Strapi", "SQLite"],
    category: "Systems • Dashboard"
  }
] as const;

export const SKILLS = [
  { title: "Systems", skills: ["JavaScript / TS", "Python", "Java", "C / C++"] },
  { title: "Architecture", skills: ["Next.js", "FastAPI", "Express", "SQL / Postgres"] },
  { title: "Infrastructure", skills: ["Docker", "CI/CD", "VPS", "Git Architecture"] },
  { title: "Philosophy", skills: ["Clean Code", "UX Systems", "Performance", "Scalability"] }
] as const;

export const FOOTER_LINKS = [
  { href: "/work", label: "View All Work", external: false },
  { href: "https://github.com", label: "GitHub", external: true }
] as const;
