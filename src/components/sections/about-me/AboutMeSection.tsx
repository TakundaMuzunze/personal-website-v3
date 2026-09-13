import { aboutMe } from "@/data/AboutMe";

export function AboutMeSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-8 border-y border-primary/10 py-16 text-primary sm:py-20">
      <div className="grid items-start gap-8 md:grid-cols-[1fr_2fr] md:gap-12 lg:gap-16">
        <h2 id="about-heading" className="text-2xl font-medium tracking-tight">
          {aboutMe.heading}
        </h2>

        <div className="max-w-2xl min-w-0">
          <p className="text-lg leading-relaxed tracking-tight sm:text-xl">{aboutMe.introduction}</p>

          <div className="mt-5 space-y-4 text-base leading-relaxed text-secondary-text">
            {aboutMe.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-primary/10 pt-5 text-sm">
            <div>
              <dt className="sr-only">Role</dt>
              <dd className="font-medium">{aboutMe.experience.role}</dd>
            </div>
            <div>
              <dt className="sr-only">Company</dt>
              <dd className="text-secondary-text">{aboutMe.experience.company}</dd>
            </div>
          </dl>

          <ul aria-label="Technologies I work with" className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-secondary-text">
            {aboutMe.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
