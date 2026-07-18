import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageTransition from '../../components/PageTransition';
import MarkdownRenderer from '../../components/MarkdownRenderer';
import { getPostBySlug, getAllSlugs } from '../../lib/blog';

interface Props {
  readonly params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — David Lam`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} — David Lam`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <PageTransition className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-emerald-800 selection:text-white antialiased">
      <article className="max-w-4xl mx-auto px-8 md:px-16 py-32 md:py-48">
        <header className="mb-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 hover:text-emerald-800 transition-colors mb-12 font-medium"
          >
            &larr; Back to writing
          </Link>
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 font-medium">
              <time dateTime={post.date}>{post.date}</time>
              <span className="w-px h-3 bg-zinc-200 dark:bg-zinc-700" aria-hidden="true" />
              <div className="flex gap-3">
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.15] lowercase max-w-3xl">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
              {post.excerpt}
            </p>
          </div>
        </header>

        <div className="max-w-3xl">
          <MarkdownRenderer content={post.content} />
        </div>

        <footer className="mt-32 pt-12 border-t border-zinc-100 dark:border-zinc-800">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-emerald-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium"
          >
            &larr; Back to all writing
          </Link>
        </footer>
      </article>
    </PageTransition>
  );
}
