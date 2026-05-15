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

        {!error && searchResults && searchResults.length && (
          <SearchSuggestions searchResults={searchResults} />
        )}
      </div>
    </form>
  );
};

export default FancySearch;
