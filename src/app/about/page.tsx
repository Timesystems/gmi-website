import Header from '@/ui/Header';
import Image from 'next/image';
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

export default function AboutUsPage() {
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
            <div className='flex flex-col gap-y-10 md:gap-y-12'>
              {/** Row 1 */}
              <div className='col-span-2 grid grid-cols-2 grid-rows-1 py-5 md:py-8'>
                <h3 className='mb-3 mt-4 text-3xl font-semibold'>Our Focus</h3>
                <p>
                  The theme of our focus at Gender Mobile is protecting women
                  and girl-child against sexual and gender-based violence.
                </p>
              </div>
              {/** Row 2 */}
              <div className='grid auto-cols-auto auto-rows-auto grid-cols-3 grid-rows-1 gap-x-10 gap-y-20'>
                <div className='col-span-2 rounded-primary px-5 py-5 shadow-md ring-1 ring-gray-100 md:px-12 md:py-14'>
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
                <div className='rounded-primary px-5 py-5 shadow-md ring-1 ring-gray-100 md:px-12 md:py-14'>
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
              <div className='rounded-primary px-5 py-5 shadow-md ring-1 ring-gray-100 md:px-12 md:py-14'>
                <div className='grid grid-cols-5 grid-rows-1'>
                  <div>
                    <span className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary-500 text-2xl text-white'>
                      <BsBullseye />
                    </span>
                    <h4 className='mb-3 mt-4 text-xl font-semibold'>
                      Our Core Values
                    </h4>
                  </div>
                  <ul>
                    <li className='flex items-center pb-2'>
                      <BsBullseye className='text-primary-500' />
                      <span className='ml-2'>Integrity</span>
                    </li>
                    <li className='flex items-center pb-2'>
                      <BsBullseye className='text-primary-500' />
                      <span className='ml-2'>Collaboration</span>
                    </li>
                    <li className='flex items-center pb-2'>
                      <BsBullseye className='text-primary-500' />
                      <span className='ml-2'>Fairness</span>
                    </li>
                  </ul>
                  <ul>
                    <li className='flex items-center pb-2'>
                      <BsBullseye className='text-primary-500' />
                      <span className='ml-2'>Integrity</span>
                    </li>
                    <li className='flex items-center pb-2'>
                      <BsBullseye className='text-primary-500' />
                      <span className='ml-2'>Collaboration</span>
                    </li>
                    <li className='flex items-center pb-2'>
                      <BsBullseye className='text-primary-500' />
                      <span className='ml-2'>Fairness</span>
                    </li>
                  </ul>
                  <ul>
                    <li className='flex items-center pb-2'>
                      <BsBullseye className='text-primary-500' />
                      <span className='ml-2'>Integrity</span>
                    </li>
                    <li className='flex items-center pb-2'>
                      <BsBullseye className='text-primary-500' />
                      <span className='ml-2'>Collaboration</span>
                    </li>
                    <li className='flex items-center pb-2'>
                      <BsBullseye className='text-primary-500' />
                      <span className='ml-2'>Fairness</span>
                    </li>
                  </ul>
                  <ul>
                    <li className='flex items-center pb-2'>
                      <BsBullseye className='text-primary-500' />
                      <span className='ml-2'>Integrity</span>
                    </li>
                    <li className='flex items-center pb-2'>
                      <BsBullseye className='text-primary-500' />
                      <span className='ml-2'>Collaboration</span>
                    </li>
                    <li className='flex items-center pb-2'>
                      <BsBullseye className='text-primary-500' />
                      <span className='ml-2'>Respect</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SpacedSection>
      {/** SDG Goals */}
      <SpacedSection className='bg-primary-50' bottom>
        <Container>
          <div className='flex justify-center'>
            <div className='w-full gap-x-24 py-5 md:flex md:w-[90%] md:py-10 lg:w-[80%] lg:gap-x-[8em] lg:py-20'>
              <Image
                src='/images/sdg-goals.png'
                width={462}
                height={480}
                alt='SDG Goals'
              />
              <div>
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
          <div className='mb-4 mt-6 md:mb-8 md:mt-12'>
            <div className='grid grid-cols-4 grid-rows-2 gap-x-8 gap-y-8'>
              <div className='group inline-flex flex-col items-center justify-center rounded-primary px-5 py-5 text-center shadow-md ring-1 ring-gray-100 transition-colors duration-300 hover:bg-primary-500 group-hover:bg-primary-500 md:px-8 md:py-8'>
                <span className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary-50 text-2xl text-primary-500'>
                  <BsBullseye />
                </span>
                <h6 className='mt-6 text-lg transition-colors duration-300 group-hover:text-white'>
                  Legal Reform and Policy Advocacy
                </h6>
              </div>
              <div className='group inline-flex flex-col items-center justify-center rounded-primary px-5 py-5 text-center shadow-md ring-1 ring-gray-100 transition-colors duration-300 hover:bg-primary-500 group-hover:bg-primary-500 md:px-8 md:py-8'>
                <span className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary-50 text-2xl text-primary-500'>
                  <BsBullseye />
                </span>
                <h6 className='mt-6 text-lg transition-colors duration-300 group-hover:text-white'>
                  Legal Reform and Policy Advocacy
                </h6>
              </div>
              <div className='group inline-flex flex-col items-center justify-center rounded-primary px-5 py-5 text-center shadow-md ring-1 ring-gray-100 transition-colors duration-300 hover:bg-primary-500 group-hover:bg-primary-500 md:px-8 md:py-8'>
                <span className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary-50 text-2xl text-primary-500'>
                  <BsBullseye />
                </span>
                <h6 className='mt-6 text-lg transition-colors duration-300 group-hover:text-white'>
                  Legal Reform and Policy Advocacy
                </h6>
              </div>
              <div className='group inline-flex flex-col items-center justify-center rounded-primary px-5 py-5 text-center shadow-md ring-1 ring-gray-100 transition-colors duration-300 hover:bg-primary-500 group-hover:bg-primary-500 md:px-8 md:py-8'>
                <span className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary-50 text-2xl text-primary-500'>
                  <BsBullseye />
                </span>
                <h6 className='mt-6 text-lg transition-colors duration-300 group-hover:text-white'>
                  Legal Reform and Policy Advocacy
                </h6>
              </div>
              <div className='group inline-flex flex-col items-center justify-center rounded-primary px-5 py-5 text-center shadow-md ring-1 ring-gray-100 transition-colors duration-300 hover:bg-primary-500 group-hover:bg-primary-500 md:px-8 md:py-8'>
                <span className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary-50 text-2xl text-primary-500'>
                  <BsBullseye />
                </span>
                <h6 className='mt-6 text-lg transition-colors duration-300 group-hover:text-white'>
                  Legal Reform and Policy Advocacy
                </h6>
              </div>
              <div className='group inline-flex flex-col items-center justify-center rounded-primary px-5 py-5 text-center shadow-md ring-1 ring-gray-100 transition-colors duration-300 hover:bg-primary-500 group-hover:bg-primary-500 md:px-8 md:py-8'>
                <span className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary-50 text-2xl text-primary-500'>
                  <BsBullseye />
                </span>
                <h6 className='mt-6 text-lg transition-colors duration-300 group-hover:text-white'>
                  Legal Reform and Policy Advocacy
                </h6>
              </div>
              <div className='group inline-flex flex-col items-center justify-center rounded-primary px-5 py-5 text-center shadow-md ring-1 ring-gray-100 transition-colors duration-300 hover:bg-primary-500 group-hover:bg-primary-500 md:px-8 md:py-8'>
                <span className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary-50 text-2xl text-primary-500'>
                  <BsBullseye />
                </span>
                <h6 className='mt-6 text-lg transition-colors duration-300 group-hover:text-white'>
                  Legal Reform and Policy Advocacy
                </h6>
              </div>
              <div className='group inline-flex flex-col items-center justify-center rounded-primary px-5 py-5 text-center shadow-md ring-1 ring-gray-100 transition-colors duration-300 hover:bg-primary-500 group-hover:bg-primary-500 md:px-8 md:py-8'>
                <span className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary-50 text-2xl text-primary-500'>
                  <BsBullseye />
                </span>
                <h6 className='mt-6 text-lg transition-colors duration-300 group-hover:text-white'>
                  Legal Reform and Policy Advocacy
                </h6>
              </div>
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
