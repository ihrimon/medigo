'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import CTA from '@/components/shared/CTA';
import { useLenis } from '@/hooks/useLenis';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const showNavbar = pathname !== '/';
  useLenis()

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
