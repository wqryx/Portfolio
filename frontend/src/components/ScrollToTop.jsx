import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Ocultar el botón después de un breve delay cuando llegue arriba
    setTimeout(() => {
      setIsScrolling(false);
      setIsVisible(false);
    }, 1000);
  };

  return (
    <>
      {isVisible && !isScrolling && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full shadow-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-emerald-500/25"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;