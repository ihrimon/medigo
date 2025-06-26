'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Appointment = () => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    serviceType: '',
    doctor: '',
    message: '',
  });

  const serviceTypes = [
    'General Consultation',
    'Cardiology',
    'Neurology',
    'Gynecology',
    'Pediatrics',
    'Dermatology',
  ];

  const doctors = [
    'Dr. Julia Jany',
    'Dr. Michel Liu',
    'Dr. Jesmine Ruby',
    'Dr. Alex Smith',
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment form submitted:', { ...formData, date });
  };

  return (
    <section className='py-20 px-4 bg-white'>
      <div className='max-w-7xl mx-auto relative rounded-xl overflow-hidden shadow-xl'>
        {/* Image */}
        <Image
          src='/assets/doctor-appointment.png'
          alt='Appointment'
          width={1400}
          height={800}
          className='w-full h-auto object-cover'
        />

        {/* Overlay Form */}
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-start px-6 md:px-16'>
          <div className=' p-4 md:p-6 rounded-xl w-full max-w-xl'>
            <div className='mb-6'>
              <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-2'>
                Book an Appointment
              </h2>
              <p className='text-gray-700 text-sm'>
                Take the first step toward your health & wellness goals.
              </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-5'>
              <div className='grid md:grid-cols-2 gap-4'>
                <div className='space-y-1'>
                  <Label htmlFor='fullName'>Full Name*</Label>
                  <Input
                    id='fullName'
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange('fullName', e.target.value)
                    }
                    required
                  />
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='phoneNumber'>Phone Number*</Label>
                  <Input
                    id='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      handleInputChange('phoneNumber', e.target.value)
                    }
                    required
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-4'>
                <div className='space-y-1'>
                  <Label htmlFor='email'>Email Address*</Label>
                  <Input
                    id='email'
                    type='email'
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                <div className='space-y-1'>
                  <Label>Service Type</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange('serviceType', value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Choose service' />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-4'>
                <div className='space-y-1'>
                  <Label>Select Doctor</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange('doctor', value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Choose doctor' />
                    </SelectTrigger>
                    <SelectContent>
                      {doctors.map((doctor) => (
                        <SelectItem key={doctor} value={doctor}>
                          {doctor}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className='space-y-1'>
                  <Label>Select Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant='outline'
                        className={cn(
                          'w-full justify-start text-left font-normal',
                          !date && 'text-muted-foreground'
                        )}
                      >
                        <CalendarIcon className='mr-2 h-4 w-4' />
                        {date ? format(date, 'MM/dd/yyyy') : 'Select a date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className='space-y-1'>
                <Label htmlFor='message'>Your Message</Label>
                <Textarea
                  id='message'
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className='min-h-[100px]'
                />
              </div>

              <Button
                type='submit'
                className='w-full bg-primary hover:bg-secondary text-white py-4 font-semibold flex items-center justify-center gap-2'
              >
                Complete Your Appointment
                <ArrowRight className='w-5 h-5' />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
