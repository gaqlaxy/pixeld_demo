import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { NAV_ITEMS } from '../constants';
import { X } from 'lucide-react';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.to(menuRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.8,
          ease: "power4.inOut",
          pointerEvents: "auto"
        });
        
        gsap.from(".menu-item", {
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3
        });
      } else {
        gsap.to(menuRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.8,
          ease: "power4.inOut",
          pointerEvents: "none"
        });
      }
    });

    return () => ctx.revert();
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      onNavigate(href);
    }, 800); // Wait for menu close animation
  };

  return (
    <div 
      ref={menuRef} 
      className="fixed inset-0 z-[100] bg-brand-accent flex items-center justify-center"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", pointerEvents: "none" }}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-brand-black text-white hover:scale-110 transition-transform"
      >
        <X size={24} />
      </button>

      <div ref={contentRef} className="flex flex-col gap-4 items-center">
        {NAV_ITEMS.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={(e) => handleLinkClick(e, item.href)}
            className="menu-item block text-5xl md:text-8xl font-display font-bold text-brand-black hover:text-white transition-colors uppercase tracking-tighter"
          >
            {item.label}
          </a>
        ))}
        
        <div className="menu-item mt-12 flex gap-8 text-brand-black/60 font-mono text-sm uppercase">
          <a href="#" className="hover:text-brand-black">Twitter</a>
          <a href="#" className="hover:text-brand-black">Instagram</a>
          <a href="#" className="hover:text-brand-black">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Menu;