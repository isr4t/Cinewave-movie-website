import React from "react";

const MoviesDetails = () => {
  return (
    <div
      className="fixed  inset-0 z-50  flex items-center justify-center p-4 bg-neutral-900/95
    backdrop-blur-sm overflow-auto "
    >
      <div
        className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl
         max-h-[900vh] overflow-hidden "
      >
        {/* Close Button  */}
        <button
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700
            text-white hover:bg-neutral-600/80 transition-all "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round "
              strokeLinejoin="round "
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Conditional Rendering */}
        <div className="flex items-center h-96 ">
          <div className="animate-pulse">
            <div
              className="w-16 h-16 border border-pink-500 border-t-transparent
            rounded-full animate-spin "
            >
              <p className="">Loading Details...........</p>
            </div>
          </div>
          {/* Else */}
          <div className="flex items-center justify-center h-96 ">
            <div className="text-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mx-auto text-red-500 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round "
                  strokeLinejoin="round "
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2 .502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464
               8L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h2 className="text-xl font-bold mt-4 ">
                Failed to Load Movie Details
              </h2>
              <p className="mt-2 text-neutral-400">Error</p>
              <button
                className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-6
          py-6 rounded-md "
              >
                Close
              </button>
            </div>
          </div>
          {/* Else */}
          <div>
            {/* Backdrop Header */}
            <div className=" relative h-72 md:h-96 w-full ">
              {/* CONDITIONAL Rendering */}
              <img src="" alt="" className="w-full h-full object-cover " />
              {/* Else */}
              <div className="w-full h-full bg-neutral-700 "></div>
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-800/70
              to-transparent"
              ></div>
            </div>
            <div className="p-6 md:p-8 ">
              <div className="md:flex gap-8 -mt-32 md:-mt-48 relative ">
                {/* Poster */}
                <div className="w-32 md;w-64 flex-shrink-0 mb-4 md:mb-8">
                  <div
                    className="rounded-lg overflow-hidden shadow-lg border border-neutral-700
                        "
                  >
                    {/* Conditional rendering  */}
                    <img src="" alt="" className="w-full h-auto " />
                    {/* Else  */}
                    <div
                      className="w-full aspect-[2/3] bg-neutral-700 flex items-center justify-center
                             "
                    >
                      No Poster Available
                    </div>
                  </div>
                </div>
                {/* Movies info  */}
                <div className="flex-1 ">
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Movies Title
                    {/* Conditional Rendering */}
                    <span className="text-neutral-400 font-normal ml-2 "></span>
                  </h1>
                  {/* Rating and other meta */}
                  <div className="flex flex-wrap gapx-4 mt-3 text-sm items-center ">
                    {/* Conditional Rendering  */}
                    <div className="flex items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500 "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.849 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 font-medium">
                        Movies Vote Average
                      </span>
                    </div>
                    {/* Else */}
                    <span className="text-neutral-300">Movies Runtime</span>
                    {/* Conditional Rendering  */}
                    <span className="text-neutral-300">
                      Movies Release Date
                    </span>
                    {/* Conditional Rendering  */}
                    <span className="bg-red-500/80 text-white text-xs px-2 py-0.5 rounded ">
                      18+
                    </span>
                  </div>
                  {/* Genres */}
                  {/* Conditional Rendering */}
                  <div className="mt-4 flex flex-wrap gap-2 ">
                    <span
                      className=" bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full
               text-xs"
                    >
                      Genres Name
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;
