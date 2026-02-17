export interface ProjectItemProps {
  readonly id: string;
  readonly title: string;
  readonly year: string;
  readonly desc: string;
  readonly tags: readonly string[];
  readonly category: string;
}

export interface SkillGroupProps {
  readonly title: string;
  readonly skills: readonly string[];
}

export interface FooterLinkProps {
  readonly href: string;
  readonly label: string;
  readonly external?: boolean;
}
