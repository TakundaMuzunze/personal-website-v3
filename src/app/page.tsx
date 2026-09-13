import { AboutMeSection } from "@/components/sections/about-me/AboutMeSection";
import { ContactSection } from "@/components/sections/contact-section/ContactSection";
import { HeroSection } from "@/components/sections/Hero";
import { PersonalProjects } from "@/components/sections/personal-projects/PersonalProjects";
import { SelectedWork } from "@/components/sections/selected-work/SelectedWork";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <SelectedWork />
      <PersonalProjects />
      <ContactSection />
    </main>
  );
}
