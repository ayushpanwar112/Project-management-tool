import React from 'react'
import Navabar from './components/Navabar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import CampDetail from './pages/CampDetail'

const App = () => {
  return (
    <div className=' w-full h-screen'> 
      <header>
        <Navabar/>
      </header>
      <main>
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/camp/:id" element={<CampDetail/>} />
        </Routes>
       
      </main>

    </div>
  )
}

export default App
