'use client';

import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section
      className='bg-cover bg-center py-20'
      style={{
        backgroundImage: "url('/assets/cta-bg.png')",
      }}
    >
      <div className='max-w-7xl mx-auto'>
        <div className='space-y-8'>
          <div className='space-y-6'>
            <h2 className='text-3xl md:text-5xl font-bold text-white leading-tight'>
              Start Your Journey to <br />
              Better Health Now
            </h2>

            <p className='text-white/80 text-lg leading-relaxed max-w-xl'>
              Contact us today to schedule your appointment and embark on your
              journey to better health.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col items-center sm:flex-row gap-4'>
            <Button className='bg-primary hover:bg-secondary text-white px-10 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 group'>
              <Calendar className='w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300' />
              Schedule an Appointment
            </Button>

            <button
              className=' flex items-center text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 group'
            >
              <Phone className='w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300' />
              (907) 555-0101
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
