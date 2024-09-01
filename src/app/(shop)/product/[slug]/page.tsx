export const revalidate = 604800;

import { ResolvingMetadata, Metadata } from 'next';
import { notFound } from 'next/navigation';

import { titleFont } from '@/config/fonts';
import { ProductMobileSlideshow, ProductSlideshow, StockLabel } from '@/components';
import { getProductBySlug } from '@/actions';
import { AddToCart } from './ui/AddToCart';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const product = await getProductBySlug(slug);

  const titleDescription = {
    title: product?.title ?? 'Product not found',
    description: product?.description ?? '',
  };

  return {
    ...titleDescription,
    openGraph: {
      ...titleDescription,
      images: [`/products/${product?.images[1]}`],
    },
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
        <StockLabel slug={product.slug} />

        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>{product.title}</h1>

        <p className='text-lg mb-5'>${product.price}</p>

        <AddToCart product={product} />

        <h3 className='font-bold text-sm'>Description</h3>

        <p className='font-light'>{product.description}</p>
      </div>
    </div>
  );
}
