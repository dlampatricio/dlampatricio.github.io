"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LINKS } from "../constants";
import ThemeToggle from "./ThemeToggle";

interface NavLinkProps {
  readonly href: string;
  readonly label: string;
}

function NavLink({ href, label, onClick }: NavLinkProps & { onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`group flex items-baseline gap-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 rounded-sm px-1 ${
        isActive ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      }`}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="relative text-xs uppercase tracking-[0.5em] font-medium group-hover:translate-x-1 transition-transform">
        {isActive && (
          <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-emerald-800" />
        )}
        {label}
      </span>
    </Link>
  );
}

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  return (
    <>
      <button
        className="lg:hidden fixed top-6 right-6 z-50 p-2.5 text-zinc-900 dark:text-zinc-100 hover:text-emerald-800 transition-all duration-300 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm rounded-sm border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-black/50 dark:bg-black/70 z-30"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          />
        )}
      </AnimatePresence>

      <nav
        className={`w-72 border-r border-zinc-100 dark:border-zinc-800 p-12 fixed h-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm z-50 flex flex-col justify-between transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="space-y-32">
          <header>
            <Link href="/" className="group block pl-1" onClick={() => setIsOpen(false)}>
              <h1 className="text-2xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-800 transition-colors mb-1">
                David Lam<span className="text-emerald-800 font-serif">.</span>
              </h1>
              <p className="text-[9px] uppercase tracking-[0.5em] text-zinc-400 dark:text-zinc-500 font-medium leading-none">
                Computer Scientist
              </p>
            </Link>
          </header>

          <div className="flex flex-col gap-6">
            <NavLink href="/" label="Home" onClick={() => setIsOpen(false)} />
            <NavLink href="/about" label="About" onClick={() => setIsOpen(false)} />
            <NavLink href="/work" label="Work" onClick={() => setIsOpen(false)} />
            <NavLink href="/contact" label="Contact" onClick={() => setIsOpen(false)} />
          </div>
        </div>

        <div>
          <div className="pt-6 border-t border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center gap-1 pl-1">
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 flex items-center justify-center rounded-sm text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800"
                 aria-label="GitHub (opens in new tab)">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 flex items-center justify-center rounded-sm text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800"
                 aria-label="LinkedIn (opens in new tab)">
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={LINKS.cv} target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 flex items-center justify-center rounded-sm text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800"
                 aria-label="Resume (opens in new tab)">
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </a>
              <div className="flex-1" />
              <ThemeToggle />
            </div>
          </div>
          <div className="mt-3 pl-1 text-[8px] uppercase tracking-[0.4em] dark:text-zinc-300 text-zinc-400 font-mono text-center">
            &copy; 2026 &middot; UCLV, Cuba
          </div>
        </div>
      </nav>
    </>
  );
}
