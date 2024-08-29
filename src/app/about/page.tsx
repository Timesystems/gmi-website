import Header from '@/ui/Header';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Container, SpacedSection } from '@/ui/Layouts';
import { AboutUs, PageIntro } from '@/ui/Blocks';
import { HeadingTitle } from '@/ui/Elements';
import { BsBullseye, BsRocketTakeoff } from 'react-icons/bs';
import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import TestimonialSlider, { TestimonialHeading } from '@/ui/Testimonial';
import { PiTargetFill } from 'react-icons/pi';
import Faq from '@/ui/Faq';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: `About Us`,
  description: `Learn about Gender Mobile Initiative's mission, vision, and values in advancing intersectional gender equality and eliminating sexual and gender-based violence through systems change approach.`,
  keywords: [
    `gender equality`,
    `gender-based violence`,
    `intersectional gender equality`,
    `systems change`,
    `legal reform`,
    `policy advocacy`,
    `research`,
    `education`,
    `empowerment`,
  ],
};

export default function AboutUsPage() {
  const coreValues = [
    'Integrity',
    'Diversity',
    'Equity',
    'Inclusion',
    'Collaboration',
    'Equality',
    'Accountability',
    'Respect',
    'Fairness ',
    'Teamwork',
    'Shared Power/Leadership',
  ];

  const strategiesList = [
    {
      label: `Legal Reform and Policy Advocacy`,
      icon: <BsBullseye />,
    },
    { label: `Research`, icon: <BsBullseye /> },
    { label: `Technology Adoption`, icon: <BsBullseye /> },
    { label: `Service Delivery and Support`, icon: <BsBullseye /> },
    { label: `Capacity Building and Strengthening`, icon: <BsBullseye /> },
    { label: `Preventative Education`, icon: <BsBullseye /> },
    { label: `Legal Empowerment`, icon: <BsBullseye /> },
    { label: `Economic Empowerment`, icon: <BsBullseye /> },
  ];
  return (
    <>
      <Header />
      <PageIntro
        title='About Us'
        subtitle='Everything you need to know about Gender Mobile Initiative.'
      />

      <SpacedSection bottom>
        <Container>
          <AboutUs buttonText='Meet Our Team' buttonLink='/our-team' />
        </Container>
      </SpacedSection>

      <SpacedSection bottom>
        <Container className=''>
          <div className='mx-auto w-full md:w-[90%] lg:w-2/3'>
            <div className='flex-col gap-y-10 md:flex md:gap-y-12'>
              {/** Row 1 */}
              <div className='col-span-2 grid-cols-2 grid-rows-1 px-4 py-5 md:grid md:px-0 md:py-8'>
                <h3 className='mb-3 mt-4 text-3xl font-semibold'>Our Focus</h3>
                <p>
                  The theme of our focus at Gender Mobile is protecting women
                  and girl-child against sexual and gender-based violence.
                </p>
              </div>
              {/** Row 2 */}
              <div className='auto-cols-auto auto-rows-auto grid-cols-3 grid-rows-1 gap-x-10 gap-y-20 md:grid'>
                <div className='rounded-primary shadow-primary col-span-2 mx-4 mb-6 px-5 py-5 ring-1 ring-gray-100 md:mx-0 md:mb-0 md:px-12 md:py-14'>
                  <span className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary-500 text-2xl text-white'>
                    <BsRocketTakeoff />
                  </span>
                  <h4 className='mb-3 mt-4 text-xl font-semibold'>
                    Our Mission
                  </h4>
                  <p>
                    Facilitating equitable systems and access to justice,
                    forging collaborative advocacy, driving education and
                    re-orientation for prevention and community ownership.
                  </p>
                </div>
                <div className='rounded-primary shadow-primary mx-4 mb-6 px-5 py-5 ring-1 ring-gray-100 md:mx-0 md:mb-0 md:px-12 md:py-14'>
                  <span className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary-500 text-2xl text-white'>
                    <PiTargetFill />
                  </span>
                  <h4 className='mb-3 mt-4 text-xl font-semibold'>
                    Our Vision
                  </h4>
                  <p>
                    A gender-equitable society devoid of all forms of
                    gender-based violence.
                  </p>
                </div>
              </div>
              {/** Row 3 */}
              <div className='md:rounded-primary md:shadow-primary px-5 py-5 ring-gray-100 md:px-12 md:py-14 md:ring-1'>
                <div className='gap-x-20 md:flex'>
                  <div>
                    <span className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary-500 text-2xl text-white'>
                      <BsBullseye />
                    </span>
                    <h4 className='mb-3 mt-4 text-xl font-semibold'>
                      Our Core Values
                    </h4>
                  </div>
                  <div className='grid grid-cols-3 grid-rows-4 gap-x-3 gap-y-3 md:w-[70%] md:grid-cols-4 md:grid-rows-3'>
                    {coreValues.map((value) => (
                      <div
                        key={value}
                        className={clsx(`flex items-center`, {
                          'col-span-2': value.length > 15,
                        })}
                      >
                        <BsBullseye className='text-primary-500' />
                        <span className='ml-2'>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SpacedSection>
      {/** SDG Goals */}
      <SpacedSection className='bg-primary-50' bottom>
        <Container>
          <div className='justify-center md:flex'>
            <div className='w-full gap-x-24 py-5 md:flex md:w-[90%] md:py-10 lg:w-[80%] lg:gap-x-[8em] lg:py-20'>
              <div className='text-center md:hidden'>
                <Image
                  src='/images/sdg-goals.png'
                  width={462}
                  height={480}
                  className='mx-auto'
                  alt='SDG Goals'
                />
              </div>
              <Image
                src='/images/sdg-goals.png'
                width={462}
                height={480}
                className='hidden md:inline-block'
                alt='SDG Goals'
              />
              <div className='mt-12 px-6 md:mt-0 md:px-0'>
                <HeadingTitle className='before:content-["FOCUS_AREA"]'>
                  SDG Under Focus
                </HeadingTitle>
                <ul className='sdg-list list-inside list-image-[url(/images/tiny/target.svg)] text-black-400'>
                  <li className='mb-2'>SDG 1 - No Poverty</li>
                  <li className='mb-2'>SDG 3 - Good Health and Well-being</li>
                  <li className='mb-2'>SDG 4 - Quality Education</li>
                  <li className='mb-2'>SDG 5 - Gender Equality</li>
                  <li className='mb-2'>SDG 10 - Reduced Inequalities</li>
                  <li className='mb-2'>
                    SDG 16 - Peace, Justice and Strong Institutions
                  </li>
                  <li className='mb-2'>SDG 17 - Partnership for the Goals</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </SpacedSection>

      {/** Strategy Section */}
      <SpacedSection bottom>
        <Container>
          <div className='flex justify-center'>
            <div className='w-full text-center md:w-[50%] lg:w-[40%]'>
              <HeadingTitle>Our Strategy</HeadingTitle>
              <span className='text-black-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
          </div>
          {/** Strategies List */}
          <div className='mb-4 mt-6 px-6 md:mb-8 md:mt-12 md:px-0'>
            <div className='grid grid-cols-2 grid-rows-4 gap-x-8 gap-y-8 md:grid-cols-4 md:grid-rows-2'>
              {strategiesList.map(({ label, icon }) => (
                <div
                  key={label}
                  className='rounded-primary shadow-primary group inline-flex flex-col items-center justify-center px-5 py-5 text-center ring-1 ring-gray-100 transition-colors duration-300 hover:bg-primary-500 group-hover:bg-primary-500 md:px-8 md:py-8'
                >
                  <span className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary-50 text-2xl text-primary-500'>
                    {icon}
                  </span>
                  <h6 className='mt-6 text-base transition-colors duration-300 group-hover:text-white md:text-lg'>
                    {label}
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SpacedSection>

      {/** Donation Banner */}
      <SpacedSection top bottom>
        <Container>
          <DonationBanner />
        </Container>
      </SpacedSection>

      {/** FAQ Section */}
      <SpacedSection className='bg-primary-50' bottom>
        <Container>
          <Faq />
        </Container>
      </SpacedSection>

      {/** Testimonial section */}
      <SpacedSection bottom>
        <Container>
          <TestimonialHeading />
          {/** Testimony comments -- Slider */}
          <TestimonialSlider />
        </Container>
      </SpacedSection>

      {/** Footer */}
      <Footer />
    </>
  );
}
