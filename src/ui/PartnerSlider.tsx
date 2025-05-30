'use client';

import Image from 'next/image';
import { partners } from '@/data/site-data';
import { HeadingTitle } from './Elements';

export default function PartnerSlider() {
  return (
    <div className='py-[3rem] text-center lg:py-[5.5rem]'>
      <HeadingTitle>Our Partners</HeadingTitle>
      <div className='mx-auto mt-20 grid w-full max-w-[75rem] grid-cols-2 flex-wrap justify-center gap-10 sm:flex'>
        {partners.map(({ name, image, width, height }) => {
          return (
            <div
              style={{ width: '150px' }}
              key={name}
              className='shrink-0 grayscale hover:grayscale-0'
            >
              <Image
                src={image}
                alt={name}
                width={width}
                height={height}
                quality={99}
                className='mr-4 inline-block'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
