"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function MuseumCarousel({ images }: Readonly<{ images: {src: string, alt: string}[] }>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);

  // Solo mostramos el indicador si la imagen actual NO ha sido cargada antes
  const isCurrentlyLoading = !loadedImages.has(currentIndex);

  const handleImageLoad = (imgTarget: HTMLImageElement, index: number) => {
    // Marcamos esta imagen específica como cargada
    setLoadedImages((prev) => new Set(prev).add(index));

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
        className="relative aspect-video sm:aspect-16/10 overflow-hidden rounded-sm bg-white"
      >
        {/* INDICADOR DE CARGA ULTRA-MINIMALISTA */}
        <AnimatePresence>
          {isCurrentlyLoading && (
            <motion.div 
              initial={{ scaleX: 0, transformOrigin: "left" }}
              animate={{ scaleX: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-[2px] bg-emerald-800/30 z-30"
            />
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Soft cinematic fade
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <motion.div 
              key={`scroll-${currentIndex}-${scrollAmount}`}
              animate={scrollAmount === 0 ? { y: 0 } : { y: [0, scrollAmount, 0] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 0.5
              }}
              className="absolute top-0 left-0 w-full"
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={1200}
                height={800}
                className="w-full h-auto"
                onLoadingComplete={(img) => handleImageLoad(img, currentIndex)}
                priority={currentIndex === 0} // Solo prioridad a la primera del set
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* INDICADORES DE PAGINACIÓN */}
        <div className="absolute bottom-4 right-4 flex gap-3 z-20">
           {images.map((_, i) => (
             <button
               key={i}
               onClick={() => setCurrentIndex(i)}
               className="group p-2 -m-2" // Área de clic más grande
             >
               <div className={`h-[2px] transition-all duration-700 ${
                 i === currentIndex ? 'w-6 bg-emerald-800' : 'w-2 bg-zinc-200 group-hover:bg-zinc-300'
               }`} />
             </button>
           ))}
        </div>
      </div>
    </div>
  );
}