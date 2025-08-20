'use client';

import { FaTelegram, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <main className="px-6 py-8 bg-gradient-to-b from-white via-gray-100 to-gray-300 bg-gray-300 min-h-screen">
      <section className="bg-white shadow rounded p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          Welcome to our Computer Engineering Blog — your hub for the latest insights, tutorials, 
          and resources in the world of technology. Our mission is to make tech knowledge accessible 
          and engaging for everyone.
        </p>

        <h2 className="text-2xl font-semibold mb-2">About the Author</h2>
        <p className="text-gray-700 mb-4">
          Hi, I’m <strong>Yafet Haileslassie</strong>, a passionate computer engineering enthusiast 
          and developer who loves creating impactful tech projects.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Developer</h2>
        <p className="text-gray-700 mb-6">
          Developed and maintained by <strong>Yafet Haileslassie</strong>.
        </p>

        <p className="text-gray-700 mb-6">
          📩 Telegram: <a href="https://t.me/urael_7" target="_blank" className="text-blue-600 hover:underline">@urael_7</a>
        </p>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-lg font-semibold mb-3">Follow Us</p>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="https://t.me/urael_7" target="_blank" className="hover:text-blue-500"><FaTelegram /></a>
            <a href="https://wa.me/251991440631" target="_blank" className="hover:text-green-500"><FaWhatsapp /></a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-700"><FaFacebook /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
