'use client';

import CustomBadge from '@/components/ui/core/CustomBadge';
import {
  User,
  Activity,
  Syringe,
  Microscope,
  HeartPulse,
  Brain,
  Eye,
  Bone,
} from 'lucide-react';

export const TopServiceCategory = () => {
  const departments = [
    {
      id: '01',
      title: 'Primary Care',
      listings: '12 listings',
      icon: User,
    },
    {
      id: '02',
      title: 'Cardiology',
      listings: '08 listings',
      icon: HeartPulse,
    },
    {
      id: '03',
      title: 'Neurology',
      listings: '06 listings',
      icon: Brain,
    },
    {
      id: '04',
      title: 'Gastroenterology',
      listings: '09 listings',
      icon: Activity,
    },
    {
      id: '05',
      title: 'Orthopedics',
      listings: '07 listings',
      icon: Bone,
    },
    {
      id: '06',
      title: 'ENT (Ear, Nose, Throat)',
      listings: '10 listings',
      icon: Syringe,
    },
    {
      id: '07',
      title: 'Eye Care',
      listings: '05 listings',
      icon: Eye,
    },
    {
      id: '08',
      title: 'Laboratory',
      listings: '15 listings',
      icon: Microscope,
    },
  ];

  return (
    <section className='py-16 px-4 max-w-7xl mx-auto'>
      <div className='text-center mb-12'>
        <div className='flex justify-center'>
          <CustomBadge text='Medigo Departments'/>
        </div>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mt-2'>
          Top Medical Categories
        </h2>
        <p className='text-gray-600 max-w-2xl mx-auto mt-4'>
          Explore our specialized departments and connect with experienced
          professionals to ensure your best care.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {departments.map((dept) => {
          const Icon = dept.icon;
          return (
            <div
              key={dept.id}
              className='bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer group'
            >
              <div className='flex flex-col items-center text-center space-y-4'>
                <div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300'>
                  <Icon className='w-8 h-8 text-primary' />
                </div>

                <div>
                  <h3 className='font-semibold text-gray-800 text-lg mb-1'>
                    {dept.title}
                  </h3>
                  <p className='text-gray-500 text-sm'>{dept.listings}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
