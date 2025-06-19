'use client';

import React from 'react';
import Image from 'next/image';
import {
  Facebook,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className='bg-[#f4f9f9] text-color'>
      <div className='max-w-7xl mx-auto'>
        <div className='py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10'>
          {/* Column 1 */}
          <div>
            <Logo />
            <p className='text-sm mb-4'>
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum is dummy text of the printing.
            </p>
            <div className='flex items-start gap-2 text-sm mb-1'>
              <MapPin size={16} />
              Brooklyn, New York, United States
            </div>
            <div className='flex items-center gap-2 text-sm mb-1'>
              <Phone size={16} />
              +0123-456789
            </div>
            <div className='flex items-center gap-2 text-sm'>
              <Mail size={16} />
              example@example.com
            </div>
            <div className='flex items-center gap-3 mt-4 text-sm'>
              <Facebook size={16} />
              <Twitter size={16} />
              <Youtube size={16} />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className='text-lg font-bold mb-3 text-heading'>Company</h4>
            <ul className='space-y-2 text-sm'>
              <li>About</li>
              <li>Blog</li>
              <li>All Products</li>
              <li>Locations Map</li>
              <li>FAQ</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className='text-lg font-bold mb-3 text-heading'>Services</h4>
            <ul className='space-y-2 text-sm'>
              <li>Order tracking</li>
              <li>WishList</li>
              <li>Login</li>
              <li>My account</li>
              <li>Terms & Conditions</li>
              <li>Promotional Offers</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className='text-lg font-bold mb-3 text-heading'>
              Customer Care
            </h4>
            <ul className='space-y-2 text-sm'>
              <li>Login</li>
              <li>My account</li>
              <li>Wishlist</li>
              <li>Order tracking</li>
              <li>FAQ</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className='text-lg font-bold mb-3 text-heading'>Newsletter</h4>
            <p className='text-sm mb-4'>
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
            <div className='flex w-full'>
              <input
                type='email'
                placeholder='email@example.com'
                className='w-full px-4 py-2 border border-gray-300 rounded-l-md text-sm'
              />
              <button className='bg-primary px-4 py-2 rounded-r-md text-white text-sm'>
                ➤
              </button>
            </div>
            <h5 className='text-sm font-bold mt-6 mb-2'>We Accept</h5>
            <Image
              src='/payment-methods.png'
              alt='Payments'
              width={220}
              height={30}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className='text-white py-4 text-sm flex flex-col md:flex-row items-center justify-between'>
          <p>All Rights Reserved @ Company 2023</p>
          <div className='flex items-center gap-4 mt-2 md:mt-0'>
            <a href='#'>Terms & Conditions</a>
            <a href='#'>Claim</a>
            <a href='#'>Privacy & Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
