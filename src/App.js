import React from 'react'
import { useState } from 'react'
import Navbar from './components/NavBar/Navbar.jsx'
import {originals,action,comady,Romance} from './urls'
import './App.css'
import Banner from './components/Banner/Banner.jsx'
import RowPost from './components/RowPost/RowPost.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comady} title='comedy' isSmall/>
      <RowPost url={Romance} title='Romance' isSmall/>

      <Footer/>
    </div>
  )
}

export default App
