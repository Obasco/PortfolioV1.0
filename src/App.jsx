import React from 'react'
import NavBar from './LayoutsComp/NavBar'
import HeroSection from './LayoutsComp/HeroSection'
import ProjectsPage from './LayoutsComp/ProjectsPage'
import Snowfall from 'react-snowfall'

const App = () => {
  return (
    <>
    <Snowfall />
    <NavBar/>
    <HeroSection/>
    <ProjectsPage/>
    </>
  )
}

export default App