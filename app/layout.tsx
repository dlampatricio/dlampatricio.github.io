import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600"]
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "David Lam — Computer Scientist & Architect",
  description: "Computer Science at UCLV. Specialized in digital resilience and functional beauty through Full Stack Development and DevOps.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-zinc-900 selection:bg-emerald-800/10 selection:text-emerald-900`}>
        <div className="flex min-h-screen relative">
          <Sidebar />
          {/* Ajuste de padding dinámico y ancho máximo para lectura óptima */}
          <main className="flex-1 lg:ml-80 bg-white min-w-0 transition-all duration-500 ease-in-out lg:pt-0 pt-16">
            <div className="max-w-1600px mx-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}