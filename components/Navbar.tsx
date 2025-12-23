import React, { useLayoutEffect, useRef } from 'react';
import { NAV_ITEMS } from '../constants';
import gsap from 'gsap';
import Menu from './Menu';

interface NavbarProps {
  onNavigate: (href: string) => void;
  isMenuOpen: boolean;
  onMenuToggle: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, isMenuOpen, onMenuToggle }) => {
  const navRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-item", {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 2.5 // Delay for preloader
      });
      
      gsap.from(".logo", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 2.2 // Delay for preloader
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <>
      <nav ref={navRef} className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="logo text-2xl font-display font-bold tracking-tighter hover:text-brand-accent transition-colors">
          pixeldperfect.
        </a>
        
        <div className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="nav-item font-medium text-sm tracking-wide hover:text-brand-accent transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button 
          className="nav-item text-white hover:text-brand-accent transition-colors"
          onClick={() => onMenuToggle(true)}
        >
          <div className="space-y-1.5 group">
            <span className="block w-8 h-0.5 bg-current transition-all group-hover:w-6 ml-auto"></span>
            <span className="block w-8 h-0.5 bg-current transition-all group-hover:w-8"></span>
            <span className="block w-8 h-0.5 bg-current transition-all group-hover:w-4 ml-auto"></span>
          </div>
        </button>
      </nav>

      <Menu 
        isOpen={isMenuOpen} 
        onClose={() => onMenuToggle(false)} 
        onNavigate={onNavigate} 
      />
    </>
  );
};

export default Navbar;