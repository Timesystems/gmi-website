import React from 'react';
import { VolunteersBanner } from './Volunteer';
import { HeadingTitle } from './Elements';
import { VolunterModal } from './Modal';

export const GetInvolve = () => {
  return (
    <div>
      <section className='pb-20'>
        <div className='container mx-auto'>
          <div className='block md:flex md:items-center'>
            <div className='relative justify-end md:inline-flex lg:w-1/2'>
              <div className='before-bg-addon relative mx-auto h-[75%] min-h-[400px] w-[90%] rounded-3xl bg-[url("/images/bg/joyful-students.png")] before:left-[-30px] before:top-[-30px] before:bg-[url("/images/tiny/dotted-style.png")] md:w-[75%]'>
                <VolunteersBanner />
              </div>
            </div>

            <div
              className='mt-10 px-8 py-8 md:mt-0 md:px-24 md:py-24 lg:w-1/2'
              id='volunteer'
            >
              <HeadingTitle className='before:content-["Volunteer"]'>
                You too can Get Involved
              </HeadingTitle>
              <p className='py-4'>
                Are you interested in fostering a gender-equitable society
                devoid of all forms of sexual and gender-based violence?
              </p>
              <div className='py-4'>
                <VolunterModal />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
