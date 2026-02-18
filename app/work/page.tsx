"use client";
import MuseumCarousel from "../components/MuseumCarousel";
import Link from "next/link";

const PROJECTS_CONFIG = {
  saitec: {
    github: null,
    live: null
  },
  broncos: {
    github: "https://github.com/dlampatricio/broncos-market-frontend", 
    live: "https://broncosmarket.vercel.app"
  },
  angel: {
    github: null,
    live: null
  },
  cublogs: {
    github: null,
    live: null
  },
  mclorenz: {
    github: null,
    live: null
  },
  newton: {
    github: "https://github.com/dlampatricio/NewtonMethod",
    live: null
  },
  uclib: {
    github: "https://github.com/dlampatricio/UCLiB",
    live: null
  }
};

const ProjectLinks = ({ links }: { links: { github: string | null; live: string | null } }) => (
  <div className="flex flex-wrap md:justify-end gap-6 mt-6 pt-6 border-t border-zinc-50">
    {links.github && (
      <a 
        href={links.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group/link flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-zinc-400 hover:text-emerald-800 transition-colors duration-300"
      >
        <span className="pb-px border-b border-transparent group-hover/link:border-emerald-800/30 transition-all">Source Code</span>
        <svg className="w-3 h-3 opacity-50 group-hover/link:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    )}
    {links.live && (
      <a 
        href={links.live} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group/link flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-zinc-900 hover:text-emerald-800 transition-colors duration-300"
      >
        <span className="pb-px border-b border-zinc-200 group-hover/link:border-emerald-800 transition-all font-semibold">Live Exhibit</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600/40"></span>
        </span>
      </a>
    )}
  </div>
);

export default function Work() {
  // IMAGES DATA
  const saitecImages = [
    { src: "/saitec/light/test-saitec.aitec.edu.ec_login.webp", alt: "Saitec Login" },
    { src: "/saitec/light/test-saitec.aitec.edu.ec_academy.webp", alt: "Saitec Academy" },
    { src: "/saitec/light/test-saitec.aitec.edu.ec_affiliation.webp", alt: "Saitec Affiliation" },
  ];

  const broncosMarketImages = [
    { src: "/broncos_market/light/broncosmarket.vercel.app_.webp", alt: "Broncos Market Home" },
    { src: "/broncos_market/light/broncosmarket.vercel.app_cart.webp", alt: "Broncos Market Cart" },
    { src: "/broncos_market/light/broncosmarket.vercel.app_category_carnicos.webp", alt: "Broncos Market Category" },
    { src: "/broncos_market/light/broncosmarket.vercel.app_product_jamon-pierna.webp", alt: "Broncos Market Product" },
  ];

  const angelPetsImages = [
    { src: "/angel_pets/home.webp", alt: "Angel Pets Home" },
    { src: "/angel_pets/dashboard_balance_services-balance.webp", alt: "Angel Pets Dashboard Balance" },
    { src: "/angel_pets/dashboard_sales_animals.webp", alt: "Angel Pets Dashboard Sales" },
    { src: "/angel_pets/dashboard_services_services.webp", alt: "Angel Pets Dashboard Services" },
  ];

  const cuBlogsImages = [
    { src: "/cuBlogs/blogs.webp", alt: "CuBlogs Blogs"},
    { src: "/cuBlogs/home.webp", alt: "CuBlogs Home"},
    { src: "/cuBlogs/login.webp", alt: "CuBlogs Login"},
    { src: "/cuBlogs/newpost.webp", alt: "CuBlogs New Post"},
    { src: "/cuBlogs/posts.webp", alt: "CuBlogs Posts"},
    { src: "/cuBlogs/register.webp", alt: "CuBlogs Register"},
  ];

  const mclorenzImages = [
    { src: "/mclorenz/productos.webp", alt: " MCLorenz Productos"},
    { src: "/mclorenz/cuadre.webp", alt: " MCLorenz Cuadre"},
    { src: "/mclorenz/receta.webp", alt: " MCLorenz Receta"}
  ];

  const newtonMethodImages = [
    { src: "/newtonMethod/home.webp", alt: "Newton-Raphson Method Home" },
    { src: "/newtonMethod/result.webp", alt: "Newton-Raphson Method Result" },
  ];

  const uclibImages = [
    { src: "/uclib/dashboard_home.webp", alt: "UCLiB Home" },
    { src: "/uclib/dashboard_users.webp", alt: "UCLiB Users" },
    { src: "/uclib/dashboard_add_item.webp", alt: "UCLiB add Item" },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-emerald-800 selection:text-white antialiased">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-16 py-24 sm:py-32 md:py-48">
        
        {/* HEADER SECTION */}
        <section className="mb-16 sm:mb-24 md:mb-32 max-w-3xl" aria-labelledby="work-title">
          <div className="space-y-8 sm:space-y-10">
            <h1 id="work-title" className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-zinc-900 lowercase">
              Work<span className="text-emerald-800 italic font-serif">.</span>
            </h1>
            <div className="w-12 sm:w-16 h-px bg-emerald-800/20" aria-hidden="true"></div>
            
            <div className="space-y-8">
              <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 font-light leading-relaxed max-w-2xl">
                A curated selection of digital architectures, focusing on <span className="text-zinc-900 italic">functional beauty</span> and technical resilience.
              </p>
              
              <div className="flex items-start gap-4 pt-4 sm:pt-6 border-l-2 border-zinc-100 pl-4 sm:pl-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-800 font-medium mt-1 sm:mt-2">Note:</p>
                <p className="text-xs sm:text-[10px] text-zinc-500 font-light leading-relaxed max-w-sm sm:max-w-md italic">
                  All interfaces displayed here utilize synthetic data and non-representational assets. 
                  Any corporate information or personal records shown are for demonstrative purposes within a sandbox environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <main className="space-y-20 sm:space-y-24 md:space-y-32">

          {/* Saitec Platform */}
          <article id="saitec-platform" className="scroll-mt-32 group">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-900 lowercase group-hover:text-emerald-800 transition-colors duration-500">Saitec Platform</h2>
                <span className="text-[10px] font-mono text-zinc-400 tracking-[0.3em]">ARCHIVE / 2026</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-600 font-light leading-relaxed">A high-stakes educational ecosystem designed for administrative efficiency. Streamlining student management and institutional data scaling.</p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap md:justify-end gap-3">
                    {["Docker", "GitLab CI", "Next.js", "JSreport"].map((tag) => (
                      <span key={tag} className="text-[8px] sm:text-[9px] uppercase tracking-widest border border-zinc-200 px-3 py-1 text-zinc-400 font-medium bg-white">{tag}</span>
                    ))}
                  </div>
                  <ProjectLinks links={PROJECTS_CONFIG.saitec} />
                </div>
              </div>
            </header>
            <div className="relative shadow-2xl shadow-zinc-200/50 rounded-sm overflow-hidden"><MuseumCarousel images={saitecImages} /></div>
          </article>

          {/* Broncos Market */}
          <article id="broncos-market" className="scroll-mt-32 group">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 className="text-4xl font-light text-zinc-900 lowercase group-hover:text-emerald-800 transition-colors duration-500">Broncos Market</h2>
                <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em]">ARCHIVE / 2025</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-600 font-light leading-relaxed">A performance-oriented e-commerce engine. Built with focus on atomic design and seamless state management.</p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap md:justify-end gap-3">
                    {["Next.js", "Strapi", "PostgreSQL"].map((tag) => (
                      <span key={tag} className="text-[8px] sm:text-[9px] uppercase tracking-widest border border-zinc-200 px-3 py-1 text-zinc-400 font-medium bg-white">{tag}</span>
                    ))}
                  </div>
                  <ProjectLinks links={PROJECTS_CONFIG.broncos} />
                </div>
              </div>
            </header>
            <div className="relative shadow-2xl shadow-zinc-200/50 rounded-sm overflow-hidden"><MuseumCarousel images={broncosMarketImages} /></div>
          </article>

          {/* Angel Pets */}
          <article id="angel-pets" className="scroll-mt-32 group">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 className="text-4xl font-light text-zinc-900 lowercase group-hover:text-emerald-800 transition-colors duration-500">Angel Pets</h2>
                <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em]">ARCHIVE / 2025</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-600 font-light leading-relaxed">A robust management suite for pet services. Developing a comprehensive data-dashboard for complex inventory logic.</p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap md:justify-end gap-3">
                    {["Next.js", "Strapi", "SQLite"].map((tag) => (
                      <span key={tag} className="text-[8px] sm:text-[9px] uppercase tracking-widest border border-zinc-200 px-3 py-1 text-zinc-400 font-medium bg-white">{tag}</span>
                    ))}
                  </div>
                  <ProjectLinks links={PROJECTS_CONFIG.angel} />
                </div>
              </div>
            </header>
            <div className="relative shadow-2xl shadow-zinc-200/50 rounded-sm overflow-hidden"><MuseumCarousel images={angelPetsImages} /></div>
          </article>

          {/* CuBlogs */}
          <article id="cublogs" className="scroll-mt-32 group">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 className="text-4xl font-light text-zinc-900 lowercase group-hover:text-emerald-800 transition-colors duration-500">CuBlogs</h2>
                <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em]">ARCHIVE / 2024</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-600 font-light leading-relaxed">A multi-tenant blogging architecture enabling diverse entities to manage publication lifecycles with decoupled strategy.</p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap md:justify-end gap-3">
                    {["Django", "PostgreSQL", "Tailwind"].map((tag) => (
                      <span key={tag} className="text-[8px] sm:text-[9px] uppercase tracking-widest border border-zinc-200 px-3 py-1 text-zinc-400 font-medium bg-white">{tag}</span>
                    ))}
                  </div>
                  <ProjectLinks links={PROJECTS_CONFIG.cublogs} />
                </div>
              </div>
            </header>
            <div className="relative shadow-2xl shadow-zinc-200/50 rounded-sm overflow-hidden"><MuseumCarousel images={cuBlogsImages} /></div>
          </article>

          {/* MCLorenz */}
          <article id="mclorenz" className="scroll-mt-32 group">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 className="text-4xl font-light text-zinc-900 lowercase group-hover:text-emerald-800 transition-colors duration-500">MCLorenz</h2>
                <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em]">ARCHIVE / 2023</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-600 font-light leading-relaxed">Point of Sale (POS) and resource management system for high-volume environments. Real-time inventory tracking.</p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap md:justify-end gap-3">
                    {["Python", "PostgreSQL", "PySide6"].map((tag) => (
                      <span key={tag} className="text-[8px] sm:text-[9px] uppercase tracking-widest border border-zinc-200 px-3 py-1 text-zinc-400 font-medium bg-white">{tag}</span>
                    ))}
                  </div>
                  <ProjectLinks links={PROJECTS_CONFIG.mclorenz} />
                </div>
              </div>
            </header>
            <div className="relative shadow-2xl shadow-zinc-200/50 rounded-sm overflow-hidden border border-zinc-100"><MuseumCarousel images={mclorenzImages} /></div>
          </article>

          {/* Newton Solver */}
          <article id="newton-raphson" className="scroll-mt-32 group">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 className="text-4xl font-light text-zinc-900 lowercase group-hover:text-emerald-800 transition-colors duration-500">Newton-Raphson Solver</h2>
                <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em]">ACADEMIC / 2022</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-600 font-light leading-relaxed">Mathematical tool for finding real roots of differentiable functions. Iterative convergence visualization.</p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap md:justify-end gap-3">
                    {["Java", "Numerical Math", "Swing"].map((tag) => (
                      <span key={tag} className="text-[8px] sm:text-[9px] uppercase tracking-widest border border-zinc-200 px-3 py-1 text-zinc-400 font-medium bg-white">{tag}</span>
                    ))}
                  </div>
                  <ProjectLinks links={PROJECTS_CONFIG.newton} />
                </div>
              </div>
            </header>
            <div className="relative shadow-2xl shadow-zinc-200/50 rounded-sm overflow-hidden border border-zinc-100"><MuseumCarousel images={newtonMethodImages} /></div>
          </article>

          {/* UCLiB */}
          <article id="uclib" className="scroll-mt-32 group">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 className="text-4xl font-light text-zinc-900 lowercase group-hover:text-emerald-800 transition-colors duration-500">UCLiB</h2>
                <span className="text-[10px] font-mono text-zinc-400 tracking-[0.3em]">ACADEMIC / 2022</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-600 font-light leading-relaxed">Library management engine with efficient search algorithms and robust data persistence for bibliographic collections.</p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap md:justify-end gap-3">
                    {["Java", "OOP", "Swing"].map((tag) => (
                      <span key={tag} className="text-[8px] sm:text-[9px] uppercase tracking-widest border border-zinc-200 px-3 py-1 text-zinc-400 font-medium bg-white">{tag}</span>
                    ))}
                  </div>
                  <ProjectLinks links={PROJECTS_CONFIG.uclib} />
                </div>
              </div>
            </header>
            <div className="relative shadow-2xl shadow-zinc-200/50 rounded-sm overflow-hidden border border-zinc-50"><MuseumCarousel images={uclibImages} /></div>
          </article>

        </main>

        {/* FOOTER */}
        <footer className="mt-20 sm:mt-32 border-t border-zinc-100 pt-24 sm:pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-12 sm:space-y-16">
            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-emerald-800 font-medium">Next Chapter</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 leading-tight lowercase tracking-tight">
                Have a vision for a new system<span className="text-emerald-800 font-serif italic">?</span> <br/>
                Let's define its <span className="italic font-serif">architecture</span> together.
              </p>
            </div>
            <div className="flex justify-center pt-2">
              <Link href="/contact" className="group relative inline-flex items-center gap-6 text-[10px] tracking-[0.5em] uppercase font-medium text-zinc-900">
                <span className="underline underline-offset-4 decoration-zinc-200 group-hover:decoration-emerald-800 transition-all duration-700 ease-in-out">Get in Touch</span>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}