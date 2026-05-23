import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFancySearch from '../../hooks/fancy-search/useFancySearch';
import SearchSuggestions from './search-suggestions/SearchSuggestions';

const FancySearch = () => {
  const { error, isLoading, search, searchResults, setSearch, submitHandler } = useFancySearch();
  return (
    <form onSubmit={submitHandler}>
      <div className="group relative mr-4 w-md">
        <input
          aria-label="search-anything"
          autoComplete="off"
          name="search"
          id="search"
          type="text"
          className={`peer border border-gray-500 h-10 w-full px-4 pr-10 rounded-2xl 
            ${searchResults && searchResults.length ? 'focus:rounded-b-none focus:border-b-0 focus:outline-none' : ''}`}
          placeholder="What's on your mind today?"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <FontAwesomeIcon
          icon={isLoading ? faSpinner : faMagnifyingGlass}
          className={`text-lg text-gray-500 absolute right-3 top-3 ${isLoading ? 'animate-spin' : ''}`}
        />
        {!error && (!searchResults || searchResults.length == 0) && (
          <div className="absolute w-full border border-gray-500 z-10 rounded-b-2xl bg-white text-center border-t-0 pt-4 invisible opacity-0 peer-focus:visible peer-focus:opacity-100">
            <div className="max-h-[420px] overflow-y-auto">
              <div className="flex min-w-0 flex-1 flex-col justify-center py-2">
                No matching results found
              </div>
            </div>
          </div>
        )}

        {!error && searchResults && searchResults.length > 0 && (
          <SearchSuggestions searchResults={searchResults} />
        )}
      </div>
    </form>
  );
};

export default FancySearch;
