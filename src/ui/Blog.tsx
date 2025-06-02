import clsx from 'clsx';
import Link from 'next/link';

export function BlogClip({
  title,
  description,
  category,
  link,
  coverImage,
  date,
}: {
  title: string;
  description: string;
  category: string;
  link: string;
  coverImage?: string;
  date: string;
}) {
  return (
    <div
      className='rounded-primary relative h-[300px] min-w-full overflow-hidden transition-all duration-300 group-hover:grayscale md:h-[380px]'
      style={{
        background: `url("${coverImage}") no-repeat center`,
        backgroundSize: `cover`,
      }}
    >
      <div className='absolute inset-0 bg-[#0B0B0933]' />
      <div
        className='absolute mx-auto h-[220px] w-[90%] rounded-[20px] bg-white px-6 py-6 text-black-600'
        style={{
          bottom: `-80px`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
        }}
      >
        <div className='mb-2 flex justify-between text-[0.75em]'>
          {/* <span className='text-black-300'>{date}</span> */}
          <span className='capitalize text-primary-500'>
            {category || 'category'}
          </span>
        </div>
        <Link
          href={link}
          className='mb-3 block truncate font-heading text-[1.3em] font-semibold'
        >
          {title}
        </Link>
        <p className='line-clamp-2 h-[49px] text-sm text-black-400'>
          {description}
        </p>
        <Link
          href={link}
          className='mt-3 block font-heading text-sm font-semibold text-primary-500'
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export function RelatedBlogClip({
  title,
  link,
  coverImage,
}: {
  title: string;
  link: string;
  coverImage?: string;
}) {
  return (
    <div className='text-center'>
      <div
        className={clsx(`rounded-primary block h-[250px] w-full bg-center`)}
        style={{
          backgroundSize: `cover`,
          background: `url(${coverImage}) no-repeat `,
        }}
      />
      <a
        href={link}
        className='mt-2 block text-[0.9em] italic text-black-300 transition-colors duration-300 hover:text-primary-500'
      >
        {title}
      </a>
    </div>
  );
}
