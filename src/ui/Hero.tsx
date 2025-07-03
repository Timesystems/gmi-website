'use client';
import clsx from 'clsx';
import React, { useState } from 'react';
import Slide1 from '@/assets/images/slide-1.png';
import Slide2 from '@/assets/images/slide-2.png';
import Slide3 from '@/assets/images/slide-3.png';
import Slide4 from '@/assets/images/slide-4.png';
import Slide5 from '@/assets/images/slide-5.png';
import Link from 'next/link';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import Image from 'next/image';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animation, setAnimation] = useState('fade-in');

  const slides = [
    {
      id: 1,
      title:
        'We influence sexual and gender-based violence policies at all levels and transform social norms that sustain sexual and gender-based violence through a co-creation process that fosters local ownership.',
      // des: (
      //   <span>
      //     We are committed to fostering a gender-equitable society devoid <br />{' '}
      //     of all forms of sexual and gender-based violence.
      //   </span>
      // ),
      buttonText: 'Learn More',
      imgUrl: Slide1,
      style: ``,
      link: `/about`,
    },
    {
      id: 2,
      title: "Experienced Violence? Don't Keep Silent.",
      des: (
        <span>
          Your voice matters. If {`you've`} experienced violence, speaking up is
          the first <br /> step towards healing and justice. Our compassionate
          team is here to listen, <br /> support, and guide you through this
          challenging time.
        </span>
      ),
      buttonText: 'Donate Now',
      imgUrl: Slide2,
      style: `lg:relative lg:right-[-110px]`,
      link: `/make-donation`,
    },
    {
      id: 3,
      title: 'Empowering Change',
      des: (
        <span>
          Let us build a society devoid of all forms of Sexual and <br />{' '}
          Gender-based Violence.
        </span>
      ),
      buttonText: 'Learn More',
      imgUrl: Slide3,
      style: ``,
      link: `/about`,
    },
    {
      id: 4,
      title: 'Impact Lives',
      des: (
        <span>
          Your donation will contribute to building a gender-equitable society
          devoid of all forms of gender-based violence.
        </span>
      ),
      buttonText: 'Donate Now',
      imgUrl: Slide4,
      style: ``,
      link: `/make-donation`,
    },
    {
      id: 5,
      title: 'Become a Volunteer',
      des: (
        <span>
          What is missing is {`"U"`}.
          <br />
          We need you to create the society we envision.
        </span>
      ),
      buttonText: 'Sign Up Now',
      imgUrl: Slide5,
      style: ``,
      link: `/#volunteer`,
    },
  ];

  // const handleSlideChange = (direction) => {
  //   setAnimation('fade-out');
  //   setTimeout(() => {
  //     setActiveIndex((prevIndex) => {
  //       if (direction === 'next')
  //         return prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
  //       return prevIndex === 0 ? slides.length - 1 : prevIndex - 1;
  //     });
  //     setAnimation('fade-in');
  //   }, 500);
  // };

  return (
    <main className='overflow-hidden bg-white lg:px-4'>
      <div
        className='bg-prima ry-700 mx-auto flex min-h-[50vh] flex-wrap overflow-hidden rounded-bl-[40px] rounded-br-[40px] bg-cover bg-center px-4 py-4 pt-[40px] text-white lg:container md:px-20 lg:px-10 lg:pt-[80px]'
        // role='hero-overlay'
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/images/placeholder/header_1.jpg)',
        }}
      >
        {/* Left Side */}
        {/* <div className='lg:order-1 lg:h-[0%] lg:w-1/2'> */}
        <div className='lg:order-1 lg:h-[0%]'>
          <div className={`md:min-h-[407px] ${animation}`}>
            <h1 className='pb-4 text-[42px] font-semibold leading-[47px] lg:text-[68px] lg:leading-[75px]'>
              {slides?.[activeIndex]?.title}
            </h1>
            <p className='pb-10 text-[1.15rem] text-white'>
              {slides?.[activeIndex]?.des}
            </p>
            <div className='relative'>
              <Link
                href={`${slides?.[activeIndex]?.link}`}
                className='btn-white-outline absolute top-0 hidden md:inline-block'
              >
                {slides?.[activeIndex]?.buttonText}
              </Link>
            </div>
          </div>

          {/* Controls */}
          <div className='flex items-center justify-between pt-2 md:block md:pt-16'>
            <Link
              href={`${slides?.[activeIndex]?.link}`}
              className='btn-white-outline inline-block md:hidden'
            >
              {slides?.[activeIndex]?.buttonText}
            </Link>
            <div>
              <button
                className='mr-4 inline-block rounded-full border border-white px-2 py-2'
                // onClick={() => handleSlideChange('prev')}
              >
                <HiOutlineArrowLeft />
              </button>
              <button
                className='mr-2 inline-block rounded-full border border-white px-2 py-2'
                // onClick={() => handleSlideChange('next')}
              >
                <HiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        {/* <div
          className={`bottom-[20px] lg:relative lg:right-[50px] lg:top-[-20px] lg:order-2 lg:h-[550px] lg:w-1/2 ${animation}`}
        >
          <Image
            src={slides?.[activeIndex]?.imgUrl}
            alt='Perplexed Lady'
            className={clsx(
              `scale-110 lg:scale-110 ${slides?.[activeIndex]?.style}`
            )}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div> */}
      </div>
    </main>
  );
};

export default Hero;
