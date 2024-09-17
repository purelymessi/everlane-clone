import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  // Mock product data; replace with real data from API
  const product = {
    id,
    name: "Product Name",
    price: "$50",
    description: "This is a great product",
    image: "https://example.com/product-image.jpg",
  };

  return (
    <div className="max-w-7xl mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.price}</p>
          <p className="text-gray-600 mb-8">{product.description}</p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
      {/* Optional: Add related products or reviews section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Map through related products here */}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
