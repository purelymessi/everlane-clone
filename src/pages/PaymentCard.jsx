import React, { useState } from 'react';

const PaymentCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardType, setCardType] = useState('Visa'); 
  const [rememberCard, setRememberCard] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    
    // Валидация полей
    if (!cardNumber || !expiryDate || !cvv) {
      setError('Пожалуйста, заполните все поля.');
      return;
    }

   
    if (!/^\d{16}$/.test(cardNumber)) {
      setError('Номер карты должен содержать 16 цифр.');
      return;
    }
    setLoading(true);
    setError('');
    setSuccess(false);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSuccess(true);
    if (rememberCard) {
      localStorage.setItem('savedCard', cardNumber);
    }
    setCardNumber('');
    setExpiryDate('');
    setCvv('');
    setLoading(false);
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">Оплата картой</h2>
      <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md" onSubmit={handlePayment}>
        <div className="mb-4">
          <label className="block text-gray-700">Тип карты</label>
          <select
            value={cardType}
            onChange={(e) => setCardType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="American Express">American Express</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Номер карты</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="XXXX-XXXX-XXXX-XXXX"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Срок действия</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="MM/YY"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="XXX"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            checked={rememberCard}
            onChange={() => setRememberCard(!rememberCard)}
            className="mr-2"
          />
          <label className="text-gray-700">Запомнить карту</label>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">Платеж успешно выполнен!</p>}
        {loading && <p className="text-blue-500 text-sm mb-4">Обработка платежа...</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
        >
          {loading ? 'Загрузка...' : 'Оплатить'}
        </button>
      </form>
    </div>
  );
};

export default PaymentCard;
