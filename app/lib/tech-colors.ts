export const TECH_COLORS: Record<string, string> = {
  "Next.js": "bg-black text-white dark:bg-white dark:text-black",
  React: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  TypeScript: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  JavaScript: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  Python: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  Java: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
  "C / C++": "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  Docker: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  PostgreSQL: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
  Supabase: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  "Framer Motion": "bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300",
  Vercel: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200",
  Django: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  Strapi: "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300",
  "GitLab CI/CD": "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
  "GitLab CI": "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
  Pug: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
  JSreport: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  "Moodle API": "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
  FastAPI: "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  Express: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200",
  SQLite: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  Tailwind: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300",
  "Numerical Math": "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
  Swing: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  "OOP": "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/40 dark:text-fuchsia-300",
  PySide6: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300",
};

export function getTechColor(tech: string): string {
  return TECH_COLORS[tech] ?? "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300";
}
