import React from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Classic Denim Jacket',
      imageUrl: 'https://example.com/images/denim-jacket.jpg',
      price: '$89.99',
      description: 'A timeless denim jacket made from high-quality cotton with a classic fit.',
    },
    {
      id: 2,
      name: 'Silk Blouse',
      imageUrl: 'https://example.com/images/silk-blouse.jpg',
      price: '$129.99',
      description: 'Elegant silk blouse perfect for any occasion. Available in multiple colors.',
    },
    {
      id: 3,
      name: 'Leather Ankle Boots',
      imageUrl: 'https://example.com/images/ankle-boots.jpg',
      price: '$149.99',
      description: 'Premium leather ankle boots with a comfortable sole and stylish design.',
    },
    {
      id: 4,
      name: 'Wool Blend Sweater',
      imageUrl: 'https://example.com/images/wool-sweater.jpg',
      price: '$119.99',
      description: 'Cozy wool blend sweater ideal for layering during colder months.',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition transform duration-300 ease-in-out">
          <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
            <p className="text-gray-600">{product.description}</p>
            <Link to={`/product/${product.id}`} className="text-blue-600 hover:underline">View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
