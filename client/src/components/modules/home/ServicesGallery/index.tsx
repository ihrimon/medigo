'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import CustomBadge from '@/components/ui/core/CustomBadge';

const popularCategories = [
  {
    name: 'Antibiotics',
    image:
      'https://plus.unsplash.com/premium_photo-1661440264267-410a74660fba?w=500&auto=format&fit=crop&q=60',
    icon: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1743828678/antibiotic_tl4ipi.png',
  },
  {
    name: 'Cancer Care',
    image:
      'https://images.unsplash.com/photo-1676313125237-cacf3e880dc2?q=80&w=1170&auto=format&fit=crop',
    icon: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1743828678/cancer_f02yp6.png',
  },
  {
    name: 'Pain Relief',
    image:
      'https://plus.unsplash.com/premium_photo-1661779402574-918b4b17627d?w=500&auto=format&fit=crop&q=60',
    icon: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1743828679/pain-relief_wu0v1b.png',
  },
  {
    name: 'Diabetes',
    image:
      'https://plus.unsplash.com/premium_photo-1679392532113-bee46deab9fa?w=500&auto=format&fit=crop&q=60',
    icon: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1743828678/diabetics_fmtv8t.png',
  },
  {
    name: 'Digestive',
    image:
      'https://plus.unsplash.com/premium_photo-1702598506785-f3083090f8e8?w=500&auto=format&fit=crop&q=60',
    icon: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1743828678/digestive_bdj9pj.png',
  },
];

export default function PopularServiceCategories() {
  return (
    <div className='max-w-7xl mx-auto mt-20 p-16 bg-secondary rounded-2xl'>
      {/* Section Header */}
      <div className='text-center mb-12'>
        <div className='flex justify-center'>
          <CustomBadge text='Services Gallery' />
        </div>
        <h2 className='mt-4 text-3xl md:text-4xl font-bold text-white'>
          Trusted Medical Services for Everyday Needs
        </h2>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-12 gap-6'>
        {popularCategories.map((category, index) => {
          const colSpanClass =
            index < 3
              ? 'col-span-12 md:col-span-4'
              : 'col-span-12 md:col-span-6';
          const aspectRatio = index < 3 ? 'aspect-[4/3]' : 'aspect-[4/1.8]';

          return (
            <div key={index} className={colSpanClass}>
              <div className='group relative p-4 rounded-sm overflow-hidden bg-white transition duration-500'>
                {/* Image Section */}
                <div
                  className={cn(
                    'relative w-full overflow-hidden rounded-sm',
                    aspectRatio
                  )}
                >
                  {/* Background Image */}
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className='object-cover w-full h-full'
                  />

                  {/* Overlay */}
                  <div className='absolute inset-0  group-hover:bg-primary/50 transition-all duration-600 z-10' />

                  {/* Hover Arrow Icon */}
                  <div className='absolute inset-0 flex items-center justify-center z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <div className='w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-md'>
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>

                {/* Icon - Positioned Between Image and Title */}
                <div className='relative z-50 -mt-7 flex justify-center'>
                  <div className='icon-spin w-16 h-16 rounded-full bg-white border-[3px] border-primary flex items-center justify-center shadow-md'>
                    <Image
                      src={category.icon}
                      alt='icon'
                      width={28}
                      height={28}
                      className='w-7 h-7'
                    />
                  </div>
                </div>

                {/* Title */}
                <div className='mt-6 text-center'>
                  <h3 className='text-lg font-bold text-heading'>
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
