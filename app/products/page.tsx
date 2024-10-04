'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the dummy JSON API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
        >
          <Link href={`/products/${product.id}`}>
            <img
              className="w-full h-48 object-cover" // Responsive image
              src={product.image}
              alt={product.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.title}</div>
              <div className="text-2xl font-semibold text-gray-900">
                ${product.price}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
