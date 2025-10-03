import React from 'react'
import HeroSection from './HeroSection'
import MovieSlider from './MovieSlider'

const MovieContent = () => {
  return (
    <div>
      <HeroSection/>
      <div className='bg-gradient-to-b from-neutral-900 to-neutral-950'>
        <MovieSlider/>
      </div>
    </div>
  )
}

export default MovieContent
