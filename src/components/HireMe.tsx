
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Heart, Sparkles, Mail, Phone, Calendar, Star } from 'lucide-react';

const HireMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="bioluminescent"
          size="lg"
          className="w-full sm:w-auto text-sm sm:text-base relative animate-pulse hover:animate-none hover:scale-110 transition-all duration-300"
        >
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-3 h-3 text-yellow-400 animate-spin" />
          </div>
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-pink-300" />
          Hire Me!
          <Star className="w-3 h-3 ml-2 text-yellow-300 animate-bounce" />
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-background via-card to-background border-2 border-bioluminescent/30 shadow-2xl shadow-bioluminescent/20">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-bioluminescent/20 rounded-full flex items-center justify-center animate-pulse">
            <Heart className="w-8 h-8 text-bioluminescent animate-bounce" />
          </div>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-bioluminescent to-coral bg-clip-text text-transparent">
            Let's Work Together! ✨
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="text-center">
            <p className="text-gray-200 mb-4">
              Ready to bring your ideas to life? I'm excited to collaborate on amazing projects!
            </p>
            <div className="flex justify-center space-x-2 mb-4">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <Star className="w-4 h-4 text-bioluminescent animate-bounce" />
              <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-3">
            <Button
              variant="ocean"
              className="w-full justify-start hover:scale-105 transition-transform"
              asChild
            >
              <a href="mailto:sneharc.work@gmail.com">
                <Mail className="w-4 h-4 mr-3" />
                Email Me Directly
              </a>
            </Button>
            
            <Button
              variant="glass"
              className="w-full justify-start hover:scale-105 transition-transform"
              asChild
            >
              <a href="https://linkedin.com/in/sneharoychowdhury" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-3" />
                Schedule a Call
              </a>
            </Button>
          </div>
          
          <div className="bg-card/30 rounded-lg p-4 border border-border/20">
            <h4 className="font-semibold text-white mb-2 flex items-center">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              What I Can Help With:
            </h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• AI/ML Solutions & Research</li>
              <li>• Full-Stack Development</li>
              <li>• Competitive Programming</li>
              <li>• Technical Consulting</li>
            </ul>
          </div>
          
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-2">Available for freelance & full-time opportunities</p>
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Heart key={i} className="w-3 h-3 text-pink-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HireMe;
