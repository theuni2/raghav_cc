'use client';

import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0B1C2D]/95 backdrop-blur-md border-b border-white/10 text-white sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 py-3.5">
        
        {/* Logo */}
        <a href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <img
            src="/img/cc_logo.png"
            alt="Carbon Count"
            className="w-36 h-auto"
          />
        </a>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cyan-400 focus:outline-none"
        >
          {isOpen ? (
            <span className="text-2xl">✕</span> // Close Icon
          ) : (
            <span className="text-2xl">☰</span> // Hamburger Icon
          )}
        </button>

        {/* Navigation Links */}
        <nav className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row items-center w-full md:w-auto mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-8 text-base font-semibold transition-all duration-300 ease-in-out`}>
          
          <a className="hover:text-cyan-400 transition cursor-pointer" href='/'>
            Home
          </a>
          <a className="hover:text-cyan-400 transition cursor-pointer" href='/#book'>
            Book
          </a>
          <a className="hover:text-cyan-400 transition cursor-pointer" href='/#leadership'>
            Leadership
          </a>
          <a className="hover:text-cyan-400 transition cursor-pointer" href='/#smiles-across-miles'>
            Smiles Across Miles
          </a>
          <a className="hover:text-cyan-400 transition cursor-pointer" href='/#community'>
            Community
          </a>
          <a className="hover:text-cyan-400 transition cursor-pointer" href='/#media'>
            Media
          </a>
          <a className="hover:text-cyan-400 transition cursor-pointer" href='/journal'>
            Journal
          </a>
          <a className="hover:text-cyan-400 transition cursor-pointer" href='/interview'>
            Interviews
          </a>
        </nav>
      </div>
    </header>
  );
}
