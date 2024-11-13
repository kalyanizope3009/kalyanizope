"use client";

import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";

export interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "me", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setActiveSection(hash);
    }
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Sidebar
        sections={sections}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="flex-1 px-4 md:px-8">
        <SectionWrapper id="me">
          <AboutMe />
        </SectionWrapper>
        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>
        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>
        <SectionWrapper id="education">
          <Education />
        </SectionWrapper>
        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>
      </main>
    </div>
  );
}

// SectionWrapper Component
type SectionWrapperProps = {
  id: string;
  children: React.ReactNode;
};

function SectionWrapper({ id, children }: SectionWrapperProps) {
  return (
    <Element name={id} id={id} className="pt-8">
      <div className="min-h-screen border border-black p-4">
        {children}
      </div>
    </Element>
  );
}








