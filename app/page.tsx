"use client";
import { ProjectItem } from "./components/ProjectItem";
import { SkillGroup } from "./components/SkillGroup";
import { FooterLink } from "./components/FooterLink";
import { PROJECTS, SKILLS, FOOTER_LINKS } from "./constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-emerald-800 selection:text-white font-sans antialiased">
      <main className="max-w-4xl mx-auto px-8 md:px-16 py-32 md:py-48">
        
        {/* HERO SECTION */}
        <section className="mb-32 max-w-3xl" aria-labelledby="hero-heading">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-zinc-900">
                Full Stack Developer <br />
                <span className="text-emerald-800 italic font-serif">& DevOps Architect</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.5em] text-emerald-800 font-medium">
                EST. 2026 — Based in Cuba / Available Worldwide
              </p>
            </div>

            <div className="w-16 h-px bg-emerald-800/20" aria-hidden="true" />

            <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 leading-relaxed font-light max-w-2xl">
              Focused on creating systems where <span className="text-zinc-900 font-medium italic">technical precision</span> meets functional design. 
              I develop end-to-end solutions spanning from core system logic to modern infrastructures.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-800 animate-pulse" aria-hidden="true" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-medium">English C1 Proficiency</span>
              </div>
              <div className="hidden md:block h-4 w-px bg-zinc-200" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="mb-32" aria-labelledby="work-heading">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-8 mb-20 border-b border-zinc-100 pb-6">
            <h2 id="work-heading" className="text-[10px] uppercase tracking-[0.5em] text-emerald-800 font-medium">
              SELECTED PROJECTS
            </h2>
            <span className="text-[10px] text-zinc-400 font-mono italic" aria-hidden="true">Archive 01 — 03</span>
          </div>
          
          <div className="divide-y divide-zinc-100">
            {PROJECTS.map((project) => (
              <ProjectItem key={project.id} {...project} />
            ))}
          </div>
        </section>

        {/* CORE CAPABILITIES */}
        <section className="mb-32" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 mb-24 font-medium">
            CORE CAPABILITIES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 sm:gap-x-12 gap-y-20 sm:gap-y-24">
            {SKILLS.map((skill) => (
              <SkillGroup key={skill.title} {...skill} />
            ))}
          </div>
        </section>

        {/* CONTACT & FOOTER */}
        <footer className="border-t border-zinc-100 pt-32 pb-16">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-20">
            <div className="max-w-sm">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-emerald-800 mb-8 font-medium">
                INQUIRIES
              </h2>
              <p className="text-xl font-light text-zinc-600 leading-relaxed italic">
                Currently open to select freelance commissions and full-time engineering roles.
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-16">
              <a 
                href="mailto:dlampatricio@gmail.com" 
                className="text-2xl sm:text-3xl md:text-4xl font-light text-zinc-900 hover:text-emerald-800 transition-all duration-500 underline underline-offset-8 sm:underline-offset-12 decoration-zinc-200 hover:decoration-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-800 rounded-sm"
              >
                dlampatricio@gmail.com
              </a>
              
              <nav className="flex flex-wrap gap-12" aria-label="Footer Navigation">
                {FOOTER_LINKS.map((link) => (
                  <FooterLink key={link.href} {...link} />
                ))}
              </nav>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}