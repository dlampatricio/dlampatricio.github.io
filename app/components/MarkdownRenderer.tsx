import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

const components: Components = {
  h2: ({ children, ...props }) => (
    <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-900 dark:text-zinc-100 mt-12 sm:mt-16 md:mt-20 mb-4 sm:mb-6 md:mb-8 lowercase leading-snug sm:leading-normal" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-lg sm:text-xl md:text-2xl font-light text-zinc-900 dark:text-zinc-100 mt-10 sm:mt-12 md:mt-16 mb-3 sm:mb-4 md:mb-6 lowercase leading-snug sm:leading-normal" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="text-[15px] sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-light leading-[1.7] sm:leading-[1.8] mb-4 sm:mb-5 md:mb-6" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children, ...props }) => (
    <a
      href={href}
      className="text-emerald-800 underline underline-offset-4 decoration-emerald-800/30 hover:decoration-emerald-800 transition-all"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  ul: ({ children, ...props }) => (
    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 ml-4 sm:ml-6" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 ml-4 sm:ml-6 list-decimal" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="text-[15px] sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed marker:text-emerald-800" {...props}>
      {children}
    </li>
  ),
  code: ({ children, className, ...props }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="px-1.5 py-0.5 text-[13px] sm:text-sm font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded" {...props}>
          {children}
        </code>
      );
    }
    return (
      <pre className="overflow-x-auto p-4 sm:p-6 mb-6 sm:mb-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-sm">
        <code className={`text-[13px] sm:text-sm font-mono leading-relaxed text-zinc-800 dark:text-zinc-200 ${className ?? ''}`} {...props}>
          {children}
        </code>
      </pre>
    );
  },
  hr: (props) => (
    <hr className="my-10 sm:my-12 md:my-16 border-zinc-200 dark:border-zinc-800" {...props} />
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-2 border-emerald-800/40 pl-4 sm:pl-6 my-6 sm:my-8 italic text-zinc-600 dark:text-zinc-400 font-light" {...props}>
      {children}
    </blockquote>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-medium text-zinc-900 dark:text-zinc-100" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic text-zinc-700 dark:text-zinc-300" {...props}>
      {children}
    </em>
  ),
};

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}
