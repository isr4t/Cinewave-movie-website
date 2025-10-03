import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen ">
      {/* Movies backdrop  */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-neutral-900 transition-all 
        duration-700 `}
      >
        {/* Gradient overlay  */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/20
            "
        />

        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-transparent" />
      </div>
      {/* Content  */}
      <div className="absolute inset-0 flex items-center z-10 container mx-auto px-4">
        <div className="max-w-3xl ">
          {/* Movies info  */}
          <div className={`transition-all duration-700`}>
            <div className="flex items-center space-x-3 mb-4 ">
              <span
                className="bg-pink-500/90 text-white text-xs font-semibold
                py-1 rounded-sm "
              >
                FEATURED
              </span>
              {/* Conditional rendering  */}
              <div className="flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 
       1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 
       2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 
       1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 
       2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 
       1 0 00-.364-1.118L2.037 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 
       1 0 00.95-.69l1.286-3.957z"
                  />
                </svg>
                <span>Movie Voting Average</span>
              </div>
              {/* Conditional rendering close  */}

              <span className="text-neutral-400">.</span>
              <span className="text-neutral-300 text-sm ">
                Movie Release Date
              </span>

              {/* Conditional Rendering  */}
              <>
                <span className="text-neutral-400">.</span>
                <span className="bg-neutral-700 text-neutral-300 text-xs px-11.5 py-0.5 ">
                  18+
                </span>{" "}
              </>
              {/* Conditional rendering close  */}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 ">
              Movie Title
            </h1>
            <p className="text-neutral-300 text-bsae md-text-lg mb-8 line-clamp-3 md-line-clamp-4 max-w-2xl">
              Movie Overview
            </p>
            <div className="flex flex-warp gap-4 ">
              <button
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 
                rounded-lg flex items-center gap-2 transition-all "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16z
       M9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832
       1 1 0 00-1.664-1.664z"
                  />
                </svg>
                Watch Now
              </button>
              <button
                className="bg-neutral-800/80 hover:bg-neutral-700/80 text-white px-6 
              py-3 rounded-lg flex items-center gap-2 transition-all border border-neutral-600 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round "
                    strokeLinejoin="round "
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add to Watch List
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination  */}
      <div className="absolute bott0m-10 left-0 right-0 flex justify-center gap-2 z-10">
     {/* Conditional rendering  */}
     <button className={`h-1.5 rounded-full transition-all`}>

     </button>
      </div>
    </div>
  );
};

export default HeroSection;
