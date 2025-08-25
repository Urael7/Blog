'use client';

import '@/styles/globals.css';
import Blog from '@/app/components/Blog';
import Link from 'next/link';
import React, { useState } from 'react';
import FeaturedPosts from '@/app/components/FeaturedPosts';
import CommentForm from '@/app/components/CommentForm';
import FetchedBlogs from './components/FetchedBlogs';
import Feedback from '@/app/components/Feedback';

export default function Home() {
  const [comments, setComments] = useState<{ id: number; firstName: string; lastName: string; email: string; comment: string }[]>([]);

  const addComment = (comment: { id: number; firstName: string; lastName: string; email: string; comment: string }) => {
    setComments((prev) => [...prev, comment]);
  };

  return (
    <main className="px-6 py-8">
      {/* Two-column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Section - 60% */}
        <div className="lg:col-span-2">
          <Blog />

          {/* Action Buttons */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link href="/comments" className="p-4 bg-white shadow rounded hover:shadow-lg transition text-center">
              Comments Section
            </Link>
            <Link href="/fetched-blogs" className="p-4 bg-white shadow rounded hover:shadow-lg transition text-center">
              Fetched Blogs
            </Link>
            <Link href="/featured-posts" className="p-4 bg-white shadow rounded hover:shadow-lg transition text-center">
              Featured Posts
            </Link>
          </div>
        </div>

        {/* Side Content - 40% */}
        <div>
          <FeaturedPosts />
          <CommentForm addComment={addComment} />
          <Feedback comments={comments} />
        </div>
      </div>

      {/* Related Blogs Section */}
      <section className="mt-0">
        <h2 className="text-2xl font-bold text-center mb-6">Related Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="https://www.computer.org/publications/tech-news" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow rounded hover:shadow-lg transition">
            IEEE Computer Society News
          </a>
          <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow rounded hover:shadow-lg transition">
            GeeksforGeeks
          </a>
          <a href="https://towardsdatascience.com/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow rounded hover:shadow-lg transition">
            Towards Data Science
          </a>
          <a href="https://www.freecodecamp.org/news/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow rounded hover:shadow-lg transition">
            FreeCodeCamp News
          </a>
          <a href="https://dev.to/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow rounded hover:shadow-lg transition">
            DEV Community
          </a>
          <a href="https://hackernoon.com/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white shadow rounded hover:shadow-lg transition">
            HackerNoon
          </a>
        </div>
      </section>
    </main>
  );
}