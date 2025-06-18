'use client';

import Logo from '@/components/shared/Logo';
import styles from './HeroSection.module.css';
import { navLinks } from '@/constants/navbar';
import Link from 'next/link';
import CustomBadge from '@/components/ui/core/CustomBadge';
import { DoctorsBadge, RightArrow } from '@/constants/assets';

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
            <button className='cursor-pointer'>Login</button>
            <button className='bg-primary px-5 py-2 rounded-md cursor-pointer text-white'>
              Sign Up
            </button>
          </div>
        </div>
        {/* Banner Content */}
        <div className='mt-18 text-color'>
          <CustomBadge
            text='Smart Healthcare'
          />
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
            <button className='bg-[#266388] px-5 py-3 text-white rounded-md flex items-center gap-3 cursor-pointer'>
              Book an Appointment <RightArrow />
            </button>
          </div>
          <div className='mt-10 flex items-center gap-10'>
            <DoctorsBadge />
            <div className='flex items-center gap-10'>
              <p>
                <span className='text-[#266388] text-3xl font-bold'>50+<br/></span>
                Expert Doctors
              </p>
              <p>
                <span className='text-[#266388] text-3xl font-bold'>20+ <br/></span>
                Job Vacancy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
