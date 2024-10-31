import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Venue } from '@/types/venue';

interface PhotoGalleryProps {
  venue: Venue;
}

export default function PhotoGallery({ venue }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Combine main image with additional images
  const photos = [
    { url: venue.image, alt: `${venue.name} main view` },
    ...(venue.images || []).map((url, index) => ({
      url,
      alt: `${venue.name} view ${index + 2}`
    }))
  ];

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1);
  };

  const goToNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === photos.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="col-span-2">
          <img
            src={photos[0].url}
            alt={photos[0].alt}
            className="w-full h-[400px] object-cover rounded-xl cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => openModal(0)}
          />
        </div>
        {photos.slice(1, 3).map((photo, index) => (
          <img
            key={index + 1}
            src={photo.url}
            alt={photo.alt}
            className="w-full h-48 object-cover rounded-xl cursor-pointer hover:opacity-95 transition-opacity"
            onClick={() => openModal(index + 1)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </button>

            {photos.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>

                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={photos[selectedIndex].url}
              alt={photos[selectedIndex].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}