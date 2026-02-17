"use client";
import Link from "next/link";

export default function Contact() {
  return (
    // Quitamos h-screen fijo para que los paddings funcionen igual que en las otras páginas
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-emerald-800 selection:text-white antialiased flex flex-col justify-center">
      <div className="max-w-4xl mx-auto px-8 md:px-16 py-32 md:py-48 w-full">
        
        {/* HEADER - Manteniendo la coherencia de Work/About */}
        <section className="mb-32 max-w-3xl">
          <div className="space-y-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-zinc-900 lowercase">
              Contact<span className="text-emerald-800 italic font-serif">.</span>
            </h1>
            <div className="w-16 h-px bg-emerald-800/20"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 font-light leading-relaxed max-w-2xl">
              Currently accepting select freelance inquiries and <span className="text-zinc-900 italic">collaborative research</span> projects for 2026.
            </p>
          </div>
        </section>

        {/* CONTACT GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          
          {/* Left Column: Direct & Location */}
          <div className="lg:col-span-7 space-y-24">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-emerald-800 mb-8 font-medium">PRIMARY INQUIRIES</h3>
              <a 
                href="mailto:dlampatricio@gmail.com" 
                className="text-2xl sm:text-3xl md:text-4xl font-light text-zinc-900 hover:text-emerald-800 transition-all duration-500 underline underline-offset-4 sm:underline-offset-8 decoration-zinc-100 hover:decoration-emerald-800 break-all"
              >
                dlampatricio@gmail.com
              </a>
            </div>

            <div className="space-y-6">
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-emerald-800 mb-8 font-medium">LOCATION</h3>
              <div className="space-y-2">
                <p className="text-xl md:text-2xl font-light text-zinc-900 italic font-serif">
                  Cienfuegos, Cuba
                </p>
                <p className="text-zinc-500 font-light tracking-wide uppercase text-[10px]">
                  Available for remote architecture & engineering worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Social Directory */}
          <div className="lg:col-span-5 space-y-12 border-l border-zinc-100 pl-8 md:pl-16">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-emerald-800 mb-8 font-medium">DIGITAL CHANNELS</h3>
            <nav className="flex flex-col gap-6">
              {[
                { name: "GitHub", url: "https://github.com/dlampatricio" },
                { name: "GitLab", url: "https://gitlab.com/dlampatricio" },
                { name: "Instagram", url: "https://www.instagram.com/dlampatricio" },
                { name: "LinkedIn", url: "https://linkedin.com/in/dlampatricio" },
                { name: "Telegram", url: "https://t.me/dlampatricio" },
                { name: "WhatsApp", url: "https://wa.me/+53811810" },
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-between items-center text-lg font-light text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  <span className="group-hover:italic group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                  <span className="text-[10px] text-zinc-300 group-hover:text-emerald-800">↗</span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* MINI FOOTER / BACK LINK */}
        <footer className="pt-24 border-t border-zinc-100">
           <Link 
            href="/" 
            className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 hover:text-emerald-800 transition-all duration-300 font-medium"
          >
            ← Back to Home
          </Link>
        </footer>
      </div>
    </div>
  );
}