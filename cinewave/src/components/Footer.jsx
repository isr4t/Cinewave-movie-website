import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-neutral-900 text-neutral-400 border-t border-neutral-800'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

          {/* Logo & Description */}
          <div>
            <a href="/" className='inline-block mb-6'>
              <span className='text-pink-500 font-bold text-2xl'>Cine<span className='text-white'>Wave</span></span>
            </a>
            <p className='mb-4 text-sm'>
              Explore the latest movies, timeless classics, and reviews—all in one place. Enjoy the magic of cinema anytime!
            </p>
            <div className='flex space-x-4'>
              {/* Facebook */}
              <a href="#" className='text-neutral-500 hover:text-pink-500 transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.324v21.352C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.592 1.324-1.324V1.324C24 .592 23.405 0 22.675 0z" />
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" className='text-neutral-500 hover:text-pink-500 transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.924 4.924 0 00-8.392 4.482A13.978 13.978 0 011.671 3.149a4.923 4.923 0 001.523 6.573 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.927 4.927 0 004.6 3.417A9.867 9.867 0 010 21.539a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0024 4.557z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className='text-neutral-500 hover:text-pink-500 transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.975.975 1.253 2.242 1.314 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.975.975-2.242 1.253-3.608 1.314-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.975-.975-1.253-2.242-1.314-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608.975-.975 2.242-1.253 3.608-1.314C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.771.13 4.659.419 3.682 1.396 2.705 2.373 2.416 3.485 2.358 4.766.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.058 1.281.347 2.393 1.324 3.37.977.977 2.089 1.266 3.37 1.324C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.281-.058 2.393-.347 3.37-1.324.977-.977 1.266-2.089 1.324-3.37C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.058-1.281-.347-2.393-1.324-3.37-.977-.977-2.089-1.266-3.37-1.324C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              <li><a href="/" className='hover:text-pink-500 transition-colors'>Home</a></li>
              <li><a href="/trending" className='hover:text-pink-500 transition-colors'>Trending</a></li>
              <li><a href="/popular" className='hover:text-pink-500 transition-colors'>Popular</a></li>
              <li><a href="/top-rated" className='hover:text-pink-500 transition-colors'>Top Rated</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Categories</h3>
            <ul className='space-y-2 text-sm'>
              <li><a href="/genre/action" className='hover:text-pink-500 transition-colors'>Action</a></li>
              <li><a href="/genre/drama" className='hover:text-pink-500 transition-colors'>Drama</a></li>
              <li><a href="/genre/comedy" className='hover:text-pink-500 transition-colors'>Comedy</a></li>
              <li><a href="/genre/horror" className='hover:text-pink-500 transition-colors'>Horror</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Contact Us</h3>
            <p className='text-sm mb-2'>Email: support@cinewave.com</p>
            <p className='text-sm mb-2'>Phone: +123 456 7890</p>
            <p className='text-sm'>123 Movie St, Film City, USA</p>
          </div>

        </div>

        <div className='mt-8 text-center text-sm text-neutral-500'>
          &copy; {new Date().getFullYear()} CineWave. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
