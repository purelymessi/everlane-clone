import React from 'react';
import HeroSection from '../components/HeroSection';
const Home = () => {
  const products = [
    // Replace with real product data
    { id: 1, name: 'Classic T-Shirt', price: '$25', imageUrl: '/path/to/product1.jpg' },
    { id: 2, name: 'Slim Fit Jeans', price: '$40', imageUrl: '/path/to/product2.jpg' },
    { id: 3, name: 'Leather Jacket', price: '$120', imageUrl: '/path/to/product3.jpg' },
    { id: 4, name: 'Wool Sweater', price: '$60', imageUrl: '/path/to/product4.jpg' },
    { id: 5, name: 'Canvas Sneakers', price: '$35', imageUrl: '/path/to/product5.jpg' },
    { id: 6, name: 'Denim Jacket', price: '$90', imageUrl: '/path/to/product6.jpg' }
  ];

  return (
    <div>
      <HeroSection />
      <section className="max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.price}</p>
                <a href={`/product/${product.id}`} className="text-blue-600 hover:underline">View Product</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
