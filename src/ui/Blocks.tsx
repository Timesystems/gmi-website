import Link from 'next/link';
import { Container } from '@/ui//Layouts';
import { HeadingTitle } from '@/ui/Elements';
import clsx from 'clsx';

export function AboutUs({
  buttonText,
  buttonLink,
  bgImage,
}: {
  buttonText: string;
  buttonLink: string;
  bgImage?: string;
}) {
  return (
    <div className='grid-cols-1 grid-rows-2 text-black-400 md:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-20 lg:px-10'>
      <div className='px-4 py-4 lg:py-8'>
        <HeadingTitle className='before:content-["About_Us"]'>
          Our Story of Empowerment and Innovation
        </HeadingTitle>
        <p className='py-4'>
          Gender Mobile Initiative was established in October 2017 to complement
          the program and policy efforts of government in advancing
          intersectional gender quality and eliminating all forms of sexual and
          gender-based violence which undermines women&apos;s potential, agency,
          and freedom. 
        </p>
        <p className='py-4'>
          We adopt systems change approach to our programmatic and policy
          interventions to transform systems, culture and practices through
          legal reform advocacy, policy influencing, research, public awareness,
          preventative education, legal empowerment and technology adoption.
        </p>
        <div className='pb-2 pt-4'>
          <Link href={buttonLink} className='btn-primary'>
            {buttonText}
          </Link>
        </div>
      </div>

      <div className='text-center lg:inline-flex lg:items-center'>
        <div
          className={`before-bg-addon after-bg-addon rounded-primary relative mx-auto h-[340px] w-[90%] bg-cover bg-no-repeat before:right-[-30px] before:top-[-30px] before:bg-[url("/images/tiny/solid-style.png")] after:bottom-[-30px] after:left-[-30px] after:bg-[url("/images/tiny/dotted-style.png")] lg:h-[75%] lg:w-[75%] ${bgImage || `bg-[url("/images/bg/hero.JPG")]`} `}
        />
      </div>
    </div>
  );
}

export function PageIntro({
  title,
  subtitle,
  boxWidth,
}: {
  title: string;
  subtitle?: string;
  boxWidth?: string;
}) {
  return (
    <Container className='rounded-primary mx-auto w-[96%] bg-primary-700 px-[20px] py-[20px] text-white md:w-full md:px-[40px] md:py-[40px] lg:px-[60px] lg:py-[60px]'>
      <h1
        className={clsx(
          `text-2xl font-semibold md:text-[2.8rem] md:leading-[3rem]`,
          {
            'mb-4 md:mb-8': !!subtitle,
            'md:w-[70%] lg:w-[55%]': !subtitle,
          },
          boxWidth
        )}
      >
        {title}
      </h1>
      {subtitle ? (
        <p className='w-[90%] text-base md:w-2/3 md:text-[1.15em] lg:w-[60%]'>
          {subtitle}
        </p>
      ) : null}
    </Container>
  );
}
