import React from 'react';
import { User, MapPin, Calendar } from 'lucide-react';

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Sobre Mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Información personal */}
          <div className="space-y-6">
            <div className="p-6 bg-black/40 rounded-2xl border border-gray-800/50 backdrop-blur-sm hover:border-emerald-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-emerald-400 mr-3" />
                <h3 className="text-xl font-semibold">Información Personal</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-cyan-400 mr-2" />
                  <span>{data.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-cyan-400 mr-2" />
                  <span>Graduado en Desarrollo de Aplicaciones Multiplataforma</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-cyan-400 mr-2" />
                  <span>Graduado en Sistemas de Redes Microinformáticos</span>
                </div>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-black/40 rounded-xl border border-gray-800/50 text-center hover:border-emerald-400/30 transition-all duration-300">
                <div className="text-2xl font-bold text-emerald-400 mb-1">4+</div>
                <div className="text-sm text-gray-400">Proyectos</div>
              </div>
              <div className="p-4 bg-black/40 rounded-xl border border-gray-800/50 text-center hover:border-cyan-400/30 transition-all duration-300">
                <div className="text-2xl font-bold text-cyan-400 mb-1">11</div>
                <div className="text-sm text-gray-400">Tecnologías</div>
              </div>
            </div>
          </div>

          {/* Descripción */}
          <div className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {data.bio}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white mb-4">Lo que me apasiona:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">Crear interfaces de usuario intuitivas y atractivas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">Desarrollar APIs robustas y escalables</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">Aprender nuevas tecnologías y mejores prácticas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300">Resolver problemas complejos con código limpio</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Hablemos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;