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
    <Link href={`/blog/${slug}`} className="group block py-12 first:pt-0 last:pb-0">
      <article className="space-y-4">
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 font-medium">
          <time dateTime={date}>{date}</time>
          <span className="w-px h-3 bg-zinc-200 dark:bg-zinc-700" aria-hidden="true" />
          <div className="flex gap-3">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <h3 className="text-2xl font-light text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-800 transition-colors lowercase">
          {title}
        </h3>
        <p className="text-base text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
          {excerpt}
        </p>
        <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-emerald-800 font-medium group-hover:translate-x-1 transition-transform">
          Read more &rarr;
        </span>
      </article>
    </Link>
  );
}
