import React, { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner.jsx'
import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/NavBar/Navbar.jsx'
import NetflixLoader from './components/NetflixLoader.jsx'
import RowPost from './components/RowPost/RowPost.jsx'
import { action, comady, originals, Romance } from './urls'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  })

  return (
    <>
      {loading ? (
        <NetflixLoader />
      ) : (
        <div>
          <Navbar />
          <Banner />
          <RowPost url={originals} title='Netflix Originals' />
          <RowPost url={action} title='Action' isSmall />
          <RowPost url={comady} title='comedy' isSmall />
          <RowPost url={Romance} title='Romance' isSmall />

          <Footer />
        </div>
      )}
    </>
  )
}

export default App
