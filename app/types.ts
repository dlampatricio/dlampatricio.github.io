export interface Project {
  readonly id: string;
  readonly title: string;
  readonly year: string;
  readonly desc: string;
  readonly tags: readonly string[];
  readonly category: string;
  readonly label: string;
  readonly github: string | null;
  readonly live: string | null;
  readonly images: readonly { src: string; alt: string }[] | null;
}

export interface WritingEntry {
  readonly title: string;
  readonly excerpt: string;
  readonly url?: string;
}

export type ProjectItemProps = Project;

export interface SkillGroupProps {
  readonly title: string;
  readonly skills: readonly string[];
}

export interface FooterLinkProps {
  readonly href: string;
  readonly label: string;
  readonly external?: boolean;
}

export interface Experience {
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly desc: string;
}
