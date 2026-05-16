import { useCallback, useEffect, useState } from 'react';
import { useLazyGetSearchResultsQuery } from '../../features/api/endpoints/search.api';
import { useNavigate } from 'react-router-dom';

const useFancySearch = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [triggerSearch, { data: searchResults, isLoading, error }] = useLazyGetSearchResultsQuery();
  const params = new URLSearchParams();

  const submitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim()) {
      params.set('q', search);
      navigate({
        pathname: '/search',
        search: params.toString(),
      });
    }
    // triggerSearchHandler(search);
  };

  const triggerSearchHandler = useCallback(
    (search: string) => {
      const trimmed = search.trim();

      if (trimmed) {
        triggerSearch(trimmed);
      }
    },
    [triggerSearch],
  );

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
