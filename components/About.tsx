import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });
      
      gsap.to(".about-line", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        width: "100%",
        ease: "none"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 bg-brand-black relative">
      <div className="max-w-4xl">
        <span className="about-text block text-brand-accent font-mono text-sm mb-6 tracking-widest uppercase">
          01 / Who we are
        </span>
        
        <h2 className="about-text font-display text-4xl md:text-6xl font-bold leading-tight mb-8">
          We bridge the gap between <span className="text-gray-500">design</span> and <span className="text-gray-500">technology</span>.
        </h2>
        
        <p className="about-text text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
          At pixeldperfect, we don't just write code; we choreograph pixels. We believe that the web should be an immersive playground, not just a static document. Our team of engineers and artists work in unison to deliver websites that feel alive.
        </p>

        <div className="about-text flex gap-12">
          <div>
            <h3 className="text-3xl font-display font-bold text-white mb-2">50+</h3>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Projects Shipped</p>
          </div>
          <div>
            <h3 className="text-3xl font-display font-bold text-white mb-2">100%</h3>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Client Satisfaction</p>
          </div>
        </div>
      </div>
      
      <div className="w-0 h-[1px] bg-gray-800 mt-32 about-line"></div>
    </section>
  );
};

export default About;