import { Section } from 'lucide-react'
import React from 'react'


const AboutHome = () => {


  return (
   <section className="bg-[#0A0A0A] text-white mt-24 min-h-screen flex items-center  border-b  border-b-[#484848]">
  <div className="w-full max-w-7xl mx-auto px-6 lg:px-12" data-aos="fade-down" data-aos-duration="1000">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
      
      {/* Left */}
      <div className="text-center lg:text-left">
        <h1 className="uppercase text-4xl sm:text-5xl lg:text-7xl beba-text">
          About Me
        </h1>
      </div>

      {/* Right */}
      <div>
        <h1 className="manrope-text text-lg sm:text-xl lg:text-2xl mb-4">
          I am a Young front-end developer based in Nigeria.
        </h1>

        <p className="text-[#c7c7c7] leading-relaxed manrope-text max-w-lg mb-4 text-sm sm:text-base">
          I'm Olumide, a passionate front-end developer dedicated to crafting
          engaging and user-friendly web experiences. With a keen eye for design
          and a commitment to clean, efficient code, I strive to bring ideas to
          life on the web. When I'm not coding, you'll find me exploring the
          latest tech trends or indulging in my love for photography.
        </p>

        <p className="underline text-[#D3E97A] cursor-pointer text-sm sm:text-base">
          {/* More About Me */}
        </p>
      </div>

    </div>
  </div>
</section>

  )
}

export default AboutHome