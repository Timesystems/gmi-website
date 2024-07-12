import Image from 'next/image';
import { PiEnvelopeSimpleFill, PiLinkedinLogoFill } from 'react-icons/pi';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';

export function HeadingTitle({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <h2
      className={`mb-4 text-[2.25em] font-semibold leading-[120%] text-black-500 before:relative before:bottom-[-5px] before:block before:font-body before:text-[16px] before:uppercase before:text-primary-500 before:content-["${title?.split(' ').join('_')}"] ${className}`}
    >
      {children}
    </h2>
  );
}

export function TeamMemberImage({
  src,
  alt = '',
  className = '',
}: {
  className?: string;
  src: string;
  alt: string;
}) {
  return (
    <div className={`rounded-primary ${className}`}>
      <Image src={src} alt={alt} fill objectFit='cover' />
    </div>
  );
}

export function TeamMemberBio({
  name,
  role,
  biography,
  email,
  linkedin,
  prevClick,
  nextClick,
}: {
  name: string;
  role: string;
  biography: string[];
  email: string;
  linkedin?: string;
  prevClick?: () => void;
  nextClick?: () => void;
}) {
  'use client';

  return (
    <div className='rounded-primary bg-primary-50 px-6 py-6 md:px-8 md:py-8'>
      <h3 className='text-2xl font-semibold text-black-500'>{name}</h3>
      <span className='text-[0.9em] text-black-400'>{role}</span>
      <div className='mt-4 text-black-500'>
        {biography.map((desc, index) => (
          <p className='mb-6' key={`${name}-para-${index}`}>
            {desc}
          </p>
        ))}
      </div>
      <div className='mt-6 flex items-center justify-between md:mt-8'>
        {/** Connect Icons */}
        <div>
          <a
            href={`mailto:${email}`}
            className='mr-3 inline-block rounded-full border border-primary-500 px-3 py-3 text-xl text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
          >
            <PiEnvelopeSimpleFill />
          </a>
          {linkedin ? (
            <a
              href={linkedin}
              className='mr-3 inline-block rounded-full border border-primary-500 px-3 py-3 text-xl text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
            >
              <PiLinkedinLogoFill />
            </a>
          ) : null}
        </div>

        {/** Prev and Next button if present */}
        <div>
          {prevClick ? (
            <button
              className='mr-4 inline-block rounded-full border border-primary-500 px-3 py-3 text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
              onClick={prevClick}
            >
              <HiOutlineArrowLeft />
            </button>
          ) : null}
          {nextClick ? (
            <button
              className='mr-2 inline-block rounded-full border border-primary-500 px-3 py-3 text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
              onClick={nextClick}
            >
              <HiOutlineArrowRight />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
