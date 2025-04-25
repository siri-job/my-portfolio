import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/sirifolioo.jpeg';

function Navbar() {
  return (
    <nav className="bg-blue-950 p-4 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-10">
        {/* Logo (for mobile: placed at the start) */}
        <Link to="/" className='md:flex-1'>
          <img src={Logo} alt="SiriFolio Logo" className="w-[80px] md:w-[100px] md:rounded-lg h-auto" />
        </Link>

        {/* Links for desktop and larger */}
        <div className="hidden md:flex space-x-6 text-white text-sm sm:text-base order-3 md:order-2">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden space-x-4 text-white text-sm sm:text-base order-2 md:order-3">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

