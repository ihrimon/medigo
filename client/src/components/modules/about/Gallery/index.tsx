'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import CustomBadge from '@/components/ui/core/CustomBadge';
import GalleryModal from './GalleryModal';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1453847668862-487637052f8a?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1668714068992-2a146166b860?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1lZGljaW5lfGVufDB8fDB8fHww',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colSpan: 1,
    rowSpan: 2,
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1670981099502-fb0ea624fa9a?q=80&w=1972&auto=format&fit=crop',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1579165466814-e646cfa4a3be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1661627133045-6fcffcefaa8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colSpan: 1,
    rowSpan: 1,
  },
];

const MedigoGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className='max-w-7xl mx-auto py-12'>
      <div className='flex justify-center mb-4'>
        <CustomBadge text='Gallery' />
      </div>
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-10 text-heading'>
        Our Medicine Gallery
      </h2>

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-[200px]'>
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={`relative rounded-xl shadow-md cursor-pointer col-span-${img.colSpan} row-span-${img.rowSpan}`}
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={img.src}
              alt={`Gallery ${index + 1}`}
              fill
              className='object-cover rounded-xl transition-transform duration-500 hover:scale-110'
            />
            <div className='absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-xl'>
              <ZoomIn className='text-white w-10 h-10' />
            </div>
          </motion.div>
        ))}
      </div>

      {selectedIndex !== null && (
        <GalleryModal
          images={images.map((img) => img.src)}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </section>
  );
};

export default MedigoGallery;
