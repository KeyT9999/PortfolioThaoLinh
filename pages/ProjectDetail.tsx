import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ImageSwiper } from '../components/ImageSwiper';

const ProjectDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const projectIndex = id ? parseInt(id, 10) : -1;
  const project = projectIndex >= 0 && projectIndex < PROJECTS.length ? PROJECTS[projectIndex] : null;

  // Get all images for Non Nước project
  const getProjectImages = () => {
    if (project?.image.includes('/nonnuoc/')) {
      return Array.from({ length: 10 }, (_, i) => `/nonnuoc/nonnuoc${i + 1}.jpg`);
    }
    return [project?.image || ''];
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FFFBE6] dark:bg-[#1a202c] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#5D4037] dark:text-white mb-4">Project not found</h2>
          <button 
            onClick={() => navigate('/projects')}
            className="px-6 py-2 bg-[#D35400] dark:bg-orange-400 text-white rounded-lg hover:bg-[#B8460A] dark:hover:bg-orange-500 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const images = getProjectImages();
  const descriptionLines = project.description.split('\n').filter(line => line.trim());

  // Convert images to CardData format for ImageSwiper
  const cardData = images.map((imageUrl, index) => ({
    id: index + 1,
    imageUrl: imageUrl,
    title: `${project.title} - ${index + 1}`
  }));

  return (
    <div className="min-h-screen bg-[#FFFBE6] dark:bg-[#1a202c] transition-colors duration-1000 overflow-y-auto">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/projects')}
        className="absolute top-4 left-4 md:top-6 md:left-6 z-50 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-[#8B4513] dark:border-gray-400 text-[#8B4513] dark:text-white hover:bg-[#8B4513] dark:hover:bg-gray-600 hover:text-white transition-colors text-lg md:text-xl"
      >
        &times;
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16">
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-start pt-4 md:pt-8">
          {/* Left Column - Header & Description */}
          <div className="flex-1 w-full lg:sticky lg:top-8">
            {/* Header */}
            <div className="mb-6 md:mb-8">
              <div className="flex gap-2 flex-wrap mb-3 md:mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 md:px-3 py-1 bg-[#FEF3C7] dark:bg-gray-700 text-[#92400E] dark:text-yellow-300 text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h1>
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400">
                {project.category}
              </p>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="space-y-3 md:space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg whitespace-pre-line">
                {descriptionLines.map((line, index) => (
                  <p key={index} className={line.trim() ? '' : 'h-4'}>
                    {line.trim() || '\u00A0'}
                  </p>
                ))}
              </div>
            </div>

            {/* Back to Projects Button */}
            <div className="mt-6 md:mt-8">
              <button 
                onClick={() => navigate('/projects')}
                className="px-5 md:px-6 py-2 bg-[#D35400] dark:bg-orange-400 text-white rounded-full font-bold hover:bg-[#B8460A] dark:hover:bg-orange-500 transition-colors text-sm md:text-base"
              >
                ← Back to Projects
              </button>
            </div>
          </div>

          {/* Right Column - ImageSwiper */}
          <div className="flex-1 w-full flex justify-center items-center lg:min-h-[600px]">
            <div className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px]">
              <ImageSwiper 
                cards={cardData}
                cardWidth={280}
                cardHeight={420}
                className="w-full scale-75 sm:scale-90 lg:scale-100 origin-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

