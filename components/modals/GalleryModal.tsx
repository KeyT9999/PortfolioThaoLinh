import React from 'react';
import ModalWrapper from './ModalWrapper';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  subtitle?: string;
}

interface GalleryModalProps {
  onClose: () => void;
  title: string;
  items: GalleryItem[];
  icon?: string;
  footerText?: string;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ onClose, title, items, icon, footerText }) => {
  return (
    <ModalWrapper 
        onClose={onClose} 
        title={title} 
        icon={icon ? <span className="text-2xl">{icon}</span> : null}
    >
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {items.map((item) => (
          <div key={item.id} className="group relative">
            <div className="w-64 h-64 md:w-80 md:h-64 overflow-hidden rounded-lg shadow-md border-4 border-white bg-white transition-all duration-300 hover:shadow-xl hover:scale-105 hover:rotate-1">
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                />
            </div>
            <div className="mt-3 text-center">
                <h4 className="font-bold text-gray-700">{item.title}</h4>
                {item.subtitle && <p className="text-xs text-gray-500">{item.subtitle}</p>}
            </div>
          </div>
        ))}
      </div>
      {footerText && (
          <div className="mt-12 text-center font-hand text-gray-500">
              {footerText}
          </div>
      )}
    </ModalWrapper>
  );
};

export default GalleryModal;