
import React, { useState } from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import Card from '../components/GlassmorphicCard';
import Lightbox from '../components/Lightbox';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const GalleryImage: React.FC<{ image: { id: number, url: string, alt: string }, onClick: () => void }> = ({ image, onClick }) => {
    const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
    return (
        <div ref={ref} className={`scroll-animate ${isVisible ? 'is-visible' : ''}`}>
            <Card
                className="p-2 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
                onClick={onClick}
            >
                <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-lg aspect-square"
                />
            </Card>
        </div>
    )
}

const Gallery: React.FC = () => {
  const { data } = usePortfolioData();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  const openLightbox = (url: string) => {
    setSelectedImageUrl(url);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImageUrl(null);
  };

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Gallery<span className="text-gradient-cyan">.</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.galleryImages?.map(image => (
            <GalleryImage 
              key={image.id}
              image={image}
              onClick={() => openLightbox(image.url)}
            />
          ))}
        </div>
      </div>
      <Lightbox isOpen={lightboxOpen} imageUrl={selectedImageUrl} onClose={closeLightbox} />
    </>
  );
};

export default Gallery;
