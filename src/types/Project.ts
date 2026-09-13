type ProjectBase = {
  title: string;
  summary: string;
  description: string;
  contribution?: {
    problem: string;
    build: string;
    outcome: string;
  };
};

export type ProjectVisual = {
  kind: "page-production" | "asset-workflow";
  value: string;
  label: string;
  steps: string[];
};

export type FeaturedProject = ProjectBase & {
  kind: "featured";
  eyebrow: string;
  visual: ProjectVisual;
};

export type CommercialProject = ProjectBase & {
  kind: "commercial";
  brand: string;
};

export type PersonalProject = {
  title: string;
  description: string;
  snapshot: string;
  tools: string[];
  highlights: string[];
  githubLink: string;
  demoLink: string;
};
