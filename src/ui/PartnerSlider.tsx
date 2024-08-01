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
    autoplay: true,
    autoplaySpeed: 1000,
    swipeToSlide: true,
    useTransform: false,
    slidesToScroll: 1,
    variableWidth: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} className='h-[80px]'>
        {partners.map(({ name, image, width, height }) => {
          return (
            <div style={{ width: 150 }} key={name}>
              <Image
                src={image}
                alt={name}
                width={width}
                height={height}
                quality={100}
                className='mr-4 inline-block'
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
