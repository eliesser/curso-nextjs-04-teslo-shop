'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import clsx from 'clsx';

import { titleFont } from '@/config/fonts';
import { useCartStore, useUIStore } from '@/store';

export const TopMenu = () => {
  const openMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className='flex px-5 justify-between items-center w-full'>
      <div>
        <Link href={'/'}>
          <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
          <span> | Shop</span>
        </Link>
      </div>

      <div className='hidden sm:block'>
        <Link
          className={clsx('m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:underline', {
            underline: pathname === '/category/men',
          })}
          href={'/category/men'}
        >
          Men
        </Link>
        <Link
          className={clsx('m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:underline', {
            underline: pathname === '/category/women',
          })}
          href={'/category/women'}
        >
          Women
        </Link>
        <Link
          className={clsx('m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:underline', {
            underline: pathname === '/category/kid',
          })}
          href={'/category/kid'}
        >
          Kids
        </Link>
      </div>

      <div className='flex items-center gap-4'>
        <Link href={'/search'}>
          <IoSearchOutline className='w-5 h-5' />
        </Link>

        <Link href={totalItemsInCart === 0 && loaded ? '/empty' : '/cart'} className='mx-2'>
          <div className='relative'>
            {loaded && totalItemsInCart > 0 && (
              <span className='fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white'>
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className='w-5 h-5' />
          </div>
        </Link>

        <button className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' onClick={openMenu}>
          Menu
        </button>
      </div>
    </nav>
  );
};
