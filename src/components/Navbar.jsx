import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from '../assets/Everlane_logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); 
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogout = () => {
    setIsAuthenticated(false); 
    navigate('/signin');
  };

  return (
    <nav className="bg-white px-4 py-4 shadow-md sticky top-0 transition-all duration-300">
      <div className="flex justify-between items-center relative">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img src={logo} alt="Everlane Logo" className="w-32" />
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
            <path d="M14 20.5H26" stroke="#161912" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M14 16.5H26" stroke="#161912" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M14 24.5H26" stroke="#161912" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>

        <div className="hidden md:flex md:space-x-8 md:ml-auto">
          <Link to="/shop" className="hover:underline transition-all duration-300">Shop</Link>
          <Link to="/about" className="hover:underline transition-all duration-300">About</Link>
          <Link to="/contact" className="hover:underline transition-all duration-300">Contact</Link>
          <Link to="/faq" className="hover:underline transition-all duration-300">FAQ</Link>
          <Link to="/cart" className="hover:underline transition-all duration-300">Cart</Link>
          
{/*                 Bu hisseni links array kimi qeyd edib, map ede bilersen :) */}
          {isAuthenticated && ( 
            <button 
              onClick={handleLogout} 
              className="hover:underline transition-all duration-300 text-red-600"
            >
              Logout
            </button>
          )}
        </div>

        {menuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
            <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg p-4">
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                Закрыть
              </button>
              <div className="mt-8 flex flex-col space-y-4">
                <Link to="/shop" className="hover:underline transition-all duration-300">Shop</Link>
                <Link to="/about" className="hover:underline transition-all duration-300">About</Link>
                <Link to="/contact" className="hover:underline transition-all duration-300">Contact</Link>
                <Link to="/faq" className="hover:underline transition-all duration-300">FAQ</Link>
                <Link to="/cart" className="hover:underline transition-all duration-300">Cart</Link>
{/*                 Bu hisseni links array kimi qeyd edib, map ede bilersen :) */}
                {isAuthenticated && (
                  <button 
                    onClick={handleLogout} 
                    className="hover:underline transition-all duration-300 text-red-600"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
