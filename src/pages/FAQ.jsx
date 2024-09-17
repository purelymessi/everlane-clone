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
        {/* Add more FAQ items as needed */}
      </div>
    </div>
  );
};

export default FAQ;
