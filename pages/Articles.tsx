import React from 'react';
import { useNavigate } from 'react-router-dom';

const Articles: React.FC = () => {
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
            <span>📰</span> My Articles
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center min-h-[300px] text-center p-6 md:p-8">
          <div className="text-5xl md:text-6xl mb-3 md:mb-4">✍️</div>
          <h3 className="text-xl md:text-2xl font-hand text-gray-700 dark:text-gray-300 font-bold mb-2">My Thoughts & Musings</h3>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            I'm currently curating a collection of articles about Design Systems, Accessibility, and the psychology behind user interfaces. Check back soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articles;

