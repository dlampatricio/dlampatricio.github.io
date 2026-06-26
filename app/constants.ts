import type { Project, WritingEntry } from "./types";

export const LINKS = {
  github: "https://github.com/dlampatricio",
  linkedin: "https://linkedin.com/in/dlampatricio",
  email: "mailto:dlampatricio@gmail.com",
  cv: "/cv-david-lam.pdf",
} as const;

export const PROJECTS: Project[] = [
  {
    id: 'florale',
    title: 'Floralé',
    year: '2026',
    desc: 'An artisanal e-commerce experience for unique gifts, blending aesthetics with seamless purchasing.',
    tags: ['Next.js', 'Supabase', 'Framer Motion', 'Vercel'],
    category: 'E-commerce • Design',
    label: 'FEATURED',
    metrics: ['Product catalog with 50+ items', 'Real-time cart & checkout', 'Admin dashboard with analytics'],
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
    metrics: ['10k+ student records managed', 'Automated CI/CD pipeline', 'Multi-institution deployment'],
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
    metrics: ['200+ product SKUs', 'Atomic component library', 'Dark/light theme support'],
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
    metrics: ['Real-time inventory tracking', 'Multi-service dashboard', 'Automated report generation'],
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
    metrics: ['Multi-tenant architecture', 'Role-based access control', 'RESTful API design'],
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
    metrics: ['Real-time inventory sync', 'Sales reporting engine', 'Multi-user role system'],
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
    metrics: ['Interactive convergence visualization', 'Support for any differentiable function', 'Step-by-step iteration display'],
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
    metrics: ['Efficient search algorithms', 'Bibliographic data persistence', 'Clean MVC architecture'],
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
  },
  {
    title: "The Cuban School of Computing: A Technical Perspective",
    excerpt: "Reflections on the rigorous mathematical foundation of CS education in Cuba and how it shapes a unique approach to problem-solving.",
  },
  {
    title: "Why I Chose Next.js for Every Project (and When I Wouldn't)",
    excerpt: "A practical breakdown of framework decisions across 8 projects — from static sites to complex dashboards — and the tradeoffs that matter.",
  },
];

export const FOOTER_LINKS = [
  { href: '/work', label: 'View All Work', external: false },
  { href: 'https://github.com/dlampatricio', label: 'GitHub', external: true },
  { href: 'https://linkedin.com/in/dlampatricio', label: 'LinkedIn', external: true },
] as const;
