'use client';
import CountUp from 'react-countup';

export default function GenderMobileStatisticCounterUp() {
  const counterData = [
    {
      id: 1,
      title:
        'Years - Driving systems change and shifting culture for a future free from SGBV.',
      counterNo: 7,
    },
    {
      id: 2,
      title:
        'Projects - Bold interventions influencing policies, challenging power, and safeguarding dignity',
      counterNo: 20,
    },
    {
      id: 3,
      title:
        'Sub-Nationals - Collaborating across states to embed justice in governance and service delivery',
      counterNo: 20,
    },
    {
      id: 4,
      title:
        'Communities - Rewriting the social scripts that enable silence, stigma, and sexual violence',
      counterNo: 100,
    },
    {
      id: 5,
      title:
        'Educational Institutions - Partnering to dismantle and prevent sexual harassment on campuses.',
      counterNo: 150,
    },
    {
      id: 6,
      title:
        'People Reached - Mobilized for intersectional gender justice and the collective end of SGBV',
      counterNo: 500000,
    },
  ];
  return (
    <section className='overflow-hidden bg-primary-700 md:rounded-[1.25rem]'>
      <div className='container mx-auto flex justify-center md:px-0'>
        <div className='flex w-full flex-col justify-between px-3 text-sm text-black-400 md:flex md:w-[90%] md:text-[1.1em] lg:w-[90%]'>
          {counterData?.map(({ id, counterNo, title }) => (
            <div
              className='border-b-green-5 gap- flex max-h-[190px] items-end gap-5 border-b py-10 last:border-none'
              key={id}
            >
              <h3 className='mb max-h-[110px] w-full text-[2.9em] font-semibold leading-[110%] text-white md:text-[100px]'>
                <CountUp
                  end={counterNo}
                  duration={3.5}
                  enableScrollSpy
                  suffix='+'
                />
              </h3>
              <p className='md:text-md w-full font-semibold text-green-50'>
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
