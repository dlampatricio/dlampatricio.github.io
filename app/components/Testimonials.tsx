import { TESTIMONIALS } from "../constants";

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
      {TESTIMONIALS.map((t) => (
        <div key={t.author} className="space-y-6">
          <svg className="w-6 h-6 text-emerald-800/20 dark:text-emerald-800/40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed italic">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-900 dark:text-zinc-100 font-medium">{t.author}</p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">{t.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
