"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function MuseumCarousel({ images }: Readonly<{ images: {src: string, alt: string}[] }>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateScroll = (imgTarget: HTMLImageElement) => {
    if (containerRef.current) {
      const imgHeight = imgTarget.offsetHeight;
      const containerHeight = containerRef.current.offsetHeight;
      
      // Solo si la imagen es sustancialmente más larga, activamos el scroll
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
        // Usamos bg-zinc-50 o un gris muy claro para que el "blanco" no sea tan duro
        className="relative aspect-video sm:aspect-16/10 overflow-hidden rounded-sm"
      >
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
                ease: "easeInOut", // easeInOut es más natural para fotos pequeñas
                delay: 1
              }}
              className="absolute top-0 left-0 w-full"
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={1200}
                height={800}
                className="w-full h-auto"
                onLoadingComplete={calculateScroll}
                priority={currentIndex === 0} 
                placeholder="blur" 
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" 
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores Minimalistas (opcional, para reforzar el look de museo) */}
        <div className="absolute bottom-4 right-4 flex gap-2">
           {images.map((_, i) => (
             <div 
               key={i} 
               className={`h-1 transition-all duration-500 ${i === currentIndex ? 'w-4 bg-emerald-800' : 'w-1 bg-zinc-300'}`} 
             />
           ))}
        </div>
      </div>
    </div>
  );
}