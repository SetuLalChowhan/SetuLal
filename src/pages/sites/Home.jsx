import React from "react";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Home = () => {
  return (
    <main className="bg-[#f8f8f2] text-[#1a1a1a] min-h-screen font-sans selection:bg-[#bedbff] selection:text-[#1a1a1a]">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
};

export default Home;
