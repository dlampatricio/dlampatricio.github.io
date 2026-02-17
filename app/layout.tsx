import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "David Lam — Computer Scientist",
  description: "Computer Science student at UCLV & Full Stack Developer. Curating digital resilience and functional beauty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-[#0a110f]`}>
        <div className="flex min-h-screen">
          
          {/* NAVIGATION SIDEBAR - Estética de galería */}
          <nav className="w-72 border-r border-zinc-100 p-12 fixed h-full bg-white z-50 flex flex-col justify-between">
            <div className="space-y-24">
              {/* Logo/Brand */}
              <header>
                <Link href="/" className="group">
                  <h1 className="text-xl font-light tracking-tighter text-gray-900 group-hover:text-[#064e3b] transition-colors">
                    David Lam<span className="text-[#064e3b] italic font-serif">.</span>
                  </h1>
                  <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 mt-2 font-bold leading-none">
                    Computer Scientist
                  </p>
                </Link>
              </header>

              {/* Menu Links */}
              <div className="flex flex-col gap-8">
                <NavLink href="/" label="Home"/>
                <NavLink href="/about" label="About"/>
                <NavLink href="/work" label="Work"/>
                <NavLink href="/contact" label="Contact"/>
              </div>
            </div>

            {/* Bottom Info - UCLV Reference */}
            <div className="space-y-6">
              <div className="w-8 h-px bg-zinc-200"></div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 font-bold leading-relaxed">
                <p >© 2026 Edition</p>
              </div>
            </div>
          </nav>
          
          {/* MAIN CONTENT AREA */}
          <main className="flex-1 ml-72 bg-white relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

/* Sub-componente para links limpios */
function NavLink({ href, label}: { href: string; label: string;}) {
  return (
    <Link 
      href={href} 
      className="group flex items-baseline gap-4 text-zinc-500 hover:text-black transition-all duration-300"
    >
      <span className="text-xs uppercase tracking-[0.4em] font-bold group-hover:translate-x-1 transition-transform">
        {label}
      </span>
    </Link>
  );
}