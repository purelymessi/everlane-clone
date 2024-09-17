import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        We’d love to hear from you! If you have any questions or need support, please reach out to us using the contact form below.
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
