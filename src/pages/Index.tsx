
import React, { useState, useEffect } from 'react';
import UnderwaterScene from '@/components/UnderwaterScene';
import CustomCursor from '@/components/CustomCursor';
import WaterDroplets from '@/components/WaterDroplets';
import SeaDecorations from '@/components/SeaDecorations';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ProfessionalExperience from '@/components/ProfessionalExperience';
import Leadership from '@/components/Leadership';
import Presentations from '@/components/Presentations';
import Achievements from '@/components/Achievements';
import CodingProfiles from '@/components/CodingProfiles';
import Resume from '@/components/Resume';


const Index = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'coding-profiles', 'professional-experience', 'achievements', 'presentations', 'leadership', 'resume'];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Desktop detection and cursor management
  useEffect(() => {
    const checkDevice = () => {
      const isDesktopSize = window.innerWidth >= 768;
      setIsDesktop(isDesktopSize);
      
      if (isDesktopSize) {
        document.body.style.cursor = 'none';
      } else {
        document.body.style.cursor = 'auto';
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background ocean-gradient mobile-container">
      {/* Custom cursor - desktop only */}
      {isDesktop && <CustomCursor />}
      
      {/* Water droplets animation */}
      <WaterDroplets />
      
      {/* Sea decorations */}
      <SeaDecorations />
      
      {/* Underwater animation background */}
      <UnderwaterScene />
      
      {/* Fixed navigation */}
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      {/* Main content */}
      <main className="relative z-10 mobile-safe">
        <Hero />
        <About />
        <Projects />
        <CodingProfiles />
        <ProfessionalExperience />
        <Achievements />
        <Presentations />
        <Leadership />
        <Resume />
      </main>
    </div>
  );
};

export default Index;
