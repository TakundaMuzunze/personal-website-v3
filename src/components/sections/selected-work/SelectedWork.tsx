import { featuredProjects } from "@/data/FeaturedProjects";
import { FeaturedProject } from "./FeaturedProjectCard";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-8 py-10 lg:py-20">
      <div className="flex items-start justify-between">
        <h2 id="work-heading" className="text-2xl">
          Selected work
        </h2>
        <p className="text-sm text-muted">Delivered at iSiteTV</p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-10 py-8 md:grid-cols-2 md:gap-4">
        {featuredProjects.map((project) => (
          <FeaturedProject key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
