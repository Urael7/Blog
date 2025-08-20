'use client';

import Link from 'next/link';
import React from 'react';

/**
 * @typedef {Object} Post
 * @property {string} slug
 * @property {string} img
 * @property {string} title
 * @property {string} desc
 */

const posts = [
  {
    slug: 'post-1',
    img: '/f1.jfif',
    title: 'From Code to Coffee: What It Really Looks Like Behind the Screens',
    desc: "Ever wondered what computer engineers actually do all day? It's not just typing lines of code...",
  },
  {
    slug: 'post-2',
    img: '/f2.jfif',
    title: 'The Daily Routine of a Software Developer',
    desc: 'In the quiet hum of a dual-monitor setup, a developer dives deep into the world of code...',
  },
  {
    slug: 'post-3',
    img: '/f4.jfif',
    title: 'Breaking the Myth: Coding Isn\'t Just for Geniuses',
    desc: 'Behind every app and website is a developer who started from scratch. Coding isn\'t about being a genius—it\'s about patience, practice, and persistence.',
  },
];

export default function FeaturedPostsPage() {
  return (
    <main className="px-6 py-8 bg-gradient-to-b from-white via-gray-100 to-gray-300 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Featured Posts</h1>
        <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Discover our most popular and engaging articles about computer engineering, 
          software development, and the tech world.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={{
                pathname: `/blog/${post.slug}`,
                query: {
                  title: post.title,
                  desc: post.desc,
                  img: post.img,
                },
              }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {post.desc}
                </p>
                <div className="mt-4 flex items-center text-blue-600 font-medium">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
