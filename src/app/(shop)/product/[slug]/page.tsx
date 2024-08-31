export const revalidate = 604800;

import { notFound } from 'next/navigation';

import { titleFont } from '@/config/fonts';
import {
  ProductMobileSlideshow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector,
} from '@/components';
import { getProductBySlug } from '@/actions';

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductBySlugPage({ params }: Props) {
  const { slug } = params;

  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className='mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3'>
      <div className='col-span1 md:col-span-2'>
        <ProductMobileSlideshow
          className='block md:hidden'
          title={product.title}
          images={product.images}
        />
        <ProductSlideshow
          className='hidden md:block'
          title={product.title}
          images={product.images}
        />
      </div>

      <div className='col-span-1 px-5 '>
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product.title}</h1>

        <p className='text-lg mb-5'>${product.price}</p>

        <SizeSelector selectedSize={product.sizes[0]} availableSizes={product.sizes} />

        <QuantitySelector quantity={2} />

        <button className='btn-primary my-5'>Add to cart</button>

        <h3 className='font-bold text-sm'>Description</h3>

        <p className='font-light'>{product.description}</p>
      </div>
    </div>
  );
}
