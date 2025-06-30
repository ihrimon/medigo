'use client';

import Logo from '@/components/shared/Logo';
import styles from './HeroSection.module.css';
import { navLinks } from '@/constants/navbar';
import Link from 'next/link';
import CustomBadge from '@/components/ui/core/CustomBadge';
import { RightArrow } from '@/constants/assets';
import DoctorSearch from './DoctorSearch';

const HomeBanner = () => {
  return (
    <div className={`${styles.banner}`}>
      {/* Home Navbar Content */}
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-between pt-6 font-medium text-heading'>
          <div>
            <Logo />
          </div>
          <div>
            <div>
              <ul className='flex items-center justify-evenly gap-5'>
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='flex items-center gap-5 font-medium'>
            <Link href={'/auth/login'}>
              <button className='cursor-pointer'>Login</button>
            </Link>
            <Link href={'/auth/register'}>
              {' '}
              <button className='bg-white hover:bg-secondary transition-colors px-4 py-[6px] rounded-md cursor-pointer text-primary hover:text-white'>
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        {/* Banner Content */}
        <div className='mt-18 text-color'>
          <CustomBadge text='Smart Healthcare' />
          <h1 className='text-[56px] font-extrabold leading-14 text-heading'>
            Smart <span className='text-[#01b0c3]'>MediGo Care</span> <br />{' '}
            Order Medicines And <br />
            <span className='text-[#266388]'>Consult Doctors</span> Easily
          </h1>
          <p className='lg:w-[470px] my-5 mb-8 leading-7'>
            Get your medicines delivered to your doorstep and book certified
            doctors anytime, anywhere. MediGo makes healthcare simple, fast, and
            reliable—just the way you need it.
          </p>
          {/* Book an appointment button */}
          <div>
            <button className='bg-secondary hover:bg-primary transition-colors px-5 py-[7px] text-white rounded-md flex items-center gap-3 cursor-pointer'>
              Book an Appointment <RightArrow />
            </button>
          </div>
          <div className='mt-10 flex items-center gap-10'>
            <DoctorSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
