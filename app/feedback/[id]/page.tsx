'use client';

import { useSearchParams } from 'next/navigation';

interface FeedbackPageProps {
  params: { id: string };
}

export default function FeedbackPage({ params }: FeedbackPageProps) {
  const searchParams = useSearchParams();

  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const email = searchParams.get('email');
  const comment = searchParams.get('comment');

  return (
    <div className="p-8 bg-white shadow rounded mt-6">
      <h1 className="text-2xl font-bold mb-4">Feedback ID: {params.id}</h1>
      <p><b>First Name:</b> {firstName}</p>
      <p><b>Last Name:</b> {lastName}</p>
      <p><b>Email:</b> {email}</p>
      <p><b>Message:</b> {comment}</p>
    </div>
  );
}
