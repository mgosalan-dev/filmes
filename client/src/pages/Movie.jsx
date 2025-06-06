import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsBookFill,
} from "react-icons/bs";

import "./Movie.css";

import MovieCard from "../components/movieCard";
const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apikey}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Erro HTTP ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error.message);
    }
  };
  
  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?language=pt-BR`;
    console.log("URL", movieUrl);
    getMovie(movieUrl);
  }, [id]);

  return (
    <div className="movie-page">
      {!movie ?(
          <p>Carregando...</p>
      ): (
        
          <>
            <MovieCard movie={movie} showLink={false} />
            {movie.tagline && <div className="tagline">{movie.tagline}</div> }
            <div className="descr">
              <BsBookFill/> Descrição: {movie.overview ? `${movie.overview}`: "Sem Dados"}
            </div>
            <div className="info">
              <BsHourglassSplit/> Duração: {" "} {movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`: "Sem Dados"}
            </div>
            <div className="info">
              <BsWallet2/> Orçamento: {" "} {movie.budget ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
              }).format(movie.budget): "Sem Dados"}
            </div>
            <div className="info">
              <BsGraphUp/> Faturamento: {" "}{movie.revenue ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
              }).format(movie.revenue): "Sem Dados"}
            </div>

          </>
        
      )}
    </div>
  );
};

export default Movie;
