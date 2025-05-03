import React, { useEffect, useState } from "react";

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apikey}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data.results);
    console.log(data);
  };
  useEffect(() => {

    const topRateURL = `${moviesURL}top_rated?`
    getTopRatedMovies(topRateURL)

  }, [])

  return <div>
    {topMovies.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
  </div>;
};

export default Home;
