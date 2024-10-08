'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from 'react-icons/io5';
import clsx from 'clsx';

import { useUIStore } from '@/store';
import { logout } from '@/actions';

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  const isAdmin = session?.user.role === 'admin';

  return (
    <div>
      {isSideMenuOpen && (
        <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30' />
      )}
      {isSideMenuOpen && (
        <div
          className='fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'
          onClick={closeMenu}
        />
      )}

      <nav
        className={clsx(
          'fixed p-5 right-0 top-0 w-[400px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
          {
            'translate-x-full': !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className='absolute t-5 right-5 cursor-pointer'
          onClick={closeMenu}
        />

        <div className='relative mt-14'>
          <IoSearchOutline size={20} className='absolute top-2 left-2' />
          <input
            type='text'
            placeholder='Search'
            className='w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500'
          />
        </div>

        {isAuthenticated && (
          <>
            <Link
              href={`/profile`}
              className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
              onClick={closeMenu}
            >
              <IoPersonOutline size={20} /> <span className='ml-3 text-lg'>Profile</span>
            </Link>

            <Link
              href={`/`}
              className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
              onClick={closeMenu}
            >
              <IoTicketOutline size={20} /> <span className='ml-3 text-lg'>Orders</span>
            </Link>

            <button
              className='flex w-full items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
              onClick={() => {
                logout();
              }}
            >
              <IoLogOutOutline size={20} />
              <span className='ml-3 text-lg'>Logout</span>
            </button>
          </>
        )}

        {!isAuthenticated && (
          <Link
            href='/auth/login'
            className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
            onClick={() => closeMenu()}
          >
            <IoLogInOutline size={20} />
            <span className='ml-3 text-lg'>Login</span>
          </Link>
        )}

        {isAdmin && (
          <>
            <div className='w-full h-px bg-gray-200 my-10' />

            <Link
              href={`/`}
              className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
            >
              <IoShirtOutline size={20} /> <span className='ml-3 text-lg'>Products</span>
            </Link>

            <Link
              href={`/`}
              className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
            >
              <IoTicketOutline size={20} /> <span className='ml-3 text-lg'>Orders</span>
            </Link>

            <Link
              href={`/`}
              className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'
            >
              <IoPeopleOutline size={20} /> <span className='ml-3 text-lg'>Users</span>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};
