import { Card, CardContent } from '@/components/ui/card';
import CustomBadge from '@/components/ui/core/CustomBadge';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  MapPin as LocationIcon,
  Mail as EmailIcon,
} from 'lucide-react';

const branches = [
  {
    id: 1,
    location: 'New York, USA',
    phone: '+202-9393-9393 99',
    address:
      'USA Address - 254 Chapman Rd, Ste 208 #13379 Katche, Melaware 19702',
    email: 'infologistic@example.com',
  },
  {
    id: 2,
    location: 'Dallas Texas, USA',
    phone: '+202-9393-9393 99',
    address:
      'USA Address - 254 Chapman Rd, Ste 208 #13379 Katche, Melaware 19702',
    email: 'infologistic@example.com',
  },
  {
    id: 3,
    location: 'California, USA',
    phone: '+202-9393-9393 99',
    address:
      'USA Address - 254 Chapman Rd, Ste 208 #13379 Katche, Melaware 19702',
    email: 'infologistic@example.com',
  },
];

const additionalInfo = [
  {
    icon: Clock,
    title: 'SCHEDULE',
    content: 'Sun-Fri: 9 AM — 6 PM',
  },
  {
    icon: LocationIcon,
    title: 'LOCATIONS',
    content: '421 Allen, Mexico 4233',
  },
  {
    icon: EmailIcon,
    title: 'OUR EMAIL',
    content: 'Medicax@gmail.com',
  },
];

const BranchLocations = () => {
  return (
    <section className='py-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='flex justify-center'>
            <CustomBadge text='Branch Locations'/>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-heading mb-6'>
            Connect With Our <span className='text-blue-600'>3 Branch</span>
          </h2>
        </div>

        {/* Branch Cards */}
        <div className='grid md:grid-cols-3 gap-8 mb-16'>
          {branches.map((branch) => (
            <Card
              key={branch.id}
              className='bg-slate-100 border-0 hover:shadow-lg transition-shadow duration-300'
            >
              <CardContent className='p-8'>
                <h3 className='text-xl font-bold text-slate-800 mb-8'>
                  {branch.location}
                </h3>

                <div className='space-y-6'>
                  {/* Phone */}
                  <div className='flex items-start gap-3'>
                    <div className='w-5 h-5 mt-0.5 flex-shrink-0'>
                      <Phone className='w-5 h-5 text-slate-600' />
                    </div>
                    <span className='text-slate-700 font-medium'>
                      {branch.phone}
                    </span>
                  </div>

                  {/* Address */}
                  <div className='flex items-start gap-3'>
                    <div className='w-5 h-5 mt-0.5 flex-shrink-0'>
                      <MapPin className='w-5 h-5 text-slate-600' />
                    </div>
                    <span className='text-slate-700 font-medium leading-relaxed'>
                      {branch.address}
                    </span>
                  </div>

                  {/* Email */}
                  <div className='flex items-start gap-3'>
                    <div className='w-5 h-5 mt-0.5 flex-shrink-0'>
                      <Mail className='w-5 h-5 text-slate-600' />
                    </div>
                    <span className='text-blue-600 font-medium'>
                      {branch.email}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className='grid md:grid-cols-3 gap-8'>
          {additionalInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className='flex items-center gap-4'>
                <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0'>
                  <IconComponent className='w-6 h-6 text-white' />
                </div>
                <div>
                  <h4 className='text-sm font-bold text-slate-800 mb-1'>
                    {info.title}
                  </h4>
                  <p className='text-slate-700 font-medium'>{info.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BranchLocations;
