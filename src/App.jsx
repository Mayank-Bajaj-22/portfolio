import React from 'react'
import Hero from "./sections/Hero.jsx"
import Navbar from './components/Navbar.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import Marquee from './sections/Marquee.jsx'
import Card from './sections/Card.jsx'
import Experience from './sections/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <Marquee />
      <Card />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App