import React, { useEffect, useState } from "react";
import {
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "./api";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const MoviesList = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      setTrending(await fetchTrendingMovies());
      setPopular(await fetchPopularMovies());
      setTopRated(await fetchTopRatedMovies());
    };
    getMovies();
  }, []);

  const renderMovies = (movies) =>
    movies.map((movie) => (
      <div key={movie.id} className="bg-neutral-800 p-2 rounded-lg">
        <img
          src={`${IMAGE_URL}${movie.poster_path}`}
          alt={movie.title}
          className="rounded-md"
        />
        <h2 className="text-white mt-2">{movie.title}</h2>
        <p className="text-gray-400">⭐ {movie.vote_average}</p>
      </div>
    ));

  return (
    <div className="p-4 space-y-8">
      <section>
        <h1 className="text-2xl text-white mb-4">Trending Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {trending.length > 0 ? renderMovies(trending) : <p>Loading...</p>}
        </div>
      </section>

      <section>
        <h1 className="text-2xl text-white mb-4">Popular Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {popular.length > 0 ? renderMovies(popular) : <p>Loading...</p>}
        </div>
      </section>

      <section>
        <h1 className="text-2xl text-white mb-4">Top Rated Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {topRated.length > 0 ? renderMovies(topRated) : <p>Loading...</p>}
        </div>
      </section>
    </div>
  );
};

export default MoviesList;
