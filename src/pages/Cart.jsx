import React from 'react';

const Cart = () => {
  // Mock cart items; replace with real data from state or API
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      imageUrl: 'https://media.everlane.com/image/upload/v1/products/12345.jpg',
      price: '$50',
      quantity: 2,
    },
    {
      id: 2,
      name: 'Product 2',
      imageUrl: 'https://media.everlane.com/image/upload/v1/products/12346.jpg',
      price: '$75',
      quantity: 1,
    },
  ];

  const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center border-b py-4">
                <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                <div className="flex-1">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-gray-600">Price: {item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div>
                  <button className="text-red-600 hover:underline">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h2 className="text-xl font-bold">Total: ${totalAmount.toFixed(2)}</h2>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-700 transition">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
