import React from 'react';
import ModalWrapper from './ModalWrapper';
import { PROJECTS } from '../../constants';

interface ProjectsModalProps {
  onClose: () => void;
}

const ProjectsModal: React.FC<ProjectsModalProps> = ({ onClose }) => {
  return (
    <ModalWrapper onClose={onClose} title="Featured Projects" icon={<span className="text-2xl">🍱</span>}>
      <div className="space-y-12 max-w-5xl mx-auto mt-4">
        {PROJECTS.map((project, index) => (
          <div key={index} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center transition-transform hover:-translate-y-1 duration-300">
            {/* Text Side */}
            <div className="flex-1 space-y-4 order-2 md:order-1">
              <div className="flex gap-2">
                {project.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] text-xs font-bold rounded-full uppercase tracking-wider">
                     {tag}
                   </span>
                ))}
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.description}
              </p>
              <button className="mt-4 text-[#D35400] font-bold hover:underline decoration-2">
                  View Case Study →
              </button>
            </div>

            {/* Image Side */}
            <div className="flex-1 w-full order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                 <img src={project.image} alt={project.title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        ))}
        
        <div className="text-center text-gray-400 italic font-hand text-xl pt-8">
            More projects coming soon...
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ProjectsModal;