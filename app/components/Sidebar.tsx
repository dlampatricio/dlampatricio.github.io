"use client";
import Link from "next/link";
import { useState } from "react";

interface NavLinkProps {
  readonly href: string;
  readonly label: string;
}

function NavLink({ href, label, onClick }: NavLinkProps & { onClick?: () => void }) {
  return (
    <Link 
      href={href} 
      className="group flex items-baseline gap-4 text-zinc-500 hover:text-zinc-900 transition-all duration-300"
      onClick={onClick}
    >
      <span className="text-xs uppercase tracking-[0.5em] font-medium group-hover:translate-x-1 transition-transform">
        {label}
      </span>
    </Link>
  );
}

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-6 left-6 z-50 p-3 text-zinc-900 hover:text-emerald-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <nav className={`w-70 border-r border-zinc-100 p-12 fixed h-full bg-white/95 backdrop-blur-sm z-50 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="space-y-32">
          <header>
            <Link href="/" className="group block" onClick={() => setIsOpen(false)}>
              <h1 className="text-2xl font-light tracking-tight text-zinc-900 group-hover:text-emerald-800 transition-colors mb-1">
                David Lam<span className="text-emerald-800 font-serif">.</span>
              </h1>
              <p className="text-[9px] uppercase tracking-[0.5em] text-zinc-400 font-medium leading-none">
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

        <div className="space-y-8">
          <div className="w-12 h-px bg-zinc-200" />
          <div className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 font-medium leading-relaxed space-y-2">
            <p>© 2026 Edition</p>
            <p className="text-zinc-300">UCLV • Cuba</p>
          </div>
        </div>
      </nav>
    </>
  );
}
