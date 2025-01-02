"use client";
import { useState } from "react";
import Logo from "../images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 w-full shadow-sm z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={Logo.src} alt="logo" className="h-8 w-auto" />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden"
          aria-expanded={isOpen}
        >
          ≡
        </button>

        {/* Navigation Menu */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white lg:static lg:flex lg:items-center lg:space-x-6 lg:w-auto`}
        >
          {/* Menu Links */}
          <ul className="flex flex-col items-start p-4 space-y-2 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-6 lg:p-0">
            <li>
              <a
                href="/"
                className="text-gray-800 hover:text-yellow-500 font-medium"
              >
                Stories
              </a>
            </li>
            <li>
              <a
                href="/post"
                className="text-gray-800 hover:text-yellow-500 font-medium"
              >
                Post
              </a>
            </li>
            <li>
              <a
                href="/author"
                className="text-gray-800 hover:text-yellow-500 font-medium"
              >
                Author
              </a>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="flex items-center border border-gray-300 rounded-md overflow-hidden mx-4 lg:mx-0 lg:mt-0">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-2 w-full lg:w-60 outline-none text-gray-800"
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-yellow-500 text-white px-3 py-2"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
