import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/movieCard";
import "./MovieGrid.css"


const searchURL = import.meta.env.VITE_SEARCH;
const apikey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q"); 

  const getSearchMovies = async (url) => {
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?query=${query}`;
    setLoading(true);
    getSearchMovies(searchWithQueryURL).finally(() => setLoading(false));
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query">{query}</span>
      </h2>
      <div className="movies-container">
        {loading && <p>Carregando...</p>}
        {!loading && movies.length === 0 && <p>Nenhum resultado encontrado.</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
