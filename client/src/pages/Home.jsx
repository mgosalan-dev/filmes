import React, { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";
import "./MovieGrid.css"

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data.results);
      setTopMovies(data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  useEffect(() => {
    const topRateURL = `${moviesURL}top_rated?`;
    getTopRatedMovies(topRateURL);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Top Filmes</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}

      </div>
    </div>
  );
};

export default Home;
