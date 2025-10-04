const API_KEY = "bd188a73ea34fc1cde49a73c3ffa6ef7";
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch trending movies
export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
};

// Fetch popular movies
export const fetchPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

// Fetch top-rated movies
export const fetchTopRatedMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    return [];
  }
};
