import { ChevronDown, Mail } from "lucide-react";
import { ButtonLink } from "../ui/ButtonLink";

export function HeroSection() {
  return (
    <section className="py-20">
      <div className="mb-8 flex items-center gap-2 text-sm text-secondary-text">
        <span className="text-4xl text-accent">•</span>
        <p>Takunda Muzunze · Software Engineer</p>
      </div>

      <div className="max-w-5xl">
        <h1 className="text-5xl leading-tight font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          I build software
          <br />
          that solves real problems.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-secondary-text md:text-lg">
          I build production web applications, internal tools and digital experiences with TypeScript, with a focus on clean engineering, thoughtful
          UX and measurable impact.
        </p>

        <div className="mt-10 flex items-center gap-4">
          <ButtonLink href="#work" variant="primary" icon={ChevronDown}>
            Selected work
          </ButtonLink>

          <ButtonLink href="#contact" variant="secondary" icon={Mail}>
            Get in touch
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
