import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/assets/logo.png';

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-center gap-2'>
      <Image src={logo} width={100} height={100} alt='logo' />
      <p className='text-2xl text-[#01b0c3] font-semibold'>
        Medi<span className='text-[#246287]'>Go</span>
      </p>
    </Link>
  );
}

export default Logo