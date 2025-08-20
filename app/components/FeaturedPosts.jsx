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
    title: 'Breaking the Myth: Coding Isn’t Just for Geniuses',
    desc: 'Behind every app and website is a developer who started from scratch. Coding isn’t about being a genius—it’s about patience, practice, and persistence.',
  },
];

export default function FeaturedPosts() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Featured Posts</h2>
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
          className="flex gap-4 mb-4 group"
        >
          <img
            src={post.img}
            alt={post.title}
            className="h-20 w-20 object-cover rounded-md group-hover:opacity-80"
          />
          <div>
            <h3 className="font-semibold group-hover:text-blue-600">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
