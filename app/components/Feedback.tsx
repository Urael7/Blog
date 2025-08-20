'use client';

import Link from 'next/link';
import React from 'react';

interface FeedbackProps {
  comments: { id: number; firstName: string; lastName: string; email: string; comment: string }[];
}

const Feedback: React.FC<FeedbackProps> = ({ comments }) => (
  <div className="mt-6">
    {comments.map((c) => (
      <Link
        key={c.id}
        href={{
          pathname: `/feedback/${c.id}`,
          query: {
            firstName: c.firstName,
            lastName: c.lastName,
            email: c.email,
            comment: c.comment,
          },
        }}
      >
        <div className="bg-gray-200 p-3 rounded-lg mb-2 hover:bg-gray-300 transition cursor-pointer">
          <p><b>First Name:</b> {c.firstName}</p>
          <p><b>Last Name:</b> {c.lastName}</p>
          <p><b>Email:</b> {c.email}</p>
          <p><b>Message:</b> {c.comment}</p>
        </div>
      </Link>
    ))}
  </div>
);

export default Feedback;
