'use client';
import Home from "../components/PortfolioComponent/Home";
import React, {useState, useRef, useEffect} from "react";
import {ActiveSection} from "../types/basicTypes";
import Projects from "../components/PortfolioComponent/Projects"; 
import About from "../components/PortfolioComponent/About";
import protfolio from "../components/PortfolioComponent/Protfolio.json";
import Skills from "../components/PortfolioComponent/Skills";
import WorkExperience from "@/components/PortfolioComponent/WorkExperience";
import Contact from "@/components/PortfolioComponent/Contact";
import Footer from "@/components/PortfolioComponent/Footer";


export default function HomePage() {
  const [activePage, setActivePage] = useState<ActiveSection>("home");
  const [portfolioData] = useState(protfolio.protfolioData);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const homeSection = portfolioData.find((section): section is { HomeSection: NonNullable<typeof section["HomeSection"]> } => "HomeSection" in section)?.HomeSection ?? null;
  const projectSection = portfolioData.find((section): section is { ProjectsSection: NonNullable<typeof section["ProjectsSection"]> } => "ProjectsSection" in section)?.ProjectsSection ?? null;
  const aboutSection = portfolioData.find((section): section is { aboutSection: NonNullable<typeof section["aboutSection"]> } => "aboutSection" in section)?.aboutSection ?? null;
  const skillsSection = portfolioData.find((section): section is { skillsAndExpertise: NonNullable<typeof section["skillsAndExpertise"]> } => "skillsAndExpertise" in section)?.skillsAndExpertise ?? null;
  const workExperienceSection = portfolioData.find((section): section is { workExperienceSection: NonNullable<typeof section["workExperienceSection"]> } => "workExperienceSection" in section)?.workExperienceSection ?? null;
  const contactSection = portfolioData.find((section): section is { contactSections: NonNullable<typeof section["contactSections"]> } => "contactSections" in section)?.contactSections ?? null;
  useEffect(() => {
    if (activePage === "projects") {
      setTimeout(() => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
    if (activePage === "about") {
      setTimeout(() => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }, [activePage]);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <main className="w-full">
        <div id="home">
          <Home setActivePage={setActivePage} homeSection={homeSection} />
        </div>
         <div id="about" ref={aboutRef}>
          <About aboutSection={aboutSection} />
        </div>
        
        <div id="skills" ref={skillsRef}>
          <Skills skillsSection={skillsSection} />
        </div>
        <div id="projects" ref={projectsRef}>
          <Projects projectSection={projectSection} />
        </div>
        <div id="experience">
          <WorkExperience workExperienceSection={workExperienceSection} />
        </div>
        <div id="contact">
          <Contact contactSection={contactSection} />
        </div>
        <Footer
          name={homeSection?.name}
          contactInformation={contactSection?.contactInformation}
        />
      </main>
    </div>
  );
}
