'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button
              className="text-2xl font-bold text-gray-800"
              onClick={() => router.push('/')}
            >
              ShopEase
            </button>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex md:items-center md:w-1/2">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Menu Items */}
          <div className="hidden md:ml-6 md:flex md:space-x-8 md:items-center">
            <a href="/products" className="text-gray-800 hover:text-blue-500">
              Shop
            </a>
            <a href="/categories" className="text-gray-800 hover:text-blue-500">
              Categories
            </a>
            <a href="/deals" className="text-gray-800 hover:text-blue-500">
              Deals
            </a>
            <a href="/about" className="text-gray-800 hover:text-blue-500">
              About Us
            </a>
          </div>

          {/* Right-side Icons (Cart, Account) */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <a
              href="/cart"
              className="relative text-gray-800 hover:text-blue-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l1-7H6l1 7z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 13L5 6m0 0L3 3m2 3h14l1 7m-4 0v2a1 1 0 102 0v-2m-6 0v2a1 1 0 102 0v-2"
                />
              </svg>
              {/* Cart badge */}
              <span className="absolute top-0 right-0 inline-block w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                2
              </span>
            </a>

            {/* Account Icon */}
            <a href="/account" className="text-gray-800 hover:text-blue-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 16v2a4 4 0 01-8 0v-2a4 4 0 018 0z"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-800 hover:text-blue-500 focus:outline-none focus:text-blue-500"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/shop" className="text-gray-800 hover:text-blue-500 block">
            Shop
          </a>
          <a
            href="/categories"
            className="text-gray-800 hover:text-blue-500 block"
          >
            Categories
          </a>
          <a href="/deals" className="text-gray-800 hover:text-blue-500 block">
            Deals
          </a>
          <a href="/about" className="text-gray-800 hover:text-blue-500 block">
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
