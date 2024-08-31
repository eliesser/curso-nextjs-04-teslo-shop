import Image from 'next/image';
import Link from 'next/link';

import { titleFont } from '@/config/fonts';

export const PageNotFound = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle'>
      <div className='text-center px-5 mx-5'>
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p className='font-semibold text-xl'>Whoops! We are very sorry</p>
        <p className='font-light'>
          <span>You can return to </span>
          <Link href={'/'} className='font-normal hover:underline transition-all'>
            Home
          </Link>
        </p>
      </div>

      <div className=''>
        <Image
          className='p-5 sm:p-0'
          src={'/imgs/starman_750x750.png'}
          alt='404'
          height={550}
          width={550}
          priority
        />
      </div>
    </div>
  );
};
