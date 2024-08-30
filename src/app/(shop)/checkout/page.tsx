import Image from 'next/image';
import Link from 'next/link';

import { Title } from '@/components';
import { initialData } from '@/seed/seed';

const productsInCart = [initialData.products[0], initialData.products[1], initialData.products[2]];

export default function CheckoutPage() {
  return (
    <div className='flex justify-center items-center mb-72 px-10 sm:px-0'>
      <div className='flex flex-col w-[1000px]'>
        <Title title='Check order' />

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
          <div className='flex flex-col mt-5'>
            <span className='text-xl'>Adjust elements</span>
            <Link href='/cart' className='underline mb-5'>
              Edit cart
            </Link>

            {productsInCart.map((product) => (
              <div key={product.slug} className='flex mb-5'>
                <Image
                  className='mr-5 rounded'
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    width: '100px',
                    height: '100px',
                  }}
                  alt={product.title}
                  priority
                />
                <div>
                  <p>{product.title}</p>
                  <p>${product.price} x 3</p>
                  <p className='font-bold'>Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='bg-white rounded-xl shadow-xl p-7'>
            <h2 className='text-2xl mb-2 font-bold'>Delivery address</h2>

            <div className='mb-10'>
              <p className='text-xl'>Eliesser Freites</p>
              <p>Av. Perone</p>
              <p>123 123 123</p>
            </div>

            <div className='w-full h-0.5 rounded bg-gray-200 mb-10' />

            <h2 className='text-2xl mb-2 font-bold'>Order summary</h2>

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
              <p className='mb-5'>
                <span className='text-xs'>
                  By clicking &quot;Place order&quot;, you accept our{' '}
                  <Link className='underline' href=''>
                    terms & conditions
                  </Link>{' '}
                  and{' '}
                  <Link className='underline' href=''>
                    privacy policy
                  </Link>
                  .
                </span>
              </p>
              <Link className='flex btn-primary justify-center' href='/orders/123'>
                Place order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
