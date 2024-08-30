import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className='flex w-full justify-center text-xs mb-10 gap-3'>
      <Link className='hover:underline' href='/'>
        <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
        <span> | Shop</span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link className='hover:underline' href='/'>
        Privacy & legal
      </Link>

      <Link className='hover:underline' href='/'>
        Locations
      </Link>
    </div>
  );
};
