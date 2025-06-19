'use client';

import React, { useState } from 'react';
import { MoveLeft, MoveRight } from 'lucide-react';
import Image from 'next/image';
import brandsData from '../../../../../brands.json';
import CustomBadge from '@/components/ui/core/CustomBadge';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const PopularBrands = () => {
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 4,
      spacing: 15,
    },
    created() {
      setLoaded(true); // Slider created, mark as loaded
    },
  });

  return (
    <div className='max-w-7xl mx-auto mt-20 text-heading'>
      <div className='flex items-center justify-between mb-6'>
        <div>
          <CustomBadge text='Top Brands' />
          <h2 className='text-3xl font-bold'>Top Brands</h2>
        </div>
        <div className='px-1 flex items-center py-1 rounded-full gap-1 text-white'>
          <button
            onClick={() => instanceRef.current?.prev()}
            className='bg-primary w-12 h-8 flex items-center justify-center rounded-tl-full rounded-bl-full hover:bg-secondary transition-all duration-500'
            aria-label='Previous Slide'
            disabled={!loaded}
          >
            <MoveLeft className='w-4 h-4' />
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            className='bg-primary w-12 h-8 flex items-center justify-center rounded-tr-full rounded-br-full hover:bg-secondary transition-all duration-500'
            aria-label='Next Slide'
            disabled={!loaded}
          >
            <MoveRight className='w-4 h-4' />
          </button>
        </div>
      </div>

      <div ref={sliderRef} className='keen-slider'>
        {brandsData?.map((brand) => (
          <div
            key={brand.slug}
            className='keen-slider__slide relative group overflow-hidden rounded-2xl'
          >
            {/* Brand Image */}
            <Image
              src={brand.image}
              width={600}
              height={300}
              alt='brand image'
              className='rounded-2xl object-cover transition duration-700 group-hover:brightness-90'
            />

            {/* Partial Green Overlay (40% height) sliding up on hover */}
            <div className='absolute left-0 right-0 bottom-0 h-[40%] bg-primary/70 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out flex items-center gap-4 px-5 py-4'>
              {/* Brand Logo */}
              <div className='w-12 h-12 rounded-full overflow-hidden flex-shrink-0'>
                <Image
                  src={brand.logo}
                  width={48}
                  height={48}
                  alt='brand logo'
                  className='object-cover'
                />
              </div>

              {/* Brand Info */}
              <div>
                <h3 className='text-lg font-semibold hover:underline cursor-pointer'>
                  {brand.name}
                </h3>
                <small className='text-sm text-white/90'>{brand.tagline}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBrands;
