import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, Sparkles, Heart, X } from 'lucide-react';
import InteractiveTagline from '@/components/InteractiveTagline';
import profileImage from '@/assets/profile-picture.jpg';
import InteractiveStarfish from '@/components/InteractiveStarfish';

const Hero = () => {
  const [showHireMePopup, setShowHireMePopup] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullName = 'Sneha Roychowdhury';
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timer = setTimeout(() => {
        setTypedText(prev => prev + fullName[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullName]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative z-10 overflow-hidden">
      {/* Transparent Sea Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Interactive Starfish scattered around */}
        <InteractiveStarfish 
          style={{ top: '20%', left: '15%' }}
          animationDelay="0s"
          animationDuration="4s"
        />
        
        <InteractiveStarfish 
          style={{ top: '60%', right: '20%' }}
          animationDelay="1s"
          animationDuration="5s"
        />
        
        <InteractiveStarfish 
          style={{ bottom: '30%', left: '25%' }}
          animationDelay="2s"
          animationDuration="6s"
        />
        
        <InteractiveStarfish 
          style={{ top: '40%', right: '30%' }}
          animationDelay="0.5s"
          animationDuration="4.5s"
        />
        
        <InteractiveStarfish 
          style={{ bottom: '20%', right: '15%' }}
          animationDelay="1.5s"
          animationDuration="5.5s"
        />
        
        <InteractiveStarfish 
          style={{ top: '75%', left: '40%' }}
          animationDelay="3s"
          animationDuration="7s"
        />
        
        {/* SVG Jellyfish */}
        <div className="absolute top-1/3 left-1/8 animate-[sway_8s_ease-in-out_infinite]">
          <svg width="32" height="32" viewBox="0 0 32 32" className="text-cyan-300/40 opacity-60 hover:opacity-80 transition-opacity">
            <circle cx="16" cy="12" r="8" fill="currentColor" />
            <path d="M10 18 L10 28 M14 18 L14 26 M18 18 L18 26 M22 18 L22 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        
        {/* SVG Coral */}
        <div className="absolute bottom-1/4 right-1/4 animate-[gentle-bob_10s_ease-in-out_infinite]">
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-pink-300/50 opacity-50 hover:opacity-70 transition-opacity">
            <path d="M12 2 L16 8 L12 12 L8 8 Z M8 8 L4 12 L8 16 L12 12 M16 8 L20 12 L16 16 L12 12 M12 12 L16 18 L12 22 L8 18" fill="currentColor" />
          </svg>
        </div>
        
        {/* SVG Seaweed */}
        <div className="absolute top-1/6 right-1/6 animate-[sway_6s_ease-in-out_infinite_1s]">
          <svg width="16" height="40" viewBox="0 0 16 40" className="text-green-300/40 opacity-40 hover:opacity-60 transition-opacity">
            <path d="M8 0 Q4 10 8 20 Q12 30 8 40" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        
        {/* SVG Dolphin */}
        <div className="absolute top-1/4 left-1/5 animate-[swim_12s_linear_infinite]">
          <svg width="40" height="24" viewBox="0 0 40 24" className="text-blue-400/60 opacity-50 hover:opacity-70 transition-opacity">
            <path d="M2 12 Q8 8 16 12 Q24 16 32 12 Q36 10 38 8 L38 10 Q36 14 32 16 Q24 20 16 16 Q8 12 2 16 Z" fill="currentColor" />
            <circle cx="30" cy="10" r="1.5" fill="white" />
            <circle cx="31" cy="10" r="0.5" fill="currentColor" />
          </svg>
        </div>
        
        {/* Another SVG Dolphin */}
        <div className="absolute bottom-1/3 right-1/4 animate-[swim-reverse_15s_linear_infinite_2s]">
          <svg width="36" height="20" viewBox="0 0 36 20" className="text-cyan-400/50 opacity-45 hover:opacity-65 transition-opacity">
            <path d="M2 10 Q6 6 12 10 Q18 14 26 10 Q30 8 34 6 L34 8 Q30 12 26 14 Q18 18 12 14 Q6 10 2 14 Z" fill="currentColor" />
            <circle cx="26" cy="8" r="1" fill="white" />
          </svg>
        </div>
        
        {/* Pearl Necklace */}
        <div className="absolute top-1/6 left-1/3 animate-[sway_8s_ease-in-out_infinite]">
          <svg width="60" height="20" viewBox="0 0 60 20" className="text-white/70 opacity-40 hover:opacity-60 transition-opacity">
            <circle cx="5" cy="10" r="3" fill="currentColor" className="drop-shadow-sm" />
            <circle cx="15" cy="12" r="2.5" fill="currentColor" className="drop-shadow-sm" />
            <circle cx="25" cy="14" r="3" fill="currentColor" className="drop-shadow-sm" />
            <circle cx="35" cy="12" r="2.5" fill="currentColor" className="drop-shadow-sm" />
            <circle cx="45" cy="10" r="3" fill="currentColor" className="drop-shadow-sm" />
            <circle cx="55" cy="8" r="2.5" fill="currentColor" className="drop-shadow-sm" />
          </svg>
        </div>
        
        {/* Scattered Pearls */}
        <div className="absolute bottom-1/4 left-1/6 animate-[gentle-bob_6s_ease-in-out_infinite]">
          <svg width="12" height="12" viewBox="0 0 12 12" className="text-white/80 opacity-60 hover:opacity-80 transition-opacity">
            <circle cx="6" cy="6" r="5" fill="currentColor" className="drop-shadow-md" />
            <circle cx="4" cy="4" r="1" fill="rgba(255,255,255,0.8)" />
          </svg>
        </div>
        
        <div className="absolute top-2/3 right-1/3 animate-[gentle-bob_7s_ease-in-out_infinite_1s]">
          <svg width="10" height="10" viewBox="0 0 10 10" className="text-white/75 opacity-55 hover:opacity-75 transition-opacity">
            <circle cx="5" cy="5" r="4" fill="currentColor" className="drop-shadow-md" />
            <circle cx="3.5" cy="3.5" r="0.8" fill="rgba(255,255,255,0.7)" />
          </svg>
        </div>
        
        <div className="absolute bottom-1/6 right-1/5 animate-[gentle-bob_8s_ease-in-out_infinite_2s]">
          <svg width="14" height="14" viewBox="0 0 14 14" className="text-white/70 opacity-50 hover:opacity-70 transition-opacity">
            <circle cx="7" cy="7" r="6" fill="currentColor" className="drop-shadow-lg" />
            <circle cx="5" cy="5" r="1.2" fill="rgba(255,255,255,0.9)" />
          </svg>
        </div>
        
        {/* More scattered starfish */}
        <InteractiveStarfish 
          style={{ top: '10%', right: '40%' }}
          animationDelay="2.5s"
          animationDuration="6.5s"
        />
        
        <InteractiveStarfish 
          style={{ bottom: '10%', left: '60%' }}
          animationDelay="4s"
          animationDuration="8s"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        <div className="mb-8">
          {/* Profile Image with sea-themed border */}
          <div className="relative inline-block mb-6">
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary/20 shadow-2xl object-cover"
            />
            {/* Floating bubbles around profile */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-300/30 rounded-full animate-[float_3s_ease-in-out_infinite]"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400/40 rounded-full animate-[float_4s_ease-in-out_infinite_1s]"></div>
            <div className="absolute top-1/2 -right-4 w-2 h-2 bg-cyan-300/50 rounded-full animate-[float_2s_ease-in-out_infinite_0.5s]"></div>
          </div>
          
          {/* Typing Name Animation */}
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 min-h-[4rem] md:min-h-[6rem] flex items-center justify-center">
              <span className="bg-gradient-to-r from-blue-200 via-cyan-300 to-teal-200 bg-clip-text text-transparent animate-glow">
                {typedText}
              </span>
              {currentIndex < fullName.length && (
                <span className="inline-block w-1 h-12 md:h-16 bg-cyan-400 ml-1 animate-blink"></span>
              )}
            </h1>
            
            {/* Sparkle effects around name */}
            <div className="absolute top-0 left-1/4 animate-[sparkle_2s_ease-in-out_infinite]">
              <Sparkles className="w-6 h-6 text-yellow-300 opacity-70" />
            </div>
            <div className="absolute top-1/2 right-1/4 animate-[sparkle_2s_ease-in-out_infinite_1s]">
              <Sparkles className="w-4 h-4 text-blue-300 opacity-60" />
            </div>
            <div className="absolute bottom-0 left-1/3 animate-[sparkle_2s_ease-in-out_infinite_0.5s]">
              <Sparkles className="w-5 h-5 text-cyan-300 opacity-50" />
            </div>
          </div>
          
          {/* Interactive tagline box */}
          <InteractiveTagline />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="relative">
            <Button 
              variant="deepOcean" 
              size="lg" 
              className="group hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1t78974mftyQxyM6Kwk4XUWc4B0xAe4hR/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setShowHireMePopup(true)}
              >
                <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
                <Download className="w-4 h-4 mr-1 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
            
            {/* Enhanced Hire Me Popup */}
            {showHireMePopup && (
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-gradient-to-r from-cyan-500/90 via-blue-500/90 to-teal-500/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl border border-cyan-400/50 animate-[popup_0.3s_ease-out]">
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-pink-300 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-pink-300 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-pink-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className="text-white font-medium text-sm">Please hire me! 🌊</span>
                    <button
                      onClick={() => setShowHireMePopup(false)}
                      className="ml-2 text-white/70 hover:text-white transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                  {/* Enhanced Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-cyan-500/90"></div>
                </div>
              </div>
            )}
          </div>
          
          <Button variant="glass" size="lg" className="hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300" asChild>
            <a
              href="https://github.com/sneharc16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
          
          <Button variant="glass" size="lg" className="hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300" asChild>
            <a
              href="https://www.linkedin.com/in/snehaaroychowdhury/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          
          <Button variant="glass" size="lg" className="hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300" asChild>
            <a href="mailto:sneharc.work@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </a>
          </Button>
        </div>

        {/* Enhanced scroll indicator with sea theme */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/40 rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-2 animate-pulse"></div>
            {/* Small wave indicators */}
            <div className="absolute -left-2 top-1/2 text-cyan-400/30">〰️</div>
            <div className="absolute -right-2 top-1/2 text-cyan-400/30">〰️</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;