"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0a110f] selection:bg-[#064e3b] selection:text-white font-sans antialiased">
      <main className="max-w-5xl mx-auto px-8 md:px-16 py-32 md:py-48">
        
        {/* HERO SECTION */}
        <section className="mb-64 max-w-3xl" aria-labelledby="hero-heading">
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 id="hero-heading" className="text-5xl md:text-6xl font-light tracking-tighter leading-[1.1] text-gray-900">
                Full Stack Developer <br />
                <span className="text-zinc-500 italic serif font-serif">& DevOps Architect</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.5em] text-[#064e3b] font-bold">
                EST. 2026 — Based in Cuba / Available Worldwide
              </p>
            </div>

            <div className="w-12 h-px bg-[#064e3b]" aria-hidden="true"></div>

            <p className="text-xl md:text-2xl text-zinc-700 leading-relaxed font-light max-w-2xl">
              Focused on creating systems where <span className="text-black font-medium italic">technical precision</span> meets functional design. 
              I develop end-to-end solutions spanning from core system logic to modern infrastructures.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#064e3b] animate-pulse" aria-hidden="true"></span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">English C1 Proficiency</span>
              </div>
              <div className="hidden md:block h-4 w-px bg-zinc-300" aria-hidden="true"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold italic underline underline-offset-4">Core Specialist</span>
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="mb-64" aria-labelledby="work-heading">
          <div className="flex justify-between items-end mb-16 border-b border-zinc-100 pb-4">
            <h2 id="work-heading" className="text-[10px] uppercase tracking-[0.5em] text-[#064e3b] font-bold">
              SELECTED PROJECTS
            </h2>
            <span className="text-[10px] text-zinc-500 font-mono italic" aria-hidden="true">Archive 01 — 03</span>
          </div>
          
          <div className="divide-y divide-zinc-100">
            <ProjectItem 
              id="saitec-platform"
              title="Saitec Platform" 
              year="2026" 
              desc="Educational ecosystem and administrative management system built for high-stakes environments." 
              tags={["Next.js", "Strapi", "PostgreSQL"]}
              category="Architecture • Platform"
            />
            <ProjectItem 
              id="broncos-market"
              title="Broncos Market" 
              year="2025" 
              desc="High-performance e-commerce engine with localized theme support and SEO optimization." 
              tags={["React", "Node.js", "Docker"]}
              category="E-commerce • UX"
            />
            <ProjectItem 
              id="angel-pets"
              title="Angel Pets" 
              year="2025" 
              desc="Comprehensive pet-shop dashboard and real-time inventory management system." 
              tags={["FastAPI", "Python", "Tailwind"]}
              category="Systems • Dashboard"
            />
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="mb-64" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 mb-20 font-bold">CORE CAPABILITIES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-20">
            <SkillGroup 
              title="Systems" 
              skills={["JavaScript / TS", "Python", "Java", "C / C++"]} 
            />
            <SkillGroup 
              title="Architecture" 
              skills={["Next.js", "FastAPI", "Express", "SQL / Postgres"]} 
            />
            <SkillGroup 
              title="Infrastructure" 
              skills={["Docker", "CI/CD", "VPS", "Git Architecture"]} 
            />
            <SkillGroup 
              title="Philosophy" 
              skills={["Clean Code", "UX Systems", "Performance", "Scalability"]} 
            />
          </div>
        </section>

        {/* CONTACT & FOOTER */}
        <footer className="border-t border-zinc-200 pt-24 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
            <div className="max-w-sm">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#064e3b] mb-6 font-bold">INQUIRIES</h2>
              <p className="text-xl font-light text-zinc-700 leading-relaxed italic">
                Currently open to select freelance commissions and full-time engineering roles.
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-12">
              <a 
                href="mailto:hello@davidlam.com" 
                className="text-3xl md:text-4xl font-light text-gray-900 hover:text-[#064e3b] transition-all duration-500 underline underline-offset-[12px] decoration-zinc-200 hover:decoration-[#064e3b] focus:outline-none focus:ring-2 focus:ring-[#064e3b] rounded-sm"
              >
                dlampatricio@gmail.com
              </a>
              
              <nav className="flex flex-wrap gap-10" aria-label="Footer Navigation">
                <FooterLink href="/work" label="View All Work" external={false} />
                <FooterLink href="https://linkedin.com" label="LinkedIn" />
                <FooterLink href="https://github.com" label="GitHub" />
              </nav>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function ProjectItem({ title, year, desc, tags, category, id }: any) {
  return (
    <Link 
      href={`/work#${id}`} 
      className="block group focus:outline-none focus:bg-zinc-50"
      aria-label={`Project: ${title}, ${desc}`}
    >
      <div className="py-16 flex flex-col md:flex-row md:items-end justify-between gap-8 transition-all duration-700 ease-in-out group-hover:bg-zinc-50/80 group-hover:px-6">
        <div className="space-y-6">
          <div className="flex items-baseline gap-6">
            <h3 className="text-4xl font-light tracking-tighter text-gray-900 group-hover:text-[#064e3b] transition-colors lowercase italic group-hover:not-italic">
              {title}
            </h3>
            <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em]" aria-label="Year">{year}</span>
          </div>
          <p className="text-zinc-700 font-light max-w-sm leading-relaxed text-sm">
            {desc}
          </p>
          <div className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 font-bold flex items-center gap-2">
            <span className="w-4 h-px bg-zinc-300" aria-hidden="true"></span>
            {category}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag: string) => (
            <span key={tag} className="text-[8px] uppercase tracking-[0.2em] border border-zinc-300 px-3 py-1.5 text-zinc-600 group-hover:border-[#064e3b]/40 group-hover:text-[#064e3b] transition-all duration-500 font-bold">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function SkillGroup({ title, skills }: any) {
  return (
    <div className="space-y-10">
      <h3 className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#064e3b] border-l-2 border-[#064e3b]/20 pl-4">
        {title}
      </h3>
      <ul className="space-y-5">
        {skills.map((s: string) => (
          <li key={s} className="text-sm text-zinc-700 font-medium tracking-tight hover:text-black transition-colors cursor-default">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLink({ href, label, external = true }: any) {
  const styles = "text-[10px] uppercase tracking-[0.3em] text-zinc-600 hover:text-[#064e3b] transition-colors font-bold focus:ring-1 focus:ring-[#064e3b] px-1";
  if (!external) return <Link href={href} className={styles}>{label}</Link>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>{label}</a>;
}