"use client";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  };

  return (
    <button
      onClick={toggle}
      className="group flex items-baseline gap-4 text-zinc-500 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 rounded-sm px-1"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="text-xs uppercase tracking-[0.5em] font-medium group-hover:translate-x-1 transition-transform">
        {dark ? "Light" : "Dark"}
      </span>
      <span className="text-[10px]">{dark ? "☀" : "☾"}</span>
    </button>
  );
}
