'use client';

import React, { useState } from 'react';
import { Bookmark, ChevronsRight, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface Product {
  name: string;
  slug: string;
  description: string;
  images: string[];
  brand: string;
  category: string;
  price: number;
  stock: number;
  dosageForm: string;
  strength: string[];
  prescriptionRequired: boolean;
  expiryDate: string;
  isActive: boolean;
  averageReview: number;
  totalReviews: number;
}

const productstData = [
  {
    name: 'Zinacef Syrup',
    slug: 'zinacef-syrup',
    description:
      'Cefuroxime antibiotic used to treat a wide range of bacterial infections.',
    images: [
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743926815/m-1_ujbzbc.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743926815/m-2_nqgcen.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743926814/m-5_b5iko8.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743926814/m-4_kfw9y7.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927237/m-3_x9dunz.png',
    ],
    brand: 'Square',
    category: 'Antibiotic',
    price: 18.52,
    stock: 564,
    dosageForm: 'Syrup',
    strength: ['250mg', '500mg'],
    prescriptionRequired: true,
    expiryDate: '19-08-2026',
    isActive: true,
    averageReview: 4.5,
    totalReviews: 150,
  },
  {
    name: 'Ciprocin Tablet',
    slug: 'ciprocin-tablet',
    description:
      'Ciprofloxacin antibiotic used to treat infections like UTIs, lower respiratory tract infections, etc.',
    images: [
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927235/17_p4j7sm.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927236/mmmmm-1_hjlcxg.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927235/14_ezsqll.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927235/15_h7bypt.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927237/mmm-1_qtrb3b.png',
    ],
    brand: 'Drug',
    category: 'Antibiotic',
    price: 47.45,
    stock: 838,
    dosageForm: 'Tablet',
    strength: ['250mg', '500mg'],
    prescriptionRequired: true,
    expiryDate: '19-08-2028',
    isActive: true,
    averageReview: 4.2,
    totalReviews: 245,
  },
  {
    name: 'Suprax Tablet',
    slug: 'suprax-tablet',
    description:
      'Cefixime antibiotic commonly used for bacterial infections such as pneumonia, bronchitis, etc.',
    images: [
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927237/mmm-1_qtrb3b.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927236/5_vjgfig.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927236/2_lsioaf.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927236/6_wtjvp1.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927235/mm-1_gryhdt.png',
    ],
    brand: 'Incepta',
    category: 'Antibiotic',
    price: 21.11,
    stock: 162,
    dosageForm: 'Tablet',
    strength: ['125mg/5ml', '500mg/5ml'],
    prescriptionRequired: true,
    expiryDate: '19-08-2027',
    isActive: true,
    averageReview: 4.3,
    totalReviews: 310,
  },
  {
    name: 'Renamox Syrup',
    slug: 'renamox-syrup',
    description:
      'Amoxicillin antibiotic used to treat bacterial infections like ear, nose, throat, urinary tract infections.',
    images: [
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927236/mmmm-4_iwf2jr.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927235/15_h7bypt.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927235/14_ezsqll.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927235/17_p4j7sm.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927236/mmmmm-1_hjlcxg.png',
    ],
    brand: 'Renata',
    category: 'Antibiotic',
    price: 48.34,
    stock: 259,
    dosageForm: 'Syrup',
    strength: ['125mg/5ml', '500mg/5ml'],
    prescriptionRequired: true,
    expiryDate: '19-08-2026',
    isActive: true,
    averageReview: 4.6,
    totalReviews: 180,
  },
  {
    name: 'Azipro Capsule',
    slug: 'azipro-capsule',
    description:
      'Azithromycin antibiotic used to treat various bacterial infections like respiratory infections.',
    images: [
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927235/mm-1_gryhdt.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927236/6_wtjvp1.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927236/2_lsioaf.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927237/mmm-1_qtrb3b.png',
      'https://res.cloudinary.com/do6tvtff8/image/upload/v1743927236/5_vjgfig.png',
    ],
    brand: 'Beximco',
    category: 'Antibiotic',
    price: 48.74,
    stock: 525,
    dosageForm: 'Capsule',
    strength: ['250mg', '500mg'],
    prescriptionRequired: true,
    expiryDate: '19-08-2028',
    isActive: true,
    averageReview: 4.4,
    totalReviews: 200,
  },
];


const categories = [
  'All',
  'Antibiotics',
  'Pain Relief',
  'Vitamins',
  'Diabetes',
  'Digestive',
  'Cold & Flu',
];


const PopularItems = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);


  const renderStars = (rating: number) => (
    <div className='flex items-center gap-1'>
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
    <div className='max-w-7xl mx-auto'>
      <div className='grid grid-cols-12 gap-8 text-heading'>
        <div className='col-span-9'>
          <div className='flex items-center justify-between mb-8'>
            <div>
              <h2 className='text-3xl font-bold mb-2'>Popular Items</h2>
              <div className='w-=20 h-0.5 bg-primary'></div>
            </div>
            <Button
              variant='link'
              className='text-primary font-bold hover:text-secondary'
            >
              All Products <ChevronsRight />
            </Button>
          </div>

          {/* Category Tabs */}
          <div className='flex flex-wrap gap-2 mb-9'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {productstData.slice(0, 4).map((product: Product) => {
              const isHovered = hoveredSlug === product.slug;

              return (
                <div
                  key={product.slug}
                  className='group relative overflow-hidden rounded-xl p-3'
                  onMouseEnter={() => setHoveredSlug(product.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                >
                  {/* Overlay */}
                  <div
                    className='absolute inset-0 z-0 transition-all duration-500 ease-in-out'
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      clipPath: isHovered
                        ? 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)'
                        : 'polygon(0% 100%, 0% 40%, 100% 60%, 100% 100%)',
                      borderTopLeftRadius: isHovered ? '0rem' : '0.75rem',
                      borderTopRightRadius: isHovered ? '0rem' : '0.75rem',
                      transition:
                        'clip-path 0.5s ease-in-out, border-radius 0.5s ease-in-out',
                    }}
                  ></div>

                  {/* Main Content */}
                  <div className='relative z-10 p-2'>
                    <div className='relative aspect-square'>
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        className='w-full h-full object-contain'
                        width={300}
                        height={300}
                      />
                      {product.stock <= 0 && (
                        <Badge className='absolute top-3 left-3 bg-red-500 text-white text-xs font-bold'>
                          OUT OF STOCK
                        </Badge>
                      )}
                      <button className='absolute top-3 right-3 px-3 h-6 bg-primary rounded-full flex items-center justify-center text-white hover:bg-secondary transition-colors duration-200 text-sm'>
                        40%
                      </button>
                    </div>
                    <div className='mt-4 space-y-0.5'>
                      <h3 className='font-semibold'>{product.name}</h3>
                      {renderStars(product.averageReview)}
                      <div className='flex items-center gap-4'>
                        <span className='text-lg font-bold text-coral-500'>
                          ${product.price.toFixed(2)}
                        </span>
                        <span className='text-sm line-through font-bold text-color'>
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className='bg-white rounded-md flex items-center mt-3'>
                      <button className='flex items-center gap-2 font-bold px-3 py-2 text-sm hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer'>
                        <PlusCircle size={16} /> Add To Cart
                      </button>

                      <div className='border border-gray-100 h-8'></div>

                      <div className='flex justify-center mx-auto hover:bg-gray-50 cursor-pointer'>
                        <button
                          className='flex items-center justify-center hover:bg-gray-100 rounded-md transition-colors duration-200'
                          aria-label='Bookmark'
                        >
                          <Bookmark
                            size={16}
                            className='text-gray-500 hover:text-primary transition-colors cursor-pointer'
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='col-span-3'>
          <Image
            src={'/assets/delivery-man.png'}
            alt='delivery man'
            width={400}
            height={800}
            className='rounded-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default PopularItems;
