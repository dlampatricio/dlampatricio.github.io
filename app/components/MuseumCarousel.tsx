"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function MuseumCarousel({ images }: { images: {src: string, alt: string}[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // 1. Calculamos cuánto debe desplazarse la imagen exactamente
  const calculateScroll = () => {
    if (imgRef.current && containerRef.current) {
      const imgHeight = imgRef.current.offsetHeight;
      const containerHeight = containerRef.current.offsetHeight;
      
      // Solo desplazamos si la imagen es más alta que el contenedor
      if (imgHeight > containerHeight) {
        // El cálculo es: (Altura Imagen - Altura Contenedor)
        // Lo ponemos en negativo para el eje Y
        setScrollAmount(-(imgHeight - containerHeight));
      } else {
        setScrollAmount(0);
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div 
        ref={containerRef}
        className="relative aspect-16/10 overflow-hidden bg-white rounded-sm"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="relative w-full h-full overflow-hidden">
              <motion.div 
                key={`scroll-${currentIndex}-${scrollAmount}`}
                animate={{ 
                  y: [0, scrollAmount, 0] 
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: 1
                }}
                className="absolute top-0 left-0 w-full"
              >
                <Image
                  ref={imgRef}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  width={1200}
                  height={5000}
                  className="w-full h-auto"
                  onLoadingComplete={calculateScroll}
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}