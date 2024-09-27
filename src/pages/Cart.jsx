import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartItems);
  }, []);

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handlePaymentCard = () => {
    navigate('/payment/card'); 
  };

  const handlePaymentPaypal = () => {
    navigate('/payment/paypal'); 
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">Ваша корзина</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Ваша корзина пуста.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4 p-4 border border-gray-300 rounded-lg shadow-md transition-shadow hover:shadow-lg">
              <div className="flex items-center">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover mr-4 rounded" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && ( 
        <div className="flex justify-center space-x-4 mt-6">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
            onClick={handlePaymentCard}
          >
            Оплатить картой
          </button>
          <button
            className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-800 transition"
            onClick={handlePaymentPaypal}
          >
            Оплатить через PayPal
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
