/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { brandImages } from '@/constants/assets';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const Brands = () => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: 'performance',
    slides: {
      perView: 5,
      spacing: 8,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 3,
          spacing: 8,
        },
      },
      '(max-width: 480px)': {
        slides: {
          perView: 2,
          spacing: 6,
        },
      },
    },
    created(slider) {
      if (timer.current) clearInterval(timer.current);
      timer.current = setInterval(() => {
        slider.next();
      }, 3000);
    },
  });

  useEffect(() => {
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <div className='max-w-7xl mx-auto px-4 p-10 my-10'>
      <div ref={sliderRef} className='keen-slider'>
        {brandImages.map((image, index) => (
          <div
            className='keen-slider__slide flex items-center justify-center'
            key={index}
          >
            <Image
              src={image}
              alt={`Brand ${index}`}
              width={150}
              height={50}
              className='hover:grayscale transition duration-300'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
