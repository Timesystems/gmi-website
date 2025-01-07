'use client';
import { useState, useEffect } from 'react';
import { Input } from '@headlessui/react';

export default function NewsLetterForm() {
  const [email, setEmail] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <form>
      <div className='relative'>
        <Input
          type='text'
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full rounded-full py-3 pl-5 placeholder:text-black-300 data-[focus]:border-primary-500 data-[focus]:placeholder:text-black-500'
        />
        <button
          className='btn-primary absolute px-4 py-2 md:px-5 md:py-2'
          style={{ right: '5px', top: '3px' }}
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}
