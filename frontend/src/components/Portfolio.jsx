import React, { useState, useEffect } from 'react';
import { mockData } from '../mock';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Technologies from './Technologies';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Cargando portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Hero data={mockData.personalInfo} />
      <About data={mockData.personalInfo} />
      <Technologies data={mockData.technologies} />
      <Projects data={mockData.projects} />
      <Experience data={mockData.experience} education={mockData.education} />
      <Contact data={mockData.personalInfo} />
      <ScrollToTop />
    </div>
  );
};

export default Portfolio;