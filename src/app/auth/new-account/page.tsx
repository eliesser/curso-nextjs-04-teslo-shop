import Link from 'next/link';

import { titleFont } from '@/config/fonts';

export default function NewAccountPage() {
  return (
    <div className='flex flex-col min-h-screen pt-32 sm:pt-52'>
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Sign up</h1>

      <div className='flex flex-col'>
        <label htmlFor='fullName'>Full name</label>
        <input className='px-5 py-2 border bg-gray-200 rounded mb-5' type='text' />

        <label htmlFor='email'>Email</label>
        <input className='px-5 py-2 border bg-gray-200 rounded mb-5' type='email' />

        <label htmlFor='password'>Password</label>
        <input className='px-5 py-2 border bg-gray-200 rounded mb-5' type='password' />

        <label htmlFor='password'>Repeat password</label>
        <input className='px-5 py-2 border bg-gray-200 rounded mb-5' type='password' />

        <button className='btn-primary'>Sign up</button>

        <div className='flex items-center my-5'>
          <div className='flex-1 border-t border-gray-500'></div>
          <div className='px-2 text-gray-800'>O</div>
          <div className='flex-1 border-t border-gray-500'></div>
        </div>

        <Link href='/auth/login' className='btn-secondary text-center'>
          Login
        </Link>
      </div>
    </div>
  );
}
