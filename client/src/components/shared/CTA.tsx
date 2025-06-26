'use client';

import { Button } from '@/components/ui/button';
import {
  Phone,
  Calendar,
} from 'lucide-react';

import Image from 'next/image';

export default function CTA() {


  return (
    <div className=''>
      {/* CTA Section */}
      <section className='relative overflow-hidden'>
        {/* Purple Gradient Background */}
        <div className='bg-gradient-to-br from-purple-500 via-purple-600 to-blue-500 relative'>
          {/* Decorative Background Elements */}
          <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48' />
            <div className='absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-40 -translate-x-40' />
            <div className='absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full -translate-y-32' />
          </div>

          <div className='max-w-7xl mx-auto py-6 relative z-10'>
            <div className='grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
              {/* Left Content */}
              <div className='space-y-8'>
                <div className='space-y-6'>
                  <h2 className='text-2xl md:text-5xl lg:text-4xl font-bold text-white leading-tight'>
                    Start Your Journey to Better Health Now
                  </h2>

                  <p className='text-white/80 text-lg leading-relaxed max-w-lg'>
                    Contact us today to schedule your appointment and embark on
                    your journey to better health.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Button className='bg-white text-purple-600 hover:bg-gray-50 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group'>
                    <Calendar className='w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300' />
                    Schedule an Appointment
                  </Button>

                  <Button
                    variant='outline'
                    className='border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:border-white/50 group'
                  >
                    <Phone className='w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300' />
                    (907) 555-0101
                  </Button>
                </div>
              </div>

              {/* Right Doctor Image */}
              <div className='relative flex justify-center lg:justify-end'>
                {/* Circular Background */}
                <div className='relative'>
                  <div className='w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-end justify-center overflow-hidden'>
                    <Image
                      src='https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=600'
                      alt='Smiling doctor with stethoscope'
                      width={500}
                      height={500}
                      className='w-full h-full object-cover object-center scale-110'
                    />
                  </div>

                  {/* Decorative Rings */}
                  <div className='absolute inset-0 rounded-full border-2 border-white/20 animate-pulse' />
                  <div className='absolute -inset-4 rounded-full border border-white/10' />
                  <div className='absolute -inset-8 rounded-full border border-white/5' />

                  {/* Floating Elements */}
                  <div className='absolute top-8 right-8 w-4 h-4 bg-white/40 rounded-full animate-bounce' />
                  <div className='absolute bottom-12 left-8 w-3 h-3 bg-white/30 rounded-full animate-pulse' />
                  <div className='absolute top-1/2 -right-4 w-2 h-2 bg-white/50 rounded-full' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
