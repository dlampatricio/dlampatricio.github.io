"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
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
      className={`group flex items-baseline gap-4 transition-all duration-300 ${
        isActive ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      }`}
      onClick={onClick}
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

  return (
    <>
      <button
        className="lg:hidden fixed top-6 left-6 z-50 p-2.5 text-zinc-900 dark:text-zinc-100 hover:text-emerald-800 transition-all duration-300 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm rounded-sm border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <button
          className="lg:hidden fixed inset-0 bg-black/50 dark:bg-black/70 z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation menu"
        />
      )}

      <nav className={`w-72 border-r border-zinc-100 dark:border-zinc-800 p-12 fixed h-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm z-50 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="space-y-32">
          <header>
            <Link href="/" className="group block" onClick={() => setIsOpen(false)}>
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

          <div className="space-y-4">
            <div className="w-12 h-px bg-zinc-200 dark:bg-zinc-700" />
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="group flex items-baseline gap-4 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300">
              <span className="text-xs uppercase tracking-[0.5em] font-medium group-hover:translate-x-1 transition-transform">GitHub</span>
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-baseline gap-4 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300">
              <span className="text-xs uppercase tracking-[0.5em] font-medium group-hover:translate-x-1 transition-transform">LinkedIn</span>
            </a>
            <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="group flex items-baseline gap-4 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-300">
              <span className="text-xs uppercase tracking-[0.5em] font-medium group-hover:translate-x-1 transition-transform">Resume</span>
            </a>
            <ThemeToggle />
          </div>
        </div>

        <div className="space-y-8">
          <div className="w-12 h-px bg-zinc-200 dark:bg-zinc-700" />
          <div className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500 font-medium leading-relaxed space-y-2">
            <p>&copy; 2026 Edition</p>
            <p className="text-zinc-300 dark:text-zinc-600">UCLV &bull; Cuba</p>
          </div>
        </div>
      </nav>
    </>
  );
}
