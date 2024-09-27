import React, { useState } from 'react';

const PaymentPaypal = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handlePayment = () => {
    if (!email) {
      setError('Пожалуйста, введите свой адрес электронной почты.');
      return;
    }
    alert(`Оплата на адрес ${email} успешно выполнена!`);
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">Оплата через PayPal</h2>
      <p className="text-center mb-4">Вы будете перенаправлены на сайт PayPal для завершения оплаты.</p>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Электронная почта:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
          placeholder="Введите ваш адрес электронной почты"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
      
      <button
        className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-800 transition"
        onClick={handlePayment}
      >
        Оплатить с помощью PayPal
      </button>
    </div>
  );
};

export default PaymentPaypal;
