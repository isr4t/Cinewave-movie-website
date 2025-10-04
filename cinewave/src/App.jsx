import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import MovieContent from './components/MovieContent'
import MoviesDetails from './components/MoviesDetails'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import MoviesList from './services/MovieList'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='min-h-screen text-white'>
     <Navbar/>
     <main>
       
      <MovieContent/>
      <MoviesList/>
      <MoviesDetails/>
     </main>
     <Footer/>
     <ScrollToTop/>
     
    
  </div>
  )
}

export default App
