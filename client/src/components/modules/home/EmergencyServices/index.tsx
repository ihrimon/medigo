import { Phone, ShieldCheck, CalendarCheck } from 'lucide-react';
import { EmergencyServicesCard } from './EmergencyServicesCard';

export const EmergencyServices = () => {
  const services = [
    {
      title: 'Need Urgent Medical Help?',
      description:
        'MediGo offers 24/7 emergency support with expert doctors and advanced medical care.',
      buttonText: 'Emergency Call',
      buttonIcon: Phone,
      backgroundColor: 'bg-red-50',
      textColor: 'text-red-900',
      buttonColor: 'text-red-700 hover:text-red-900',
    },
    {
      title: 'Trusted Care & Safety',
      description:
        'We ensure quality care with strict safety protocols and certified healthcare professionals.',
      buttonText: 'Learn More',
      buttonIcon: ShieldCheck,
      backgroundColor: 'bg-sky-50',
      textColor: 'text-sky-900',
      buttonColor: 'text-sky-700 hover:text-sky-900',
    },
    {
      title: 'Book Appointment Easily',
      description:
        'Schedule appointments with your preferred doctor through a seamless and quick process.',
      buttonText: 'Make Appointment',
      buttonIcon: CalendarCheck,
      backgroundColor: 'bg-emerald-50',
      textColor: 'text-emerald-900',
      buttonColor: 'text-emerald-700 hover:text-emerald-900',
    },
  ];

  return (
    <section className='py-16 px-4 max-w-7xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((service, index) => (
          <EmergencyServicesCard
            key={index}
            title={service.title}
            description={service.description}
            buttonText={service.buttonText}
            buttonIcon={service.buttonIcon}
            backgroundColor={service.backgroundColor}
            textColor={service.textColor}
            buttonColor={service.buttonColor}
          />
        ))}
      </div>
    </section>
  );
};
