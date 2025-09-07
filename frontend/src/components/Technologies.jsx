import React, { useState } from 'react';
import { Code, Code2, Coffee, Database, HardDrive, Layers, Layout, Palette, Paintbrush, Server, FileCode } from 'lucide-react';

const iconMap = {
  Code: Code,
  Code2: Code2,
  Coffee: Coffee,
  Database: Database,
  HardDrive: HardDrive,
  Layers: Layers,
  Layout: Layout,
  Palette: Palette,
  Paintbrush: Paintbrush,
  Server: Server,
  FileCode: FileCode
};

const Technologies = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todas', color: 'emerald' },
    { id: 'Frontend', name: 'Frontend', color: 'cyan' },
    { id: 'Backend', name: 'Backend', color: 'purple' },
    { id: 'Database', name: 'Bases de Datos', color: 'yellow' }
  ];

  const filteredTechnologies = activeCategory === 'all' 
    ? data 
    : data.filter(tech => tech.category === activeCategory);

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Frontend': return 'from-cyan-500 to-blue-500';
      case 'Backend': return 'from-purple-500 to-pink-500';
      case 'Database': return 'from-yellow-500 to-orange-500';
      default: return 'from-emerald-500 to-cyan-500';
    }
  };

  return (
    <section id="technologies" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Tecnologías
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Las herramientas y tecnologías que uso para crear experiencias digitales excepcionales
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 text-white shadow-lg shadow-${category.color}-500/25`
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de tecnologías */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechnologies.map((tech, index) => {
            const IconComponent = iconMap[tech.icon] || Code;
            
            return (
              <div
                key={tech.name}
                className="group p-6 bg-gray-900/50 rounded-2xl border border-gray-800/50 hover:border-emerald-400/30 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(tech.category)} mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                    <p className="text-sm text-gray-400">{tech.category}</p>
                  </div>
                </div>

                {/* Barra de progreso */}
                <div className="mb-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-300">Competencia</span>
                    <span className="text-sm font-medium text-emerald-400">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${getCategoryColor(tech.category)} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: `${tech.level}%`,
                        animation: `fillBar 1.5s ease-out ${index * 100}ms forwards`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fillBar {
          from {
            width: 0%;
          }
          to {
            width: var(--final-width);
          }
        }
      `}</style>
    </section>
  );
};

export default Technologies;