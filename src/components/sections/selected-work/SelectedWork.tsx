import { featuredProjects } from "@/data/FeaturedProjects";
import { FeaturedProject } from "./FeaturedProjectCard";

export function SelectedWork() {
  return (
    <section className="py-20">
      <div className="flex items-start justify-between">
        <h2 className="text-2xl">Selected work</h2>
        <p className="text-sm text-muted">Delivered at iSiteTV</p>
      </div>

      <div className="space-y-10 py-8">
        {featuredProjects.map((project) => (
          <FeaturedProject key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
