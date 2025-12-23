import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation simulation (without SplitText plugin)
      const tl = gsap.timeline();

      tl.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      })
      .from(".hero-sub", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5")
      .from(".hero-cta", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      }, "-=0.3");

      gsap.to(".scroll-indicator", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden pt-20">
      
      {/* Background Abstract Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="z-10 text-center max-w-6xl mx-auto">
        <div className="overflow-hidden mb-2">
          <h1 className="hero-line font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[1.1]">
            WE CRAFT
          </h1>
        </div>
        <div className="overflow-hidden mb-2">
          <h1 className="hero-line font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600 leading-[1.1]">
            DIGITAL DREAMS
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <h1 className="hero-line font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-brand-accent leading-[1.1]">
            INTO REALITY
          </h1>
        </div>

        <p className="hero-sub text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
          pixeldperfect is a creative development agency obsessed with performance, animation, and user experience.
        </p>

        <div className="hero-cta">
          <a 
            href="#work" 
            className="inline-flex items-center gap-3 bg-white text-brand-black px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent transition-colors duration-300"
          >
            View Our Work
            <ArrowDown size={20} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 scroll-indicator">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Scroll</p>
        <ArrowDown className="mx-auto text-brand-accent" size={20} />
      </div>
    </section>
  );
};

export default Hero;