import type { PersonalProject } from "@/types/Project";

export const personalProjects: PersonalProject[] = [
  {
    title: "WhereNext",
    description:
      "A full-stack travel recommendation platform that ranks destinations against a user's budget, travel month, trip type, activities and duration, with personalised results, saved destinations and private shortlists.",
    snapshot: "/images/wherenext-snapshot.png",
    tools: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Better Auth"],
    highlights: ["Weighted destination ranking", "Google authentication and persistent user data", "Saved destinations and private shortlists"],
    githubLink: "https://github.com/TakundaMuzunze/WhereNext",
    demoLink: "https://wherenext-app.netlify.app/",
  },
  {
    title: "Flickerly",
    description: "A movie discovery platform for finding your next watch, exploring streaming availability and saving films to a personal watchlist.",
    snapshot: "/images/flickerly-snapshot.png",
    tools: ["SvelteKit", "TypeScript", "TMDB API"],
    highlights: ["Server-rendered movie discovery", "Infinite scrolling and lazy loading", "Watchlists and provider discovery"],
    githubLink: "https://github.com/TakundaMuzunze/Flickerly",
    demoLink: "https://flickerly.netlify.app/",
  },
];
