import Link from "next/link";
import type { FooterLinkProps } from "../types";

export function FooterLink({ href, label, external = true }: FooterLinkProps) {
  const styles = "text-[10px] uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 hover:text-emerald-800 transition-colors font-medium focus:ring-1 focus:ring-emerald-800 px-1";
  
  if (!external) return <Link href={href} className={styles}>{label}</Link>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={styles} aria-label={`${label} (opens in new tab)`}>{label}</a>;
}
