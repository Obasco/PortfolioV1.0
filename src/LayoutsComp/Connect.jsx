import { Github, Instagram, Linkedin, TwitterIcon } from 'lucide-react'
import React from 'react'

const Connect = () => {
  return (
<section className="bg-[#0A0A0A] text-white mt-24 min-h-screen flex border-b border-b-[#484848]">
  <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

      {/* Left */}
      <div>
        <h1 className="uppercase text-4xl sm:text-5xl lg:text-6xl beba-text mb-6">
          Let's Connect
        </h1>
        <p className="text-[#c7c7c7] manrope-text max-w-md mb-3">
          Have a project in mind or just want to say hello?  
          Fill out the form and I’ll get back to you.
        </p>

        <p className='manrope-text text-[#c7c7c7]'>Say hello at <a href="mailto:oobayemi3@gmail.com" className='underline text-[#D3E97A]'>oobayemi3@gmail.com</a></p>

        <div className="flex gap-5 mt-4">
        <a href="https://www.linkedin.com/in/obayemi-olumide-223700325/"> <Linkedin className='w-8 h-8 text-[#D3E97A] mt-4 cursor-pointer' /></a>
        <a href="https://github.com/Obasco"><Github className='w-8 h-8 text-[#D3E97A] mt-4 cursor-pointer' /></a>
        <a href="https://x.com/nxtgen_prime"><TwitterIcon className='w-8 h-8 text-[#D3E97A] mt-4 cursor-pointer' /></a>
        </div>
      </div>

      {/* Right */}
      <div>
        <form className="grid gap-6 max-w-lg manrope-text">

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-sm manrope-text ps-3">
              Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="John Doe"
              className="bg-[#1a1a1a] border border-[#1a1a1a] rounded-3xl px-4 py-3 outline-none focus:border-[#D3E97A] transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm manrope-text ps-3">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="johndoe@email.com"
              className="bg-[#1a1a1a] border border-[#1a1a1a] rounded-3xl px-4 py-3 outline-none focus:border-[#D3E97A] transition"
            />
          </div>

          {/* Subject */}
           <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm manrope-text ps-3">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="suubject"
              required
              placeholder="want to work together?"
              className="bg-[#1a1a1a] border border-[#1a1a1a] rounded-3xl px-4 py-3 outline-none focus:border-[#D3E97A] transition"
            />
          </div>


          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm manrope-text ps-3">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Tell me about your project..."
              className="bg-[#1a1a1a] border border-[#1a1a1a] rounded-3xl px-4 py-3 outline-none focus:border-[#D3E97A] transition resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-fit bold bg-[#D3E97A] text-black px-8 py-3 rounded-4xl uppercase manrope-text tracking-wide hover:opacity-90 transition"
          >
            Submit
          </button>

        </form>
      </div>

    </div>
  </div>
</section>

  )
}

export default Connect