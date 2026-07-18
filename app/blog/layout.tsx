import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Writing — David Lam',
  description:
    'Thoughts on software architecture, computer science, full-stack development, and system design.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Writing — David Lam',
    description:
      'Thoughts on software architecture, computer science, full-stack development, and system design.',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
