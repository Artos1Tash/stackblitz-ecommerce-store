import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E-Commerce',
  description: 'Ecommerce store',
};

export default function Home() {
  return (
    <>
      <main className="container mx-auto p-6">
        <section className="mb-12">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/1200x400"
              alt="Hero Banner"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to Our Store
              </h1>
              <p className="text-gray-600 mb-6">
                Discover the best products for your needs, with unbeatable deals
                and promotions.
              </p>
              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition">
                Shop Now
              </button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-lg shadow-lg bg-white overflow-hidden">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Category 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Electronics</h3>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="rounded-lg shadow-lg bg-white overflow-hidden">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Category 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Fashion</h3>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="rounded-lg shadow-lg bg-white overflow-hidden">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Category 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Home & Garden</h3>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <img
                className="w-full h-48 object-cover"
                src="https://via.placeholder.com/400x300"
                alt="Featured Product 1"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Product Name 1</div>
                <p className="text-gray-700 text-base mb-4">
                  Brief description of the product.
                </p>
                <div className="text-2xl font-semibold text-gray-900">
                  $49.99
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
            {/* Add more product cards similarly */}
          </div>
        </section>

        {/* Newsletter Subscription Section */}
        <section className="bg-blue-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-gray-700 mb-6">
            Subscribe to our newsletter and stay updated on the latest products
            and special offers.
          </p>
          <form className="flex">
            <input
              type="email"
              className="p-2 flex-grow rounded-l-lg border border-gray-300"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-r-lg hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
