import { personalProjects } from "@/data/PersonalProjects";
import { PersonalProjectCard } from "./PersonalProjectCard";

export function PersonalProjects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-8 py-10 lg:py-20">
      <div className="flex items-start justify-between">
        <h2 id="projects-heading" className="text-2xl">
          In my own time
        </h2>
        <p className="text-sm text-muted">Personal projects</p>
      </div>

      <div className="space-y-10 py-8">
        {personalProjects.map((project) => (
          <PersonalProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
