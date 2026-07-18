import type { Metadata } from 'next';
import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import BlogCard from '../components/BlogCard';
import { getAllPosts } from '../lib/blog';

export const metadata: Metadata = {
  title: 'Writing — David Lam',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <PageTransition className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-emerald-800 selection:text-white antialiased">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-16 py-24 sm:py-32 md:py-48">
        <section className="mb-20 sm:mb-24 md:mb-32" aria-labelledby="writing-title">
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            <h1 id="writing-title" className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 lowercase leading-tight">
              Writing<span className="text-emerald-800 italic font-serif">.</span>
            </h1>
            <div className="w-12 sm:w-16 h-px bg-emerald-800/20" aria-hidden="true"></div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-2xl">
              Thoughts on software architecture, computer science, and the craft of building systems that last.
            </p>
          </div>
        </section>

        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
