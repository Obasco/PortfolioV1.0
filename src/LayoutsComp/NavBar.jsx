import React from 'react'
import '../index.css'

const NavBar = () => {
  return (

  <nav className='bg-[#0A0A0A] text-[#c7c7c7] flex justify-between items-center p-5 nav' >
        {/* Nav-Title: ROBERT GARCIA */}
        <div className="Nav-Title bebas text-[#c7c7c7]">
          <h1 className="text-4xl m-0 beba-text ps-3 leading-none lh-0 uppercase">OLUMIDE OBAYEMI</h1>
        </div>

        {/* Navigation Links: Work, About, Contact */}
        {/* We keep items-center on UL to vertically align the links if they had internal spacing */}
        <ul className="nav-links flex gap-6 list-none pe-3"> {/* Increased gap, removed justify-center */}
          {/* Changed content and removed 'Home' */}
          <li className="nav-items text-lg cursor-pointer hover:text-gray-300 "><h2>Work</h2></li>
          <li className="nav-items text-lg cursor-pointer hover:text-gray-300"><h2>About</h2></li>
          <li className="nav-items text-lg cursor-pointer hover:text-gray-300"><h2>Contact</h2></li>
        </ul>
      </nav>
  )
}

export default NavBar