import type { Project, WritingEntry } from "./types";

export const LINKS = {
  github: "https://github.com/dlampatricio",
  linkedin: "https://linkedin.com/in/dlampatricio",
  email: "mailto:dlampatricio@gmail.com",
  cv: "/david_lam_cv.pdf",
} as const;

export const SELECTED_PROJECT_IDS = ['better-reports', 'lamubi', 'florale'] as const;

export const PROJECTS: Project[] = [
  {
    id: 'better-reports-docs',
    title: 'Better Reports Docs',
    year: '2026',
    desc: 'A VitePress-powered documentation site for Better Reports. Features comprehensive guides, API reference, deployment instructions, and interactive examples — all authored in Markdown.',
    tags: ['VitePress', 'TypeScript', 'Node.js', 'Markdown', 'Vue'],
    category: 'Documentation • Site',
    label: 'FEATURED',
    github: 'https://github.com/dlampatricio/better-reports-docs',
    live: 'https://better-reports.pages.dev',
    images: [
      { src: '/better_reports_docs/better_reports_docs_home.webp', alt: 'Better Reports Docs Home' },
      { src: '/better_reports_docs/better_reports_docs_examples.webp', alt: 'Better Reports Docs Examples' },
    ],
  },
  {
    id: 'better-reports',
    title: 'Better Reports',
    year: '2026',
    desc: 'A self-hosted template engine for document generation powered by Typst. Compiles Typst markup into PDFs via a Rust + NAPI-RS native addon — no Chromium or external services required. Features live editing, template management, asset and package handling.',
    tags: ['Rust', 'React', 'TypeScript', 'Tailwind CSS', 'Docker', 'Monaco Editor', 'Node.js'],
    category: 'App • Template Engine',
    label: 'FEATURED',
    github: 'https://github.com/dlampatricio/better-reports',
    live: null,
    images: [
      { src: '/better_reports/better_reports_dashboard.webp', alt: 'Better Reports Dashboard' },
      { src: '/better_reports/better_reports_new.webp', alt: 'Better Reports New Report' },
      { src: '/better_reports/better_reports_packages.webp', alt: 'Better Reports Packages' },
    ],
  },
  {
    id: 'lamubi',
    title: 'La Mubi',
    year: '2026',
    desc: 'A local multiplayer movie charades game. Teams act out random film titles — with poster, synopsis, rating, director, and genres — without speaking. Features classic team charades and an Impostor mode where one player must fake knowing the movie.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'TMDB API'],
    category: 'Game • Full-Stack',
    label: 'FEATURED',
    github: 'https://github.com/dlampatricio/lamubi',
    live: 'https://lamubi.vercel.app',
    images: [
      { src: '/lamubi/lamubi_home.webp', alt: 'La Mubi Home Screen' },
      { src: '/lamubi/lamubi_lobby.webp', alt: 'La Mubi Lobby' },
      { src: '/lamubi/lamubi_handoff.webp', alt: 'La Mubi Handoff Screen' },
      { src: '/lamubi/lamubi_result.webp', alt: 'La Mubi Result Screen' },
    ],
  },
  {
    id: 'florale',
    title: 'Floralé',
    year: '2026',
    desc: 'An artisanal e-commerce experience for unique gifts, blending aesthetics with seamless purchasing.',
    tags: ['Next.js', 'Supabase', 'Framer Motion', 'Vercel'],
    category: 'E-commerce • Design',
    label: 'FEATURED',
    github: 'https://github.com/dlampatricio/florale',
    live: 'https://florale-uy.vercel.app',
    images: [
      { src: '/florale/florale_home.webp', alt: 'Floralé Home' },
      { src: '/florale/florale_product.webp', alt: 'Floralé Product' },
      { src: '/florale/florale_cart.webp', alt: 'Floralé Cart' },
      { src: '/florale/florale_dashboard.webp', alt: 'Floralé Dashboard' },
      { src: '/florale/florale_info.webp', alt: 'Floralé Info' },
    ],
  },
  {
    id: 'saitec-platform',
    title: 'Saitec Platform',
    year: '2026',
    desc: 'A high-stakes educational ecosystem designed for administrative efficiency. Streamlining student management and institutional data scaling.',
    tags: ['Docker', 'GitLab CI/CD', 'Next.js', 'Pug', 'JSreport', 'Moodle API'],
    category: 'Architecture • Platform',
    label: 'FEATURED',
    github: null,
    live: null,
    images: [
      { src: '/saitec/light/test-saitec.aitec.edu.ec_login.webp', alt: 'Saitec Login' },
      { src: '/saitec/light/test-saitec.aitec.edu.ec_academy.webp', alt: 'Saitec Academy' },
      { src: '/saitec/light/test-saitec.aitec.edu.ec_affiliation.webp', alt: 'Saitec Affiliation' },
    ],
  },
  {
    id: 'broncos-market',
    title: 'Broncos Market',
    year: '2025',
    desc: 'A performance-oriented e-commerce engine. Built with focus on atomic design and seamless state management.',
    tags: ['Next.js', 'Strapi', 'PostgreSQL'],
    category: 'E-commerce • UX',
    label: 'FEATURED',
    github: 'https://github.com/dlampatricio/broncos-market-frontend',
    live: 'https://broncosmarket.vercel.app',
    images: [
      { src: '/broncos_market/light/broncosmarket.vercel.app_.webp', alt: 'Broncos Market Home' },
      { src: '/broncos_market/light/broncosmarket.vercel.app_cart.webp', alt: 'Broncos Market Cart' },
      { src: '/broncos_market/light/broncosmarket.vercel.app_category_carnicos.webp', alt: 'Broncos Market Category' },
      { src: '/broncos_market/light/broncosmarket.vercel.app_product_jamon-pierna.webp', alt: 'Broncos Market Product' },
    ],
  },
  {
    id: 'angel-pets',
    title: 'Angel Pets',
    year: '2025',
    desc: 'A robust management suite for pet services. Developing a comprehensive data-dashboard for complex inventory logic.',
    tags: ['Next.js', 'Strapi', 'SQLite'],
    category: 'Systems • Dashboard',
    label: 'FEATURED',
    github: null,
    live: null,
    images: [
      { src: '/angel_pets/home.webp', alt: 'Angel Pets Home' },
      { src: '/angel_pets/dashboard_balance_services-balance.webp', alt: 'Angel Pets Dashboard Balance' },
      { src: '/angel_pets/dashboard_sales_animals.webp', alt: 'Angel Pets Dashboard Sales' },
      { src: '/angel_pets/dashboard_services_services.webp', alt: 'Angel Pets Dashboard Services' },
    ],
  },
  {
    id: 'cublogs',
    title: 'CuBlogs',
    year: '2024',
    desc: 'A multi-tenant blogging architecture enabling diverse entities to manage publication lifecycles with decoupled strategy.',
    tags: ['Django', 'PostgreSQL', 'Tailwind'],
    category: 'Platform • CMS',
    label: 'ARCHIVE',
    github: null,
    live: null,
    images: [
      { src: '/cuBlogs/blogs.webp', alt: 'CuBlogs Blogs' },
      { src: '/cuBlogs/home.webp', alt: 'CuBlogs Home' },
      { src: '/cuBlogs/login.webp', alt: 'CuBlogs Login' },
      { src: '/cuBlogs/newpost.webp', alt: 'CuBlogs New Post' },
      { src: '/cuBlogs/posts.webp', alt: 'CuBlogs Posts' },
      { src: '/cuBlogs/register.webp', alt: 'CuBlogs Register' },
    ],
  },
  {
    id: 'mclorenz',
    title: 'MCLorenz',
    year: '2023',
    desc: 'Point of Sale (POS) and resource management system for high-volume environments. Real-time inventory tracking.',
    tags: ['Python', 'PostgreSQL', 'PySide6'],
    category: 'Systems • POS',
    label: 'ARCHIVE',
    github: null,
    live: null,
    images: [
      { src: '/mclorenz/productos.webp', alt: 'MCLorenz Productos' },
      { src: '/mclorenz/cuadre.webp', alt: 'MCLorenz Cuadre' },
      { src: '/mclorenz/receta.webp', alt: 'MCLorenz Receta' },
    ],
  },
  {
    id: 'newton-raphson',
    title: 'Newton-Raphson Solver',
    year: '2022',
    desc: 'Mathematical tool for finding real roots of differentiable functions. Iterative convergence visualization.',
    tags: ['Java', 'Numerical Math', 'Swing'],
    category: 'Academic • Mathematics',
    label: 'ACADEMIC',
    github: 'https://github.com/dlampatricio/NewtonMethod',
    live: null,
    images: [
      { src: '/newtonMethod/home.webp', alt: 'Newton-Raphson Method Home' },
      { src: '/newtonMethod/result.webp', alt: 'Newton-Raphson Method Result' },
    ],
  },
  {
    id: 'uclib',
    title: 'UCLiB',
    year: '2022',
    desc: 'Library management engine with efficient search algorithms and robust data persistence for bibliographic collections.',
    tags: ['Java', 'OOP', 'Swing'],
    category: 'Academic • Systems',
    label: 'ACADEMIC',
    github: 'https://github.com/dlampatricio/UCLiB',
    live: null,
    images: [
      { src: '/uclib/dashboard_home.webp', alt: 'UCLiB Home' },
      { src: '/uclib/dashboard_users.webp', alt: 'UCLiB Users' },
      { src: '/uclib/dashboard_add_item.webp', alt: 'UCLiB Add Item' },
    ],
  },
];

