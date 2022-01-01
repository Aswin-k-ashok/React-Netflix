import React from 'react'
import { useState } from 'react'
import Navbar from './components/NavBar/Navbar.jsx'
import './App.css'
import Banner from './components/Banner/Banner.jsx'
import RowPost from './components/RowPost/RowPost.jsx'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost/>
    </div>
  )
}

export default App
