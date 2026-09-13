import { HeroSection } from "@/components/sections/Hero";
import { PersonalProjects } from "@/components/sections/personal-projects/PersonalProjects";
import { SelectedWork } from "@/components/sections/selected-work/SelectedWork";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SelectedWork />
      <PersonalProjects />
    </main>
  );
}
