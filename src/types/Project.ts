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

export type ProjectVisual =
  | {
      kind: "page-production";
      value: string;
      label: string;
    }
  | {
      kind: "asset-workflow";
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
