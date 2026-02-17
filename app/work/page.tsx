"use client";
import MuseumCarousel from "../components/MuseumCarousel";
import Link from "next/link";

export default function Work() {
  const angelPetsImages = [
    { src: "/angel_pets/home.png", alt: "Angel Pets Home" },
    { src: "/angel_pets/dashboard_balance_services-balance.png", alt: "Angel Pets Dashboard Balance" },
    { src: "/angel_pets/dashboard_sales_animals.png", alt: "Angel Pets Dashboard Sales" },
    { src: "/angel_pets/dashboard_services_services.png", alt: "Angel Pets Dashboard Services" },
  ];

  const broncosMarketImages = [
    { src: "/broncos_market/light/broncosmarket.vercel.app_.png", alt: "Broncos Market Home" },
    { src: "/broncos_market/light/broncosmarket.vercel.app_cart.png", alt: "Broncos Market Cart" },
    { src: "/broncos_market/light/broncosmarket.vercel.app_category_carnicos.png", alt: "Broncos Market Category" },
    { src: "/broncos_market/light/broncosmarket.vercel.app_product_jamon-pierna.png", alt: "Broncos Market Product" },
  ];

  const saitecImages = [
    { src: "/saitec/light/test-saitec.aitec.edu.ec_login.png", alt: "Saitec Login" },
    { src: "/saitec/light/test-saitec.aitec.edu.ec_academy.png", alt: "Saitec Academy" },
    { src: "/saitec/light/test-saitec.aitec.edu.ec_affiliation.png", alt: "Saitec Affiliation" },
  ];

  const uclibImages = [
    { src: "/uclib/dashboard_home.png", alt: "UCLiB Home" },
    { src: "/uclib/dashboard_users.png", alt: "UCLiB Users" },
    { src: "/uclib/dashboard_add_item.png", alt: "UCLiB add Item" },
  ];

  const newtonMethodImages = [
    { src: "/newtonMethod/home.png", alt: "Newton-Raphson Method Home" },
    { src: "/newtonMethod/result.png", alt: "Newton-Raphson Method Result" },
  ];

  const cuBlogsImages = [
    { src: "/cuBlogs/blogs.png", alt: "CuBlogs Blogs"},
    { src: "/cuBlogs/home.png", alt: "CuBlogs Home"},
    { src: "/cuBlogs/login.png", alt: "CuBlogs Login"},
    { src: "/cuBlogs/newpost.png", alt: "CuBlogs New Post"},
    { src: "/cuBlogs/posts.png", alt: "CuBlogs Posts"},
    { src: "/cuBlogs/register.png", alt: "CuBlogs Register"},
  ];

  const mclorenzImages = [
    { src: "/mclorenz/productos.png", alt: " MCLorenz Productos"},
    { src: "/mclorenz/cuadre.png", alt: " MCLorenz Cuadre"},
    { src: "/mclorenz/receta.png", alt: " MCLorenz Receta"}
  ]

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
              
              {/* Main Disclaimer / Curator's Note */}
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

          {/* Saitec Project */}
          <article id="saitec-platform" className="scroll-mt-20 sm:scroll-mt-24 md:scroll-mt-32 group" aria-labelledby="title-saitec">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 id="title-saitec" className="text-3xl sm:text-4xl font-light tracking-tight text-zinc-900 lowercase group-hover:text-emerald-800 transition-colors duration-500">
                  Saitec Platform
                </h2>
                <span className="text-[10px] font-mono text-zinc-400 tracking-[0.3em]">ARCHIVE / 2026</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-600 font-light leading-relaxed">
                  A high-stakes educational ecosystem designed for administrative efficiency. 
                  Streamlining student management, course lifecycle tracking, and institutional data scaling.
                </p>
                <div className="flex flex-wrap md:justify-end gap-3">
                  {["Docker", "GitLab CI/CD", "Next.js", "Pug", "JSreport", "Moodle API"].map((tag) => (
                    <span key={tag} className="text-[8px] sm:text-[9px] uppercase tracking-widest border border-zinc-200 px-2 sm:px-3 py-1 text-zinc-400 group-hover:text-emerald-800 group-hover:border-zinc-200 transition-all duration-700 font-medium bg-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>
            
            <div className="relative shadow-lg sm:shadow-xl md:shadow-2xl shadow-zinc-200/50 rounded-sm overflow-hidden">
              <MuseumCarousel images={saitecImages} />
            </div>
            <p className="mt-4 sm:mt-6 text-[9px] uppercase tracking-[0.2em] text-zinc-400 text-right font-medium italic">
              * Non-representational institutional data / Sandbox Environment
            </p>
          </article>

          {/* Broncos Market Project */}
          <article id="broncos-market" className="scroll-mt-32 group" aria-labelledby="title-broncos">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 id="title-broncos" className="text-4xl font-light tracking-tight text-zinc-900 lowercase group-hover:text-emerald-800 transition-colors duration-500">
                  Broncos Market
                </h2>
                <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em]">ARCHIVE / 2025</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-600 font-light leading-relaxed">
                  A performance-oriented e-commerce engine. Built with a focus on atomic design and seamless state management, delivering a friction-less shopping experience.
                </p>
                <div className="flex flex-wrap md:justify-end gap-3">
                  {["Next.js", "Strapi", "PostgreSQL"].map((tag) => (
                    <span key={tag} className="text-[8px] sm:text-[9px] uppercase tracking-widest border border-zinc-200 px-2 sm:px-3 py-1 text-zinc-400 group-hover:text-emerald-800 group-hover:border-zinc-200 transition-all duration-700 font-medium bg-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>
            
            <div className="relative shadow-lg sm:shadow-xl md:shadow-2xl shadow-zinc-200/50 rounded-sm overflow-hidden">
              <MuseumCarousel images={broncosMarketImages} />
            </div>
            <p className="mt-4 sm:mt-6 text-[9px] uppercase tracking-[0.2em] text-zinc-400 text-right font-medium italic">
              * Simulated transaction logic for UI/UX demonstration
            </p>
          </article>

          {/* Angel Pets Project */}
          <article id="angel-pets" className="scroll-mt-32 group" aria-labelledby="title-angel">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 id="title-angel" className="text-4xl font-light tracking-tight text-zinc-900 lowercase group-hover:text-emerald-800 transition-colors duration-500">
                  Angel Pets
                </h2>
                <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em]">ARCHIVE / 2025</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-600 font-light leading-relaxed">
                  A robust management suite for pet services. Developing a comprehensive data-dashboard that transforms complex inventory logic into clear, actionable insights.
                </p>
                <div className="flex flex-wrap md:justify-end gap-3">
                  {["Next.js", "Strapi", "SQLite"].map((tag) => (
                    <span key={tag} className="text-[8px] sm:text-[9px] uppercase tracking-widest border border-zinc-200 px-2 sm:px-3 py-1 text-zinc-400 group-hover:text-emerald-800 group-hover:border-zinc-200 transition-all duration-700 font-medium bg-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>
            
            <div className="relative shadow-lg sm:shadow-xl md:shadow-2xl shadow-zinc-200/50 rounded-sm overflow-hidden">
              <MuseumCarousel images={angelPetsImages} />
            </div>
            <p className="mt-4 sm:mt-6 text-[9px] uppercase tracking-[0.2em] text-zinc-400 text-right font-medium italic">
              * Synthetic inventory and customer records / Mock system
            </p>
          </article>

          {/* CuBlogs */}
          <article id="cublogs" className="scroll-mt-32 group" aria-labelledby="title-cublogs">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 id="title-cublogs" className="text-4xl font-light tracking-tight text-zinc-900 lowercase group-hover:text-emerald-800 transition-colors duration-500">
                  CuBlogs
                </h2>
                <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em]">ARCHIVE / 2024</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-600 font-light leading-relaxed">
                  A multi-tenant blogging architecture enabling diverse entities to manage publication lifecycles. 
                  Features a <span className="text-zinc-900 italic">decoupled content strategy</span> with integrated user authentication and role-based access control.
                </p>
                <div className="flex flex-wrap md:justify-end gap-3">
                  {["Django", "PostgreSQL", "Tailwind CSS", "RESTful"].map((tag) => (
                    <span key={tag} className="text-[8px] sm:text-[9px] uppercase tracking-widest border border-zinc-200 px-3 py-1 text-zinc-400 group-hover:text-emerald-800 transition-all duration-700 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>
            <div className="relative shadow-2xl shadow-zinc-200/50 rounded-sm overflow-hidden">
              <MuseumCarousel images={cuBlogsImages} />
            </div>
            <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-zinc-400 text-right font-medium italic">* Full-stack publication engine / Demonstration data</p>
          </article>

          {/* MCLorenz Project */}
          <article id="mclorenz" className="scroll-mt-32 group" aria-labelledby="title-mclorenz">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 id="title-mclorenz" className="text-4xl font-light tracking-tight text-zinc-900 lowercase group-hover:text-emerald-800 transition-colors duration-500">
                  MCLorenz
                </h2>
                <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em]">ARCHIVE / 2023</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-600 font-light leading-relaxed">
                  A dedicated Point of Sale (POS) and resource management system tailored for high-volume fast food environments. 
                  Engineered to synchronize <span className="text-zinc-900 italic">real-time inventory tracking</span> with automated sales reporting and operational cost analysis.
                </p>
                <div className="flex flex-wrap md:justify-end gap-3">
                  {["Python", "PostgreSQL", "PySide6", "Data Persistence"].map((tag) => (
                    <span key={tag} className="text-[8px] sm:text-[9px] uppercase tracking-widest border border-zinc-200 px-3 py-1 text-zinc-400 group-hover:text-emerald-800 transition-all duration-700 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>
            <div className="relative shadow-2xl shadow-zinc-200/50 rounded-sm overflow-hidden border border-zinc-100">
              <MuseumCarousel images={mclorenzImages} />
            </div>
            <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-zinc-400 text-right font-medium italic">
              * Commercial POS infrastructure / Optimized for desktop environments
            </p>
          </article>

          {/* Newton-Raphson */}
          <article id="newton-raphson" className="scroll-mt-32 group" aria-labelledby="title-newton">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 id="title-newton" className="text-4xl font-light tracking-tight text-zinc-900 lowercase group-hover:text-emerald-800 transition-colors duration-500">
                  Newton-Raphson Solver
                </h2>
                <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em]">ACADEMIC / 2022</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-600 font-light leading-relaxed">
                  A mathematical tool implementing numerical analysis for finding real roots of differentiable functions. 
                  Focused on <span className="text-zinc-900 italic">computational precision</span> and iterative convergence visualization.
                </p>
                <div className="flex flex-wrap md:justify-end gap-3">
                  {["Java", "Numerical Math", "Swing", "Algorithmic Logic"].map((tag) => (
                    <span key={tag} className="text-[8px] sm:text-[9px] uppercase tracking-widest border border-zinc-200 px-3 py-1 text-zinc-400 group-hover:text-emerald-800 transition-all duration-700 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>
            <div className="relative shadow-2xl shadow-zinc-200/50 rounded-sm overflow-hidden border border-zinc-100">
              <MuseumCarousel images={newtonMethodImages} />
            </div>
            <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-zinc-400 text-right font-medium italic">* Desktop-based numerical engine / Scientific Tool</p>
          </article>

          {/* UCLiB Project */}
          <article id="uclib" className="scroll-mt-32 group" aria-labelledby="title-uclib">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 id="title-uclib" className="text-4xl font-light tracking-tight text-zinc-900 lowercase group-hover:text-emerald-800 transition-colors duration-500">
                  UCLiB
                </h2>
                <span className="text-[10px] font-mono text-zinc-400 tracking-[0.3em]">ACADEMIC / 2022</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-600 font-light leading-relaxed">
                  A desktop-based management engine designed to simulate lifecycle of a university library's inventory. 
                  Focused on implementation of <span className="text-zinc-900 italic">efficient search algorithms</span> and robust data persistence for large bibliographic collections.
                </p>
                <div className="flex flex-wrap md:justify-end gap-3">
                  {["Java", "OOP", "Swing", "Inventory Logic"].map((tag) => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest border border-zinc-100 px-3 py-1 text-zinc-500 font-medium group-hover:border-emerald-800/20 group-hover:text-emerald-800 transition-colors duration-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>
            
            <div className="relative shadow-2xl shadow-zinc-200/40 rounded-sm overflow-hidden border border-zinc-50">
              <MuseumCarousel images={uclibImages} />
            </div>
            <p className="mt-4 sm:mt-6 text-[9px] uppercase tracking-[0.2em] text-zinc-400 text-right font-medium italic">
              * Simulated bibliographic records and user database / Academic Sandbox
            </p>
          </article>

        </main>

        {/* FOOTER REFINADO - Estilo Museo Centrado */}
        <footer className="mt-20 sm:mt-32 border-t border-zinc-100 pt-24 sm:pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-12 sm:space-y-16">
            
            {/* Texto de Invitación */}
            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-emerald-800 font-medium">
                Next Chapter
              </h3>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 leading-tight lowercase tracking-tight">
                Have a vision for a new system<span className="text-emerald-800 font-serif italic">?</span> <br/>
                Let's define its <span className="italic font-serif">architecture</span> together.
              </p>
            </div>

            <div className="flex justify-center pt-2 sm:pt-4">
              <Link 
                href="/contact" 
                className="group relative inline-flex items-center gap-4 sm:gap-6 text-[10px] sm:text-[11px] tracking-[0.5em] uppercase font-medium text-zinc-900"
              >
                <span className="underline underline-offset-4 decoration-zinc-200 group-hover:decoration-emerald-800 transition-all duration-700 ease-in-out">
                  Get in Touch
                </span>
              </Link>
            </div>

          </div>
        </footer>
      </div>
    </div>
  );
}