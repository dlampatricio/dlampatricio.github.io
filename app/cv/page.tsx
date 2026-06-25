import type { Metadata } from "next";
import Link from "next/link";
import { LINKS } from "../constants";

export const metadata: Metadata = {
  title: "Resume — David Lam",
  description: "Resume of David Lam. Computer Science student at UCLV. Full Stack Developer & DevOps Architect.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-20 border-t border-zinc-100 pt-12 first:border-0 first:pt-0">
    <h2 className="text-[10px] uppercase tracking-[0.5em] text-emerald-800 font-medium mb-8">{title}</h2>
    {children}
  </section>
);

const Entry = ({
  title,
  subtitle,
  period,
  desc,
}: {
  title: string;
  subtitle: string;
  period: string;
  desc: string;
}) => (
  <div className="mb-8 last:mb-0">
    <div className="flex justify-between items-baseline mb-1">
      <h3 className="text-lg font-medium text-zinc-900">{title}</h3>
      <span className="text-[10px] font-mono text-zinc-400 tracking-wider">{period}</span>
    </div>
    <p className="text-sm text-emerald-800 font-medium mb-2">{subtitle}</p>
    <p className="text-sm text-zinc-500 font-light leading-relaxed">{desc}</p>
  </div>
);

export default function CV() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      <div className="max-w-3xl mx-auto px-8 md:px-16 py-32 md:py-48">
        <header className="mb-24">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-zinc-900 lowercase">
                David Lam<span className="text-emerald-800 italic font-serif">.</span>
              </h1>
              <p className="text-sm text-zinc-500 font-light mt-2">Full Stack Developer & DevOps Architect</p>
            </div>
            <Link href={LINKS.email} className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 hover:text-emerald-800 transition-colors">
              dlampatricio@gmail.com
            </Link>
          </div>
        </header>

        <Section title="Education">
          <Entry
            title="B.S. in Computer Science"
            subtitle="Universidad Central 'Marta Abreu' de Las Villas (UCLV)"
            period="2022 — 2027"
            desc="Focusing on Algorithms, Data Structures, Discrete Mathematics, and Software Engineering. Developing a high-level perspective on computational efficiency and system optimization."
          />
        </Section>

        <Section title="Experience">
          <Entry
            title="Full Stack Developer"
            subtitle="Freelance / Contract"
            period="2024 — Present"
            desc="Building custom digital platforms with a focus on educational systems and localized e-commerce solutions. End-to-end development from system architecture to deployment."
          />
          <Entry
            title="Independent Projects"
            subtitle="UCLV Ecosystem"
            period="2022 — 2024"
            desc="Applied computational theory to personal and academic projects, focusing on performance and clean architecture. Developed systems ranging from library management to POS solutions."
          />
        </Section>

        <Section title="Technical Skills">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { cat: "Languages", items: "JavaScript / TypeScript, Python, Java, C / C++" },
              { cat: "Frontend", items: "Next.js, React, Tailwind CSS, Framer Motion" },
              { cat: "Backend", items: "FastAPI, Express, REST APIs, PostgreSQL" },
              { cat: "DevOps", items: "Docker, CI/CD, Git, VPS Deployment" },
            ].map((group) => (
              <div key={group.cat}>
                <h3 className="text-[9px] uppercase tracking-[0.3em] text-emerald-800 font-medium mb-3">{group.cat}</h3>
                <p className="text-sm text-zinc-600 font-light">{group.items}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Selected Projects">
          <Entry
            title="Floralé"
            subtitle="Next.js, Supabase, Framer Motion"
            period="2026"
            desc="Artisanal e-commerce platform featuring curated catalog, cart management, and admin dashboard with smooth animations."
          />
          <Entry
            title="Saitec Platform"
            subtitle="Next.js, Docker, GitLab CI/CD"
            period="2026"
            desc="Educational ecosystem for administrative efficiency, streamlining student management and institutional data scaling."
          />
          <Entry
            title="Broncos Market"
            subtitle="Next.js, Strapi, PostgreSQL"
            period="2025"
            desc="Performance-oriented e-commerce engine built with atomic design and seamless state management."
          />
        </Section>

        <footer className="mt-32 pt-12 border-t border-zinc-100 flex justify-between items-center">
          <Link href="/" className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 hover:text-emerald-800 transition-colors">
            ← Back to Portfolio
          </Link>
          <Link
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-emerald-800 transition-colors"
          >
            LinkedIn ↗
          </Link>
        </footer>
      </div>
    </div>
  );
}
