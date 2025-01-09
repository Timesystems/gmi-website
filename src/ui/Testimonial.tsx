'use client';
import Slider from 'react-slick';
import { useRef } from 'react';
import { testimonials } from '@/data/site-data';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';

export function TestimonialHeading({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className='mb-8 text-center md:mb-12 lg:mb-16'>
      <h2 className='mb-2 text-[1.6em] font-semibold leading-[120%] text-black-500 before:relative before:bottom-[-5px] before:block before:font-body before:text-[16px] before:uppercase before:text-primary-500 before:content-["Testimonials"] md:mb-4 md:text-[2.25em]'>
        {title || `What People Say About Us`}
      </h2>
      <span className='text-black-400'>
        {subtitle ||
          `Here are few of what our communities of interest say about us`}
      </span>
    </div>
  );
}

export default function TestimonialSlider() {
  let sliderRef = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    accessibility: false,
    slidesToShow: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 800,
    swipeToSlide: true,
    useTransform: false,
    slidesToScroll: 1,
    // variableWidth: true,
    cssEase: 'linear',
  };

  const nextSlide = () => sliderRef.slickNext();
  const prevSlide = () => sliderRef.slickPrev();

  return (
    <div>
      <Slider {...settings} ref={(slider: any) => (sliderRef = slider)}>
        {testimonials.map(({ text, name, title }, index) => {
          return (
            <div key={`${name}-${index}`}>
              <div className='flex justify-center'>
                <div className='md:rounded-primary bg-primary-500 px-8 py-8 text-center text-white lg:w-[70%] lg:px-16 lg:py-16'>
                  <p className='text-green-50 before:mx-auto before:mb-4 before:flex before:h-[25px] before:w-[35px] before:bg-[url("/images/tiny/quote.svg")] before:text-center'>
                    {text}
                  </p>
                  <h6 className='mb-0 mt-5 pb-0 text-[0.9em] font-semibold'>
                    {name}
                  </h6>
                  <span className='relative top-[-5px] inline-block text-[0.8em]'>
                    {title}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      {/** Slider navigation */}
      <div className='mt-6 text-center md:mt-10'>
        <button
          className='mr-4 inline-block rounded-full border border-primary-500 px-2 py-2 text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
          onClick={prevSlide}
        >
          <HiOutlineArrowLeft />
        </button>
        <button
          className='mr-2 inline-block rounded-full border border-primary-500 px-2 py-2 text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
          onClick={nextSlide}
        >
          <HiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}
