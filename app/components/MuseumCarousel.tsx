"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function MuseumCarousel({ images }: Readonly<{ images: readonly {src: string, alt: string}[] }>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isCurrentlyLoading = !loadedImages.has(currentIndex);

  const goTo = useCallback((i: number) => setCurrentIndex(i), []);

  const handleImageLoad = (imgTarget: HTMLImageElement, index: number) => {
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
    if (paused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length, paused]);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (e.key === "ArrowRight") {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  }, [images.length]);

  return (
    <div className="w-full" role="region" aria-roledescription="carousel" aria-label="Project screenshots" onKeyDown={onKeyDown}>
      <div 
        ref={containerRef}
        className="relative aspect-video sm:aspect-16/10 overflow-hidden rounded-sm bg-white dark:bg-zinc-950"
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
               onClick={() => goTo(i)}
               aria-label={`Go to slide ${i + 1}`}
               className="group p-3 -m-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 rounded-sm"
             >
               <div className={`h-[2px] transition-all duration-700 ${
                 i === currentIndex ? 'w-6 bg-emerald-800' : 'w-2 bg-zinc-200 dark:bg-zinc-700 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-600'
               }`} />
             </button>
           ))}
        </div>

        <button
          onClick={() => setPaused(!paused)}
          aria-label={paused ? "Resume slideshow" : "Pause slideshow"}
          className="absolute bottom-4 left-4 z-20 p-3 -m-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 rounded-sm text-zinc-400 dark:text-zinc-500 hover:text-emerald-800 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {paused ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            )}
          </svg>
        </button>
      </div>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentIndex + 1} of {images.length}
      </div>
    </div>
  );
}