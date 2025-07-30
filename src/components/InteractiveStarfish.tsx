
import React from 'react';

interface InteractiveStarfishProps {
  style: React.CSSProperties;
  animationDelay: string;
  animationDuration: string;
}

const InteractiveStarfish: React.FC<InteractiveStarfishProps> = ({
  style,
  animationDelay,
  animationDuration
}) => {
  const playStarfishSound = () => {
    // Create a simple bubble/pop sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Create a bubble-like sound
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.3);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.type = 'sine';
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  return (
    <div
      className="absolute animate-float opacity-60 cursor-pointer hover:opacity-80 transition-opacity pointer-events-auto"
      style={{
        ...style,
        animationDelay,
        animationDuration,
      }}
      onClick={playStarfishSound}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" className="text-coral animate-glow">
        <path
          fill="currentColor"
          d="M12 2l2.4 7.4h7.8l-6.3 4.6 2.4 7.4L12 17l-6.3 4.4 2.4-7.4L1.8 9.4h7.8L12 2z"
        />
      </svg>
    </div>
  );
};

export default InteractiveStarfish;
