import React, { useState } from 'react';
import { AutoComplete, Button } from 'antd';
import axios from 'axios';
import '../assets/css/search.css'
import ListMovie from "../components/ListMovie";

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=49ef34d8&s=${query}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (value) => {
    setQuery(value);
  };

  const handleSelect = (value) => {
    setQuery(value);
  };

  const handleSearchButton = () => {
    handleSearch();
  };

  const fetchSuggestions = async (value) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=49ef34d8&s=${value}`);
      setSuggestions(response.data.Search || []);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(movies);

  return (
    <div className="container--fluid">
    <div className="search">
    <AutoComplete
        value={query}
        onChange={handleInputChange}
        onSelect={handleSelect}
        onSearch={fetchSuggestions}
        placeholder="Search movies..."
        className="search-input"
        style={{ marginTop: '10rem', width: '50%',marginLeft:'20%',borderRadius:'10px',}}
      >
        {suggestions.map((suggestion) => (
          <AutoComplete.Option key={suggestion.imdbID} value={suggestion.Title}>
            {suggestion.Title} ({suggestion.Year})
          </AutoComplete.Option>
        ))}
      </AutoComplete>
      <Button type="primary" onClick={handleSearchButton}>
        Search
      </Button>
      <div className="result">
      <ListMovie data={movies}/>
      </div>
      

    </div>
    
     
    </div>
  );
};

export default SearchMovies;
