import type { SkillGroupProps } from "../types";

export function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className="space-y-12">
      <h3 className="text-[9px] uppercase tracking-[0.4em] font-medium text-emerald-800 border-l-2 border-emerald-800/20 pl-5">
        {title}
      </h3>
      <ul className="space-y-6">
        {skills.map((skill: string) => (
          <li key={skill} className="text-sm text-zinc-600 font-medium tracking-tight hover:text-zinc-900 transition-colors cursor-default">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
