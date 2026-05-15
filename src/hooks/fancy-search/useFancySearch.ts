import { useEffect, useState } from 'react';
import { useLazyGetSearchResultsQuery } from '../../features/api/endpoints/search.api';

const useFancySearch = () => {
  const [search, setSearch] = useState('');
  const [triggerSearch, { data: searchResults, isLoading, error }] = useLazyGetSearchResultsQuery();

  const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    triggerSearchHandler(search);
  };

  const triggerSearchHandler = (search: string) => {
    const trimmed = search.trim();

    if (trimmed) {
      triggerSearch(trimmed);
    }
  };

  useEffect(() => {
    if (search && search.length > 2) {
      const timer = setTimeout(() => {
        triggerSearchHandler(search);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [search]);

  return { error, isLoading, search, searchResults, setSearch, submitHandler };
};

export default useFancySearch;
