import type { FeaturedProject } from "@/types/Project";

export const featuredProjects: FeaturedProject[] = [
  {
    kind: "featured",
    title: "Schema-driven page system",
    eyebrow: "Developer tooling · Page production",
    summary: "From duplicated page builds to reusable systems",
    description:
      "Schema-driven component libraries and configuration editors with live page previews, reducing initial page setup from several days to a few hours.",
    visual: {
      kind: "page-production",
      value: "90%+",
      label: "Reduction in initial setup time",
      steps: ["Define", "Configure", "Preview"],
    },
    contribution: {
      problem: "Campaign pages were being built repeatedly across projects, with initial setup typically budgeted at 3-4 days.",
      build:
        "I built schema-driven component libraries and configuration editors in TypeScript, with editable fields generated from component schemas and a live preview alongside the controls.",
      outcome: "Reduced initial page setup from a budgeted 3-4 days to a few hours while making the system more reusable across campaigns.",
    },
  },
  {
    kind: "featured",
    title: "Asset management tool",
    eyebrow: "Internal tooling · Asset management",
    summary: "Removing repetitive work from asset production",
    description: "An Electron desktop application that automated parts of the internal asset workflow and reduced manual processing by around 90%.",
    visual: {
      kind: "asset-workflow",
      value: "90%",
      label: "Less manual asset processing",
      steps: ["Organise", "Review", "Export"],
    },
    contribution: {
      problem: "Asset preparation involved repetitive manual steps that slowed down the production workflow.",
      build:
        "I built an Electron application using SvelteKit, TypeScript and Node.js to automate asset processing and organisation, with Vitest, Playwright and Azure Pipelines supporting testing and delivery.",
      outcome: "Reduced manual asset processing by around 90% and made the workflow significantly faster and more consistent.",
    },
  },
];
