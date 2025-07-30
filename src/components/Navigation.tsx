import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'coding-profiles', label: 'Coding' },
    { id: 'professional-experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'presentations', label: 'Presentations' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'resume', label: 'Resume' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div 
        className={cn(
          "hidden md:block fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-300",
          isScrolled ? "translate-y-0 opacity-100" : "translate-y-[-100px] opacity-0"
        )}
      >
        <Card className="card-gradient border-border/30 backdrop-blur-md bioluminescent-shadow">
          <div className="flex items-center p-2 gap-1">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "bioluminescent" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(section.id)}
                className="text-sm px-4 py-2 glow-transition"
              >
                {section.label}
              </Button>
            ))}
          </div>
        </Card>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-4 right-4 z-[100]">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="bioluminescent"
              size="icon"
              className="rounded-full bioluminescent-shadow"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-card/95 backdrop-blur-md border-border/30">
            <nav className="flex flex-col gap-4 mt-8">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "bioluminescent" : "ghost"}
                  onClick={() => scrollToSection(section.id)}
                  className="justify-start text-base py-3 glow-transition"
                >
                  {section.label}
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navigation;
