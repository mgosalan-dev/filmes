import {Link} from "react-router-dom"
import React from 'react'
import "../pages/MovieGrid.css"
import { FaStar } from "react-icons/fa"


const imageURL = import.meta.env.VITE_IMG;

const movieCard = ({movie, showLink = true}) => {
  return <div className="movie-card">
    <img src={imageURL + movie.poster_path} alt={movie.title} />
    <h2>{movie.title}</h2>
    <p>
      <FaStar />{movie.vote_average}
    </p>
    {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
  </div>
}

export default movieCard
