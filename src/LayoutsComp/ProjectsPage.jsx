import React from "react";
import { featured } from "../featured";
import { ArrowUpRight } from "lucide-react";
import { Github } from "lucide-react";
import Snowfall from "react-snowfall";
const ProjectsPage = () => {
  return (
    
    <>
    <Snowfall />
    <section className="bg-[#0A0A0A] text-white mt-24 min-h-screen  border-b  border-b-[#484848]">
     
      {/* Header */}
      <div>
        <div className="ps-8 lg:ps-15 mb-16">
          <h1 className="beba-text text-4xl">Featured Projects</h1>
          <p className="text-[#c7c7c7] leading-relaxed manrope-text max-w-lg">
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>
      </div>

      {/* Projects */}

     <div className="lg:ps-15 ps-8 manrope-text" data-aos="fade-up" data-aos-duration="1000">
  {featured.map((featured) => (
    <div
      key={featured.title} // Don't forget a unique key!
      className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl mb-12 gap-8 lg:gap-20 " 
    >
      {/* --- Image / Left Side --- */}
      <div className="bg-[#1a1a1a] rounded-2xl p-5 w-full h-auto min-h-[300px] lg:h-100 flex flex-col justify-between text-end ">
        <img
          src={featured.image}
          alt={featured.title}
          className="w-full  h-auto object-contain self-center rounded-2xl mt-8 lg:mt-12"
        />

        <h2 className="self-end mt-4 bg-[#0a0a0a] p-1 px-3 rounded-2xl">
          {featured.tag}
        </h2>
      </div>

      {/* --- Text / Right Side --- */}
      <div className="flex flex-col justify-center me-18">
        <h1 className="text-2xl lg:text-3xl mb-3">{featured.title}</h1>

        <p className="text-[#c7c7c7c7] mb-7 text-sm lg:text-base">
          {featured.description}
        </p>

        <h3 className="uppercase border-b border-b-[#484848] pb-4 mb-3 text-sm tracking-wider">
          Project Info
        </h3>

        <div className="flex justify-between border-b border-b-[#484848] pb-4 mb-3">
          <h4>Year</h4>
          <h4 className="self-end">{featured.year}</h4>
        </div>

        <div className="flex justify-between pb-4 mb-3">
          <h4>Role</h4>
          <h4 className="self-end">{featured.role}</h4>
        </div>

        <div className="flex space-x-6 lg:space-x-8 mt-6">
          <a
            href={featured.liveDemo}
            className="text-[#D3E97A] text-lg flex border-b border-b-[#D3E97A] pb-1 hover:opacity-80 transition-opacity duration-300"
          >
            Live Demo <ArrowUpRight className="ml-1" />
          </a>
          <a
            href={featured.github}
            className="text-[#D3E97A] text-lg flex border-b border-b-[#D3E97A] pb-1 hover:opacity-80 transition-opacity duration-300"
          >
            See On Github <Github className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
    </>
  );
};

export default ProjectsPage;
