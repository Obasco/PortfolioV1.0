import React from "react";
import { Linkedin, Github } from "lucide-react";
import heroimg from "../assets/heroimg.png";

const HeroSection = () => {
  return (
    <>
      <section className="bg-[#0A0A0A] text-white min-h-screen flex justify-center items-center py-0 px-8 lg:px-15 border-b  border-b-[#484848]">
        {/* Content wrapper to control max width and apply grid layout for desktop */}
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* --- Left Content: Text and Buttons --- */}
          <div className="flex flex-col space-y-6 lg:mt-20">
            {/* Main Heading Block */}
            <div className="space-y-4">
              {/* The "HI, I AM" is smaller than the name */}
              <h2 className="text-3xl sm:text-4xl font-normal tracking-wider">
                HI, I AM
              </h2>
              {/* The name is very large and bold */}
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-6xl beba-text leading-none">
                OLUMIDE OBAYEMI {/* Changed name to match image */}
              </h1>
            </div>

            {/* Description Paragraph */}
            {/* Note: In the image, the font weight is normal and the text size is moderate */}
            <p className="text-xl max-w-lg leading-relaxed manrope-text pt-2 opacity-85">
              A Nigerian Young based front-end developer passionate about
              building accessible and user friendly websites.
            </p>

            {/* Buttons/Icons */}
            <div className="flex items-center space-x-4 pt-6">
              <a
                href="https://wa.me/2348012345678?text=Hello%20Olumide%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20work%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center bg-[#D3E97A] text-black font-semibold py-3 px-6 rounded-full hover:bg-opacity-80 transition duration-300">
                  CONTACT ME
                  <span className="ml-2 w-2 h-2 bg-black rounded-full"></span>
                </button>
              </a>

              {/* Social Icons */}
              {/* LinkedIn Icon */}
              <button className="p-3 border border-gray-700 bg-[#222222] rounded-full hover:bg-gray-700 transition duration-300">
                <Linkedin className="w-6 h-6 text-[#D3E97A]" />
              </button>

              {/* GitHub Icon (Assuming the third icon is GitHub based on common portfolios) */}
              <button className="p-3 border border-gray-700 bg-[#222222] rounded-full hover:bg-gray-700 transition duration-300">
                <Github className="w-6 h-6 text-[#D3E97A]" />
              </button>
            </div>
          </div>

          {/* --- Right Content: Image --- */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-[500px] h-[600px]">
              {/* This wrapper creates the white border background */}
              <div className="absolute inset-0 rounded-3xl p-6">
                {/* The image is contained within the white border, with a gray background behind the subject */}
                {/* We use object-cover to make sure the image fills the container */}
                <img
                  src={heroimg}
                  alt="Robert Garcia's Portrait"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
