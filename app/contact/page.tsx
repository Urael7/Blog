'use client';

import { FaTelegram, FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <main className="px-6 py-8 bg-gradient-to-b from-white via-gray-100 to-gray-300 bg-gray-300 min-h-screen">
      <section className="bg-white shadow rounded p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-gray-700 mb-6 text-center">
          Have questions, suggestions, or feedback? We’d love to hear from you!
        </p>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-xl text-blue-600" />
            <span>yafamen123@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhone className="text-xl text-green-600" />
            <span>+251 991 440 631</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-lg font-semibold mb-3">Follow Us</p>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="https://t.me/urael_7" target="_blank" className="hover:text-blue-500"><FaTelegram /></a>
            <a href="https://wa.me/1234567890" target="_blank" className="hover:text-green-500"><FaWhatsapp /></a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-700"><FaFacebook /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
