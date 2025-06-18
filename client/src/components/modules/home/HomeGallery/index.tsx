'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import CustomBadge from '@/components/ui/core/CustomBadge';
import GalleryModal from './GalleryModal';

const images = [
  {
    src: 'https://plus.unsplash.com/premium_photo-1668898899024-02f028349666?q=80&w=2070&auto=format&fit=crop',
    colSpan: 2,
    rowSpan: 1,
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1668605108427-695ef1c16256?w=500&auto=format&fit=crop&q=60',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1670981099426-2eaeaab354b7?q=80&w=1920&auto=format&fit=crop',
    colSpan: 1,
    rowSpan: 2,
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1670981099502-fb0ea624fa9a?q=80&w=1972&auto=format&fit=crop',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1670981099297-319458480c3c?q=80&w=2024&auto=format&fit=crop',
    colSpan: 2,
    rowSpan: 1,
  },
];

const HomeGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className='max-w-7xl mx-auto px-4 py-12'>
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

export default HomeGallery;
