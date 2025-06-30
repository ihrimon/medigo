import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MapPin, Search } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';


const DoctorSearch = () => {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  // const { toast } = useToast();

  // const handleSearch = () => {
  //   if (!category || !location) {
  //     toast({
  //       title: 'Please fill in all fields',
  //       description:
  //         'Select a category and enter a location to search for doctors.',
  //       variant: 'destructive',
  //     });
  //     return;
  //   }

  //   toast({
  //     title: 'Searching for doctors',
  //     description: `Looking for ${category} doctors in ${location}...`,
  //   });
  // };

  const medicalCategories = [
    'Family Medicine',
    'Pediatrics',
    'Cardiology',
    'Dermatology',
    'Orthopedics',
    'Neurology',
    'Gynecology',
    'ENT (Ear, Nose, Throat)',
    'Endocrinology',
  ];

  return (
      <div className='p-6 rounded-lg shadow-lg bg-white'>
        <div className='flex flex-col md:flex-row gap-4 items-end'>
          <div className='flex-1 space-y-2'>
            <label className='text-sm font-medium text-gray-700'>
              Category
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className=' bg-white border-primary hover:border-secondary transition-colors mt-1'>
                <SelectValue placeholder='Family Medicine' />
              </SelectTrigger>
              <SelectContent className='bg-white border border-gray-200 shadow-lg'>
                {medicalCategories.map((cat) => (
                  <SelectItem
                    key={cat}
                    value={cat}
                    className='hover:bg-gray-50'
                  >
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className='flex-1 space-y-2'>
            <label className='text-sm font-medium text-gray-700'>
              Location
            </label>
            <div className='relative mt-1'>
              <MapPin className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
              <Input
                placeholder='Brooklyn, NY 11213'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className='pl-10 bg-white border-primary focus:border-primary transition-colors'
              />
            </div>
          </div>

          <Button
            // onClick={handleSearch}
            className='px-8 bg-primary hover:bg-secondary text-white font-medium rounded-md transition-colors flex items-center gap-1'
          >
            <Search className='h-4 w-4' />
            Search
          </Button>
        </div>
      </div>
  );
};

export default DoctorSearch;
