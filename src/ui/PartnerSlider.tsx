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
    slidesToShow: 7,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    swipeToSlide: true,
    useTransform: false,
    slidesToScroll: 1,
    variableWidth: true,
    cssEase: 'linear',
  };

  return (
    <div>
      <Slider {...settings}>
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
