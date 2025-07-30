
import React from 'react';
import fishImage from '@/assets/fish-1.png';
import jellyfishImage from '@/assets/jellyfish-1.png';
import seahorseImage from '@/assets/seahorse-1.png';
import InteractiveStarfish from './InteractiveStarfish';

const UnderwaterScene = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Enhanced flowing water waves with ocean current effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`water-wave-${i}`}
            className="absolute w-full opacity-20 animate-wave"
            style={{
              height: '2px',
              background: 'linear-gradient(90deg, transparent 0%, hsl(var(--bioluminescent) / 0.4) 20%, hsl(var(--ocean-surface) / 0.6) 50%, hsl(var(--bioluminescent) / 0.4) 80%, transparent 100%)',
              top: `${10 + i * 6}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
              transform: `translateX(${Math.sin(i) * 20}px)`,
            }}
          />
        ))}
      </div>

      {/* Ocean current simulation */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={`current-${i}`}
            className="absolute animate-flow opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 6}s`,
            }}
          >
            <div 
              className="bg-gradient-to-r from-transparent via-ocean-surface/40 to-transparent h-px"
              style={{ width: `${30 + Math.random() * 80}px` }}
            />
          </div>
        ))}
      </div>

      {/* Enhanced bubbles with more variety and movement */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full animate-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${3 + Math.random() * 10}s`,
              width: `${3 + Math.random() * 18}px`,
              height: `${3 + Math.random() * 18}px`,
              background: `radial-gradient(circle, hsl(var(--bioluminescent) / ${0.05 + Math.random() * 0.4}), transparent)`,
              border: `1px solid hsl(var(--ocean-surface) / ${0.15 + Math.random() * 0.4})`,
            }}
          />
        ))}
      </div>

      {/* Enhanced bioluminescent particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-swim"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          >
            <div className="w-1 h-1 bg-bioluminescent rounded-full animate-glow" 
                 style={{ 
                   filter: 'drop-shadow(0 0 12px hsl(var(--bioluminescent)))',
                   animationDelay: `${Math.random() * 3}s` 
                 }} />
          </div>
        ))}
      </div>

      {/* Swimming fish - more variety and natural movement */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`fish-${i}`}
          className="absolute animate-swim opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${20 + Math.random() * 60}%`,
            width: `${40 + Math.random() * 30}px`,
            height: `${20 + Math.random() * 15}px`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          <img 
            src={fishImage} 
            alt="" 
            className="w-full h-full object-contain animate-float"
            style={{ 
              animationDelay: `${i * 0.3}s`,
              filter: `hue-rotate(${Math.random() * 360}deg) drop-shadow(0 0 8px rgba(0, 200, 255, 0.4)) brightness(1.2) contrast(1.3)`,
              transform: Math.random() > 0.5 ? 'scaleX(-1)' : 'scaleX(1)',
              mixBlendMode: 'screen',
              opacity: 0.9
            }}
          />
        </div>
      ))}

      {/* Floating jellyfish - more graceful movement */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`jellyfish-${i}`}
          className="absolute animate-float opacity-50"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${15 + Math.random() * 70}%`,
            width: `${30 + Math.random() * 25}px`,
            height: `${40 + Math.random() * 30}px`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
          <img 
            src={jellyfishImage} 
            alt="" 
            className="w-full h-full object-contain animate-glow"
            style={{ 
              animationDelay: `${i * 0.5}s`,
              filter: `hue-rotate(${Math.random() * 180}deg) drop-shadow(0 0 15px rgba(180, 100, 255, 0.5)) brightness(1.1) contrast(1.2)`,
              mixBlendMode: 'screen',
              opacity: 0.8
            }}
          />
        </div>
      ))}

      {/* Seahorses - elegant positioning */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={`seahorse-${i}`}
          className="absolute animate-float opacity-65"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${25 + Math.random() * 50}%`,
            width: `${25 + Math.random() * 20}px`,
            height: `${35 + Math.random() * 25}px`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${5 + Math.random() * 3}s`,
          }}
        >
          <img 
            src={seahorseImage} 
            alt="" 
            className="w-full h-full object-contain animate-glow"
            style={{ 
              animationDelay: `${i * 0.4}s`,
              filter: `hue-rotate(${Math.random() * 120}deg) drop-shadow(0 0 12px rgba(255, 200, 100, 0.5)) brightness(1.1) contrast(1.2)`,
              transform: Math.random() > 0.5 ? 'scaleX(-1)' : 'scaleX(1)',
              mixBlendMode: 'screen',
              opacity: 0.85
            }}
          />
        </div>
      ))}

      {/* Interactive starfish - more spread out */}
      {Array.from({ length: 12 }).map((_, i) => (
        <InteractiveStarfish
          key={`starfish-${i}`}
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
          animationDelay={`${Math.random() * 6}s`}
          animationDuration={`${4 + Math.random() * 3}s`}
        />
      ))}

      {/* Various sea creatures - octopi, crabs, sea anemones */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`sea-creature-${i}`}
          className="absolute animate-float opacity-40"
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
          {i % 3 === 0 ? (
            // Octopus
            <svg width="28" height="28" viewBox="0 0 32 32" className="text-purple-400 animate-glow">
              <circle cx="16" cy="12" r="8" fill="currentColor" opacity="0.7" />
              <path d="M8 16 Q6 20 8 26 Q10 22 12 26 Q14 22 16 26 Q18 22 20 26 Q22 22 24 26 Q26 20 24 16" 
                    stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
            </svg>
          ) : i % 3 === 1 ? (
            // Sea anemone
            <svg width="24" height="32" viewBox="0 0 24 32" className="text-green-400 animate-wave">
              {Array.from({ length: 8 }).map((_, j) => (
                <path
                  key={j}
                  d={`M12 32 Q${8 + j} ${20 - j * 2} 12 8`}
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.6"
                  style={{ animationDelay: `${j * 0.1}s` }}
                />
              ))}
              <circle cx="12" cy="28" r="4" fill="currentColor" opacity="0.4" />
            </svg>
          ) : (
            // Crab
            <svg width="32" height="20" viewBox="0 0 32 20" className="text-coral animate-float">
              <ellipse cx="16" cy="12" rx="8" ry="6" fill="currentColor" opacity="0.6" />
              <path d="M4 8 Q6 6 8 8 M24 8 Q26 6 28 8" stroke="currentColor" strokeWidth="2" opacity="0.7" />
              <circle cx="12" cy="10" r="1" fill="currentColor" />
              <circle cx="20" cy="10" r="1" fill="currentColor" />
            </svg>
          )}
        </div>
      ))}

      {/* Enhanced seaweed forest with more natural movement */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`seaweed-${i}`}
            className="absolute bottom-0 animate-wave opacity-30"
            style={{
              left: `${2 + Math.random() * 96}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          >
            <div 
              className="bg-gradient-to-t from-seaweed via-seaweed/60 to-seaweed/20 rounded-t-full origin-bottom animate-wave"
              style={{ 
                width: `${2 + Math.random() * 6}px`,
                height: `${20 + Math.random() * 80}px`,
                filter: 'drop-shadow(0 0 8px rgba(0, 255, 100, 0.3))',
                transform: `rotate(${-15 + Math.random() * 30}deg)`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Dynamic light rays that follow scroll */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-ocean-surface/30 via-ocean-surface/10 to-transparent opacity-50 animate-wave" />
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-bioluminescent/25 via-bioluminescent/8 to-transparent opacity-35 animate-wave" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-ocean-surface/35 via-ocean-surface/12 to-transparent opacity-40 animate-wave" style={{ animationDelay: '2.5s' }} />
      <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-bioluminescent/20 via-transparent to-transparent opacity-30 animate-wave" style={{ animationDelay: '3.5s' }} />
      <div className="absolute top-0 right-1/5 w-px h-full bg-gradient-to-b from-primary/15 via-transparent to-transparent opacity-25 animate-wave" style={{ animationDelay: '0.8s' }} />
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-accent/20 via-transparent to-transparent opacity-28 animate-wave" style={{ animationDelay: '4s' }} />
      <div className="absolute top-0 left-1/8 w-px h-full bg-gradient-to-b from-coral/18 via-transparent to-transparent opacity-22 animate-wave" style={{ animationDelay: '2.2s' }} />
      
      {/* Additional flowing light beams for depth */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`light-beam-${i}`}
          className="absolute top-0 w-px h-full bg-gradient-to-b from-bioluminescent/10 via-transparent to-transparent opacity-15 animate-wave"
          style={{
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default UnderwaterScene;
