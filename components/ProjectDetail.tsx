import React, { useLayoutEffect, useRef } from 'react';
import { Project } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".detail-anim", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
      });

      gsap.from(".gallery-img", {
        scrollTrigger: {
          trigger: ".gallery",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, containerRef);
    
    // Scroll to top on mount
    window.scrollTo(0, 0);

    return () => ctx.revert();
  }, [project]);

  return (
    <div ref={containerRef} className="bg-brand-black min-h-screen text-white pb-32 pt-32 px-6 md:px-12 lg:px-24">
      
      <button 
        onClick={onBack}
        className="detail-anim inline-flex items-center gap-2 text-gray-500 hover:text-brand-accent transition-colors mb-12 uppercase font-mono text-sm tracking-widest"
      >
        <ArrowLeft size={16} /> Back to Projects
      </button>

      <header className="mb-20">
        <h1 className="detail-anim text-5xl md:text-8xl font-display font-bold text-white mb-8 tracking-tighter">
          {project.title}
        </h1>
        <div className="detail-anim flex flex-wrap gap-8 md:gap-20 border-t border-gray-800 pt-8">
          <div>
            <span className="block text-gray-500 font-mono text-xs uppercase mb-2">Category</span>
            <span className="text-xl font-display">{project.category}</span>
          </div>
          <div>
            <span className="block text-gray-500 font-mono text-xs uppercase mb-2">Year</span>
            <span className="text-xl font-display">{project.year}</span>
          </div>
          <div>
            <span className="block text-gray-500 font-mono text-xs uppercase mb-2">Client</span>
            <span className="text-xl font-display">{project.client || "Confidential"}</span>
          </div>
        </div>
      </header>

      <div className="detail-anim w-full aspect-video rounded-lg overflow-hidden mb-24">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
        <div className="lg:col-span-1">
          <h3 className="detail-anim text-2xl font-display font-bold mb-4 text-brand-accent">The Challenge</h3>
          <p className="detail-anim text-gray-400 leading-relaxed">
            {project.description}
          </p>
          
          <div className="mt-8">
             <span className="block text-gray-500 font-mono text-xs uppercase mb-2">Role</span>
             <p className="text-white">{project.role || "Development"}</p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <h3 className="detail-anim text-2xl font-display font-bold mb-4 text-brand-accent">Our Solution</h3>
          <p className="detail-anim text-xl text-gray-300 leading-relaxed font-light">
            {project.longDescription || project.description}
          </p>
        </div>
      </div>

      {project.gallery && (
        <div className="gallery grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.map((img, idx) => (
            <div key={idx} className="gallery-img rounded-lg overflow-hidden aspect-[4/3]">
              <img 
                src={img} 
                alt={`${project.title} gallery ${idx + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default ProjectDetail;