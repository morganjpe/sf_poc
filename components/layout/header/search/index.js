import { useState } from 'react';
import axios from 'axios';
import { useDebouncedCallback } from 'use-debounce';

// components
import Results from './results';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const debouncedSearch = useDebouncedCallback(async (value) => {
    try {
      const { data } = await axios.get(
        `https://query.published.live1.suggest.eu1.fredhopperservices.com/sfx/json?search=${value}&scope=%2F%2Fscrewfix%2Fen_GB%2Favailability%3E%7Bscrewfix%7D&_=1621436527607`
      );

      setSearchResults(data.suggestionGroups[1].suggestions);
    } catch (err) {
      throw new Error(err);
    }
  }, 1000);

  return (
    <div className="sh-search" role="search">
      <input
        id="mainSearch-input"
        className="search-input"
        name="search"
        type="text"
        placeholder="What are you looking for?"
        autoComplete="off"
        onChange={(e) => debouncedSearch(e.target.value)}
        defaultValue=""
        tabIndex="-1"
        onBlur={() => setSearchResults([])}
      />
      <i className="icon icon-search" />
      <input
        type="submit"
        className="search-btn  icon icon-search"
        id="search_submit_button"
      />

      <div
        id="mainSearch-suggestions"
        className="sh-search__sugg"
        style={{ display: searchResults.length ? undefined : 'none' }}
      >
        <ul className="sh-search__sl">
          <Results searchResults={searchResults} />
        </ul>
      </div>
    </div>
  );
};

export default Search;
