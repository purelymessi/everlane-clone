import React from 'react';
import { useParams } from 'react-router-dom';

const ProductGrid = () => {
  const { category } = useParams();

  const products = [
    { id: 1, category: 'new-arrivals', name: 'New Arrival Pants', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOO9yl6Kb1qGYws_tkyCSYkJ99YefgDKmIw&s', price: '$79.99' },
    { id: 2, category: 'best-sellers', name: 'Best Seller T-Shirt', imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', price: '$39.99' },
    { id: 3, category: 'clothing', name: 'Wool Sweater', imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', price: '$59.99' },
    { id: 4, category: 'pants', name: 'Casual Pants', imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', price: '$49.99' },
    { id: 5, category: 'jeans', name: 'Denim Jeans', imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', price: '$89.99' },
    { id: 6, category: 'tees', name: 'Graphic Tee', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSclM1YrqwsPuubYOz4Q7yCJIzPXEpFiiC9ig&s', price: '$29.99' },
    { id: 7, category: 'sweaters', name: 'Cashmere Sweater', imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', price: '$89.99' },
    { id: 8, category: 'dresses', name: 'Summer Dress', imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', price: '$99.99' },
    { id: 9, category: 'shoes-bags', name: 'Leather Bag', imageUrl: 'https://m.media-amazon.com/images/I/71phevsZkcL._AC_SL1500_.jpg', price: '$199.99' },
    { id: 10, category: 'sale', name: 'Discounted Jacket', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJJj80nXsmzL1HIC-xApdjsFbxQjWTDNGOA&s', price: '$59.99' },
  ];

  const filteredProducts = products.filter((product) => product.category === category);
  
  return (
    <div className="max-w-7xl mx-auto py-16">
      <h2 className="text-2xl font-bold text-center mb-8 capitalize">{category.replace('-', ' ')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-lg">
              <img src={product.imageUrl} alt={product.name} className="w-full h-60 object-cover mb-4 rounded-md" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">Продукты не найдены в этой категории.</p>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;

