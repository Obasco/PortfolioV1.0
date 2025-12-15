import React from "react";
import HeroSection from "./LayoutsComp/HeroSection";
import ProjectsPage from "./LayoutsComp/ProjectsPage";
import AboutHome from "./LayoutsComp/AboutHome";
import Connect from "./LayoutsComp/Connect";

const Allpage = () => {
  return (
    <>
      <HeroSection />
      <ProjectsPage />
      <AboutHome />
      <Connect />
    </>
  );
};

export default Allpage;
