import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Plus, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import CustomBadge from '@/components/ui/core/CustomBadge';

const medicalExperts = [
  {
    id: 1,
    name: 'Dr. Julia Jany',
    specialty: 'Gynecology Specialist',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    initials: 'JJ',
  },
  {
    id: 2,
    name: 'Dr. Michel Liu',
    specialty: 'Heart Specialist',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    initials: 'ML',
  },
  {
    id: 3,
    name: 'Dr. Jesmine Ruby',
    specialty: 'Neurology Specialist',
    image:
      'https://images.unsplash.com/photo-1594824443624-0dfab9ac3dd7?w=400&h=400&fit=crop&crop=face',
    initials: 'JR',
  },
  {
    id: 4,
    name: 'Dr. Alex Smith',
    specialty: 'Cardiology Specialist',
    image:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
    initials: 'AS',
  },
];

const socialIcons = [
  { icon: Facebook, color: 'text-blue-600' },
  { icon: Twitter, color: 'text-sky-500' },
  { icon: Instagram, color: 'text-pink-500' },
  { icon: Linkedin, color: 'text-blue-700' },
];

const MedicalExperts = () => {
  return (
    <section className='py-20'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='flex justify-center'>
            <CustomBadge text='Medical Experts' />
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-heading mb-6'>
            Skilled Professionals at Medigo 
          </h2>
        </div>

        {/* Doctors Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {medicalExperts.map((doctor) => (
            <Card
              key={doctor.id}
              className='relative group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden'
            >
              <CardContent className='p-0'>
                {/* Doctor Image */}
                <div className='relative aspect-[4/5] overflow-hidden'>
                  <Avatar className='w-full h-full rounded-none'>
                    <AvatarImage
                      src={doctor.image}
                      alt={doctor.name}
                      className='object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                    <AvatarFallback className='w-full h-full rounded-none bg-slate-200 text-2xl font-semibold'>
                      {doctor.initials}
                    </AvatarFallback>
                  </Avatar>

                  {/* Social Icons Overlay */}
                  <div className='absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    {socialIcons.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <Button
                          key={index}
                          size='icon'
                          variant='secondary'
                          className='w-8 h-8 bg-white/90 hover:bg-white shadow-sm'
                        >
                          <IconComponent
                            className={`w-4 h-4 ${social.color}`}
                          />
                        </Button>
                      );
                    })}
                  </div>

                  {/* Add Button */}
                  <Button
                    size='icon'
                    className='absolute bottom-4 right-4 w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 shadow-lg'
                  >
                    <Plus className='w-5 h-5' />
                  </Button>
                </div>

                {/* Doctor Info */}
                <div className='p-6 text-center'>
                  <h3 className='text-xl font-bold text-slate-800 mb-2'>
                    {doctor.name}
                  </h3>
                  <p className='text-slate-600 font-medium'>
                    {doctor.specialty}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalExperts;
