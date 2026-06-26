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
  title: "David Lam — Computer Scientist",
  description: "Computer Science at UCLV. Specialized in digital resilience and functional beauty through Full Stack Development and DevOps.",
  openGraph: {
    title: "David Lam — Computer Scientist",
    description: "Computer Science at UCLV. Specialized in digital resilience and functional beauty.",
    url: "https://dlampatricio.github.io",
    siteName: "David Lam Portfolio",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://dlampatricio.github.io/og-image.svg", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Lam",
    givenName: "David",
    familyName: "Lam",
    jobTitle: "Full Stack Developer & DevOps Architect",
    description: "Computer Science student at UCLV. Specialized in digital resilience and functional beauty through Full Stack Development and DevOps.",
    url: "https://dlampatricio.github.io",
    sameAs: [
      "https://github.com/dlampatricio",
      "https://linkedin.com/in/dlampatricio",
    ],
    knowsAbout: [
      "JavaScript", "TypeScript", "Next.js", "React",
      "Python", "FastAPI", "Docker", "PostgreSQL",
      "Git", "CI/CD", "System Architecture",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-emerald-800/10 selection:text-emerald-900`}>
        <div className="flex min-h-screen relative">
          <Sidebar />
          <main className="flex-1 lg:ml-72 bg-white dark:bg-zinc-950 min-w-0 transition-all duration-500 ease-in-out lg:pt-0 pt-16">
            <div className="max-w-1600px mx-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}