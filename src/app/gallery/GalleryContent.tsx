'use client';

import { Fragment } from 'react';
import { Container, SpacedSection } from '@/ui/Layouts';
import clsx from 'clsx';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import Image from 'next/image';
import { ResourceClip } from '@/ui/Elements';

export default function GalleryContent() {
  const youtubeList = [
    {
      title: `Solving SGBV in environments of learning`,
      link: `https://www.youtube.com/watch?v=JF5kc-0U834`,
      image: `/images/bg/ocean-side-cleaning.jpg`,
    },
    {
      title: `Gender Mobile Annual Retreat 2023`,
      link: `https://youtu.be/tmEHBNxp2h0?si=epS6emOV3zkaYE-w`,
      image: `/images/bg/get-involved.jpg`,
    },
    {
      title: `Gender Mobile Team In Action Video Footage`,
      link: `https://youtu.be/6sCu_7usLQE?si=34nBimefhN7nhmpW`,
      image: `/images/bg/ocean-side-cleaning.jpg`,
    },
    {
      title: `Explore the CampusPal App`,
      link: `https://youtu.be/YO5_3b7LGik?si=H_ZpZdZDHZIftAGJ`,
      image: `/images/students-1.png`,
    },
    {
      title: `Amplifying Female Student's Voices`,
      link: `https://youtu.be/XcUbNrcqWCk?si=SuDCZ9SBqB9q9M9w`,
      image: `/images/bg/ocean-side-cleaning.jpg`,
    },
    {
      title: `Adolescent Wellness Hub`,
      link: `https://youtu.be/DkXHYrTlaYc?si=tzdft7fHCGM1Uuww`,
      image: `/images/bg/get-involved.jpg`,
    },
  ];

  return (
    <SpacedSection bottom top>
      <Container>
        <TabGroup>
          <TabList className='no-scrollbar mb-8 flex justify-center gap-x-5 overflow-x-scroll text-center md:mb-14'>
            <Tab as={Fragment}>
              {({ hover, selected }) => (
                <button
                  className={clsx(
                    'rounded-full border border-black-100 px-4 py-1 font-heading text-[0.9rem] text-black-500 transition-colors duration-300',
                    {
                      'border-primary-500 bg-primary-500 text-white transition-colors duration-300':
                        hover || selected,
                    }
                  )}
                >
                  Images
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ hover, selected }) => (
                <button
                  className={clsx(
                    'rounded-full border border-black-100 px-4 py-1 font-heading text-[0.9rem] text-black-500 transition-colors duration-300',
                    {
                      'border-primary-500 bg-primary-500 text-white transition-colors duration-300':
                        hover || selected,
                    }
                  )}
                >
                  Videos
                </button>
              )}
            </Tab>
          </TabList>
          <TabPanels className='md:px-20'>
            <TabPanel>
              <div className='grid auto-rows-max grid-cols-2 gap-0 md:grid-cols-3 md:gap-8'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                  <div
                    key={i}
                    className='group relative h-[250px] w-[250px] grayscale hover:grayscale-0 md:h-[430px] md:w-[430px] md:rounded-primary'
                  >
                    <Image
                      src='/images/bg/ocean-side-cleaning.jpg'
                      alt='Gallery Image'
                      fill
                      className='md:rounded-primary'
                      style={{ objectFit: `cover`, objectPosition: `center` }}
                    />
                    <div className='relative z-10 hidden h-[100%] w-[100%] flex-col justify-end transition-all duration-300 group-hover:flex'>
                      <span className='relative bottom-0 z-10 h-[auto] rounded-b-primary bg-black-400 py-3 text-center text-sm text-white opacity-80'>
                        People cleaning Ocean on outreach day
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='grid auto-rows-max grid-cols-1 gap-4 px-6 md:grid-cols-3 md:gap-8 md:px-0'>
                {youtubeList.map(({ title, link, image }, i) => (
                  <div
                    key={`video-${i}`}
                    className='relative h-[300px] w-full md:h-[430px] md:w-[430px]'
                  >
                    <ResourceClip
                      title={title}
                      link={link}
                      linkText='Watch on YouTube'
                      image={image}
                      youtube
                    />
                  </div>
                ))}
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Container>
    </SpacedSection>
  );
}
