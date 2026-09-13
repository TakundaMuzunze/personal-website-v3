import type { PersonalProject } from "@/types/Project";

export const personalProjects: PersonalProject[] = [
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
