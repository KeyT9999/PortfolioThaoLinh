import React from 'react';

interface ModalWrapperProps {
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ onClose, children, title, icon }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 animate-fade-in">
      <div 
        className="absolute inset-0 bg-[#FFFBE6]/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl h-[90vh] bg-[#FFFBE6] rounded-xl shadow-2xl flex flex-col overflow-hidden border border-[#D4C4A8]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 left-6 z-50 w-10 h-10 flex items-center justify-center rounded-full border border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-colors text-xl"
        >
          &times;
        </button>

        {/* Header */}
        {(title) && (
          <div className="pt-8 pb-4 text-center">
            <h2 className="text-3xl font-hand text-[#5D4037] flex items-center justify-center gap-2">
              {icon && <span>{icon}</span>}
              {title}
            </h2>
          </div>
        )}

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 pt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;