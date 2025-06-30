'use client';

import CustomBadge from '@/components/ui/core/CustomBadge';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';

export const TopServiceCategory = () => {
  const categories = [
    {
      name: 'Diabetes',
      slug: 'diabetes',
      image:
        'https://res.cloudinary.com/do6tvtff8/image/upload/v1742675965/diabetics_smlpch.png',
      icon: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1743828678/diabetics_fmtv8t.png',
      items: 31,
      doctor: 20,
      description:
        'Manage blood sugar levels effectively with trusted diabetes care products.',
    },
    {
      name: 'Cold & Flu',
      slug: 'gastrointestinal',
      image:
        'https://res.cloudinary.com/do6tvtff8/image/upload/v1742675966/gastic_k7jwrx.png',
      icon: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1743828678/cold_pkeyob.png',
      items: 22,
      doctor: 15,
      description: 'Relieve symptoms of cold, flu, and seasonal infections.',
    },
    {
      name: 'Ear & Nose',
      slug: 'ear-nose',
      image:
        'https://res.cloudinary.com/do6tvtff8/image/upload/v1742675966/ear_uklnd5.png',
      icon: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1743828678/eye_icwzlc.png',
      items: 15,
      doctor: 10,
      description:
        'Treat infections and irritations related to ears and nasal passages.',
    },
    {
      name: 'Cancer Care',
      slug: 'cancer-care',
      image:
        'https://res.cloudinary.com/do6tvtff8/image/upload/v1742675967/cancer_raybag.png',
      icon: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1743828678/cancer_f02yp6.png',
      items: 12,
      doctor: 8,
      description:
        'Supportive medicines and products for cancer treatment and care.',
    },
    {
      name: 'Allergy Relief',
      slug: 'allergy-relief',
      image:
        'https://res.cloudinary.com/do6tvtff8/image/upload/v1742675966/gastic_k7jwrx.png',
      icon: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1743828678/allergy_zaw4mf.png',
      items: 17,
      doctor: 12,
      description:
        'Fast and effective relief from allergies and respiratory irritation.',
    },
    {
      name: 'Digestive',
      slug: 'digestive',
      image:
        'https://res.cloudinary.com/do6tvtff8/image/upload/v1742675966/gastic_k7jwrx.png',
      icon: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1743828678/digestive_bdj9pj.png',
      items: 18,
      doctor: 14,
      description:
        'Promote healthy digestion and gut health with our range of products.',
    },
    {
      name: 'Pain Relief',
      slug: 'pain-relief',
      image:
        'https://res.cloudinary.com/do6tvtff8/image/upload/v1742675966/pain-relief_szx4ge.png',
      icon: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1743828679/pain-relief_wu0v1b.png',
      items: 28,
      doctor: 22,
      description:
        'Ease headaches, muscle pain, and chronic pain with trusted relief.',
    },
    {
      name: 'Antibiotics',
      slug: 'antibiotics',
      image:
        'https://res.cloudinary.com/do6tvtff8/image/upload/v1742675965/antibiotic_gh5yxt.png',
      icon: 'https://res.cloudinary.com/do6tvtff8/image/upload/v1743828678/antibiotic_tl4ipi.png',
      items: 42,
      doctor: 30,
      description:
        'Treat bacterial infections effectively with quality antibiotics.',
    },
  ];

  return (
    <section className='py-16 max-w-7xl mx-auto text-heading'>
      <div className='text-center mb-12'>
        <div className='flex justify-center'>
          <CustomBadge text='Medigo Departments' />
        </div>
        <h2 className='text-3xl md:text-4xl font-bold mt-2'>
          Top Medical Categories
        </h2>
        <p className='text-color max-w-2xl mx-auto mt-4'>
          Explore our specialized departments and connect with experienced
          professionals to ensure your best care.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7'>
        {categories.map((service, index) => (
          <div
            key={index}
            className={clsx(
              'relative rounded-2xl p-6 bg-white/40 border-3 border-white overflow-hidden transition-all group hover:bg-primary hover:text-white hover:shadow-lg'
            )}
          >
            {/* Background Icon - Top Right */}
            <div className='absolute top-4 right-4 opacity-4'>
              <Image
                src={service.icon}
                alt={service.name}
                width={100}
                height={100}
                className='object-contain'
              />
            </div>

            {/* Foreground Content */}
            <div className='relative z-10'>
              <Image
                src={service.icon}
                alt={service.name}
                width={50}
                height={50}
                className='mb-2 group-hover:invert transition-all duration-300'
              />
              <h3 className='text-lg font-bold mt-4'>{service.name}</h3>
              <p className='text-sm mt-2 text-color group-hover:text-white'>
                {service.description}
              </p>

              <div
                className='my-5 border-b-2 border-dotted border-gray-300'
                style={{
                  borderImage:
                    'repeating-linear-gradient(to right, #d1d5db 0, #d1d5db 4px, transparent 4px, transparent 10px)',
                  borderImageSlice: 1,
                }}
              ></div>
              <div className='flex items-center justify-between mt-6'>
                <span className='text-sm flex items-center gap-1 text-primary group-hover:text-white'>
                  <span className='w-2 h-2 rounded-full bg-primary inline-block group-hover:bg-white'></span>
                  {service.doctor} doctors
                </span>

                {/* Arrow with Overlay */}
                <div className='relative'>
                  <div
                    className={clsx(
                      'w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white text-sm hover:scale-110 transition-all',
                      'group-hover:bg-white group-hover:text-primary z-10 relative'
                    )}
                  >
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
