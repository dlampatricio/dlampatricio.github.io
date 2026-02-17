import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"]
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"]
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
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-zinc-900`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 lg:ml-80 bg-white relative transition-all duration-300">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}