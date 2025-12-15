import React from "react";
import "../index.css";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#0A0A0A] text-[#c7c7c7] flex justify-between items-center px-6 py-5 relative">
      {/* Logo */}
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl beba-text uppercase leading-none">
         <a href="/"> Olumide Obayemi</a>
        </h1>
      </div>

      {/* Desktop Links */}
      <ul className="hidden lg:flex gap-8 list-none">
         <li className="nav-items text-lg cursor-pointer">
          <a href="/">Home</a>
        </li>
        <li className="nav-items text-lg cursor-pointer">
          <a href="/work"> Work</a>
        </li>
        <li className="nav-items text-lg cursor-pointer">
          <a href="/about">About</a>
        </li>
        <li className="nav-items text-lg cursor-pointer">
          <a href="/connect">Connect</a>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <button
        className="lg:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#0A0A0A] border-t border-[#484848] lg:hidden">
          <ul className="flex flex-col gap-6 px-6 py-8">
            <li
              className="text-lg cursor-pointer hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              Work
            </li>
            <li
              className="text-lg cursor-pointer hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              About
            </li>
            <li
              className="text-lg cursor-pointer hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              Connect
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
