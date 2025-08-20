'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-[#FFFFFF] text-gray-900 shadow-md z-50">
      
      {/* Left Side - Logo/Title */}
      <div className="text-xl font-bold">
        <Link href="/" className="hover:text-blue-600 transition text-3xl">Blog</Link>
      </div>

      {/* Right Side - Navigation Links */}
      <div className="flex gap-6 font-medium items-center">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <Link href="/fetched-blogs" className="hover:text-blue-600 transition">Fetched Blogs</Link>
        <Link href="/comments" className="hover:text-blue-600 transition">Comments</Link>
        <Link href="/about" className="hover:text-blue-600 transition">About</Link>
        <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <FaSun className="text-xl text-yellow-500" />
          ) : (
            <FaMoon className="text-xl text-gray-600" />
          )}
        </button>
      </div>
    </nav>
  );
}
