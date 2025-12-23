import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import ProjectDetail from './components/ProjectDetail';
import { PROJECTS } from './constants';

type View = 'home' | { type: 'project', id: number };

function App() {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<View>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (href: string) => {
    // Basic router logic
    if (href === '#home') {
      setCurrentView('home');
      setTimeout(() => {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else if (href.startsWith('#')) {
      setCurrentView('home');
      // Wait for view to switch then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleProjectClick = (id: number) => {
    setCurrentView({ type: 'project', id });
  };

  const renderContent = () => {
    if (currentView === 'home') {
      return <Home onProjectClick={handleProjectClick} />;
    }
    
    if (currentView.type === 'project') {
      const project = PROJECTS.find(p => p.id === currentView.id);
      if (project) {
        return <ProjectDetail project={project} onBack={() => setCurrentView('home')} />;
      }
      return <div className="pt-32 text-center">Project Not Found</div>;
    }
  };

  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-accent selection:text-brand-black">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      <CustomCursor isMenuOpen={isMenuOpen} />
      
      <Navbar 
        onNavigate={handleNavigate} 
        isMenuOpen={isMenuOpen} 
        onMenuToggle={setIsMenuOpen} 
      />
      
      <main>
        {renderContent()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;