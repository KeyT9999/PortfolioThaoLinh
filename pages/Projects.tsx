import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFFBE6] dark:bg-[#1a202c] transition-colors duration-1000 overflow-y-auto">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 md:top-6 md:left-6 z-50 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-[#8B4513] dark:border-gray-400 text-[#8B4513] dark:text-white hover:bg-[#8B4513] dark:hover:bg-gray-600 hover:text-white transition-colors text-lg md:text-xl"
      >
        &times;
      </button>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16">
        {/* Header */}
        <div className="pt-8 md:pt-8 pb-4 text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-hand text-[#5D4037] dark:text-white flex items-center justify-center gap-2">
            <span>🍱</span> Featured Projects
          </h2>
        </div>

        <div className="space-y-8 md:space-y-12 max-w-5xl mx-auto mt-4">
          {PROJECTS.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-4 md:gap-8 items-center transition-transform hover:-translate-y-1 duration-300">
              {/* Text Side */}
              <div className="flex-1 space-y-3 md:space-y-4 order-2 md:order-1 w-full">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 md:px-3 py-1 bg-[#FEF3C7] dark:bg-gray-700 text-[#92400E] dark:text-yellow-300 text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-lg whitespace-pre-line">
                  {project.description}
                </p>
                <button 
                  onClick={() => navigate(`/projects/${index}`)}
                  className="mt-2 md:mt-4 text-[#D35400] dark:text-orange-400 font-bold hover:underline decoration-2 text-sm md:text-base"
                >
                  View Detail →
                </button>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full order-1 md:order-2">
                <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-600">
                  <img src={project.image} alt={project.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
          ))}
          
          <div className="text-center text-gray-400 dark:text-gray-500 italic font-hand text-xl pt-8">
            More projects coming soon...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

