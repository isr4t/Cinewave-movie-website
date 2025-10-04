import React, { useState, useEffect } from "react";

const MoviesDetails = () => {
  const [status, setStatus] = useState("loading"); // "loading", "error", "success"
  const [movieData, setMovieData] = useState(null);
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    fetch("https://api.example.com/movie/123") // replace with your API
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));

    const handleEsc = (e) => e.key === "Escape" && setShowModal(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm overflow-auto">
      <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl overflow-hidden p-6 md:p-8">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700 text-white hover:bg-neutral-600/80 transition-all"
          onClick={() => setShowModal(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Loading */}
        {status === "loading" && (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-600 border-b-4 border-neutral-700"></div>
            <p className="text-neutral-300 ml-4">Loading movie details...</p>
          </div>
        )}

        {/* Error */}
        {status === "error" && (
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center h-96">
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M6.938 4h13.856c1.54 0 2 .502 1.667 1.732L13.732 20c-.77 1.333-2.694 1.333-3.464 0L3.34 5.732C2.57 4.4 3.192 4 4.732 4z" />
              </svg>
              <h2 className="text-xl font-bold mt-2">Failed to Load Movie Details</h2>
              <p className="mt-1 text-neutral-400">Error</p>
              <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md" onClick={() => setShowModal(false)}>Close</button>
            </div>

            <div className="flex-shrink-0 w-32 md:w-48 aspect-[2/3] bg-neutral-700 flex items-center justify-center text-neutral-400 rounded-lg shadow-lg">
              No Poster Available
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Movie Title</h1>
              <div className="flex flex-wrap gap-4 mt-3 text-sm items-center justify-center md:justify-start">
                <span className="text-neutral-300">Runtime</span>
                <span className="text-neutral-300">Release Date</span>
                <span className="bg-red-500/80 text-white text-xs px-2 py-0.5 rounded">18+</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-xs">Genre Name</span>
              </div>
              <p className="mt-4 text-neutral-400 italic text-center md:text-left">Movie Tagline</p>
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-white mb-2">Overview</h2>
                <p className="text-neutral-300">A group of unlikely heroes must unite to face a dangerous threat, discovering that true strength lies in trust, courage, and the bonds that connect them.</p>
              </div>
            </div>
          </div>
        )}

        {/* Success */}
        {status === "success" && movieData && (
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Poster */}
            <div className="flex-shrink-0 w-32 md:w-48 aspect-[2/3] bg-neutral-700 flex items-center justify-center text-neutral-400 rounded-lg shadow-lg">
              {movieData.poster ? (
                <img src={movieData.poster} alt="poster" className="w-full h-full object-cover rounded-lg" />
              ) : (
                "No Poster Available"
              )}
            </div>

            {/* Movie Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{movieData.title}</h1>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < movieData.rating ? "text-yellow-500" : "text-neutral-600"}`} viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-neutral-300">{movieData.rating}/5</span>
              </div>

              <div className="flex flex-wrap gap-4 mt-3 text-sm items-center justify-center md:justify-start">
                <span className="text-neutral-300">{movieData.runtime}</span>
                <span className="text-neutral-300">{movieData.releaseDate}</span>
                {movieData.ageLimit && (
                  <span className="bg-red-500/80 text-white text-xs px-2 py-0.5 rounded">{movieData.ageLimit}</span>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                {movieData.genres?.map((genre, i) => (
                  <span key={i} className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-xs">{genre}</span>
                ))}
              </div>

              <p className="mt-4 text-neutral-400 italic text-center md:text-left">{movieData.tagline}</p>

              <div className="mt-4">
                <h2 className="text-xl font-semibold text-white mb-2">Overview</h2>
                <p className="text-neutral-300">{movieData.overview}</p>
              </div>

              {/* Add to Watchlist Button */}
              <div className="mt-6">
                <button className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesDetails;

