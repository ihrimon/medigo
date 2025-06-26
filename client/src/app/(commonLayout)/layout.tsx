'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import CTA from '@/components/shared/CTA';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const showNavbar = pathname !== '/';

  return (
    <>
      {showNavbar && <Navbar />}
      <main className='min-h-screen'>{children}</main>
      <CTA />
      <Footer />
    </>
  );
};

export default CommonLayout;
