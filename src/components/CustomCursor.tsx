
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', hideCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-[9999] transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <img
        src="https://apply.hackthenorth.com/static/media/fish.ab7708f5.webp"
        alt="Fish cursor"
        className="w-16 h-16 animate-float"
        style={{ filter: 'drop-shadow(0 0 15px rgba(0, 200, 255, 0.7))' }}
      />
    </div>
  );
};

export default CustomCursor;
