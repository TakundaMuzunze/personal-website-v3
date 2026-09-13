import type { PersonalProject } from "@/types/Project";
import { Check, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PersonalProjectProps = {
  project: PersonalProject;
};

export function PersonalProjectCard({ project }: PersonalProjectProps) {
  return (
    <article className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div className="flex flex-col items-start gap-6">
        <h3 className="text-xl font-medium tracking-tight">{project.title}</h3>
        <p className="text-base leading-relaxed text-secondary-text">{project.description}</p>

        {project.highlights.length > 0 && (
          <ul className="w-full space-y-3 border-t border-primary/10" aria-label={`${project.title} highlights`}>
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3 text-sm leading-relaxed text-primary">
                <Check className="mt-1 size-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap items-start gap-4">
          <Link href={project.demoLink} target="_blank" className="flex items-center gap-2">
            View project
            <ExternalLink size={16} />
          </Link>
          <Link href={project.githubLink} target="_blank" className="flex items-center gap-2">
            View code
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>

      <div className="w-full rounded-lg bg-surface p-6">
        <Image src={project.snapshot} alt={`${project.title} screenshot`} width={2938} height={1598} className="h-auto w-full rounded-md" />

        <div className="mt-4 flex flex-wrap gap-3 text-sm text-secondary-text">
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
