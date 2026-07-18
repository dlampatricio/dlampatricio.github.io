import Link from "next/link";

interface BlogCardProps {
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly date: string;
  readonly tags: readonly string[];
}

export default function BlogCard({ slug, title, excerpt, date, tags }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block py-8 sm:py-12 first:pt-0 last:pb-0">
      <article className="space-y-3 sm:space-y-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 font-medium">
          <time dateTime={date}>{date}</time>
          <span className="hidden sm:block w-px h-3 bg-zinc-200 dark:bg-zinc-700" aria-hidden="true" />
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <h3 className="text-xl sm:text-2xl font-light text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-800 transition-colors lowercase leading-snug sm:leading-normal">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
          {excerpt}
        </p>
        <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-emerald-800 font-medium group-hover:translate-x-1 transition-transform">
          Read more &rarr;
        </span>
      </article>
    </Link>
  );
}
