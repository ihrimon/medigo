import { LucideIcon, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: LucideIcon;
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
}

export const EmergencyServicesCard = ({
  title,
  description,
  backgroundColor,
  textColor,
  buttonText,
  buttonColor,
}: ServiceCardProps) => {
  return (
    <div
      className={`${backgroundColor} rounded-2xl p-8 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:scale-105`}
    >
      <div className='space-y-4'>
        <h3 className={`text-xl font-semibold ${textColor} leading-tight`}>
          {title}
        </h3>
        <p className={`${textColor} opacity-80 text-sm leading-relaxed`}>
          {description}
        </p>
      </div>

      <div className='mt-8'>
        <Button
          variant='ghost'
          className={`${buttonColor} p-0 h-auto font-medium text-sm group transition-all duration-200`}
        >
          {buttonText}
          <ArrowRight className='ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1' />
        </Button>
      </div>
    </div>
  );
};
