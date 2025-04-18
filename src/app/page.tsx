"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import WorkExperience from "@/sections/WorkExperience";
import Projects from "@/sections/Projects";
import Achievements from "@/sections/Achievements";
import Certifications from "@/sections/Certifications";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";

import { 
  personalInfo, 
  skillCategories, 
  experiences, 
  projects, 
  achievements, 
  certifications, 
  testimonials 
} from "@/data/portfolio-data";

export default function Home() {
  return (
    <main>
      <Navbar />
      
      <Hero 
        name={personalInfo.name}
        title={personalInfo.title}
        tagline={personalInfo.tagline}
        intro={personalInfo.intro}
      />
      
      <About 
        photo={personalInfo.photo}
        skills={skillCategories}
      />
      
      <Skills 
        skills={skillCategories}
      />
      
      <WorkExperience 
        experiences={experiences}
      />
      
      <Projects 
        projects={projects}
      />
      
      <Achievements 
        achievements={achievements}
      />
      
      <Certifications 
        certifications={certifications}
      />
      
      <Testimonials 
        testimonials={testimonials}
      />
      
      <Contact />
      
      <Footer />
    </main>
  );
}
