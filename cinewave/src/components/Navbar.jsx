import React, { useState } from "react";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex w-full z-50 transition-all duration-300 bg-neutral-900">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-pink-500 font-bold text-3xl">
                Cine<span className="text-white">Wave</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-white hover:text-pink-400 transition-all font-medium"
            >
              Home
            </a>
            <a
              href="#trending"
              className="text-white hover:text-pink-400 transition-all font-medium"
            >
              Trending
            </a>
            <a
              href="#popular"
              className="text-white hover:text-pink-400 transition-all font-medium"
            >
              Popular
            </a>
            <a
              href="#top-rated"
              className="text-white hover:text-pink-400 transition-all font-medium"
            >
              Top Rated
            </a>
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search movies......"
              className="bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
            />
            <div className="absolute right-3 top-2.5">
              {loading ? (
                <svg
                  className="w-4 h-4 text-neutral-400 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-neutral-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                  />
                </svg>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6L18 18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="mt-4 pb-4 space-y-4 md:hidden">
            <a
              href="#"
              className="block text-white hover:text-pink-400 transition-colors py-2"
            >
              Home
            </a>
            <a
              href="#trending"
              className="block text-white hover:text-pink-400 transition-colors py-2"
            >
              Trending
            </a>
            <a
              href="#popular"
              className="block text-white hover:text-pink-400 transition-colors py-2"
            >
              Popular
            </a>
            <a
              href="#top-rated"
              className="block text-white hover:text-pink-400 transition-colors py-2"
            >
              Top Rated
            </a>

            {/* Mobile Search */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search movies......"
                className="bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-full focus:outline-none focus:ring-2 focus:ring-pink-500/50"
              />
              <div className="absolute right-3 top-2.5">
                {loading && (
                  <svg
                    className="w-4 h-4 text-neutral-400 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                )}
              </div>

              {/* Mobile Search Result */}
              <div className="absolute mt-2 w-full max-w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                <ul className="divide-y divide-neutral-700">
                  <li className="hover:bg-neutral-700">
                    <button className="flex items-center p-3 w-full text-left">
                      <div className="w-20 h-14 bg-neutral-700 rounded overflow-hidden flex-shrink-0">
                        <div className="w-full h-full flex items-center justify-center text-neutral-500 text-xs">
                          No Image
                        </div>
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-white truncate">
                          Movie Title
                        </p>
                        <p className="text-xs text-neutral-400">
                          Movie Release Date
                        </p>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="absolute mt-2 w-full max-w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                <div className="p-4 text-center text-neutral-400 text-sm">
                  No movies found matching...
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
