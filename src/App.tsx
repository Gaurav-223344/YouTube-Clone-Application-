import React from 'react'

import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import PlayingVideos from './components/PlayingVideos'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideos />} />
      </Routes>
    </div>
  )
}

export default App