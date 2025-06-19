'use client'

import CustomBadge from '@/components/ui/core/CustomBadge';
import { Check, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export const PricingPlan = () => {
  const [billingType, setBillingType] = useState<'monthly' | 'yearly'>(
    'monthly'
  );

  const plans = [
    {
      id: 'wellness-starter',
      name: 'Wellness Starter Plan',
      description: 'Designed to enhance sleep quality with tailored insights.',
      price: { monthly: 59, yearly: 590 },
      features: [
        'Articles and tips',
        'Activity reminders',
        'Basic health tracking',
        'Weekly wellness check-in',
      ],
      backgroundColor: 'bg-gray-50',
      isPopular: false,
    },
    {
      id: 'sleep-wellness',
      name: 'Sleep Wellness Plan',
      description:
        'Ideal for general wellness tracking and building healthy habits.',
      price: { monthly: 79, yearly: 790 },
      features: [
        'Articles and tips',
        'Activity reminders',
        'Basic health tracking',
        'Weekly wellness check-in',
      ],
      backgroundColor: 'bg-teal-50',
      isPopular: true,
    },
    {
      id: 'weight-management',
      name: 'Weight Management Plan',
      description: 'Focus on achieving and maintaining a healthy weight.',
      price: { monthly: 99, yearly: 990 },
      features: [
        'Articles and tips',
        'Activity reminders',
        'Basic health tracking',
        'Weekly wellness check-in',
      ],
      backgroundColor: 'bg-gray-50',
      isPopular: false,
    },
  ];

  return (
    <section className='py-16 max-w-7xl mx-auto'>
      {/* Header */}
      <div className='mb-12'>
            <CustomBadge text='Our Pricing Plan'/>

        <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8'>
          <div className='lg:max-w-2xl'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight'>
              Choose the right plan for your health journey
            </h2>
          </div>

          <div className='lg:max-w-md'>
            <p className='text-gray-600 mb-6'>
              Price transparency in healthcare refers to the availability of
              information about the exact cost of items and services before
              getting them.
            </p>

            {/* Billing Toggle */}
            <div className='flex items-center gap-4'>
              <button
                onClick={() => setBillingType('monthly')}
                className={`flex items-center gap-2 ${
                  billingType === 'monthly'
                    ? 'text-orange-500'
                    : 'text-gray-500'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    billingType === 'monthly'
                      ? 'border-orange-500'
                      : 'border-gray-300'
                  }`}
                >
                  {billingType === 'monthly' && (
                    <div className='w-2 h-2 bg-orange-500 rounded-full'></div>
                  )}
                </div>
                Billed monthly
              </button>

              <button
                onClick={() => setBillingType('yearly')}
                className={`flex items-center gap-2 ${
                  billingType === 'yearly' ? 'text-orange-500' : 'text-gray-500'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    billingType === 'yearly'
                      ? 'border-orange-500'
                      : 'border-gray-300'
                  }`}
                >
                  {billingType === 'yearly' && (
                    <div className='w-2 h-2 bg-orange-500 rounded-full'></div>
                  )}
                </div>
                Billed yearly
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`${plan.backgroundColor} rounded-2xl p-8 relative transition-all duration-300 hover:shadow-lg hover:scale-105`}
          >
            {plan.isPopular && (
              <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                <div className='bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium'>
                  Popular
                </div>
              </div>
            )}

            <div className='mb-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                {plan.name}
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed'>
                {plan.description}
              </p>
            </div>

            <div className='mb-8'>
              <h4 className='text-gray-900 font-semibold mb-4'>Features</h4>
              <ul className='space-y-3'>
                {plan.features.map((feature, index) => (
                  <li key={index} className='flex items-center gap-3'>
                    <div className='w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0'>
                      <Check className='w-3 h-3 text-teal-600' />
                    </div>
                    <span className='text-gray-700 text-sm'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-baseline gap-1'>
                <span className='text-3xl font-bold text-orange-500'>
                  ${plan.price[billingType]}
                </span>
                <span className='text-gray-500 text-sm'>
                  /{billingType === 'monthly' ? 'Monthly' : 'Yearly'}
                </span>
              </div>

              <button className='w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow'>
                <ChevronRight className='w-5 h-5 text-gray-600' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
