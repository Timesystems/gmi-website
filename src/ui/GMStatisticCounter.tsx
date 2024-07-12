'use client';
import CountUp from 'react-countup';

export default function GenderMobileStatisticCounterUp() {
  return (
    <section className='pb-20'>
      <div className='container mx-auto flex justify-center px-20 py-10 md:px-0 md:py-12 lg:py-16'>
        <div className='flex justify-between text-center text-[1.1em] text-black-400 md:w-[80%] lg:w-[60%]'>
          <div>
            <h3 className='mb-2 text-[2.25em] font-semibold leading-[110%] text-black-500'>
              <CountUp end={6} duration={3.5} enableScrollSpy suffix='+' />
            </h3>
            <span>Years</span>
          </div>
          <div>
            <h3 className='mb-2 text-[2.25em] font-semibold leading-[110%] text-black-500'>
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
          <div>
            <h3 className='mb-2 text-[2.25em] font-semibold leading-[110%] text-black-500'>
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
          <div>
            <h3 className='mb-2 text-[2.25em] font-semibold leading-[110%] text-black-500'>
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
