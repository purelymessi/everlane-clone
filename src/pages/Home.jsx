import React from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const products = [
    { id: 1, name: 'Classic T-Shirt', price: '$25', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYeq8w_6h8ZwBrxuc22D5gSGcKS_1SpC6Dw&s' },
    { id: 2, name: 'Slim Fit Jeans', price: '$40', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKeSQmQb3T-l363D-M_2LVCMbULxEVPQNcgQ&s' },
    { id: 3, name: 'Leather Jacket', price: '$120', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCvkLdW5nFp0QpDe3Lcs2agWzkAaJJpqzvQ&s' },
    { id: 4, name: 'Wool Sweater', price: '$60', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC34GLloKe1G0D2ZMvVf0YoKmj9I2P-xCO_Q&s' },
    { id: 5, name: 'Canvas Sneakers', price: '$35', imageUrl: 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77070363_08_D5.jpg?imwidth=2048&imdensity=1&ts=1713794929815' },
    { id: 6, name: 'Denim Jacket', price: '$90', imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
    { id: 7, name: 'Casual Hoodie', price: '$45', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb3vE2p5Q3EECzkmKPqF3FmHpUsQlfUMgr5A&s' },
    { id: 8, name: 'Formal Shirt', price: '$50', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVwRGGGFsFzzGl9hgn5bHuJg5tqDwRLukog&s' },
    { id: 9, name: 'Chino Pants', price: '$55', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQODjzAmxuD3jFz8vFZbMcvLcv7fr0eR2xTA&s' },
    { id: 10, name: 'Flip Flops', price: '$20', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2NkF3Bc7Xx1yXQpEYYv2QNgp4qXnDaW4kYg&s' },
    { id: 11, name: 'Running Shoes', price: '$75', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMOyEGRK38Nq_P1RGw2sT93bBccBqLCxqng&s' },
    { id: 12, name: 'Backpack', price: '$30', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtD-OYynzzWz-cG4RIu7r7-0wflLfnHgicZg&s' },
  ];

  return (
    <div>
      <HeroSection />
      <section className="max-w-7xl mx-auto py-16">
        <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
              <img src={product.imageUrl} alt={product.name} className="h-48 w-full object-cover mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
