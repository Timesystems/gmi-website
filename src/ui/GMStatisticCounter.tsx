'use client';
import CountUp from 'react-countup';

export default function GenderMobileStatisticCounterUp() {
  return (
    <section className='pb-20'>
      <div className='container mx-auto flex justify-center py-10 md:px-0 md:py-12 lg:py-16'>
        <div className='grid grid-cols-2 grid-rows-2 justify-between text-center text-sm text-black-400 md:flex md:w-[80%] md:text-[1.1em] lg:w-[60%]'>
          <div className='border-b border-black-50 px-20 py-2 md:border-0 md:p-0'>
            <h3 className='mb-2 text-[1.9em] font-semibold leading-[110%] text-black-500 md:text-[2.25em]'>
              <CountUp end={6} duration={3.5} enableScrollSpy suffix='+' />
            </h3>
            <span>Years</span>
          </div>
          <div className='border-b border-l border-black-50 px-20 py-2 md:border-0 md:p-0'>
            <h3 className='mb-2 text-[1.9em] font-semibold leading-[110%] text-black-500 md:text-[2.25em]'>
              <CountUp
                end={30}
                start={5}
                enableScrollSpy
                duration={3}
                suffix='+'
              />
            </h3>
            <span>Projects</span>
          </div>
          <div className='px-20 py-2 md:border-0 md:p-0'>
            <h3 className='mb-2 text-[1.9em] font-semibold leading-[110%] text-black-500 md:text-[2.25em]'>
              <CountUp
                end={100}
                start={2}
                duration={3}
                enableScrollSpy
                suffix='+'
              />
            </h3>
            <span>Higher Institutions</span>
          </div>
          <div className='border-l border-black-50 px-20 py-2 md:border-0 md:p-0'>
            <h3 className='mb-2 text-[1.9em] font-semibold leading-[110%] text-black-500 md:text-[2.25em]'>
              <CountUp
                end={50000}
                start={1000}
                duration={3.5}
                enableScrollSpy
                suffix='+'
              />
            </h3>
            <span>People Reached</span>
          </div>
        </div>
      </div>
    </section>
  );
}
