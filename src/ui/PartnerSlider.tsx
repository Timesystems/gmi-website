'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import { partners } from '@/data/site-data';

export default function PartnerSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    accessibility: false,
    slidesToShow: 3,
    arrows: false,
    rows: 1, // Ensure this is set to 1
    autoplay: true,
    autoplaySpeed: 1000,
    swipeToSlide: true,
    useTransform: false,
    slidesToScroll: 2,
    variableWidth: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} className='h-[80px]'>
        {partners.map(({ name, image, width, height }) => {
          return (
            <div
              style={{ width: '150px' }}
              key={name}
              className='grayscale hover:grayscale-0'
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
      </Slider>
    </div>
  );
}
