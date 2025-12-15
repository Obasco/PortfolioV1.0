import React from "react";
import NavBar from "./LayoutsComp/NavBar";
import Allpage from "./Allpage";
import ProjectsPage from "./LayoutsComp/ProjectsPage";
import Snowfall from "react-snowfall";
import AboutHome from "./LayoutsComp/AboutHome";
import Connect from "./LayoutsComp/Connect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  return (
      AOS.init(),
    <BrowserRouter>
      <Snowfall />
      <NavBar />
      <Routes>
        <Route path="/" element={<Allpage />} />
        <Route path="/work" element={<ProjectsPage/>} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutHome />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
