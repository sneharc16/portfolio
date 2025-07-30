
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Eye, ExternalLink, Download, Sparkles, Star, Heart } from 'lucide-react';

const Resume = () => {
  const [isHovered, setIsHovered] = useState(false);
  const resumeUrl = 'https://drive.google.com/file/d/1t78974mftyQxyM6Kwk4XUWc4B0xAe4hR/view?usp=share_link';

  const handleView = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="resume" className="py-10 sm:py-20 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 animate-glow">
            Resume
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto px-4">
            View my complete professional resume
          </p>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-start">
            
            {/* Left Message Box - Software Developer */}
            <Card className="card-gradient border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute top-3 right-3 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1 right-1 w-2 h-2 bg-green-600 rounded-full"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <div className="text-xl sm:text-2xl">💻</div>
                  <CardTitle className="text-sm sm:text-lg text-white">Why You Should Hire Me – Software Developer Edition</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-200 leading-relaxed space-y-2">
                <p>I write code like poetry and debug like a detective.</p>
                <p>I think in edge cases, dream in algorithms, and ship like it's second nature.</p>
                <p>From cracking 500+ problems to mentoring students in ML & CP — I bring both depth and dazzle.</p>
                <p>Hire me if you want someone who makes your codebase cleaner, smarter, and a little more legendary.</p>
              </CardContent>
            </Card>

            {/* Center - Interactive Resume Preview Card */}
            <Card 
              className="card-gradient border-2 border-blue-900 hover:border-blue-700 transition-all duration-500 hover:scale-105 relative overflow-hidden group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
            {/* Animated background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-bioluminescent/10 to-ocean-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-transparent via-primary/5 to-transparent rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            
            <CardHeader className="text-center relative z-10">
              <div className="flex justify-center mb-4 relative">
                <div className="relative">
                  <FileText className={`w-12 h-12 text-bioluminescent transition-all duration-300 ${isHovered ? 'animate-bounce' : 'animate-glow'}`} />
                  {isHovered && (
                    <div className="absolute -top-2 -right-2">
                      <Sparkles className="w-6 h-6 text-yellow-400 animate-spin" />
                    </div>
                  )}
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-white mb-2">
                Professional Resume
              </CardTitle>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 transition-all duration-300 ${
                      isHovered ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
                    }`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              <p className="text-gray-200">
                Complete overview of my skills, experience, and achievements
              </p>
            </CardHeader>

            <CardContent className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Format:</span>
                    <span className="text-white font-medium bg-primary/20 px-2 py-1 rounded">PDF</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Status:</span>
                    <span className="text-green-400 font-medium flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Updated
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Quality:</span>
                    <span className="text-bioluminescent font-medium">Premium</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Views:</span>
                    <span className="text-white font-medium">1000+</span>
                  </div>
                </div>
              </div>

              {/* Progress bar animation */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Completeness</span>
                  <span className="text-bioluminescent">100%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-2 bg-gradient-to-r from-primary to-bioluminescent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isHovered ? '100%' : '0%' }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button 
                  variant="ocean" 
                  onClick={handleView}
                  className="w-full group/btn relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-bioluminescent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <Eye className="w-4 h-4 mr-2 relative z-10 group-hover/btn:animate-pulse" />
                  <span className="relative z-10">View Resume</span>
                  <Sparkles className="w-4 h-4 ml-2 relative z-10 group-hover/btn:animate-spin" />
                </Button>
                
              </div>

              {/* Testimonial */}
              <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Heart className="w-4 h-4 text-pink-400" />
                  <span className="text-sm text-gray-300 italic">"A comprehensive showcase of talent"</span>
                  <Heart className="w-4 h-4 text-pink-400" />
                </div>
              </div>
            </CardContent>
            </Card>

            {/* Right Message Box - Product Edition */}
            <Card className="card-gradient border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
              <div className="absolute top-3 right-3 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1 right-1 w-2 h-2 bg-green-600 rounded-full"></div>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <div className="text-xl sm:text-2xl">📦</div>
                  <CardTitle className="text-sm sm:text-lg text-white">Why You Should Hire Me – Product Edition</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-gray-200 leading-relaxed space-y-2">
                <p>I don't just build products — I get what people need before they do.</p>
                <p>I've led winning teams, launched things people actually use, and turned messy problems into lovable solutions.</p>
                <p>Fast-moving, insight-driven, and allergic to fluff — I bring product sense with founder energy.</p>
                <p>Hire me if you want someone who blends strategy, storytelling, and scrappiness into every release.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Actions */}
        <div className="mt-12 text-center">
          <Card className="card-gradient border border-border/30 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <p className="text-gray-200 mb-4">
                Need a different format or have questions about my background?
              </p>
              <Button variant="glass" asChild>
                <a href="mailto:sneharc.work@gmail.com" className="text-white hover:text-bioluminescent transition-colors">
                  Get in Touch
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;
