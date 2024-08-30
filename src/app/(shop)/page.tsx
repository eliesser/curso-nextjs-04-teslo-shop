import { ProductGrid } from '@/components';
import { Title } from '@/components/ui/title/Title';
import { initialData } from '@/seed/seed';

const seedProducts = initialData.products;

export default function ShopPage() {
  return (
    <>
      <Title title='Shop' subtitle='All products' className='mb-2' />

      <ProductGrid products={seedProducts} />
    </>
  );
}
