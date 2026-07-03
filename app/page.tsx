import type { Metadata } from 'next';
import { FooterLink } from './components/FooterLink';
import PageTransition from './components/PageTransition';
import { ProjectItem } from './components/ProjectItem';
import Reveal from './components/Reveal';
import { SkillGroup } from './components/SkillGroup';
import Testimonials from './components/Testimonials';
import { FOOTER_LINKS, LINKS, PROJECTS, SKILLS } from './constants';

export const metadata: Metadata = {
  title: 'David Lam — Full Stack Developer & DevOps Architect',
  description:
    'Portfolio of David Lam. Computer Science student at UCLV. Specialized in digital resilience and functional beauty through Full Stack Development and DevOps.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'David Lam — Full Stack Developer & DevOps Architect',
    description:
      'Computer Science student at UCLV. Specialized in digital resilience and functional beauty.',
  },
};

export default function Home() {
  return (
    <PageTransition className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-emerald-800 selection:text-white font-sans antialiased">
      <main className="max-w-4xl mx-auto px-8 md:px-16 py-32 md:py-48">
        <Reveal>
          <section className="mb-32 max-w-3xl" aria-labelledby="hero-heading">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1
                  id="hero-heading"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100"
                >
                  Full Stack Developer <br />
                  <span className="text-emerald-800 italic font-serif">& DevOps Architect</span>
                </h1>
                <p className="text-[10px] uppercase tracking-[0.5em] text-emerald-800 font-medium">
                  EST. 2026 — Based in Cuba / Available Worldwide
                </p>
              </div>

              <div className="w-16 h-px bg-emerald-800/20" aria-hidden="true" />

              <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light max-w-2xl">
                Focused on creating systems where{' '}
                <span className="text-zinc-900 dark:text-zinc-100 font-medium italic">
                  technical precision
                </span>{' '}
                meets functional design. I develop end-to-end solutions spanning from core system
                logic to modern infrastructures.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span
                    className="w-2 h-2 rounded-full bg-emerald-800 animate-pulse"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 font-medium">
                    English C1 Proficiency
                  </span>
                </div>
                <div
                  className="hidden md:block h-4 w-px bg-zinc-200 dark:bg-zinc-700"
                  aria-hidden="true"
                />
                <a
                  href={LINKS.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-zinc-900 dark:text-zinc-100 hover:text-emerald-800 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 rounded-sm px-1"
                  aria-label="Download CV (opens in new tab)"
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="border-b border-zinc-200 dark:border-zinc-700 group-hover:border-emerald-800 transition-all pb-px">
                    Download CV
                  </span>
                </a>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.1}>
          <section className="mb-32" aria-labelledby="work-heading">
            <div className="flex flex-col sm:flex-row justify-between items-end gap-8 mb-20 border-b border-zinc-100 dark:border-zinc-800 pb-6">
              <h2
                id="work-heading"
                className="text-[10px] uppercase tracking-[0.5em] text-emerald-800 font-medium"
              >
                SELECTED PROJECTS
              </h2>
              <span
                className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono italic"
                aria-hidden="true"
              >
                01 — 03
              </span>
            </div>

            <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {PROJECTS.slice(0, 3).map((project) => (
                <ProjectItem key={project.id} {...project} />
              ))}
            </div>
          </section>
        </Reveal>

        {/* <Reveal delay={0.35}>
          <section className="mb-32" aria-labelledby="testimonials-heading">
            <div className="flex flex-col sm:flex-row justify-between items-end gap-8 mb-20 border-b border-zinc-100 dark:border-zinc-800 pb-6">
              <h2
                id="testimonials-heading"
                className="text-[10px] uppercase tracking-[0.5em] text-emerald-800 font-medium"
              >
                TESTIMONIALS
              </h2>
              <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono italic">
                Social Proof
              </span>
            </div>
            <Testimonials />
          </section>
        </Reveal> */}

        <Reveal delay={0.2}>
          <section className="mb-32" aria-labelledby="skills-heading">
            <h2
              id="skills-heading"
              className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 dark:text-zinc-400 mb-24 font-medium"
            >
              CORE CAPABILITIES
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 sm:gap-x-12 gap-y-20 sm:gap-y-24">
              {SKILLS.map((skill) => (
                <SkillGroup key={skill.title} {...skill} />
              ))}
            </div>
          </section>
        </Reveal>

        {/* <Reveal delay={0.3}>
          <section className="mb-32" aria-labelledby="writing-heading">
            <div className="flex flex-col sm:flex-row justify-between items-end gap-8 mb-20 border-b border-zinc-100 dark:border-zinc-800 pb-6">
              <h2 id="writing-heading" className="text-[10px] uppercase tracking-[0.5em] text-emerald-800 font-medium">
                WRITING
              </h2>
              <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono italic" aria-hidden="true">Thoughts &amp; Reflections</span>
            </div>
            <Writing />
          </section>
        </Reveal> */}

        <Reveal delay={0.4}>
          <footer className="border-t border-zinc-100 dark:border-zinc-800 pt-32 pb-16">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-20">
              <div className="max-w-sm">
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-emerald-800 mb-8 font-medium">
                  INQUIRIES
                </h2>
                <p className="text-xl font-light text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                  Currently open to select freelance commissions and full-time engineering roles.
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-16">
                <a
                  href={LINKS.email}
                  className="text-2xl sm:text-3xl md:text-4xl font-light text-zinc-900 dark:text-zinc-100 hover:text-emerald-800 transition-all duration-500 underline underline-offset-8 sm:underline-offset-12 decoration-zinc-200 dark:decoration-zinc-700 hover:decoration-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-800 rounded-sm"
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
        </Reveal>
      </main>
    </PageTransition>
  );
}
