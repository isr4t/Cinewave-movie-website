import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(24);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
      const targetOffset = 24 + window.scrollY * 0.05;
      setBottomOffset(prev => prev + (targetOffset - prev) * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{ bottom: `${bottomOffset}px` }}
      className={`fixed right-6 z-50 transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={handleClick}
        type="button"
        className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full
         shadow-xl shadow-pink-500/60 hover:shadow-pink-500/90
         transition-transform duration-300 focus:outline-none transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.293 9.707a1 1 0 011.414 0L10 15.586l5.293-5.879a1 1 0 111.414 1.414l-6 6.667a1 1 0 01-1.414 0l-6-6.667a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;
