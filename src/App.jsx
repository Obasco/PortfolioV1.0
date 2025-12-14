import React from 'react'
import NavBar from './LayoutsComp/NavBar'
import HeroSection from './LayoutsComp/HeroSection'
import ProjectsPage from './LayoutsComp/ProjectsPage'
import Snowfall from 'react-snowfall'
import AboutHome from './LayoutsComp/AboutHome'

const App = () => {
  return (
    <>
    <Snowfall />
    <NavBar/>
    <HeroSection/>
    <ProjectsPage/>
    <AboutHome/>
    </>
  )
}

export default App