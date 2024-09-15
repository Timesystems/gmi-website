'use client';
import { Input } from '@headlessui/react';

export default function NewsLetterForm() {
  return (
    <div>
      <form>
        <div className='relative'>
          <Input
            type='text'
            placeholder='Email Address'
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
    </div>
  );
}
