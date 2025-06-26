import AllProducts from '@/components/modules/products';
import PageBanner from '@/components/shared/PageBanner';
import { getAllProducts } from '@/services/product';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const query = await searchParams;
  console.log('query', query);

  const { data: productsData } = await getAllProducts(
    undefined,
    undefined,
    query
  );
  const products = productsData?.data;
  console.log(products, 'product from home')
  return (
    <div>
      <PageBanner />
      <div className='max-w-7xl my-10 mx-auto'>
        <AllProducts products={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
