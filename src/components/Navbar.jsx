import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Everlane_logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-4 py-4 shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
              <path d="M14 20.5H26" stroke="#161912" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M14 16.5H26" stroke="#161912" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M14 24.5H26" stroke="#161912" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>
        </div>

        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Everlane Logo" className="w-32" />
          </Link>
        </div>

        <div className={`menu ${menuOpen ? 'block' : 'hidden'} md:flex md:space-x-8`}>
          <Link to="/shop" className="hover:underline transition-all duration-300">Shop</Link>
          <Link to="/about" className="hover:underline transition-all duration-300">About</Link>
          <Link to="/contact" className="hover:underline transition-all duration-300">Contact</Link>
          <Link to="/faq" className="hover:underline transition-all duration-300">FAQ</Link>
          <Link to="/cart" className="hover:underline transition-all duration-300">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
