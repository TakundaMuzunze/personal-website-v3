import { aboutMe } from "@/data/AboutMe";

export function AboutMeSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-8 border-y border-primary/10 py-16 text-primary sm:py-20">
      <div className="grid items-start gap-8 md:grid-cols-[1fr_2fr] md:gap-12 lg:gap-16">
        <div className="min-w-0">
          <h2 id="about-heading" className="text-2xl font-medium tracking-tight">
            {aboutMe.heading}
          </h2>
          <div className="mt-6 md:mt-8">
            <h3 className="text-sm font-medium">{aboutMe.skills.heading}</h3>
            <dl className="mt-4 grid gap-5 sm:grid-cols-2 md:grid-cols-1">
              {aboutMe.skills.groups.map(({ label, technologies }) => (
                <div key={label}>
                  <dt className="text-sm text-secondary-text">{label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed">{technologies.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="max-w-2xl min-w-0">
          <p className="text-lg leading-relaxed tracking-tight sm:text-xl">{aboutMe.introduction}</p>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-secondary-text">
            {aboutMe.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-7 rounded-lg bg-surface p-6" role="group" aria-labelledby="about-experience">
            <h3 id="about-experience" className="text-sm font-normal text-secondary-text">
              {aboutMe.experience.heading}
            </h3>
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <p className="text-base font-medium tracking-tight">{aboutMe.experience.role}</p>
              <div className="text-left sm:text-right">
                <p className="text-sm text-accent">{aboutMe.experience.company}</p>
                <p className="mt-1 text-xs text-secondary-text">{aboutMe.experience.period}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-secondary-text">{aboutMe.experience.description}</p>
            <ul className="space-y-2 border-t border-primary/10 pt-4 text-sm leading-relaxed text-secondary-text">
              {aboutMe.experience.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
