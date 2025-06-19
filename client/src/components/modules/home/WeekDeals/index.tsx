/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import CustomBadge from '@/components/ui/core/CustomBadge';
import productstData from '../../../../../products.json';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

const WeekDeals = () => {
  const [timeLeft, setTimeLeft] = useState<{
    [key: string]: {
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    };
  }>({});

  const deals = productstData.slice(0, 5).map((product, index) => ({
    id: product.slug,
    brand: product.brand,
    name: product.name,
    image: product.images[0],
    price: product.price,
    originalPrice: product.price + 10,
    rating: product.averageReview,
    endTime: new Date(Date.now() + (index + 1) * 86400000 + 3600000),
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const updated: typeof timeLeft = {};

      deals.forEach((deal) => {
        const distance = deal.endTime.getTime() - now;

        if (distance > 0) {
          updated[deal.id] = {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
              (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          };
        }
      });

      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [sliderRef, slider] = useKeenSlider({
    loop: false,
    mode: 'snap',
    slides: { perView: 1, spacing: 15 },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 4, spacing: 24 },
      },
    },
  });

  const renderStars = (rating: number) => (
    <div className='flex items-center justify-center gap-1'>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-sm ${
            star <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );

  return (
    <div className='max-w-7xl mx-auto my-20 text-heading relative group'>
      <div className='flex items-center justify-between mb-10'>
        <div>
          <CustomBadge text='Week Deals' />
          <h2 className='text-4xl font-bold mt-2'>Deals Of The Week!</h2>
        </div>
        <Button className='bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg flex items-center gap-2'>
          View All
          <ArrowRight className='w-4 h-4' />
        </Button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => slider.current?.prev()}
        className='hidden group-hover:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/40 shadow-md p-2 rounded-full'
      >
        <ChevronsLeft size={20} />
      </button>

      <button
        onClick={() => slider.current?.next()}
        className='hidden group-hover:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/40 shadow-md p-2 rounded-full'
      >
        <ChevronsRight size={20} />
      </button>

      <div ref={sliderRef} className='keen-slider'>
        {deals.map((deal) => (
          <div key={deal.id} className='keen-slider__slide'>
            <div className='overflow-hidden relative'>
              <div className='flex justify-center p-6 bg-primary/10 rounded-2xl'>
                <Image
                  src={deal.image}
                  alt={deal.name}
                  width={500}
                  height={500}
                />
              </div>

              <div className='px-6 pt-4 text-center'>
                <div className='absolute top-6 right-6 bg-primary text-white rounded-full px-1 py-4 text-center min-w-[50px] shadow-md'>
                  <div className='text-xl font-bold'>
                    {timeLeft[deal.id]?.days || 0}
                  </div>
                  <div className='text-xs'>Days</div>
                  <div className='text-lg font-semibold mt-1'>
                    {timeLeft[deal.id]?.hours || 0}
                  </div>
                  <div className='text-xs'>Hrs</div>
                  <div className='text-lg font-semibold mt-1'>
                    {timeLeft[deal.id]?.minutes || 0}
                  </div>
                  <div className='text-xs'>Min</div>
                  <div className='text-lg font-semibold mt-1'>
                    {timeLeft[deal.id]?.seconds || 0}
                  </div>
                  <div className='text-xs'>Sec</div>
                </div>

                <p className='text-gray-400'>{deal.brand}</p>
                {renderStars(deal.rating)}

                <h3 className='font-bold text-lg'>
                  {deal.name}
                </h3>

                <div className='flex items-center justify-center gap-3'>
                  <span className='text-lg font-bold text-primary'>
                    ${deal.price.toFixed(2)}
                  </span>
                  <span className='text-gray-400 line-through text-sm'>
                    ${deal.originalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekDeals;
