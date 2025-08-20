"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Blog = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const FetchedBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=7")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Other Blog Posts</h2>
      {blogs.map(blog => (
        <Link key={blog.id} href={`/fetched-blogs/${blog.id}`} className="block mb-4 p-3 rounded hover:bg-gray-100">
          <h4 className="font-semibold">{blog.title}</h4>
          <p className="text-sm text-gray-600">{blog.body}</p>
        </Link>
      ))}
    </div>
  );
};

export default FetchedBlogs;
