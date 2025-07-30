import React from 'react';

const WaterDroplets = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Floating bubbles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-400/10 animate-float-bubble"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            width: `${8 + Math.random() * 16}px`,
            height: `${8 + Math.random() * 16}px`,
          }}
        />
      ))}
      
      {/* Water ripples */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`ripple-${i}`}
          className="absolute rounded-full border border-blue-300/20 animate-ripple"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default WaterDroplets;