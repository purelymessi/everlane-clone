import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log('Form submitted');

    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto py-16 px-4">
      <h2 className="text-2xl font-bold mb-6">Sign In</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-gray-700">Email Address</label>
          <input type="email" id="email" name="email" className="w-full p-3 border rounded-md" required />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input type="password" id="password" name="password" className="w-full p-3 border rounded-md" required />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Sign In</button>
      </form>
      <p className="mt-4 text-gray-600">Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a></p>
    </div>
  );
};

export default SignIn;
