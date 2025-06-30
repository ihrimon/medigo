'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ArrowLeft, ArrowRight, PlayCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import CustomBadge from '@/components/ui/core/CustomBadge';
import { Apostrophe, DoctorsBadge } from '@/constants/assets';

const testimonials = [
  {
    name: 'Lucas Fletcher',
    role: 'Diet Patient',
    content:
      "The level of care and personalized treatment I received exceeded my expectations. Dr. Smith's dedication and the friendly atmosphere made the difference.",
    avatar:
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1740718661/customer-7_mil7z3.jpg',
  },
  {
    name: 'Ava Simmons',
    role: 'Cardio Patient',
    content:
      'Amazing support team and doctors! I always felt heard and cared for throughout my entire treatment.',
    avatar:
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1740718562/customer-2_xnlkwg.jpg',
  },
  {
    name: 'Ava Simmons',
    role: 'Cardio Patient',
    content:
      'Amazing support team and doctors! I always felt heard and cared for throughout my entire treatment.',
    avatar:
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1740718563/customer-18_f6n92y.jpg',
  },
  {
    name: 'Ava Simmons',
    role: 'Cardio Patient',
    content:
      'Amazing support team and doctors! I always felt heard and cared for throughout my entire treatment.',
    avatar:
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1740718563/customer-10_g6mkww.jpg',
  },
];

export const Testimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged() {},
  });

  return (
    <section className='max-w-7xl mx-auto my-16'>
      {/* Header */}
      <div className='text-center mb-10'>
        <div className='flex justify-center'>
          <CustomBadge text='Testimonials' />
        </div>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
          What Our Patient <span className='text-primary'>Think</span> <br />
          About Awesome Services
        </h2>
      </div>

      {/* Grid Section */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
        {/* Review: full on mobile, col-span-8 on large */}
        <div className='col-span-1 lg:col-span-8'>
          <div ref={sliderRef} className='keen-slider'>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className='keen-slider__slide bg-pink-50 rounded-xl p-6 md:p-10 relative h-auto md:h-[300px]'
              >
                <Apostrophe />
                <p className='text-base md:text-lg mb-4 mt-2 font-bold leading-relaxed'>
                  {testimonial.content}
                </p>
                <div className='flex items-center gap-4'>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className='rounded-full'
                  />
                  <div>
                    <h4 className='font-semibold text-gray-800'>
                      {testimonial.name}
                    </h4>
                    <p className='text-sm text-gray-500'>{testimonial.role}</p>
                  </div>
                </div>
                {/* Arrows */}
                <div className='absolute bottom-6 right-6 flex gap-3 text-heading'>
                  <button
                    onClick={() => instanceRef.current?.prev()}
                    className='bg-white rounded-full p-2 hover:bg-gray-100'
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    onClick={() => instanceRef.current?.next()}
                    className='bg-white rounded-full p-2 hover:bg-gray-100'
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Percentage Box */}
        <div className='col-span-1 lg:col-span-4'>
          <div className='bg-primary text-white p-6 rounded-xl flex flex-col justify-between h-full'>
            <div>
              <p className='text-sm uppercase font-semibold text-white/70'>
                Facts & Numbers
              </p>
              <h3 className='text-5xl font-bold my-4'>98%</h3>
              <p className='text-lg'>Of Patients Recommended MediGo Services</p>
            </div>
            <button className='mt-6 bg-white text-primary font-semibold px-4 py-2 rounded hover:bg-gray-100 transition'>
              More About Us →
            </button>
          </div>
        </div>

        {/* Google Rating Box */}
        <div className='col-span-1 lg:col-span-4'>
          <div className='bg-lime-50 p-4 sm:p-6 rounded-xl w-full max-w-md'>
            {/* Image */}
            <Image
              src='https://plus.unsplash.com/premium_photo-1661769167673-cfdb37f156d8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Doctor'
              className='w-full h-40 object-cover rounded-md mb-4'
              width={600}
              height={200}
            />

            {/* Bottom Content */}
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-8'>
              {/* Left: Google Logo and Text */}
              <div className='flex items-center gap-2'>
                <Image
                  src='/assets/google.png'
                  alt='Google Logo'
                  height={30}
                  width={30}
                />
                <div>
                  <p className='text-sm font-bold text-gray-800'>Google</p>
                  <p className='text-sm text-gray-500'>Rating</p>
                </div>
              </div>

              {/* Center Divider */}
              <div className='hidden sm:block w-1 h-16 bg-lime-200' />

              <div className='space-y-3'>
                {/* Rating Stars + Text */}
                <div className='text-center sm:text-left'>
                  <div className='flex items-center justify-center sm:justify-start mb-1'>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className='w-4 h-4 text-yellow-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.44 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.967z' />
                      </svg>
                    ))}
                  </div>
                  <p className='text-sm font-bold text-gray-800'>
                    4.9 (29k Reviews)
                  </p>
                </div>

                {/* User Avatars */}
                <div className='flex -space-x-2'>
                  
                  <DoctorsBadge />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Box */}
        <div className='col-span-1 lg:col-span-8'>
          <div className='relative rounded-xl overflow-hidden h-[300px]'>
            <Image
              src='https://plus.unsplash.com/premium_photo-1731680213452-7ea32b7cd25a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Hospital'
              width={600}
              height={600}
              className='object-cover w-full'
            />
            <button className='absolute inset-0 flex items-center justify-center bg-secondary/30'>
              <PlayCircle className='w-16 h-16 text-gray-100 hover:text-primary transition' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
