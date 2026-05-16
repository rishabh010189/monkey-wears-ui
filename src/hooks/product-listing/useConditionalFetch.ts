import { useSearchParams } from 'react-router-dom';
import { useGetProductsByCategoryQuery } from '../../features/api/endpoints/products.api';
import { useGetSearchResultsQuery } from '../../features/api/endpoints/search.api';

const useConditionalFetch = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const searchTerm = searchParams.get('q') || '';
  const isSearch = !!searchTerm;

  const category_query = useGetProductsByCategoryQuery(category, {
    skip: !category || isSearch,
  });

  const search_query = useGetSearchResultsQuery(searchTerm, {
    skip: !isSearch,
  });

  return { category, query: isSearch ? search_query : category_query };
};

export default useConditionalFetch;
