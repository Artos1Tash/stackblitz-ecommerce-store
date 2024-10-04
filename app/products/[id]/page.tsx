'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => console.error('Error fetching product:', error));
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Loading state while fetching data
  }

  return (
    <div className="container mx-auto p-6">
      <div className="h-56 grid grid-cols-3 gap-4 content-stretch border-black">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white col-span-3 md:col-span-1">
          <img
            className="w-full h-48 object-cover"
            src={product.image}
            alt={product.title}
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.title}</div>
            <p className="text-gray-700 text-base mb-4">
              {product.description}
            </p>
            <div className="text-2xl font-semibold text-gray-900">
              ${product.price}
            </div>
          </div>

          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
