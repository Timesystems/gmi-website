'use client';
import React, { useState } from 'react';
import { HeadingTitle } from './Elements';
import { Input } from '@headlessui/react';
import Image from 'next/image';
import { IoMdHeart, IoMdHeartEmpty, IoMdSend } from 'react-icons/io';

// Define a type for comment
type Comment = {
  id: number;
  author: string;
  image: string;
  content: string;
  likes: number;
  timestamp: string;
  isLiked: boolean;
};

// Dummy data
const dummyComments: Comment[] = [
  {
    id: 1,
    author: 'Anonymous',
    image: '/images/team/p_1.jpg',
    content:
      'The campus safety initiative also involves engaging and training Campus Ambassadors to support the process of reporting sexual abuse in their respective schools. Modupe Adetiba, president of the National Association of Female Students is one of the ambassadors.',
    likes: 20,
    timestamp: 'Yesterday',
    isLiked: false,
  },
  {
    id: 2,
    author: 'Anonymous 2',
    image: '/images/team/p_1.jpg',
    content:
      'This is another example comment to demonstrate the functionality of our comment system.',
    likes: 15,
    timestamp: 'Today',
    isLiked: false,
  },
];

export const BlogComment: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>(dummyComments);

  const toggleLike = (commentId: number) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              isLiked: !comment.isLiked,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            }
          : comment
      )
    );
  };

  return (
    <div className=''>
      <HeadingTitle className='md:text-[1.75rem]'>Comments</HeadingTitle>
      <div className='relative mt-8'>
        <Input
          placeholder='Enter your comments'
          className={
            'w-full rounded-[6.25rem] border-[0.5px] border-black-100 py-[0.84rem] pl-5 pr-[3.75rem]'
          }
        />
        <button className='absolute right-4 top-1/2 -translate-y-1/2 transform'>
          <IoMdSend className='text-[2rem] text-green-500' />
        </button>
      </div>

      {/* comment display panel  */}
      <div className='mt-8 flex w-full flex-col gap-5'>
        {comments.map((comment) => (
          <CommentDisplayPanel
            key={comment.id}
            comment={comment}
            onLikeClick={() => toggleLike(comment.id)}
          />
        ))}
      </div>
    </div>
  );
};

const CommentDisplayPanel: React.FC<{
  comment: Comment;
  onLikeClick: () => void;
}> = ({ comment, onLikeClick }) => {
  return (
    <div className='rounded-[1.25rem] border border-black-100 px-5 py-6'>
      {/* identity and time */}
      <div className='flex md:text-lg'>
        <div className='flex w-full items-center gap-2'>
          <div className='relative h-8 w-8 overflow-hidden rounded-full'>
            <Image
              src={comment.image}
              alt='Gallery Image'
              layout='fill'
              className='full'
              style={{ objectFit: `cover`, objectPosition: `center` }}
            />
          </div>

          <span className='block text-lg font-bold text-black-500'>
            {comment.author}
          </span>
        </div>
        <div className='w-full text-right text-black-300'>
          {comment.timestamp}
        </div>
      </div>
      {/* content  */}
      <div className='flex items-end'>
        <div className='mt-5 w-full text-black-500'>{comment.content}</div>
        <div className='flex w-full max-w-[2.8125rem] gap-2 text-black-300'>
          <span className=''>{comment.likes}</span>
          <button onClick={onLikeClick}>
            {comment.isLiked ? (
              <IoMdHeart className='text-green-500' />
            ) : (
              <IoMdHeartEmpty />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
