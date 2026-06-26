"use client";
import { useState, useMemo } from "react";
import MuseumCarousel from "../components/MuseumCarousel";
import BackToTop from "../components/BackToTop";
import Reveal from "../components/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "../constants";
import { getTechColor } from "../lib/tech-colors";
import type { Project } from "../types";

const FILTERS = ["All", "FEATURED", "ARCHIVE", "ACADEMIC"] as const;

function ProjectLinks({ github, live }: { github: string | null; live: string | null }) {
  if (!github && !live) return null;
  return (
    <div className="flex flex-wrap md:justify-end gap-6 mt-6 pt-6 border-t border-zinc-50 dark:border-zinc-800/50">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 hover:text-emerald-800 transition-colors duration-300"
        >
          <span className="pb-px border-b border-transparent group-hover/link:border-emerald-800/30 transition-all">Source Code</span>
          <svg className="w-3 h-3 opacity-50 group-hover/link:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-zinc-900 dark:text-zinc-100 hover:text-emerald-800 transition-colors duration-300"
        >
          <span className="pb-px border-b border-zinc-200 dark:border-zinc-700 group-hover/link:border-emerald-800 transition-all font-semibold">Live Exhibit</span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600/40"></span>
          </span>
        </a>
      )}
    </div>
  );
}

function ProjectArticle({ project }: { project: Project }) {
  const carouselBorder =
    project.label === "ACADEMIC"
      ? "border border-zinc-100 dark:border-zinc-800"
      : project.label === "ARCHIVE"
        ? "border border-zinc-50 dark:border-zinc-800/50"
        : "";

  return (
    <article id={project.id} className="scroll-mt-32 group">
      <header className="mb-12 space-y-6">
        <div className="flex justify-between items-baseline border-b border-zinc-100 dark:border-zinc-800 pb-6">
          <h2 className="text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 lowercase group-hover:text-emerald-800 transition-colors duration-500">
            {project.title}
          </h2>
          <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 tracking-[0.3em]">
            {project.label} / {project.year}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">{project.desc}</p>
            {project.metrics && (
              <ul className="space-y-2">
                {project.metrics.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
                    <span className="mt-[5px] w-1 h-1 rounded-full bg-emerald-800/40 flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap md:justify-end gap-2">
              {project.tags.map((tag: string) => (
                <span key={tag} className={`text-[8px] sm:text-[9px] uppercase tracking-widest px-2.5 py-1 font-medium rounded-sm ${getTechColor(tag)}`}>
                  {tag}
                </span>
              ))}
            </div>
            <ProjectLinks github={project.github} live={project.live} />
          </div>
        </div>
      </header>
      <div className={`relative shadow-2xl shadow-zinc-200/50 dark:shadow-black/30 rounded-sm overflow-hidden ${carouselBorder}`}>
        {project.images && <MuseumCarousel images={project.images} />}
      </div>
    </article>
  );
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = useMemo(
    () => activeFilter === "All" ? PROJECTS : PROJECTS.filter((p) => p.label === activeFilter),
    [activeFilter]
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-emerald-800 selection:text-white antialiased"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-16 py-24 sm:py-32 md:py-48">
        
        <section className="mb-16 sm:mb-24 md:mb-32 max-w-3xl" aria-labelledby="work-title">
          <div className="space-y-8 sm:space-y-10">
            <h1 id="work-title" className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 lowercase">
              Work<span className="text-emerald-800 italic font-serif">.</span>
            </h1>
            <div className="w-12 sm:w-16 h-px bg-emerald-800/20" aria-hidden="true"></div>
            <div className="space-y-8">
              <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
                A curated selection of digital architectures, focusing on <span className="text-zinc-900 dark:text-zinc-100 italic">functional beauty</span> and technical resilience.
              </p>
              <div className="flex items-start gap-4 pt-4 sm:pt-6 border-l-2 border-zinc-100 dark:border-zinc-800 pl-4 sm:pl-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-800 font-medium mt-1 sm:mt-2">Note:</p>
                <p className="text-xs sm:text-[10px] text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-sm sm:max-w-md italic">
                  All interfaces displayed here utilize synthetic data and non-representational assets.
                  Any corporate information or personal records shown are for demonstrative purposes within a sandbox environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 mb-16 pb-8 border-b border-zinc-100 dark:border-zinc-800">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-[9px] uppercase tracking-[0.3em] px-4 py-2 rounded-sm transition-all duration-300 font-medium ${
                activeFilter === f
                  ? "bg-emerald-800 text-white"
                  : "text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500"
              }`}
            >
              {f === "All" ? "All Projects" : f.toLowerCase()}
            </button>
          ))}
          <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-600 self-center ml-auto">
            {filtered.length} of {PROJECTS.length}
          </span>
        </div>

        <main className="space-y-20 sm:space-y-24 md:space-y-32">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectArticle project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </main>

        <footer className="mt-20 sm:mt-32 border-t border-zinc-100 dark:border-zinc-800 pt-24 sm:pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center space-y-12 sm:space-y-16">
            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-emerald-800 font-medium">Next Chapter</h3>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 dark:text-zinc-100 leading-tight lowercase tracking-tight">
                Have a vision for a new system<span className="text-emerald-800 font-serif italic">?</span> <br/>
                Let&apos;s define its <span className="italic font-serif">architecture</span> together.
              </p>
            </div>
            <div className="flex justify-center pt-2">
              <Link href="/contact" className="group relative inline-flex items-center gap-6 text-[10px] tracking-[0.5em] uppercase font-medium text-zinc-900 dark:text-zinc-100">
                <span className="underline underline-offset-4 decoration-zinc-200 dark:decoration-zinc-700 group-hover:decoration-emerald-800 transition-all duration-700 ease-in-out">Get in Touch</span>
              </Link>
            </div>
          </div>
        </footer>
      </div>
      <BackToTop />
    </motion.div>
  );
}
