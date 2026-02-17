"use client";
import Link from "next/link";

export default function Contact() {
  return (
    // h-screen y overflow-hidden eliminan el scroll global
    <div className="h-screen bg-white text-[#0a110f] selection:bg-[#064e3b] selection:text-white antialiased overflow-hidden flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-8 md:px-16 w-full">
        
        {/* HEADER - Espaciado reducido */}
        <section className="mb-16 max-w-3xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-light tracking-tighter text-gray-900 lowercase">
              Contact<span className="text-zinc-300 italic font-serif">.</span>
            </h1>
            <div className="w-12 h-px bg-[#064e3b]"></div>
            <p className="text-xl md:text-2xl text-zinc-600 font-light leading-relaxed max-w-2xl">
              Currently accepting select freelance inquiries and <span className="text-black italic">collaborative research</span> projects for 2026.
            </p>
          </div>
        </section>

        {/* CONTACT GRID - Ajustado para no exceder la altura */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct & Location */}
          <div className="md:col-span-7 space-y-16">
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-[#064e3b] mb-6 font-bold">PRIMARY INQUIRIES</h3>
              <a 
                href="mailto:dlampatricio@gmail.com" 
                className="text-2xl md:text-4xl font-light text-gray-900 hover:text-[#064e3b] transition-all duration-500 underline underline-offset-8 decoration-zinc-100 hover:decoration-[#064e3b] break-all"
              >
                dlampatricio@gmail.com
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.5em] text-[#064e3b] mb-6 font-bold">LOCATION</h3>
              <div className="space-y-1">
                <p className="text-2xl font-light text-gray-900 italic font-serif">
                  Cienfuegos, Cuba
                </p>
                <p className="text-zinc-500 font-light tracking-wide uppercase text-[9px]">
                  Available for remote architecture & engineering worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Social Directory - Compacto */}
          <div className="md:col-span-5 space-y-8 border-l border-zinc-100 pl-8 md:pl-16">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-[#064e3b] mb-6 font-bold">DIGITAL CHANNELS</h3>
            <nav className="flex flex-col gap-4">
              {[
                { name: "LinkedIn", url: "https://linkedin.com/in/davidlam" },
                { name: "GitHub", url: "https://github.com/davidlam" },
                { name: "GitLab", url: "https://gitlab.com/davidlam" },
                { name: "Telegram", url: "https://t.me/yourusername" },
                { name: "WhatsApp", url: "https://wa.me/yournumber" },
                { name: "Instagram", url: "https://instagram.com/yourusername" },
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-between items-center text-base font-light text-zinc-600 hover:text-black transition-colors"
                >
                  <span className="group-hover:italic group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                  <span className="text-[10px] text-zinc-300 group-hover:text-[#064e3b]">↗</span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* MINI FOOTER / BACK LINK */}
        <footer className="mt-16 pt-8 border-t border-zinc-50">
           <Link 
            href="/" 
            className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 hover:text-[#064e3b] transition-all duration-300 font-bold"
          >
            ← Back to Index
          </Link>
        </footer>
      </div>
    </div>
  );
}