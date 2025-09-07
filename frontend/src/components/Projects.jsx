import React, { useState } from 'react';
import { ExternalLink, Github, Star, Eye } from 'lucide-react';

const Projects = ({ data }) => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const featuredProjects = data.filter(project => project.featured);
  const allProjects = data;

  const getProjectsToShow = () => {
    return filter === 'featured' ? featuredProjects : allProjects;
  };

  const getTechColor = (tech) => {
    const colors = {
      'HTML': 'bg-orange-500/20 text-orange-400 border-orange-400/30',
      'CSS': 'bg-blue-500/20 text-blue-400 border-blue-400/30',
      'JavaScript': 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30',
      'React': 'bg-cyan-500/20 text-cyan-400 border-cyan-400/30',
      'Tailwind': 'bg-green-500/20 text-green-400 border-green-400/30',
      'TypeScript': 'bg-blue-500/20 text-blue-400 border-blue-400/30',
      'Astro': 'bg-purple-500/20 text-purple-400 border-purple-400/30',
      'Docker': 'bg-blue-500/20 text-blue-400 border-blue-400/30',
      'Bootstrap': 'bg-purple-500/20 text-purple-400 border-purple-400/30'
    };
    return colors[tech] || 'bg-gray-500/20 text-gray-400 border-gray-400/30';
  };

  return (
    <section id="projects" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Proyectos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y pasión por el desarrollo
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
            }`}
          >
            Todos ({allProjects.length})
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              filter === 'featured'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
            }`}
          >
            Destacados ({featuredProjects.length})
          </button>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {getProjectsToShow().map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-black/40 rounded-2xl border border-gray-800/50 overflow-hidden hover:border-emerald-400/30 transition-all duration-500 hover:transform hover:scale-[1.02] backdrop-blur-sm"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Badge de destacado */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-medium text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Destacado
                  </div>
                </div>
              )}

              {/* Imagen del proyecto */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Overlay con botones */}
                <div className={`absolute inset-0 bg-black/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </a>
                </div>
              </div>

              {/* Contenido del proyecto */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enlaces */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Ver demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Código
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA para más proyectos */}
        <div className="text-center mt-16">
          <div className="p-8 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl border border-emerald-400/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">¿Te gustó lo que viste?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Estos son solo algunos de mis proyectos. Tengo más trabajos interesantes en mi repositorio de GitHub.
            </p>
            <a
              href="https://github.com/wqryx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              <Github className="w-5 h-5 mr-2" />
              Ver más en GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;