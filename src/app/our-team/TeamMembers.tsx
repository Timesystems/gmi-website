'use client';
// import { useRef, useState, useEffect } from 'react';
// import Slider from 'react-slick';
// import { TeamMemberBio, TeamMemberImage } from '@/ui/Elements';
import { teams } from '@/data/site-data';
import Image from 'next/image';
import { PiEnvelopeSimpleFill } from 'react-icons/pi';
import { IoLogoLinkedin } from 'react-icons/io5';
import TeamMemberModal from './TeamMemberModal';

export default function TeamMembers() {
  return (
    <div className='grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3'>
      {teams?.map((item) => {
        return (
          <div
            className='w-full rounded-[1.25rem] bg-green-50 p-3 sm:p-3 md:p-5'
            key={item?.email}
          >
            <TeamMemberModal data={item}>
              <>
                <div className='relative h-[28.125rem] w-full overflow-hidden rounded-[1.25rem]'>
                  <Image
                    src={item?.image}
                    alt='Team Image'
                    layout='fill'
                    className='md:rounded-primary'
                    style={{ objectFit: `cover`, objectPosition: `center` }}
                  />
                </div>
                <div className='mt-5 flex items-center justify-between'>
                  <div className='text-left'>
                    <h3 className='text-md font-bold text-green-500 md:text-xl'>
                      {item?.name}
                    </h3>
                    <p className='text-black-400'>{item?.role}</p>
                  </div>

                  <div className='flex shrink-0 gap-3'>
                    <a
                      href={item?.linkedin}
                      className='flex h-10 w-10 items-center justify-center rounded-full border border-primary-500 text-xl text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
                    >
                      <IoLogoLinkedin />
                    </a>
                    <a
                      href={`mailto:${item?.email}`}
                      className='flex h-10 w-10 items-center justify-center rounded-full border border-primary-500 text-xl text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
                    >
                      <PiEnvelopeSimpleFill />
                    </a>
                  </div>
                </div>
              </>
            </TeamMemberModal>
          </div>
        );
      })}
    </div>
  );
}
