'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Use the correct hook for dynamic routes

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from the URL using useParams

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        setLoading(true); // Set loading state before starting the fetch
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch product');
          }
          const data: Product = await response.json();
          setProduct(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false); // Stop loading after fetch is done
        }
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if API request fails
  }

  if (!product) {
    return <div>No product found</div>; // Display if no product data is available
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
            <p className="text-gray-700 text-base mb-4">{product.description}</p>
            <div className="text-2xl font-semibold text-gray-900">${product.price}</div>
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
