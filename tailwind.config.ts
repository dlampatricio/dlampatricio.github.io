import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: {
          900: "#14532d",
          400: "#4ade80",
        },
        gray: {
          900: "#111827",
          800: "#1f2937",
          700: "#374151",
          600: "#6b7280",
          500: "#6b7280",
          400: "#9ca3af",
          300: "#d1d5db",
          200: "#e5e7eb",
          100: "#f3f4f6",
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
