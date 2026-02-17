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
    { src: "/broncos_market/light/broncosmarket.vercel.app_category_carnicos.png", alt: "Broncos Market Dark Mode" },
    { src: "/broncos_market/light/broncosmarket.vercel.app_product_jamon-pierna.png", alt: "Broncos Market Cart Dark" },
  ];

  const saitecImages = [
    { src: "/saitec/light/test-saitec.aitec.edu.ec_academy.png", alt: "Saitec Academy Light" },
    { src: "/saitec/light/test-saitec.aitec.edu.ec_academy_students.png", alt: "Saitec Students Light" },
    { src: "/saitec/light/test-saitec.aitec.edu.ec_affiliation.png", alt: "Saitec Academy Dark" },
    { src: "/saitec/light/test-saitec.aitec.edu.ec_login.png", alt: "Saitec Students Dark" },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0a110f] selection:bg-[#064e3b] selection:text-white antialiased">
      <div className="max-w-5xl mx-auto px-8 md:px-16 py-32 md:py-48">
        
        {/* HEADER SECTION */}
        <section className="mb-48 max-w-3xl" aria-labelledby="work-title">
          <div className="space-y-10">
            <h1 id="work-title" className="text-5xl md:text-6xl font-light tracking-tighter text-gray-900 lowercase">
              Work<span className="text-zinc-300 italic font-serif">.</span>
            </h1>
            <div className="w-12 h-px bg-[#064e3b]" aria-hidden="true"></div>
            
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-zinc-700 font-light leading-relaxed max-w-2xl">
                A curated selection of digital architectures, focusing on <span className="text-black italic">functional beauty</span> and technical resilience.
              </p>
              
              {/* Main Disclaimer / Curator's Note */}
              <div className="flex items-start gap-4 pt-6 border-l-2 border-zinc-100 pl-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#064e3b] font-bold mt-1">Note:</span>
                <p className="text-xs text-zinc-500 font-light leading-relaxed max-w-md italic">
                  All interfaces displayed here utilize synthetic data and non-representational assets. 
                  Any corporate information or personal records shown are for demonstrative purposes within a sandbox environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <main className="space-y-64">

          {/* Saitec Project */}
          <article id="saitec-platform" className="scroll-mt-32 group" aria-labelledby="title-saitec">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 id="title-saitec" className="text-4xl font-light tracking-tighter text-gray-900 lowercase group-hover:text-[#064e3b] transition-colors duration-500">
                  Saitec Platform
                </h2>
                <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em]">ARCHIVE / 2026</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-700 font-light leading-relaxed">
                  A high-stakes educational ecosystem designed for administrative efficiency. 
                  Streamlining student management, course lifecycle tracking, and institutional data scaling.
                </p>
                <div className="flex flex-wrap md:justify-end gap-3">
                  {["Docker", "GitLab CI/CD", "Next.js", "Pug", "JSreport", "Moodle API"].map((tag) => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest border border-zinc-200 px-3 py-1 text-zinc-600 font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>
            
            <div className="relative shadow-2xl shadow-zinc-200/50 rounded-sm overflow-hidden">
              <MuseumCarousel images={saitecImages} />
            </div>
            <p className="mt-6 text-[9px] uppercase tracking-[0.2em] text-zinc-400 text-right font-medium italic">
              * Non-representational institutional data / Sandbox Environment
            </p>
          </article>

          {/* Broncos Market Project */}
          <article id="broncos-market" className="scroll-mt-32 group" aria-labelledby="title-broncos">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 id="title-broncos" className="text-4xl font-light tracking-tighter text-gray-900 lowercase group-hover:text-[#064e3b] transition-colors duration-500">
                  Broncos Market
                </h2>
                <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em]">ARCHIVE / 2025</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-700 font-light leading-relaxed">
                  A performance-oriented e-commerce engine. Built with a focus on atomic design and seamless state management, delivering a friction-less shopping experience.
                </p>
                <div className="flex flex-wrap md:justify-end gap-3">
                  {["Next.js", "Strapi", "PostgreSQL"].map((tag) => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest border border-zinc-200 px-3 py-1 text-zinc-600 font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>
            
            <div className="relative shadow-2xl shadow-zinc-200/50 rounded-sm overflow-hidden">
              <MuseumCarousel images={broncosMarketImages} />
            </div>
            <p className="mt-6 text-[9px] uppercase tracking-[0.2em] text-zinc-400 text-right font-medium italic">
              * Simulated transaction logic for UI/UX demonstration
            </p>
          </article>

          {/* Angel Pets Project */}
          <article id="angel-pets" className="scroll-mt-32 group" aria-labelledby="title-angel">
            <header className="mb-12 space-y-6">
              <div className="flex justify-between items-baseline border-b border-zinc-100 pb-6">
                <h2 id="title-angel" className="text-4xl font-light tracking-tighter text-gray-900 lowercase group-hover:text-[#064e3b] transition-colors duration-500">
                  Angel Pets
                </h2>
                <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em]">ARCHIVE / 2025</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <p className="text-zinc-700 font-light leading-relaxed">
                  A robust management suite for pet services. Developing a comprehensive data-dashboard that transforms complex inventory logic into clear, actionable insights.
                </p>
                <div className="flex flex-wrap md:justify-end gap-3">
                  {["Next.js", "Strapi", "SQLite"].map((tag) => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest border border-zinc-200 px-3 py-1 text-zinc-600 font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>
            
            <div className="relative shadow-2xl shadow-zinc-200/50 rounded-sm overflow-hidden">
              <MuseumCarousel images={angelPetsImages} />
            </div>
            <p className="mt-6 text-[9px] uppercase tracking-[0.2em] text-zinc-400 text-right font-medium italic">
              * Synthetic inventory and customer records / Mock system
            </p>
          </article>

        </main>

        {/* FOOTER */}
        <footer className="mt-64 border-t border-zinc-200 pt-24 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-[10px] uppercase tracking-[0.4em] text-[#064e3b] mb-4 font-bold">NEXT CHAPTER</h3>
              <p className="text-zinc-600 font-light italic leading-relaxed">Have a vision for a new system? <br className="hidden md:block"/> Let's define its architecture.</p>
            </div>
            
            <div className="flex gap-12 items-center">
              <Link 
                href="/" 
                className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-black transition-colors font-bold focus:outline-none focus:ring-1 focus:ring-[#064e3b] p-1"
              >
                Back to Index
              </Link>
              <a 
                href="mailto:dlampatricio@gmail.com" 
                className="text-gray-900 hover:text-[#064e3b] transition-colors underline underline-offset-8 decoration-zinc-200 hover:decoration-[#064e3b] text-sm tracking-widest uppercase font-bold focus:outline-none focus:ring-1 focus:ring-[#064e3b]"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}