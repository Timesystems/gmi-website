'use client';
import CountUp from 'react-countup';

export default function GenderMobileStatisticCounterUp() {
  return (
    <section className='pb-20'>
      <div className='container mx-auto flex justify-center py-10 md:px-0 md:py-12 lg:py-16'>
        <div className='grid grid-cols-2 grid-rows-2 md:gap-4 justify-between text-center text-sm text-black-400 md:flex md:w-[90%] md:text-[1.1em] lg:w-[90%]'>
          <div className='border-b border-black-50 px-10 py-2 sm:px-20 md:border-0 md:p-0'>
            <h3 className='mb-2 text-[1.9em] font-semibold leading-[110%] text-black-500 md:text-[2.25em]'>
              <CountUp end={7} duration={3.5} enableScrollSpy suffix='+' />
            </h3>
            <span>Years</span>
          </div>
          <div className='border-b border-l border-black-50 px-10 py-2 sm:px-20 md:border-0 md:p-0'>
            <h3 className='mb-2 text-[1.9em] font-semibold leading-[110%] text-black-500 md:text-[2.25em]'>
              <CountUp
                end={20}
                start={5}
                enableScrollSpy
                duration={3}
                suffix='+'
              />
            </h3>
            <span>Projects</span>
          </div>
          <div className='border-b border-black-50 px-10 py-2 sm:px-20 md:border-0 md:p-0'>
            <h3 className='mb-2 text-[1.9em] font-semibold leading-[110%] text-black-500 md:text-[2.25em]'>
              <CountUp end={20} duration={3.5} enableScrollSpy suffix='+' />
            </h3>
            <span>Sub-Nationals</span>
          </div>
          <div className='border-b border-l border-black-50 px-10 py-2 sm:px-20 md:border-0 md:p-0'>
            <h3 className='mb-2 text-[1.9em] font-semibold leading-[110%] text-black-500 md:text-[2.25em]'>
              <CountUp end={100} duration={3.5} enableScrollSpy suffix='+' />
            </h3>
            <span>Communities</span>
          </div>
          <div className='px- py-2 sm:px-20 md:border-0 md:p-0'>
            <h3 className='mb-2 text-[1.9em] font-semibold leading-[110%] text-black-500 md:text-[2.25em]'>
              <CountUp
                end={150}
                start={2}
                duration={3}
                enableScrollSpy
                suffix='+'
              />
            </h3>
            <p>Educational Institutions</p>
          </div>

          <div className='border-l border-black-50 px-10 py-2 sm:px-20 md:border-0 md:p-0'>
            <h3 className='mb-2 text-[1.9em] font-semibold leading-[110%] text-black-500 md:text-[2.25em]'>
              <CountUp
                end={500000}
                start={1000}
                duration={3.5}
                enableScrollSpy
                suffix='+'
              />
            </h3>
            <p>People Reached</p>
          </div>
        </div>
      </div>
    </section>
  );
}