export const SKILLS = [
  { title: 'Systems', skills: ['JavaScript / TS', 'Python', 'Java', 'C / C++'] },
  { title: 'Architecture', skills: ['Next.js', 'FastAPI', 'Express', 'SQL / Postgres'] },
  { title: 'Infrastructure', skills: ['Docker', 'CI/CD', 'VPS', 'Git Architecture'] },
  { title: 'Philosophy', skills: ['Clean Code', 'UX Systems', 'Performance', 'Scalability'] },
] as const;

export const TESTIMONIALS = [
  {
    quote: "David brought a level of technical precision and architectural thinking that transformed our platform. His ability to bridge academic theory with production-ready code is exceptional.",
    author: "Prof. Alejandro Rodríguez",
    role: "Computer Science Department, UCLV",
  },
  {
    quote: "Working with David was remarkable. He doesn't just write code — he designs systems. His attention to performance and clean architecture made a significant impact on our e-commerce platform.",
    author: "María González",
    role: "Project Lead, Freelance Collaboration",
  },
] as const;

export const WRITING: WritingEntry[] = [
  {
    title: "Building Resilient Systems: Lessons from Full-Stack Architecture",
    excerpt: "Exploring how early decisions in system design ripple through the entire development lifecycle — and why clean architecture pays exponential dividends.",
    url: "/blog/resilient-systems",
  },
  {
    title: "The Cuban School of Computing: A Technical Perspective",
    excerpt: "Reflections on the rigorous mathematical foundation of CS education in Cuba and how it shapes a unique approach to problem-solving.",
    url: "/blog/cuban-school-of-computing",
  },
  {
    title: "Why I Chose Next.js for Every Project (and When I Wouldn't)",
    excerpt: "A practical breakdown of framework decisions across 8 projects — from static sites to complex dashboards — and the tradeoffs that matter.",
    url: "/blog/why-nextjs",
  },
  {
    title: "Floralé: From Social Media Chaos to a Centralized Commerce System",
    excerpt: "How a WhatsApp-native e-commerce architecture helped an artisan reclaim time, consolidate five sales channels, and double down on what matters — the craft.",
    url: "/blog/florale-case-study",
  },
];

export const FOOTER_LINKS = [
  { href: '/work', label: 'View All Work', external: false },
  { href: 'https://github.com/dlampatricio', label: 'GitHub', external: true },
  { href: 'https://linkedin.com/in/dlampatricio', label: 'LinkedIn', external: true },
] as const;
