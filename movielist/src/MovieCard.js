import React from "react";
import { useState, useEffect } from "react";
import MovieCardList from "./MovieCardList";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=e5ad3bbb";
const List = () => {
  const [searchterm, setSearchterm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Superman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
    console.log(movies);
  };

  return (
    <div className="app">
      <h1>Find Movies TV Shows and More !!</h1>
      <div className="search">
        <input
          type="text"
          value={searchterm}
          onChange={(e) => setSearchterm(e.target.value)}
          placeholder="Enter Name of Movie"
        />
        <img alt="Search" onClick={() => searchMovies(searchterm)} />
      </div>
      {movies && movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCardList movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found !!!</h2>
        </div>
      )}
    </div>
  );
};

export default List;
