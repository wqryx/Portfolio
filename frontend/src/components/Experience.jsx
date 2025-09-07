import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience = ({ data, education }) => {
  const [activeTab, setActiveTab] = useState('experience');

  const TabButton = ({ id, label, icon: Icon, count }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
        activeTab === id
          ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25'
          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
      }`}
    >
      <Icon className="w-5 h-5 mr-2" />
      {label}
      <span className="ml-2 px-2 py-1 text-xs bg-black/30 rounded-full">
        {count}
      </span>
    </button>
  );

  const ExperienceCard = ({ item, index }) => (
    <div 
      className="relative pl-8 pb-8"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Línea de tiempo */}
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-emerald-400 to-cyan-400"></div>
      
      {/* Punto de la línea de tiempo */}
      <div className="absolute -left-2 top-2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full shadow-lg shadow-emerald-400/50"></div>

      {/* Contenido */}
      <div className="bg-black/40 rounded-2xl border border-gray-800/50 p-6 hover:border-emerald-400/30 transition-all duration-300 backdrop-blur-sm group hover:transform hover:scale-[1.02]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors duration-300">
              {item.position || item.degree}
            </h3>
            <div className="flex items-center text-emerald-400 font-medium mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              {item.company || item.institution}
            </div>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {item.period}
          </div>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Tecnologías (solo para experiencia) */}
        {item.technologies && (
          <div>
            <h4 className="text-sm font-medium text-gray-400 mb-2">Tecnologías utilizadas:</h4>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800/50 text-cyan-400 text-xs rounded-full border border-cyan-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Mi Trayectoria
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mi camino profesional y académico en el mundo del desarrollo
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <TabButton 
            id="experience" 
            label="Experiencia" 
            icon={Briefcase} 
            count={data.length}
          />
          <TabButton 
            id="education" 
            label="Educación" 
            icon={GraduationCap} 
            count={education.length}
          />
        </div>

        {/* Contenido */}
        <div className="relative">
          {activeTab === 'experience' && (
            <div className="space-y-0">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Briefcase className="w-6 h-6 mr-3 text-emerald-400" />
                  Experiencia Profesional
                </h3>
              </div>
              {data.map((item, index) => (
                <ExperienceCard key={index} item={item} index={index} />
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-0">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-cyan-400" />
                  Formación Académica
                </h3>
              </div>
              {education.map((item, index) => (
                <ExperienceCard key={index} item={item} index={index} />
              ))}
            </div>
          )}
        </div>

        {/* Próximos objetivos */}
        <div className="mt-16">
          <div className="p-8 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl border border-emerald-400/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <ChevronRight className="w-6 h-6 mr-2 text-emerald-400" />
              Próximos Objetivos
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-2">Corto Plazo</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Especializarme en React Native para desarrollo móvil
                  </li>
                  <li className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Aprender Docker y Kubernetes para DevOps
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-400 mb-2">Largo Plazo</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Convertirme en Senior Full-Stack Developer
                  </li>
                  <li className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Liderar equipos de desarrollo tecnológico
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;