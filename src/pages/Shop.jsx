import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Casual Chino Pants',
      imageUrl: 'https://example.com/images/chino-pants.jpg',
      price: '$79.99',
      description: 'Comfortable chino pants suitable for both casual and formal occasions.',
    },
    {
      id: 2,
      name: 'Graphic T-Shirt',
      imageUrl: 'https://example.com/images/graphic-tshirt.jpg',
      price: '$39.99',
      description: 'Soft cotton graphic t-shirt with a unique design.',
    },
    {
      id: 3,
      name: 'Elegant Wool Dress',
      imageUrl: 'https://example.com/images/wool-dress.jpg',
      price: '$159.99',
      description: 'Sophisticated wool dress that combines style and comfort.',
    },
    {
      id: 4,
      name: 'Leather Crossbody Bag',
      imageUrl: 'https://example.com/images/leather-bag.jpg',
      price: '$199.99',
      description: 'High-quality leather crossbody bag with multiple compartments.',
    },
    {
      id: 5,
      name: 'Canvas Sneakers',
      imageUrl: 'https://example.com/images/canvas-sneakers.jpg',
      price: '$59.99',
      description: 'Classic canvas sneakers that go with any outfit.',
    },
    {
      id: 6,
      name: 'Soft Cashmere Scarf',
      imageUrl: 'https://example.com/images/cashmere-scarf.jpg',
      price: '$89.99',
      description: 'Luxurious cashmere scarf to keep you warm and stylish.',
    },
    {
      id: 7,
      name: 'Minimalist Watch',
      imageUrl: 'https://example.com/images/minimalist-watch.jpg',
      price: '$199.99',
      description: 'Sleek and minimalist watch that complements any look.',
    },
    {
      id: 8,
      name: 'Winter Puffer Jacket',
      imageUrl: 'https://example.com/images/puffer-jacket.jpg',
      price: '$219.99',
      description: 'Warm and insulated puffer jacket for cold weather.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-6">Shop All Products</h1>
      <p className="text-lg mb-12">
        Discover our curated collection of essentials, each crafted with the utmost care for both people and the planet.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out">
            <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold my-4">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <p className="text-gray-500 mb-4">{product.description}</p>
            <Link to={`/product/${product.id}`} className="text-blue-600 hover:underline">View Details</Link>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
          Load More Products
        </button>
      </div>
    </div>
  );
};

export default Shop;
