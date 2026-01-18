import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FireflyContainer from '../utils/FireflyContainer'

const Portfolio = () => {
  return (
    <div className='bg-black'>
      <FireflyContainer />
      <div className='relative flex flex-col'>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Project />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Portfolio