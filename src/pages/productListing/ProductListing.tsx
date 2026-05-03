import { useSearchParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../features/api/apiSlice';

const ProductListing = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const { data, isLoading, error } = useGetProductsByCategoryQuery(category, {
    skip: !category,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;
  console.log(data);
  return <div>ProductListing</div>;
};

export default ProductListing;
