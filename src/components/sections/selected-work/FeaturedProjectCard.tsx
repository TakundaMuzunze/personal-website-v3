import { ArrowRight, Plus } from "lucide-react";
import type { FeaturedProject as FeaturedProjectData, ProjectVisual } from "@/types/Project";

type FeaturedProjectProps = {
  project: FeaturedProjectData;
};

function ProjectPanel({ project }: FeaturedProjectProps) {
  const visual: ProjectVisual = project.visual;

  return (
    <div className="bg-surface p-6 sm:p-8">
      <p className="text-sm text-secondary-text">{project.eyebrow}</p>

      <div className="my-7 grid items-center gap-6 sm:grid-cols-2">
        <div>
          <p className="text-6xl font-medium tracking-tighter text-accent sm:text-7xl">{visual.value}</p>
          <p className="mt-3 max-w-60 text-xl tracking-tight">{visual.label}</p>
        </div>
        <div className="sm:border-l sm:border-primary/10 sm:pl-6">
          <p className="font-medium">{project.summary}</p>
        </div>
      </div>
      {visual.kind === "asset-workflow" && visual.steps.length > 0 && (
        <ol
          className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-primary/10 pt-5 text-sm text-secondary-text"
          aria-label={`${project.title} workflow`}
        >
          {visual.steps.map((step, index) => (
            <li key={`${index}-${step}`} className="flex items-center gap-5">
              {index > 0 && <ArrowRight className="size-4" aria-hidden="true" />}
              {step}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

function ProjectContribution({ contribution }: { contribution: NonNullable<FeaturedProjectData["contribution"]> }) {
  const sections = [
    { label: "The problem", text: contribution.problem },
    { label: "What I built", text: contribution.build },
    { label: "The outcome", text: contribution.outcome },
  ];

  return (
    <details className="group border-t border-primary/10">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-sm font-medium group-open:text-accent hover:text-accent focus-visible:outline-offset-[-4px] sm:px-8 [&::-webkit-details-marker]:hidden">
        My contribution
        <Plus className="size-4 shrink-0 group-open:hidden" aria-hidden="true" />
        <span className="hidden text-xl group-open:block" aria-hidden="true">
          −
        </span>
      </summary>
      <dl className="space-y-6 px-6 pt-2 pb-6 sm:px-8 sm:pb-8">
        {sections.map(({ label, text }) => (
          <div key={label} className="grid gap-2 sm:grid-cols-[120px_1fr] sm:gap-6">
            <dt className="text-sm text-secondary-text">{label}</dt>
            <dd className="text-sm leading-relaxed">{text}</dd>
          </div>
        ))}
      </dl>
    </details>
  );
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <article className="min-w-0 overflow-hidden rounded-xl border border-primary/10 bg-background text-primary">
      <ProjectPanel project={project} />
      <div className="px-6 py-6 sm:px-8">
        <h3 className="text-xl font-medium tracking-tight">{project.title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-secondary-text">{project.description}</p>
      </div>
      {project.contribution && <ProjectContribution contribution={project.contribution} />}
    </article>
  );
}
