'use client';
import React, { useState, useEffect } from 'react';
import HomePageImage from '@/assets/images/lady-on-homepage.png';
import Link from 'next/link';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import Image from 'next/image';

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animation, setAnimation] = useState('fade-in');

    const text = [
        {
            id: 1,
            title: 'We respond urgently to any form of Sexual and Gender-Based violence',
            des: (
                <span>
                    We are committed to fostering a gender-equitable society devoid <br />{' '}
                    of all forms of sexual and gender-based violence.
                </span>
            ),
            buttonText: 'Learn More',
            imgUrl: HomePageImage,
            btnFunc: () => { },
        },
        {
            id: 2,
            title: "Experienced Violence? Don't Keep Silent.",
            des: <span>Your voice matters. If {`you've`} experienced violence, speaking up is the first <br /> step towards healing and justice. Our compassionate team is here to listen, <br /> support, and guide you through this challenging time.</span>,
            buttonText: 'Donate Now',
            imgUrl: "",
            btnFunc: () => { },
        },
        {
            id: 3,
            title: 'Empowering Change',
            des: <span>Let us build a society devoid of all forms of Sexual and <br /> Gender-based Violence.</span>,
            buttonText: 'Learn More',
            imgUrl: "",
            btnFunc: () => { },
        }, {
            id: 4,
            title: 'Impact Lives',
            des: <span>Your donation will contribute to building a gender-equitable society devoid of all forms of gender-based violence.</span>,
            buttonText: 'Donate Now',
            imgUrl: "",
            btnFunc: () => { },
        }, {
            id: 5,
            title: 'Become a Volunteer',
            des: <span>
                What is missing is {`"U"`}.
                <br />
                We need you to create the society we envision.

            </span>,
            buttonText: 'Sign Up Now',
            imgUrl: "",
            btnFunc: () => { },
        },
    ];

    const handleSlideChange = (direction) => {
        setAnimation('fade-out');
        setTimeout(() => {
            setActiveIndex((prevIndex) => {
                if (direction === 'next') return prevIndex === text.length - 1 ? 0 : prevIndex + 1;
                return prevIndex === 0 ? text.length - 1 : prevIndex - 1;
            });
            setAnimation('fade-in');
        }, 500);
    };

    return (
        <main className="overflow-hidden bg-white lg:px-4">
            <div
                className="mx-auto flex flex-wrap overflow-hidden rounded-bl-[40px] rounded-br-[40px] bg-primary-700 py-4 pt-[40px] text-white lg:container px-4 md:px-20 lg:px-10 l:pt-[200px]"
                role="hero-overlay"
            >
                {/* Left Side */}
                <div className="lg:order-1 lg:h-[0%] lg:w-1/2">
                    <div className={`md:min-h-[407px] ${animation}`}>
                        <h1 className="pb-4 text-[42px] font-semibold leading-[47px] lg:text-[68px] lg:leading-[75px]">
                            {text?.[activeIndex]?.title}
                        </h1>
                        <p className="pb-10 text-[1.15rem] text-white">{text?.[activeIndex]?.des}</p>
                        <div className="relative">
                            <Link
                                href="/about"
                                className="absolute top-0 btn-white-outline hidden md:inline-block"
                            >
                                {text?.[activeIndex]?.buttonText}
                            </Link>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between pt-2 md:block md:pt-16">
                        <Link href="/about" className="btn-white-outline inline-block md:hidden">
                            {text?.[activeIndex]?.buttonText}
                        </Link>
                        <div>
                            <button
                                className="mr-4 inline-block rounded-full border border-white px-2 py-2"
                                onClick={() => handleSlideChange('prev')}
                            >
                                <HiOutlineArrowLeft />
                            </button>
                            <button
                                className="mr-2 inline-block rounded-full border border-white px-2 py-2"
                                onClick={() => handleSlideChange('next')}
                            >
                                <HiOutlineArrowRight />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className={`bottom-[20px] lg:relative lg:right-[50px] lg:top-[-20px] lg:order-2 lg:h-[550px] lg:w-1/2 ${animation}`}>
                    <Image
                        src={HomePageImage}
                        alt="Perplexed Lady"
                        className="scale-110 lg:scale-110"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                </div>
            </div>
        </main>
    );
};

export default Hero;
