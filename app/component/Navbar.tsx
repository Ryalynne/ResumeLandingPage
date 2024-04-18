"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full relative z-50">
      <nav className="bg-transparent fixed top-0">
        <div className="max-w-screen-xl flex justify-between items-center mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 px-10 rtl:space-x-reverse"
          >
            <Image
              src="/images/profilejpg.jpg"
              className="h-8"
              alt="Primate Logo"
              width={50}
              height={50}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              PORTFOLIO PROJECT
            </span>
          </Link>

          <div className="md:hidden">
            {/* Hamburger Menu for Mobile */}
            <button
              onClick={toggleMenu}
              className="block md:hidden focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
            {/* Mobile Menu */}
            <ul className="max-w-full font-medium text-white bg-gray-900 absolute top-full left-0 right-0 space-y-4 p-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 rounded hover:bg-gray-800"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 rounded hover:bg-gray-800"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:block md:w-full" id="navbar-default">
            {/* Desktop Menu */}
            <ul className="font-medium flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 rtl:space-x-reverse">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-white rounded hover:bg-transparent hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 text-white rounded hover:bg-transparent hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
