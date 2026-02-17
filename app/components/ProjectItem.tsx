import Link from "next/link";
import type { ProjectItemProps } from "../types";

export function ProjectItem({ title, year, desc, tags, category, id }: ProjectItemProps) {
  return (
    <Link 
      href={`/work#${id}`} 
      className="block group border-b border-zinc-100 last:border-0 focus:outline-none" 
      aria-label={`Project: ${title}, ${desc}`}
    >
      <div className="py-8 sm:py-12 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 transition-all duration-1000 ease-out relative overflow-hidden">
        
        {/* Indicador sutil de hover (línea vertical que aparece) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-0 group-hover:h-1/2 bg-emerald-800 transition-all duration-700 ease-in-out" />

        <div className="space-y-8 transition-transform duration-700 group-hover:translate-x-4">
          <div className="flex items-baseline gap-8">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-900 group-hover:text-emerald-800 transition-colors duration-700 lowercase">
              {title}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 italic font-serif text-emerald-800 ml-1">.</span>
            </h3>
            <span className="text-[10px] font-mono text-zinc-400 tracking-[0.4em] uppercase" aria-label="Year">
              / {year}
            </span>
          </div>
          
          <p className="text-zinc-500 font-light max-w-sm leading-relaxed text-sm group-hover:text-zinc-800 transition-colors duration-700">
            {desc}
          </p>
          
          <div className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 font-bold flex items-center gap-4 transition-colors duration-700 group-hover:text-emerald-800">
            <span className="w-8 h-px bg-zinc-100 group-hover:bg-emerald-800/30 transition-colors duration-700" aria-hidden="true" />
            {category}
          </div>
        </div>

        {/* Tags con estilo de etiqueta de archivo */}
        <div className="flex flex-wrap gap-2 transition-opacity duration-700">
          {tags.map((tag: string) => (
            <span 
              key={tag} 
              className="text-[8px] uppercase tracking-[0.3em] border border-zinc-100 px-3 sm:px-4 py-2 text-zinc-400 group-hover:text-emerald-800 group-hover:border-zinc-200 transition-all duration-700 font-bold bg-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}