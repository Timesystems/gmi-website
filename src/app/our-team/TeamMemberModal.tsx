import {
  Button,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { PiEnvelopeSimpleFill, PiLinkedinLogoFill } from 'react-icons/pi';

interface TeamMemberData {
  image?: string;
  name?: string;
  role?: string;
  bio?: string[];
  email?: string;
  linkedin?: string;
}

export default function TeamMemberModal({
  children,
  data,
  className,
}: {
  children: React.ReactNode;
  data: TeamMemberData;
  className?: string;
}) {
  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <div className='w-full'>
      <button onClick={open} className={`min-w-full ${className} `}>
        {children}
      </button>

      <Dialog
        open={isOpen}
        as='div'
        className='relative z-50 w-full focus:outline-none'
        onClose={close}
      >
        <DialogBackdrop className='fixed inset-0 z-40 bg-black-rgba_5' />
        <div className='fixed inset-0 z-50 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <DialogPanel
              transition
              className='data-closed:transform-[scale(95%)] data-closed:opacity-0 w-full max-w-[1280px] rounded-xl bg-white p-4 backdrop-blur-2xl duration-300 ease-out md:p-[3.75rem]'
            >
              <button
                className='absolute right-5 top-5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 md:right-10 md:top-5 md:h-10 md:w-10'
                onClick={() => close()}
              >
                <IoClose className='text-base md:text-[1.15rem]' />
              </button>

              <div className='flex w-full flex-col md:flex-row'>
                <div className='relative h-[350px] w-full overflow-hidden rounded-[1.25rem] md:h-[28.125rem] md:max-w-[22.5rem] lg:shrink-0'>
                  <Image
                    src={data?.image}
                    alt='Team Image'
                    layout='fill'
                    className='md:rounded-primary'
                    style={{ objectFit: `cover`, objectPosition: `center` }}
                  />
                </div>

                <div className=''>
                  <div className='md:rounded-primary flex flex-col justify-between px-1 py-6 md:min-h-[510px] md:px-8 md:py-8'>
                    <div>
                      <h3 className='text-2xl font-semibold text-black-500'>
                        {data?.name}
                      </h3>
                      <span className='text-[0.9em] text-black-400'>
                        {data?.role}
                      </span>
                      <div className='mt-4 text-sm text-black-500 md:text-base'>
                        {/* {data?.bio?.map((desc, index) => (
                          <p className='mb-6' key={index}>
                            {desc}
                          </p>
                        ))} */}
                        {/* <p className='mb-6'>{data?.bio}</p> */}
                      </div>
                    </div>

                    <div className='mt-4 inline-flex items-center justify-between md:mt-8'>
                      {/** Connect Icons */}
                      <div>
                        <a
                          href={`mailto:${data?.email}`}
                          className='mr-3 inline-block rounded-full border border-primary-500 px-3 py-3 text-xl text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
                        >
                          <PiEnvelopeSimpleFill />
                        </a>
                        {data?.linkedin ? (
                          <a
                            href={data?.linkedin}
                            className='mr-3 inline-block rounded-full border border-primary-500 px-3 py-3 text-xl text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
                          >
                            <PiLinkedinLogoFill />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
