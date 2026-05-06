import { useSearchParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../features/api/apiSlice';
import BannerCarousel from '../../components/banner-carousel/BannerCarousel';
import ProductCard from '../../components/product-card/ProductCard';
import ProductFilters from '../../components/product-filters/ProductFilters';
import { useState } from 'react';
import type { IProductFilters } from '../../interfaces/productFilter.interface';

const ProductListing = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const [filters, setFilters] = useState<IProductFilters>({});
  const { data, isLoading, error } = useGetProductsByCategoryQuery(category, {
    skip: !category,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;
  console.log(data);
  return (
    <>
      <BannerCarousel category={category} />
      <div className="flex m-10 mx-50 gap-4">
        <div className="w-1/6 border-t border-gray-300">
          <ProductFilters filters={filters} setFilters={setFilters} />
        </div>
        <div className="w-5/6 border-t border-gray-300">
          {/* Products */}
          <section className="max-w-7xl mx-auto px-4 py-10">
            <h3 className="text-2xl font-bold mb-6">Trending Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data && data.map((item) => <ProductCard key={item.id} product={item} />)}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductListing;
