import React from 'react';
import { Clock } from 'lucide-react';
import { RightArrow } from '@/constants/assets';

interface HoursData {
  day: string;
  hours: string;
  isToday?: boolean;
}

const hoursData: HoursData[] = [
  { day: 'Monday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Tuesday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Thursday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Friday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
];

const OpeningHours = () => {
  const today = new Date().getDay();
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const todayName = dayNames[today];

  const hoursWithToday = hoursData.map((item) => ({
    ...item,
    isToday: item.day === todayName,
  }));

  return (
    <div className='bg-secondary p-10 rounded-lg text-white'>
      <div className='mb-8 text-center'>
        <div className='flex items-center justify-center mb-4'>
          <Clock className='w-8 h-8 text-coral-500 mr-3' />
          <h2 className='text-3xl md:text-4xl font-bold text-navy-900'>
            Opening Hours
          </h2>
        </div>
        <p className=''>We&apos;re here to help you during these hours</p>
      </div>

      <div className=''>
        {hoursWithToday.map((item, index) => (
          <div
            key={item.day}
            className={`flex items-center justify-between py-3 ${
              index !== hoursData.length - 1 ? '' : ''
            } transition-colors duration-200`}
          >
            <div className='flex items-center'>
              <span
                className={`font-semibold ${
                  item.isToday ? 'text-coral-700' : 'text-gray-400'
                }`}
              >
                {item.day}
              </span>
              {item.isToday && (
                <span className='ml-2 px-2 py-1 text-xs font-medium border border-primary text-white rounded-full'>
                  Today
                </span>
              )}
            </div>
            <span
              className={`font-medium ${
                item.hours === 'Closed'
                  ? 'text-red-500'
                  : item.isToday
                  ? 'text-coral-700'
                  : 'text-gray-400'
              }`}
            >
              {item.hours}
            </span>
          </div>
        ))}
      </div>

      <div>
        <button className='bg-primary px-5 py-3 text-white rounded-md flex items-center gap-3 cursor-pointer mt-6'>
          Book an Appointment <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default OpeningHours;
