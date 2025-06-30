import Image from 'next/image';
import React from 'react';

const ImageIllustration = ({ images }: { images?: string[] }) => {
  return (
    <div className='w-full max-w-[500px] shrink-0'>
      <div className='relative h-[17.5rem] w-full overflow-hidden md:rounded-[1.25rem]'>
        <Image
          // src={'/images/placeholder/header_1.jpg'}
          src={images?.[0] ?? '/images/placeholder/header_1.jpg'}
          alt='Gallery Image'
          layout='fill'
          className='w-full md:rounded-[1.25rem]'
          style={{ objectFit: `cover`, objectPosition: `center` }}
        />
      </div>
      <div className='mt-5 flex w-full gap-3 md:gap-5'>
        <div className='relative h-[11.25rem] w-full overflow-hidden md:rounded-[1.25rem]'>
          <Image
            src={images?.[1] ?? '/images/placeholder/header_2.jpg'}
            alt='Gallery Image'
            layout='fill'
            className='md:rounded-[1.25rem]'
            style={{ objectFit: `cover`, objectPosition: `center` }}
          />
        </div>
        <div className='relative h-[11.25rem] w-full'>
          <Image
            src={images?.[2] ?? '/images/placeholder/header_3.JPG'}
            alt='Gallery Image'
            layout='fill'
            className='md:rounded-[1.25rem]'
            style={{ objectFit: `cover`, objectPosition: `center` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageIllustration;
