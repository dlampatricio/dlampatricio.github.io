"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function MuseumCarousel({ images }: Readonly<{ images: {src: string, alt: string}[] }>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Control para evitar el flash amarillo
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateScroll = (imgTarget: HTMLImageElement) => {
    setIsLoading(false); // La imagen ya cargó
    if (containerRef.current) {
      const imgHeight = imgTarget.offsetHeight;
      const containerHeight = containerRef.current.offsetHeight;
      
      if (imgHeight > containerHeight + 10) {
        setScrollAmount(-(imgHeight - containerHeight));
      } else {
        setScrollAmount(0);
      }
    }
  };

  // Reset del estado de carga cuando cambia la imagen
  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full">
      <div 
        ref={containerRef}
        className="relative aspect-video sm:aspect-16/10 overflow-hidden rounded-sm bg-zinc-50 border border-zinc-100"
      >
        {/* Skeleton Loader: Esto reemplaza al flash amarillo */}
        <AnimatePresence>
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10 bg-zinc-50 flex items-center justify-center"
            >
              <div className="w-8 h-px bg-emerald-800/20 animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <motion.div 
              key={`scroll-${currentIndex}-${scrollAmount}`}
              animate={scrollAmount === 0 ? { y: 0 } : { y: [0, scrollAmount, 0] }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 1
              }}
              className="absolute top-0 left-0 w-full"
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={1200}
                height={800}
                className={`w-full h-auto transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoadingComplete={calculateScroll}
                priority={true} // Forzamos carga para evitar el placeholder
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores */}
        <div className="absolute bottom-4 right-4 flex gap-2 z-20">
           {images.map((_, i) => (
             <div 
               key={i} 
               className={`h-1 transition-all duration-500 ${i === currentIndex ? 'w-4 bg-emerald-800' : 'w-1 bg-zinc-200'}`} 
             />
           ))}
        </div>
      </div>
    </div>
  );
}