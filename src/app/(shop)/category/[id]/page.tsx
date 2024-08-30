import { notFound } from 'next/navigation';

import { initialData } from '@/seed/seed';
import { ProductGrid, Title } from '@/components';
import { Category } from '@/interfaces';

const seedProducts = initialData.products;

interface Props {
  params: { id: Category };
}

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  const genders: Record<Category, string> = {
    men: "men's",
    women: "women's",
    kid: "children's",
    unisex: 'unisex',
  };

  if (!genders[id]) notFound();

  const products = seedProducts.filter((product) => product.gender === id);

  return (
    <>
      <Title title={id} subtitle={`${genders[id]}  articles`} className='mb-2' />

      <ProductGrid products={products} />
    </>
  );
}
