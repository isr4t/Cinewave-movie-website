import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import MovieContent from './components/MovieContent'
import MoviesDetails from './components/MoviesDetails'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='min-h-screen text-white'>
     <Navbar/>
     <main>
      <MovieContent/>
      <MoviesDetails/>
     </main>
     <Footer/>
  </div>
  )
}

export default App
