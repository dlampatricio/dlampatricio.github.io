import { WRITING } from "../constants";

export default function Writing() {
  return (
    <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
      {WRITING.map((entry) => (
        <article key={entry.title} className="py-8 first:pt-0 last:pb-0 group">
          <div className="space-y-3">
            <h3 className="text-lg font-light text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-800 transition-colors lowercase">
              {entry.title}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
              {entry.excerpt}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
