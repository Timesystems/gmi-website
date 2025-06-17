import Image from 'next/image';
import React from 'react';

const ImageIllustration = () => {
  return (
    <div className='w-full max-w-[500px] shrink-0'>
      <div className='w- relative h-[17.5rem] w-full'>
        <Image
          src={'/images/placeholder/Images.png'}
          alt='Gallery Image'
          layout='fill'
          className='md:rounded-primary'
          style={{ objectFit: `contain`, objectPosition: `center` }}
        />
      </div>
      <div className='mt-5 flex w-full gap-3 md:gap-5'>
        <div className='relative h-[11.25rem] w-full'>
          <Image
            src={'/images/placeholder/Images.png'}
            alt='Gallery Image'
            layout='fill'
            className='md:rounded-primary'
            style={{ objectFit: `cover`, objectPosition: `center` }}
          />
        </div>
        <div className='relative h-[11.25rem] w-full'>
          <Image
            src={'/images/placeholder/Images.png'}
            alt='Gallery Image'
            layout='fill'
            className='md:rounded-primary'
            style={{ objectFit: `cover`, objectPosition: `center` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageIllustration;
