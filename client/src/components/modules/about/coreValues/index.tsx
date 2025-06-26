'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Shield, Heart, Award } from 'lucide-react';
import CustomBadge from '@/components/ui/core/CustomBadge';

const coreValues = [
  {
    id: 'excellence',
    title: 'Highly Qualified Doctors',
    icon: Award,
    subtitle: 'Committed to exceptional standards',
    description:
      'We pride ourselves on delivering outstanding results through continuous improvement and dedication to quality and our commitment to excellence.',
    details: [
      'Highest quality standards in all deliverables',
      'Continuous learning and professional development',
      'Innovation-driven approach to problem solving',
      'Attention to detail in every project',
    ],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'integrity',
    title: 'Modern Equipments',
    icon: Shield,
    subtitle: 'Built on trust and transparency',
    description:
      'We operate with complete honesty and transparency, building lasting relationships based on trust and ethical business practices.',
    details: [
      'Complete transparency in all communications',
      'Ethical decision-making at every level',
      'Honest feedback and open dialogue',
      'Accountability for our actions and results',
    ],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'collaboration',
    title: 'Pain Free Treatment',
    icon: Users,
    subtitle: 'Stronger together',
    description:
      'We believe in the power of teamwork and collective intelligence. Our collaborative approach ensures better outcomes for everyone involved.',
    details: [
      'Cross-functional team collaboration',
      'Open communication and knowledge sharing',
      'Inclusive decision-making processes',
      "Supporting each other's growth and success",
    ],
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'empathy',
    title: 'Transparent Prices',
    icon: Heart,
    subtitle: 'Understanding and caring',
    description:
      "We put ourselves in others' shoes, understanding their needs and perspectives to create meaningful solutions that truly matter.",
    details: [
      'User-centered design and development',
      'Active listening and understanding',
      'Compassionate customer service',
      'Supporting community and social causes',
    ],
    color: 'from-pink-500 to-rose-600',
  },
];

const CoreValues = () => {
  const [activeValue, setActiveValue] = useState('excellence');
  const currentValue =
    coreValues.find((value) => value.id === activeValue) || coreValues[0];
  const IconComponent = currentValue.icon;

  return (
    <section className='py-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-6'>
          <div className='flex justify-center'>
            <CustomBadge text='Our Foundation' />
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-heading mb-6'>
            Our Core Values
          </h2>
        </div>

        {/* Values Tabs */}
        <Tabs
          value={activeValue}
          onValueChange={setActiveValue}
          className='w-full bg-white h-[550px] rounded-xl'
        >
          <TabsList className='grid w-full grid-cols-2 md:grid-cols-4 mb-12 bg-white py-10 border-b border-primary/20'>
            {coreValues.map((value) => {
              const ValueIcon = value.icon;
              return (
                <TabsTrigger
                  key={value.id}
                  value={value.id}
                  className='flex flex-col items-center gap-2 py-2 px-2 data-[state=active]:bg-white data-[state=active]:text-primary transition-all duration-500 data-[state=active]:shadow-none'
                >
                  <ValueIcon className='w-5 h-5' />
                  <span className='text-sm font-medium'>{value.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Content */}
          {coreValues.map((value) => (
            <TabsContent key={value.id} value={value.id} className='mt-0'>
              <Card className='border-0 shadow-none bg-white'>
                <CardContent className='p-0'>
                  <div className='grid lg:grid-cols-2 gap-0'>
                    {/* Left side - Image/Visual */}
                    <div
                      className={`relative p-12 bg-gradient-to-br ${value.color} text-white flex flex-col justify-center items-center text-center`}
                    >
                      <div className='absolute inset-0 bg-black/10'></div>
                      <div className='relative z-10'>
                        <div className='w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-sm'>
                          <IconComponent className='w-12 h-12' />
                        </div>
                        <h3 className='text-3xl font-bold mb-4'>
                          {value.title}
                        </h3>
                        <p className='text-lg opacity-90'>{value.subtitle}</p>
                      </div>
                    </div>

                    {/* Right side - Content */}
                    <div className='p-12'>
                      <h4 className='text-2xl font-semibold text-heading mb-6'>
                        {value.title} in Action
                      </h4>
                      <p className='text-color mb-8 leading-relaxed'>
                        {value.description}
                      </p>

                      <div className='space-y-4'>
                        <h5 className='font-semibold text-heading mb-4'>
                          How we live this value:
                        </h5>
                        {value.details.map((detail, index) => (
                          <div key={index} className='flex items-start gap-3'>
                            <CheckCircle className='w-5 h-5 text-primary mt-0.5 flex-shrink-0' />
                            <span className='text-color'>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CoreValues;
