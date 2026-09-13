import { ArrowUp } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Footer() {
  const iconClasses =
    "inline-flex size-11 items-center justify-center rounded-full text-secondary-text transition-colors hover:bg-surface hover:text-primary";

  return (
    <footer className="mt-auto flex w-full flex-col items-center justify-between gap-5 py-8 text-primary sm:flex-row">
      <p className="text-sm text-secondary-text">&copy; {new Date().getFullYear()} Takunda Muzunze</p>
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/TakundaMuzunze"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub (opens in a new tab)"
          title="GitHub"
          className={iconClasses}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .75a11.25 11.25 0 0 0-3.558 21.923c.563.104.768-.244.768-.542 0-.267-.01-.975-.015-1.914-3.13.68-3.79-1.51-3.79-1.51-.512-1.3-1.25-1.647-1.25-1.647-1.023-.7.078-.686.078-.686 1.13.08 1.725 1.16 1.725 1.16 1.006 1.724 2.64 1.226 3.283.938.103-.73.394-1.226.716-1.508-2.498-.284-5.124-1.25-5.124-5.562 0-1.228.44-2.232 1.16-3.018-.116-.285-.503-1.428.11-2.977 0 0 .944-.302 3.094 1.154A10.79 10.79 0 0 1 12 6.183c.956.004 1.918.129 2.817.378 2.148-1.456 3.09-1.154 3.09-1.154.615 1.55.229 2.692.113 2.977.722.786 1.158 1.79 1.158 3.018 0 4.324-2.63 5.275-5.136 5.553.404.35.764 1.043.764 2.1 0 1.516-.014 2.739-.014 3.11 0 .3.203.65.774.54A11.25 11.25 0 0 0 12 .75Z" />
          </svg>
        </a>
        <a
          href="https://uk.linkedin.com/in/tak-muzunze"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
          title="LinkedIn"
          className={iconClasses}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
          </svg>
        </a>
        <a href="#top" aria-label="Back to top" title="Back to top" className={iconClasses}>
          <ArrowUp size={20} aria-hidden="true" />
        </a>
        <span aria-hidden="true" className="mx-1 h-5 w-px bg-primary/15" />
        <ThemeToggle />
      </div>
    </footer>
  );
}
