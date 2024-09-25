import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ProductDetail = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: 'Casual Chino Pants',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOO9yl6Kb1qGYws_tkyCSYkJ99YefgDKmIw&s',
      price: '$79.99',
      description: 'Comfortable chino pants suitable for both casual and formal occasions.',
    },
    {
      id: 2,
      name: 'Graphic T-Shirt',
      imageUrl: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1298913_alternate10?$plpDeskRF$',
      price: '$39.99',
      description: 'Soft cotton graphic t-shirt with a unique design.',
    },
    {
      id: 3,
      name: 'Elegant Wool Dress',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3d4NZ4mE0WzHFGQ1SFn6irJy6sT5m6YJCuQ&s',
      price: '$159.99',
      description: 'Sophisticated wool dress that combines style and comfort.',
    },
    {
      id: 4,
      name: 'Leather Crossbody Bag',
      imageUrl: 'https://m.media-amazon.com/images/I/71phevsZkcL._AC_SL1500_.jpg',
      price: '$199.99',
      description: 'High-quality leather crossbody bag with multiple compartments.',
    },
    {
      id: 5,
      name: 'Canvas Sneakers',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmB3qBJpn913NVD37CtIqYoB_UsHp8JdlEAQ&s',
      price: '$59.99',
      description: 'Classic canvas sneakers that go with any outfit.',
    },
    {
      id: 6,
      name: 'Soft Cashmere Scarf',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSclM1YrqwsPuubYOz4Q7yCJIzPXEpFiiC9ig&s',
      price: '$89.99',
      description: 'Luxurious cashmere scarf to keep you warm and stylish.',
    },
    {
      id: 7,
      name: 'Minimalist Watch',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMHoIbi9oDZiXST_KLodY6AMGDCo0oYAzsw&s',
      price: '$199.99',
      description: 'Sleek and minimalist watch that complements any look.',
    },
    {
      id: 8,
      name: 'Winter Puffer Jacket',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJJj80nXsmzL1HIC-xApdjsFbxQjWTDNGOA&s',
      price: '$219.99',
      description: 'Warm and insulated puffer jacket for cold weather.',
    },
    { id: 9, name: 'Classic T-Shirt', price: '$25', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3d4NZ4mE0WzHFGQ1SFn6irJy6sT5m6YJCuQ&s' },
    { id: 10, name: 'Slim Fit Jeans', price: '$40', imageUrl: 'https://m.media-amazon.com/images/I/71phevsZkcL._AC_SL1500_.jpg' },
    { id: 11, name: 'Leather Jacket', price: '$120', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmB3qBJpn913NVD37CtIqYoB_UsHp8JdlEAQ&s' },
    { id: 12, name: 'Wool Sweater', price: '$60', imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
    { id: 13, name: 'Canvas Sneakers', price: '$35', imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
    { id: 14, name: 'Denim Jacket', price: '$90', imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' }
    ];

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const newCartItems = [...cartItems, product];
    localStorage.setItem('cart', JSON.stringify(newCartItems));
    
    toast.success(`${product.name} добавлен в корзину!`);
  };

  if (!product) {
    return <div className="text-center text-2xl text-red-500">Продукт не найден!</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.imageUrl} alt={product.name} className="w-full h-80 object-cover rounded-lg shadow-lg" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.price}</p>
          <p className="text-gray-600 mb-8">{product.description}</p>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            onClick={addToCart}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3d4NZ4mE0WzHFGQ1SFn6irJy6sT5m6YJCuQ&s'
imageUrl: 'https://m.media-amazon.com/images/I/71phevsZkcL._AC_SL1500_.jpg'
imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmB3qBJpn913NVD37CtIqYoB_UsHp8JdlEAQ&s'