import Link from 'next/link';
import { redirect } from 'next/navigation';

import { Title } from '@/components';
import { initialData } from '@/seed/seed';
import { ProductsInCart } from './ui/ProductsInCart';

const productsInCart = [initialData.products[0], initialData.products[1], initialData.products[2]];

export default function CartPage() {
  if (!productsInCart.length) redirect('/empty');

  return (
    <div className='flex justify-center items-center mb-72 px-10 sm:px-0'>
      <div className='flex flex-col w-[1000px]'>
        <Title title='Cart' />

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
          <div className='flex flex-col mt-5'>
            <span className='text-xl'>Add more items</span>
            <Link href='/' className='underline mb-5'>
              Continue shopping
            </Link>

            <ProductsInCart />
          </div>

          <div className='bg-white rounded-xl shadow-xl p-7 h-fit'>
            <h2 className='text-2xl mb-2'>Order summary</h2>
            <div className='grid grid-cols-2'>
              <span>No. of products</span>
              <span className='text-right'>3 items</span>

              <span>Subtotal</span>
              <span className='text-right'>$100</span>

              <span>Taxes (15%)</span>
              <span className='text-right'>$100</span>

              <span className='mt-5 text-2xl'>Total</span>
              <span className='mt-5 text-2xl text-right'>$100</span>
            </div>

            <div className='mt-5 mb-2 w-full'>
              <Link className='flex btn-primary justify-center' href='/checkout/address'>
                {' '}
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
