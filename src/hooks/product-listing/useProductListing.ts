import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { IProductFilters } from '../../interfaces/productFilter.interface';
import { useGetProductsByCategoryQuery } from '../../features/api/apiSlice';

const useProductListing = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const [filters, setFilters] = useState<IProductFilters>({});
  const { data, isLoading, error } = useGetProductsByCategoryQuery(category, {
    skip: !category,
  });

  const filteredProducts = useMemo(() => {
    if (!data) return [];

    return data
      .filter((product) => {
        // category filter example
        if (
          filters.category &&
          filters.category != 'all' &&
          product.productCategory !== filters.category
        ) {
          return false;
        }

        // size filter example
        if (
          filters.sizes &&
          filters.sizes.length &&
          !product.variants.some((v) => filters.sizes?.includes(v.size))
        ) {
          return false;
        }

        // price filter example
        if (
          filters.maxPrice &&
          !product.variants.some((v) => v.price < (filters.maxPrice || 9999))
        ) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filters.sort && filters.sort == 'price_low') {
          return a.variants[0].price - b.variants[0].price;
        } else if (filters.sort && filters.sort == 'price_high') {
          return b.variants[0].price - a.variants[0].price;
        } else {
          return 0;
        }
      });
  }, [data, filters]);

  return {
    category,
    data: filteredProducts,
    error,
    filters,
    isLoading,
    setFilters,
  };
};

export default useProductListing;
