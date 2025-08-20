'use client';

import { useState } from 'react';
import CommentForm from '../components/CommentForm';
import Feedback from '../components/Feedback';

type Comment = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  comment: string;
};

export default function CommentPage() {
  const [comments, setComments] = useState<Comment[]>([]);

  const addComment = (comment: Comment) => {
    setComments((prev) => [...prev, comment]);
  };

  return (
    <>
      <CommentForm addComment={addComment} />
      <Feedback comments={comments} />
    </>
  );
}
