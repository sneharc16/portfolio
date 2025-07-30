
import React, { useState } from 'react';
import { Sparkles, Code, Brain, Trophy } from 'lucide-react';

const InteractiveTagline = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative p-6 md:p-8 rounded-xl bg-slate-900/90 border border-slate-700/50 transition-all duration-300 mb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-bioluminescent rounded-full opacity-30 animate-float ${
              isHovered ? 'animate-pulse' : ''
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className={`transition-all duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
            <Sparkles className="w-6 h-6 text-bioluminescent" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white text-center">
            Aspiring Software Engineer | SIH'24 Winner | ICPC'24 Regionalist | 4* (max.1841) @Codechef | Research Intern @DRDO, DTU | 8x Business/Product Comp Wins | Finance Enthusiast | B.Tech ECE-AI @IGDTUW'27
          </h3>
          <div className={`transition-all duration-300 ${isHovered ? '-rotate-12 scale-110' : ''}`}>
            <Code className="w-6 h-6 text-primary" />
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-base md:text-lg text-white/90 leading-relaxed text-center">
            Penultimate-year engineering student passionate about software development, product analytics, and applied research. 
            Building projects in computer vision, deep learning, and full-stack development with 500+ competitive programming problems solved 
            and multiple hackathon wins including Smart India Hackathon 2024.
          </p>
        </div>

      </div>
    </div>
  );
};

export default InteractiveTagline;
