import React from 'react'
import Hero from "./sections/Hero.jsx"
import Navbar from './components/Navbar.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
    </>
  )
}

export default App