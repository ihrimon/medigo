'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface GalleryModalProps {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  images,
  selectedIndex,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className='fixed inset-0 z-[100] bg-black/80 flex items-center justify-center px-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick} // ← backdrop click handler
      >
        <motion.div
          key={currentIndex}
          className='relative w-full max-w-4xl max-h-[80vh] flex items-center justify-center'
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }} // slower & smoother
        >
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            width={1000}
            height={600}
            className='w-full h-auto max-h-[80vh] object-contain rounded-xl'
          />

          {/* Close Button */}
          <button
            className='absolute top-4 right-4 bg-white text-black p-1 rounded-full shadow hover:bg-red-500 hover:text-white transition'
            onClick={onClose}
          >
            <X className='w-5 h-5' />
          </button>

          {/* Navigation Arrows */}
          <div className='absolute inset-0 flex items-center justify-between px-4'>
            <button
              className='p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition'
              onClick={goPrev}
            >
              <ArrowLeft className='w-5 h-5' />
            </button>
            <button
              className='p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition'
              onClick={goNext}
            >
              <ArrowRight className='w-5 h-5' />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryModal;
