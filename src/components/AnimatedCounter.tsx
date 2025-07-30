import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  endValue: string;
  displayValue?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  endValue, 
  displayValue: customDisplayValue,
  duration = 2000, 
  className = '' 
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounter();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const numericPart = endValue.match(/\d+/)?.[0] || '0';
    const suffix = endValue.replace(numericPart, '');
    const target = parseInt(numericPart);
    
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setDisplayValue(customDisplayValue || endValue);
        clearInterval(timer);
      } else {
        if (customDisplayValue && start >= target * 0.9) {
          setDisplayValue(customDisplayValue);
        } else {
          setDisplayValue(Math.floor(start) + suffix);
        }
      }
    }, 16);
  };

  return (
    <div ref={counterRef} className={className}>
      {displayValue}
    </div>
  );
};

export default AnimatedCounter;