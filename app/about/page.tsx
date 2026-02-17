"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-emerald-800 selection:text-white antialiased">
      <div className="max-w-4xl mx-auto px-8 md:px-16 py-32 md:py-48">
        
        {/* HEADER */}
        <section className="mb-32 max-w-3xl" aria-labelledby="about-title">
          <div className="space-y-10">
            <h1 id="about-title" className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-zinc-900 lowercase">
              About<span className="text-emerald-800 italic font-serif">.</span>
            </h1>
            <div className="w-16 h-px bg-emerald-800/20" aria-hidden="true"></div>
          </div>
        </section>

        {/* PROFILE SECTION */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-7 order-2 md:order-1 space-y-8">
              <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 font-light leading-relaxed">
                Computer Science student at <span className="text-zinc-900 italic">Universidad Central "Marta Abreu" de Las Villas</span>, focused on the intersection of algorithmic rigor and architectural design.
              </p>
              <div className="space-y-6 text-zinc-600 font-light leading-relaxed text-base">
                <p>
                  Currently in my 3rd year of Computer Science (UCLV), my practice is built upon the solid mathematical and theoretical foundation that defines the Cuban school of computing. I don't just build interfaces; I design systems where efficiency and logic dictate the form.
                </p>
                <p>
                  I specialize in distilling complex problems into elegant, scalable solutions. Whether it's core system logic or modern web infrastructures, I bridge the gap between academic theory and functional digital experiences.
                </p>
                <p className="pt-4 text-emerald-800 font-medium text-[10px] uppercase tracking-[0.3em]">
                  Available for global engineering roles — Class of 2027
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 md:order-2">
              {/* Contenedor con sombra sutil y bordes limpios */}
              <div className="relative aspect-4/5 w-full shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-sm overflow-hidden bg-zinc-50">
                <Image
                  src="/dlam.jpg"
                  alt="David Lam - Computer Science Student & Developer"
                  fill
                  className="object-cover brightness-[1.02] contrast-[1.02]"
                  style={{ objectPosition: "center 30%" }} 
                  priority
                />
              </div>
              <p className="mt-4 text-[9px] uppercase tracking-widest text-zinc-400 text-right italic font-medium">
                Fig. 01 — 3rd Year CS Student (UCLV)
              </p>
            </div>
          </div>
        </section>

        {/* ACADEMIC FORMATION & EXPERTISE */}
        <section className="mb-32 border-t border-zinc-100 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4">
              <h2 className="text-[10px] uppercase tracking-[0.5em] text-emerald-800 font-medium">EDUCATION</h2>
            </div>
            <div className="md:col-span-8 space-y-8">
              <div>
                <h3 className="text-2xl font-light text-zinc-900 italic font-serif">B.S. in Computer Science</h3>
                <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider mt-1">Universidad Central "Marta Abreu" de Las Villas (UCLV)</p>
                <p className="mt-4 text-zinc-600 font-light leading-relaxed">
                  Focusing on Algorithms, Data Structures, Discrete Mathematics, and Software Engineering. Developing a high-level perspective on computational efficiency and system optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL DOMAINS */}
        <section className="mb-32 border-t border-zinc-100 pt-24">
          <h2 className="mb-16 text-[10px] uppercase tracking-[0.5em] text-emerald-800 font-medium">TECHNICAL DOMAINS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-32">
            <div className="space-y-8">
              <h3 className="text-2xl font-light text-zinc-900 italic font-serif">Theory & Design</h3>
              <ul className="space-y-4 text-zinc-600 font-light border-l border-zinc-100 pl-6">
                <li>Algorithmic Optimization</li>
                <li>Design Systems (Atomic)</li>
                <li>Database Architecture</li>
                <li>UI/UX Engineering</li>
              </ul>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-light text-zinc-900 italic font-serif">Development</h3>
              <ul className="space-y-4 text-zinc-600 font-light border-l border-zinc-100 pl-6">
                <li>Next.js / React / TypeScript</li>
                <li>Python / FastAPI / C++</li>
                <li>Docker / CI/CD Pipelines</li>
                <li>Full Stack Integration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE / CHRONOLOGY */}
        <section className="mb-32 border-t border-zinc-100 pt-24">
          <h2 className="mb-16 text-[10px] uppercase tracking-[0.5em] text-emerald-800 font-medium">SELECTED CHRONOLOGY</h2>
          <div className="space-y-12">
            <ExperienceItem 
              role="Full Stack Developer"
              company="Freelance / Contract"
              period="2024 — Present"
              desc="Building custom digital platforms with a focus on educational systems and localized e-commerce solutions."
            />
            <ExperienceItem 
              role="MINEM"
              company="UCLV Investigation Center"
              period="2023 — 2025"
              desc="Applied computational theory to personal and academic projects, focusing on performance and clean architecture."
            />
            <ExperienceItem 
              role="Independent Projects"
              company="UCLV Ecosystem"
              period="2022 — 2024"
              desc="Applied computational theory to personal and academic projects, focusing on performance and clean architecture."
            />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-32 border-t border-emerald-800/10 pt-24 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            
            {/* Columna de Texto: El "Manifiesto" */}
            <div className="md:col-span-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-emerald-800"></div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-800 font-medium">Connect</span>
              </div>
              <p className="text-2xl md:text-4xl font-light text-zinc-900 leading-tight tracking-tight max-w-xl">
                I believe in <span className="italic font-serif">intentional</span> code and architectures that endure. If you share this vision, let's talk.
              </p>
            </div>

            {/* Columna de Acción: Alineada a la derecha y minimalista */}
            <div className="md:col-span-4 flex md:justify-end">
              <Link 
                href="mailto:dlampatricio@gmail.com" 
                className="group flex flex-col items-end"
              >
                <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 mb-2 group-hover:text-emerald-800 transition-colors">Direct Line</span>
                <span className="text-lg md:text-xl font-light text-zinc-900 border-b border-zinc-100 group-hover:border-emerald-800 pb-2 transition-all duration-500">
                  dlampatricio@gmail.com
                </span>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function ExperienceItem({ role, company, period, desc }: any) {
  return (
    <div className="group border-b border-zinc-50 pb-12 last:border-0">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-4 gap-2">
        <h3 className="text-2xl font-light text-zinc-900 group-hover:text-emerald-800 transition-colors duration-500 italic font-serif">
          {role}
        </h3>
        <span className="text-[10px] font-mono text-zinc-400 tracking-widest">{period}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <p className="md:col-span-4 text-[10px] uppercase tracking-[0.2em] text-emerald-800 font-medium">{company}</p>
        <p className="md:col-span-8 text-sm text-zinc-500 font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}