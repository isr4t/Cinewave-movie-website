import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import MovieContent from './components/MovieContent'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='min-h-screen text-white'>
     <Navbar/>
     <main>
      <MovieContent/>
     </main>
  </div>
  )
}

export default App
