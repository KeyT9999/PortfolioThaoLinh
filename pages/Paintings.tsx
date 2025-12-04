import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PAINTINGS } from '../constants';

const Paintings: React.FC = () => {
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
            <span>🖌️</span> My Paintings
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 md:mt-8">
          {PAINTINGS.map((painting) => (
            <div key={painting.id} className="group relative">
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:w-64 md:max-w-none h-64 overflow-hidden rounded-lg shadow-md border-4 border-white dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:rotate-1">
                <img 
                  src={painting.image} 
                  alt={painting.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="mt-2 md:mt-3 text-center">
                <h4 className="font-bold text-sm md:text-base text-gray-700 dark:text-white">{painting.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center font-hand text-sm md:text-base text-gray-500 dark:text-gray-400">
          Acrylics as a window into my creative soul
        </div>
      </div>
    </div>
  );
};

export default Paintings;

