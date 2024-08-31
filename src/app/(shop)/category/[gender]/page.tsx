export const revalidate = 60;

import { notFound } from 'next/navigation';

import { Pagination, ProductGrid, Title } from '@/components';
import { getPaginatedProductsWithImages } from '@/actions';
import { Gender } from '@prisma/client';

interface Props {
  params: { gender: Gender };
  searchParams: {
    page?: string;
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { gender } = params;

  const genders: Record<Gender, string> = {
    men: "men's",
    women: "women's",
    kid: "children's",
    unisex: 'unisex',
  };

  if (!genders[gender]) notFound();

  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({
    page,
    gender,
  });

  return (
    <>
      <Title title={gender} subtitle={`${genders[gender]}  articles`} className='mb-2' />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
