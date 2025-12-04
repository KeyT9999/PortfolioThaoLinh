import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const navigate = useNavigate();

  const handleZaloClick = () => {
    // Mở Zalo với số điện thoại
    window.open('https://zalo.me/0867792106', '_blank');
  };

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
            <span>✉️</span> Contact Me
          </h2>
        </div>

        <div className="max-w-2xl mx-auto mt-6 md:mt-8 bg-white/50 dark:bg-gray-800/50 p-6 md:p-12 rounded-xl text-center">
          <div className="mb-6 md:mb-8">
            <div className="text-5xl md:text-6xl mb-3 md:mb-4">💬</div>
            <h3 className="text-xl md:text-2xl font-bold text-[#5D4037] dark:text-white mb-3 md:mb-4">
              Let's Connect on Zalo!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-mono text-base md:text-lg mb-2">
              Phone: <span className="font-bold text-[#8B4513] dark:text-orange-400">0867792106</span>
            </p>
            <p className="text-gray-500 dark:text-gray-400 font-mono text-xs md:text-sm">
              Click the button below to chat with me on Zalo
            </p>
          </div>

          <button 
            onClick={handleZaloClick}
            className="bg-[#0180C7] hover:bg-[#0168A3] active:bg-[#015A8F] text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-bold shadow-lg transform hover:-translate-y-1 active:translate-y-0 transition-all text-base md:text-lg flex items-center gap-2 md:gap-3 mx-auto w-full sm:w-auto justify-center"
          >
            <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 5.58 2 10c0 2.13 1.05 4.04 2.75 5.43L2 22l6.75-2.75C10.96 20.95 11.47 21 12 21c5.52 0 10-3.58 10-8s-4.48-8-10-8zm0 14c-.83 0-1.65-.2-2.38-.55l-.27-.12-2.9.6.63-2.85-.16-.28C6.3 12.1 6 11.1 6 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6z"/>
            </svg>
            Open Zalo Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

