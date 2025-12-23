import React, { useLayoutEffect, useRef } from 'react';
import { SERVICES } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, PenTool, Target, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'code': return <Code size={32} className="text-brand-accent" />;
      case 'pen-tool': return <PenTool size={32} className="text-brand-accent" />;
      case 'target': return <Target size={32} className="text-brand-accent" />;
      case 'zap': return <Zap size={32} className="text-brand-accent" />;
      default: return <Code size={32} className="text-brand-accent" />;
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-32 px-6 md:px-12 lg:px-24 bg-brand-gray relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent opacity-5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 text-center">
           <span className="block text-brand-accent font-mono text-sm mb-4 tracking-widest uppercase">
            03 / What we do
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Our Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="service-item p-8 bg-brand-black/50 border border-white/5 backdrop-blur-sm rounded-xl hover:border-brand-accent/30 transition-colors duration-300">
              <div className="mb-6 p-4 bg-brand-black rounded-lg inline-block border border-white/10">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-display">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;