import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Everlane</h1>
        <p className="text-lg text-gray-600">Modern essentials. Ethical production.</p>

        <div className="mt-8 text-center">
          <a href="/shop" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">Shop Now</a>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="flex justify-center space-x-6 overflow-x-auto">
          <Link to="/shop/new-arrivals" className="text-gray-700 hover:text-blue-600">
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">New Arrivals</h3>
              
            </div>
          </Link>
          <Link to="/shop/best-sellers" className="text-gray-700 hover:text-blue-600">
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Best Sellers</h3>
              
            </div>
          </Link>
          <Link to="/shop/clothing" className="text-gray-700 hover:text-blue-600">
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Clothing</h3>
              
            </div>
          </Link>
          <Link to="/shop/pants" className="text-gray-700 hover:text-blue-600">
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Pants</h3>
              
            </div>
          </Link>
          <Link to="/shop/jeans" className="text-gray-700 hover:text-blue-600">
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Jeans</h3>
              
            </div>
          </Link>
          <Link to="/shop/tees" className="text-gray-700 hover:text-blue-600">
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Tees</h3>
              
            </div>
          </Link>
          <Link to="/shop/sweaters" className="text-gray-700 hover:text-blue-600">
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Sweaters</h3>
              
            </div>
          </Link>
          <Link to="/shop/dresses" className="text-gray-700 hover:text-blue-600">
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Dresses</h3>
              
            </div>
          </Link>
          <Link to="/shop/shoes-bags" className="text-gray-700 hover:text-blue-600">
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Shoes & Bags</h3>
              
            </div>
          </Link>
          <Link to="/shop/sale" className="text-gray-700 hover:text-blue-600">
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold mb-2">Sale</h3>
             
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
