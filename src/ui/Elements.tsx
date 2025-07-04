import Image from 'next/image';
import { PiEnvelopeSimpleFill, PiLinkedinLogoFill } from 'react-icons/pi';
import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlinePlay,
} from 'react-icons/hi';
import { FaPlay } from 'react-icons/fa';

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
      className={`mb-4 text-[1.8em] font-semibold leading-[120%] text-black-500 before:relative before:bottom-[-5px] before:block before:font-body before:text-[0.9rem] before:uppercase before:text-primary-500 md:text-[2.25em] md:before:text-[1rem] before:content-["${title?.split(' ').join('_')}"] ${className}`}
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
    <div className={`md:rounded-primary relative size-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        quality={100}
        style={{ objectFit: `cover`, objectPosition: `center` }}
        className='md:rounded-primary'
      />
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
  prevClick?: any;
  nextClick?: any;
}) {
  return (
    <div className='md:rounded-primary flex flex-col justify-between bg-primary-50 px-6 py-6 md:min-h-[510px] md:px-8 md:py-8'>
      <div>
        <h3 className='text-2xl font-semibold text-black-500'>{name}</h3>
        <span className='text-[0.9em] text-black-400'>{role}</span>
        <div className='mt-4 text-sm text-black-500 md:text-base'>
          {biography.map((desc, index) => (
            <p className='mb-6' key={`${name}-para-${index}`}>
              {desc}
            </p>
          ))}
        </div>
      </div>

      <div className='mt-4 inline-flex items-center justify-between md:mt-8'>
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

export function ResourceClip({
  title,
  linkText,
  link,
  image,
  youtube = false,
  grayscale = true,
}: {
  title: string;
  link: string;
  linkText: string;
  image?: string;
  youtube?: boolean;
  grayscale?: boolean;
}) {
  return (
    <div className='rounded-primary group relative size-full'>
      {image ? (
        <Image
          src={image}
          alt='Cleaning'
          fill
          className={`rounded-primary group-hover:grayscale-0 ${grayscale ? 'grayscale' : ''} `}
          style={{ objectFit: `cover`, objectPosition: `center` }}
        />
      ) : null}
      {youtube ? (
        <a
          href={link}
          style={{
            top: `50%`,
            left: `50%`,
            transform: `translate(-50%, -50%)`,
          }}
          className='absolute flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-center font-heading font-semibold group-hover:text-primary-500 md:h-[70px] md:w-[70px]'
          target='_blank'
        >
          <FaPlay />
        </a>
      ) : null}
      <div className='absolute bottom-[20px] left-[2.5%] z-10 mx-auto w-[95%] flex-col justify-end transition-all duration-300'>
        <div className='rounded-primary relative bottom-0 z-10 h-[auto] bg-white px-5 py-3 text-sm text-black-500 md:px-6 md:py-5'>
          <h3 className='mb-3 text-lg font-semibold md:text-2xl'>{title}</h3>
          <a
            href={link}
            className='font-heading font-semibold text-primary-500'
            target='_blank'
          >
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
}
