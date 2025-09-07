import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Contenido principal del footer */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="md:col-span-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              &lt;/&gt;
            </div>
            <p className="text-gray-400 mb-4">
              Desarrollador Full-Stack apasionado por crear soluciones innovadoras y experiencias digitales excepcionales.
            </p>
            <div className="flex space-x-4">
              <a 
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-emerald-400/30 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
              </a>
              <a 
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
              <a 
                href={`mailto:${data.email}`}
                className="p-2 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-purple-400/30 transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <nav className="space-y-2">
              {[
                { label: 'Sobre mí', href: '#about' },
                { label: 'Tecnologías', href: '#technologies' },
                { label: 'Proyectos', href: '#projects' },
                { label: 'Experiencia', href: '#experience' },
                { label: 'Contacto', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Información de contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              <p>{data.email}</p>
              <p>{data.phone}</p>
              <p>{data.location}</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Disponible para proyectos freelance y oportunidades de trabajo.
              </p>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p className="flex items-center">
                © {currentYear} {data.name}. Hecho con 
                <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" />
                y mucho café ☕
              </p>
            </div>

            {/* Botón scroll to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/20 rounded-lg text-emerald-400 hover:from-emerald-500/30 hover:to-cyan-500/30 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Volver arriba
            </button>
          </div>
        </div>

        {/* Mensaje motivacional */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm italic">
            "El código es poesía, y cada línea cuenta una historia"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;