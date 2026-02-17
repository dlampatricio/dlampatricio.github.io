import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Genera archivos estáticos compatibles con GitHub Pages
  output: 'export',
  
  // Desactiva la optimización de imágenes (GitHub no tiene servidor de Node para esto)
  images: {
    unoptimized: true,
  },
  
  // Opcional: Ayuda a evitar errores de hidratación comunes en despliegues estáticos
  reactStrictMode: true,
};

export default nextConfig;