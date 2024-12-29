'use client';
import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { TeamMemberBio, TeamMemberImage } from '@/ui/Elements';
import { teams } from '@/data/site-data';

export default function TeamMembers() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    accessibility: false,
    slidesToShow: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 1000,
    swipeToSlide: true,
    useTransform: false,
    slidesToScroll: 1,
    // variableWidth: true,
    cssEase: 'linear',
  };

  let [nav, setNav] = useState(null);

  let sliderImageRef = useRef<any>(null);
  let sliderContentRef = useRef<any>(null);

  useEffect(() => {
    setNav(sliderImageRef);
  }, []);

  const nextSlide = () => sliderContentRef.slickNext();
  const prevSlide = () => sliderContentRef.slickPrev();

  return (
    <div className='justify-between md:flex'>
      <div className='md:w-[45%] lg:w-[40%]'>
        <Slider
          {...settings}
          ref={(slider: any) => (sliderImageRef = slider)}
          className='rounded-primary h-full'
        >
          {teams.map(({ image, name }) => (
            <div key={`image-${name}`} className='rounded-primary h-[510px]'>
              <TeamMemberImage src={image} alt={name} />
            </div>
          ))}
        </Slider>
      </div>
      <div className='md:w-[50%] lg:w-[58%]'>
        <div>
          <Slider
            asNavFor={nav}
            {...settings}
            ref={(slider: any) => (sliderContentRef = slider)}
            className='rounded-primary h-full'
          >
            {teams.map(({ name, role, email, linkedin, bio }) => (
              <div key={`bio-${name}`}>
                <TeamMemberBio
                  name={name}
                  role={role}
                  email={email}
                  linkedin={linkedin}
                  biography={bio}
                  prevClick={prevSlide}
                  nextClick={nextSlide}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
