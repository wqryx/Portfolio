import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import * as THREE from 'three';

const Hero = ({ data }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = data.title;

  const canvasRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const mouseMoved = useRef(false);

  useEffect(() => {
    // Lógica del fondo 3D (three.js)
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const particles = new THREE.BufferGeometry();
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const color = new THREE.Color();
    const maxRange = 500;

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * maxRange;
      positions[i + 1] = (Math.random() - 0.5) * maxRange;
      positions[i + 2] = (Math.random() - 0.5) * maxRange;
      
      // Asigna un color gris aleatorio a las partículas
      const grayValue = Math.random() * 0.3 + 0.7; // Rango de gris claro a blanco
      color.setRGB(grayValue, grayValue, grayValue);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      sizeAttenuation: true
    });

    const particleMesh = new THREE.Points(particles, particleMaterial);
    scene.add(particleMesh);

    camera.position.z = 100;

    const handleMouseMove = (event) => {
      mouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
      mouseMoved.current = true;
    };

    let mouseMoveTimer;
    const resetMouseMoved = () => {
      clearTimeout(mouseMoveTimer);
      mouseMoveTimer = setTimeout(() => {
        mouseMoved.current = false;
      }, 100);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', resetMouseMoved);

    const animate = () => {
      requestAnimationFrame(animate);

      if (mouseMoved.current) {
        // Sigue al ratón con un movimiento suave
        particleMesh.rotation.y += (mouseX.current * 0.5 - particleMesh.rotation.y) * 0.05;
        particleMesh.rotation.x += (mouseY.current * 0.5 - particleMesh.rotation.x) * 0.05;
      } else {
        // Movimiento automático si el ratón está quieto
        particleMesh.rotation.x += 0.0005;
        particleMesh.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', resetMouseMoved);
      window.removeEventListener('resize', handleResize);
      // Opcional: limpiar la escena Three.js si es necesario
      // renderer.dispose(); // This line was commented out in the new_code, so it's removed.
      // geometry.dispose(); // This line was commented out in the new_code, so it's removed.
      // material.dispose(); // This line was commented out in the new_code, so it's removed.
    };
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Nuevo fondo Three.js */}
      <canvas 
        id="bg-canvas" 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0 opacity-20 transition-opacity duration-500"
      ></canvas>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Saludo */}
        <div className="mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
          <p className="text-emerald-400 font-medium text-lg mb-2">¡Hola! Soy</p>
        </div>

        {/* Nombre */}
        <div className="mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            {data.name}
          </h1>
        </div>

        {/* Título con efecto typewriter */}
        <div className="mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
          <h2 className="text-2xl md:text-4xl font-light text-gray-300 min-h-[3rem]">
            {displayedText}
            <span className="animate-pulse text-emerald-400">|</span>
          </h2>
        </div>

        {/* Descripción */}
        <div className="mb-12 opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Apasionado por crear soluciones innovadoras y experiencias digitales excepcionales. 
            Especializado en desarrollo full-stack con tecnologías modernas.
          </p>
        </div>

        {/* Enlaces sociales */}
        <div className="mb-16 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
          <div className="flex justify-center space-x-6">
            <a 
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-gray-600 hover:border-purple-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-400/25"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
            <a 
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full border border-gray-600 hover:border-cyan-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/25"
            >
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
            <a 
              href={`mailto:${data.email}`}
              className="group p-3 rounded-full border border-gray-600 hover:border-yellow-400 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/25"
            >
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Botón scroll */}
        <div className="opacity-0 animate-[fadeInUp_1s_ease-out_1.2s_forwards]">
          <button
            onClick={scrollToNext}
            className="group flex flex-col items-center text-gray-400 hover:text-emerald-400 transition-all duration-300"
          >
            <span className="text-sm font-medium mb-2">Explorar</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-emerald-400" />
          </button>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;