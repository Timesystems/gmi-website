'use client';
import Slider from 'react-slick';
import { useRef } from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';

export function TestimonialHeading({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className='mb-12 text-center lg:mb-16'>
      <h2 className='mb-4 text-[2.25em] font-semibold leading-[120%] text-black-500 before:relative before:bottom-[-5px] before:block before:font-body before:text-[16px] before:uppercase before:text-primary-500 before:content-["Testimonials"]'>
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
        {/** slide 1 */}
        <div>
          <div className='flex justify-center'>
            <div className='rounded-[20px] bg-primary-500 px-8 py-8 text-center text-white lg:w-[70%] lg:px-16 lg:py-16'>
              <p className='text-green-50 before:mx-auto before:mb-4 before:flex before:h-[25px] before:w-[35px] before:bg-[url("/images/tiny/quote.svg")] before:text-center'>
                Gender Mobile has been an incredible partner in the work of
                gender justice, especially for students in tertiary
                institutions. It has been a great experience working with them,
                the passion of their team is inspiring to us all. It&apos;s no
                wonder they have made such an impact in 4 years! We celebrate
                this milestone with them and we wish them more success in the
                coming years! Congratulations!
              </p>
              <h6 className='mb-0 mt-5 pb-0 text-[0.9em] font-semibold'>
                Toyin Chukwudozie
              </h6>
              <span className='relative top-[-5px] inline-block text-[0.8em]'>
                Executive Director Education as W Vaccine
              </span>
            </div>
          </div>
        </div>
        {/** slide 2 */}
        <div>
          <div className='flex justify-center'>
            <div className='rounded-[20px] bg-primary-500 px-8 py-8 text-center text-white lg:w-[70%] lg:px-16 lg:py-16'>
              <p className='text-green-50 before:mx-auto before:mb-4 before:flex before:h-[25px] before:w-[35px] before:bg-[url("/images/tiny/quote.svg")] before:text-center'>
                Gender Mobile has been an incredible partner in the work of
                gender justice, especially for students in tertiary
                institutions. It has been a great experience working with them,
                the passion of their team is inspiring to us all. It&apos;s no
                wonder they have made such an impact in 4 years! We celebrate
                this milestone with them and we wish them more success in the
                coming years! Congratulations!
              </p>
              <h6 className='mb-0 mt-5 pb-0 text-[0.9em] font-semibold'>
                Lydia Oluwadara
              </h6>
              <span className='relative top-[-5px] inline-block text-[0.8em]'>
                Executive Director Education as W Vaccine
              </span>
            </div>
          </div>
        </div>
        {/** slide 3 */}
        <div>
          <div className='flex justify-center'>
            <div className='rounded-[20px] bg-primary-500 px-8 py-8 text-center text-white lg:w-[70%] lg:px-16 lg:py-16'>
              <p className='text-green-50 before:mx-auto before:mb-4 before:flex before:h-[25px] before:w-[35px] before:bg-[url("/images/tiny/quote.svg")] before:text-center'>
                Gender Mobile has been an incredible partner in the work of
                gender justice, especially for students in tertiary
                institutions. It has been a great experience working with them,
                the passion of their team is inspiring to us all. It&apos;s no
                wonder they have made such an impact in 4 years! We celebrate
                this milestone with them and we wish them more success in the
                coming years! Congratulations!
              </p>
              <h6 className='mb-0 mt-5 pb-0 text-[0.9em] font-semibold'>
                Oluwatosin Rachael
              </h6>
              <span className='relative top-[-5px] inline-block text-[0.8em]'>
                Executive Director Education as W Vaccine
              </span>
            </div>
          </div>
        </div>
        {/** slide 4 */}
        <div>
          <div className='flex justify-center'>
            <div className='rounded-[20px] bg-primary-500 px-8 py-8 text-center text-white lg:w-[70%] lg:px-16 lg:py-16'>
              <p className='text-green-50 before:mx-auto before:mb-4 before:flex before:h-[25px] before:w-[35px] before:bg-[url("/images/tiny/quote.svg")] before:text-center'>
                Gender Mobile has been an incredible partner in the work of
                gender justice, especially for students in tertiary
                institutions. It has been a great experience working with them,
                the passion of their team is inspiring to us all. It&apos;s no
                wonder they have made such an impact in 4 years! We celebrate
                this milestone with them and we wish them more success in the
                coming years! Congratulations!
              </p>
              <h6 className='mb-0 mt-5 pb-0 text-[0.9em] font-semibold'>
                Aderonke Christianah
              </h6>
              <span className='relative top-[-5px] inline-block text-[0.8em]'>
                Executive Director Education as W Vaccine
              </span>
            </div>
          </div>
        </div>
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
