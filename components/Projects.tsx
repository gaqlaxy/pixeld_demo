import React, { useLayoutEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  onProjectClick: (id: number) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const projects = gsap.utils.toArray<HTMLElement>('.project-card');
      
      projects.forEach((project, i) => {
        gsap.from(project, {
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: i % 2 === 0 ? 0 : 0.2 // Stagger effect for grid
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-brand-black">
      <div className="flex justify-between items-end mb-20">
        <div>
           <span className="block text-brand-accent font-mono text-sm mb-4 tracking-widest uppercase">
            02 / Selected Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </div>
        <button className="hidden md:flex items-center gap-2 text-white hover:text-brand-accent transition-colors">
          View all projects <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="project-card group cursor-pointer"
            onClick={() => onProjectClick(project.id)}
          >
            <div className="relative overflow-hidden aspect-[4/3] mb-6 rounded-lg bg-gray-900">
              <div className="absolute inset-0 bg-brand-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-4 right-4 z-20 bg-brand-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight size={24} />
              </div>
            </div>
            
            <div className="flex justify-between items-start border-b border-gray-800 pb-4 group-hover:border-brand-accent transition-colors duration-500">
              <div>
                <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                <p className="text-gray-500 font-mono text-sm">{project.category}</p>
              </div>
              <span className="text-gray-600 font-mono">{project.year}</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm max-w-md line-clamp-2">
              {project.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center md:hidden">
        <button className="inline-flex items-center gap-2 text-white hover:text-brand-accent">
            View all projects <ArrowUpRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Projects;