/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import OpeningHours from './OpeningHours';
import CustomBadge from '@/components/ui/core/CustomBadge';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'How can I naturally balance my hormones?',
    answer:
      'Most medical centers offer charity programs, counseling, and financial assistance for those in need. Non-Muslims are welcome to visit mosques. They should dress modestly and remove their shoes upon entering.',
  },
  {
    id: 2,
    question: 'How can I book an appointment for emergency treatment?',
    answer:
      'For emergency appointments, you can call our 24/7 hotline or visit our emergency department directly. We also offer online booking for urgent care appointments through our patient portal.',
  },
  {
    id: 3,
    question: 'Will medical aid pay for the treatment?',
    answer:
      'Medical aid coverage varies depending on your specific plan and the type of treatment required. We recommend contacting your medical aid provider directly to confirm coverage details before your appointment.',
  },
  {
    id: 4,
    question: 'What programs are available for developer?',
    answer:
      'We offer various programs including internships, continuing education courses, professional development workshops, and certification programs. Contact our education department for more information about current offerings.',
  },
  {
    id: 5,
    question: 'How does the treatment programme work?',
    answer:
      'Our treatment programs are personalized based on individual needs. The process typically includes an initial consultation, diagnostic assessments, treatment planning, regular follow-ups, and ongoing support throughout your care journey.',
  },
];

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([1]); // First item expanded by default

  const toggleItem = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className='max-w-7xl mx-auto my-10'>
      <div className='grid grid-cols-12 gap-20 bg-primary/5 p-12 rounded-lg'>
        <div className='col-span-5'>
          <OpeningHours />
        </div>

        <div className='col-span-7 space-y-4'>
          <div className='mb-8'>
            <CustomBadge text='Faq"s'/>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-heading'>
              Frequently Asked Questions
            </h2>
          </div>
          {faqData.map((item) => (
            <div
              key={item.id}
              className='rounded-sm overflow-hidden bg-white transition-shadow duration-200 text-color'
            >
              <button
                onClick={() => toggleItem(item.id)}
                className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200'
              >
                <span className='font-bold text-secondary pr-4'>
                  {item.id}. {item.question}
                </span>
                <div className='flex-shrink-0'>
                  {expandedItems.includes(item.id) ? (
                    <Minus className='w-6 h-6 bg-secondary p-1 rounded-full text-white' />
                  ) : (
                    <Plus className='w-5 h-5 text-secondary' />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedItems.includes(item.id)
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className='px-6 pb-4 text-sm leading-relaxed'>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
