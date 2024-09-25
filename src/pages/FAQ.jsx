import React from 'react';

const FAQ = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">What is your return policy?</h2>
          <p className="text-gray-700">
            We offer a 30-day return policy on all items. Please ensure that the products are returned in their original condition.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">How can I track my order?</h2>
          <p className="text-gray-700">
            After your order is shipped, you will receive an email with tracking information. You can also track your order through our website.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Do you offer international shipping?</h2>
          <p className="text-gray-700">
            Yes, we offer international shipping to many countries. Shipping rates and delivery times vary depending on your location.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">What payment methods do you accept?</h2>
          <p className="text-gray-700">
            We accept various payment methods including credit cards, PayPal, and bank transfers. You can select your preferred payment method at checkout.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Can I change or cancel my order?</h2>
          <p className="text-gray-700">
            If you need to change or cancel your order, please contact us as soon as possible. We can make changes if your order has not yet been processed.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">What should I do if I receive a damaged item?</h2>
          <p className="text-gray-700">
            If you receive a damaged item, please contact our customer service within 7 days of receiving the product. We will assist you with a replacement or refund.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Do you offer gift cards?</h2>
          <p className="text-gray-700">
            Yes, we offer gift cards that can be purchased on our website. They make the perfect gift for any occasion!
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">How can I contact customer support?</h2>
          <p className="text-gray-700">
            You can reach our customer support team via email at support@example.com or by using the contact form on our website. We aim to respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
