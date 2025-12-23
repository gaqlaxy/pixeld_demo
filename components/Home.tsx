import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Services from './Services';
import Contact from './Contact';

interface HomeProps {
  onProjectClick: (id: number) => void;
}

const Home: React.FC<HomeProps> = ({ onProjectClick }) => {
  return (
    <div id="home">
      <Hero />
      <About />
      <Projects onProjectClick={onProjectClick} />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;