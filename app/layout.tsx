"use client";

import '../styles/globals.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Link from 'next/link';
import { IconContext } from 'react-icons';
import { FaTelegramPlane, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [comments, setComments] = useState<{ name: string; email: string; comment: string }[]>([]);

  const addComment = (newComment: { name: string; email: string; comment: string }) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-white via-gray-100 to-gray-300 min-h-screen flex flex-col transition-colors duration-300">
        <Navbar />
        
        {/* Add top padding so content is not hidden under fixed navbar */}
        <main className="flex-grow pt-[70px]">{children}</main>

        {/* Footer */}
        <footer className="bg-[#808080] text-white px-8 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About */}
            <div className="hover:translate-y-1 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-3">About This Blog</h3>
              <p className="text-sm text-[#CCCCCC]">
                Computer Enginnering Blog is your go-to platform for insightful blogs, trending
                articles, and inspiring stories.
              </p>
            </div>

            {/* Contact */}
            <div className="hover:translate-y-1 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <p className="text-sm text-[#CCCCCC]">Email: yafamen123@gmail.com</p>
              <p className="text-sm text-[#CCCCCC]">Phone: +251-991-440-631</p>
            </div>

            {/* Published Info */}
            <div className="hover:translate-y-1 transition-transform duration-300">
              <h3 className="text-lg font-semibold mb-3">Published Info</h3>
              <p className="text-sm text-[#CCCCCC]">
                All articles are written and reviewed by our editorial team before
                publishing.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <IconContext.Provider
              value={{ size: '1.8em', className: 'mx-3 hover:opacity-70 transition' }}
            >
              <div className="flex justify-center mt-2">
                <a href="https://t.me/urael_7" target="_blank" className="hover:text-blue-500"><FaTelegramPlane /></a>
                            <a href="https://wa.me/251991440631" target="_blank" className="hover:text-green-500"><FaWhatsapp /></a>
                            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500"><FaInstagram /></a>
                            <a href="https://facebook.com" target="_blank" className="hover:text-blue-700"><FaFacebookF /></a>
              </div>
            </IconContext.Provider>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs mt-8 text-[#C2C0FF]">
            © {new Date().getFullYear()} Computer Engineering Blog. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
