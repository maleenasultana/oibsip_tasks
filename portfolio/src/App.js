import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import TechStacks from './components/TechStacks'
import CardGroup from './components/CardGroup'
import Accordian from './components/Accordion'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Card/>
      <TechStacks/>
      <CardGroup/>
      <Accordian/>
      <Footer/>
    </div>
  )
}

export default App