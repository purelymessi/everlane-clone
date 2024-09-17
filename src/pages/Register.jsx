import React from 'react';

const Register = () => {
  return (
    <div className="max-w-md mx-auto py-16 px-4">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700">Full Name</label>
          <input type="text" id="name" name="name" className="w-full p-3 border rounded-md" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">Email Address</label>
          <input type="email" id="email" name="email" className="w-full p-3 border rounded-md" required />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input type="password" id="password" name="password" className="w-full p-3 border rounded-md" required />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Register</button>
      </form>
      <p className="mt-4 text-gray-600">Already have an account? <a href="/signin" className="text-blue-600 hover:underline">Sign In</a></p>
    </div>
  );
};

export default Register;
