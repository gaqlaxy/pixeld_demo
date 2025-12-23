import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Counter simulation
    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (counter === 100) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.style.display = 'none';
            }
            onComplete();
          }
        });

        tl.to(".counter", {
          opacity: 0,
          duration: 0.5,
          delay: 0.2
        })
        .to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut"
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, [counter, onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[10000] bg-brand-black flex flex-col justify-between p-8 text-white">
      <div className="flex justify-between items-start">
         <span className="font-display font-bold">pixeldperfect.</span>
         <span className="font-mono text-xs">EST. 2024</span>
      </div>
      
      <div className="text-center">
        <h1 ref={textRef} className="font-display text-4xl md:text-6xl font-bold tracking-tighter opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          CREATIVE DEVELOPER
        </h1>
      </div>

      <div className="flex justify-between items-end">
        <span className="font-mono text-xs">LOADING ASSETS</span>
        <span className="counter font-display text-8xl md:text-9xl font-bold text-brand-accent">
          {Math.min(counter, 100)}%
        </span>
      </div>
    </div>
  );
};

export default Preloader;