'use client';

import { useState } from 'react';

export default function CommentForm({ addComment }: { addComment: (comment: { id: number; firstName: string; lastName: string; email: string; comment: string }) => void }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      comment: message,
    };
    addComment(newComment);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="mt-8 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Anything on your mind...?</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-[#808080] transition">
          Submit
        </button>
      </form>
    </div>
  );
}
