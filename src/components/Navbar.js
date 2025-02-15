import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-navy-blue shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-white text-xl font-bold">DexLanka</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-red transition duration-300 py-5">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-red transition duration-300 py-5">
              About Us
            </Link>
            <Link to="/services" className="text-white hover:text-red transition duration-300 py-5">
              Services
            </Link>
            <Link to="/projects" className="text-white hover:text-red transition duration-300 py-5">
              Projects
            </Link>
            <Link to="/contact" className="text-white hover:text-red transition duration-300 py-5">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-red focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
