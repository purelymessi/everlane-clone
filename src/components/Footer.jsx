import React from 'react';

const Footer = () => {
  const links = [
    {
      href: "/about",
      title: "About Us"
    }
  ]
  return (
    <footer className="bg-gray-300 py-8 text-center text-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <a href="/" className="text-2xl font-bold">Everlane</a>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          {links.map((link)=> <a href={link.href}>{link.title}</a>))}
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </div>
        <div className="mb-4">
          <a href="/faq" className="text-zinc-950 hover:underline">FAQ</a>
        </div>
        <p className="text-zinc-950">&copy; 2024 Everlane Clone - All rights reserved.</p>
        
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://facebook.com" className="text-zinc-950 hover:text-white">Facebook</a>
          <a href="https://twitter.com" className="text-zinc-950 hover:text-white">Twitter</a>
          <a href="https://instagram.com" className="text-zinc-950 hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
