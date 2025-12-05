import React from 'react';
import { CloseIcon } from '../assets/icons';

interface LightboxProps {
  isOpen: boolean;
  imageUrl: string | null;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, imageUrl, onClose }) => {
  if (!isOpen || !imageUrl) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-full"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image container
      >
        <img src={imageUrl} alt="Enlarged view" className="block max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"/>
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 header-btn p-2 rounded-full text-white"
          aria-label="Close image view"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Lightbox;