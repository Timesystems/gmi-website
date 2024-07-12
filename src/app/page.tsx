import Header from '@/ui/Header';
import Image from 'next/image';
import clsx from 'clsx';
import Script from 'next/script';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import HomePageImage from '@/assets/images/lady-on-homepage.png';
import PartnerSlider from '@/ui/PartnerSlider';
import Footer from '@/ui/Footer';
import { SpacedSection, Container } from '@/ui/Layouts';
import GenderMobileStatisticCounterUp from '@/ui/GMStatisticCounter';
import TestimonialSlider, { TestimonialHeading } from '@/ui/Testimonial';
import { AboutUs } from '@/ui/Blocks';
import { DonationBanner, HelpBanner } from '@/ui/Banners';

export default function Home() {
  const volunteerMembers = [
    { name: `Scott`, image: `/images/volunteers/scott.jpg` },
    { name: `Olivia`, image: `/images/volunteers/olivia.jpg` },
    { name: `Jonah`, image: `/images/volunteers/jonah.jpg` },
    { name: `Ethan`, image: `/images/volunteers/ethan.jpg` },
    { name: `Clarke`, image: `/images/volunteers/clarke.jpg` },
    { name: `Kelly`, image: `/images/volunteers/kelly.jpg` },
  ];

  return (
    <>
      <Header background />
      <main className='overflow-hidden bg-white px-4'>
        <div
          className='mx-auto flex rounded-bl-[40px] rounded-br-[40px] bg-primary-700 pt-[40px] text-white lg:container lg:px-10 lg:pt-[200px]'
          role='hero-overlay'
        >
          <div className='h-[0%] lg:w-1/2'>
            <div className=''>
              <h1 className='line-clamp-4 pb-4 text-[42px] font-semibold leading-[47px] lg:text-[68px] lg:leading-[75px]'>
                We respond urgently to any form of Sexual and Gender-Based
                violence
              </h1>
              <p className='pb-10 text-[1.15rem] text-white'>
                We are commited to fostering a gender-equitable society devoid{' '}
                <br />
                of all forms of sexual and gender based violence.
              </p>
              <a href='//#endregion' className='btn-white-outline inline-block'>
                Learn More
              </a>
            </div>
            <div className='pt-16'>
              <span className='mr-4 inline-block rounded-full border border-white px-2 py-2'>
                <HiOutlineArrowLeft />
              </span>
              <span className='mr-2 inline-block rounded-full border border-white px-2 py-2'>
                <HiOutlineArrowRight />
              </span>
            </div>
          </div>
          <div className='static lg:relative lg:right-[50px] lg:top-[-20px] lg:h-[550px] lg:w-1/2'>
            <Image
              src={HomePageImage}
              alt='Perplexed Lady'
              fill
              style={{ objectFit: 'cover', scale: '1.12' }}
            />
          </div>
        </div>
      </main>

      {/** Partner slider */}
      <Container className='px-4 py-10'>
        <PartnerSlider />
      </Container>
      <SpacedSection>
        <Container className='text-black-400 lg:px-16'>
          <AboutUs buttonText='Learn More' buttonLink='/about-us' />
        </Container>
      </SpacedSection>
      {/** Program Reach Section */}
      <GenderMobileStatisticCounterUp />
      <section className='pb-20'>
        <div className='container mx-auto'>
          <div className='flex items-center'>
            <div className='relative inline-flex justify-end lg:w-1/2'>
              <div className='before-bg-addon relative h-[75%] min-h-[400px] w-[75%] rounded-3xl bg-[url("/images/bg/get-involved.jpg")] before:left-[-30px] before:top-[-30px] before:bg-[url("/images/tiny/dotted-style.png")]'>
                <div className='absolute bottom-[-40px] right-[-40px] rounded-2xl bg-white py-4 pl-4 pr-0 text-sm text-black-500 shadow-md'>
                  <span>Join 200+ Other Volunteers</span>
                  <div className='mt-2'>
                    {volunteerMembers.map(({ name, image }, index) => (
                      <span
                        key={`volunteer ${name}`}
                        className={clsx(
                          `relative inline-block h-[48px] w-[48px] rounded-full border-[2px] border-white bg-[url("/images/volunteers/kelly.jpg")] bg-cover bg-center bg-no-repeat`,
                          {
                            'left-[-10px]': index == 1,
                            'left-[-20px]': index == 2,
                            'left-[-30px]': index == 3,
                            'left-[-40px]': index == 4,
                            'left-[-50px]': index == 5,
                          }
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='px-8 py-8 md:px-24 md:py-24 lg:w-1/2'>
              <h2 className='mb-4 text-[2.25em] font-semibold leading-[120%] text-black-500 before:relative before:bottom-[-5px] before:block before:font-body before:text-[16px] before:uppercase before:text-primary-500 before:content-["Volunteer"]'>
                You too can Get Involved
              </h2>
              <p className='py-4'>
                Are you interested in fostering a gender-equitable society
                devoid of all forms of sexual and gender-based violence?
              </p>
              <div className='py-4'>
                <a
                  href='#'
                  className='btn inline-block rounded-full border border-primary-500 bg-primary-500 px-6 py-2 font-heading text-white hover:text-white'
                >
                  Sign Up Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** Call for Help section */}
      <SpacedSection bottom>
        <Container>
          <HelpBanner />
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

      {/** Blog Purview Section */}
      <section className='mb-20'>
        <div className='container mx-auto bg-primary-50 px-16 py-16'>
          <div className='mb-10 text-center md:mb-16'>
            <h2 className='mb-4 text-[2.25em] font-semibold leading-[120%] text-black-500 before:relative before:bottom-[-5px] before:block before:font-body before:text-[16px] before:uppercase before:text-primary-500 before:content-["Blog"]'>
              Explore Our Latest Insights
            </h2>
            <span className='text-black-400'>
              Dive into the GMI blog to discover thought-provoking articles,
              inspiring stories, <br />
              and actionable tips on gender and sexual based violence.
            </span>
          </div>

          {/** Blog List */}
          <div className='mb-10 flex justify-center md:mb-16'>
            <div className='grid grid-cols-2 grid-rows-1 gap-6 lg:w-[80%]'>
              <div
                className='relative h-[380px] rounded-[20px]'
                style={{
                  background: 'url("/images/bg/get-involved.jpg") no-repeat',
                }}
              >
                <div className='absolute bottom-[20px] left-[3%] mx-auto w-[94%] rounded-[20px] bg-white px-6 py-6 text-black-600'>
                  <div className='mb-2 flex justify-between text-[0.75em]'>
                    <span className='text-black-300'>Mar 16, 2024</span>
                    <span className='text-primary-500'>Category</span>
                  </div>
                  <h2 className='mb-3 text-[1.3em] font-semibold'>
                    Blog Title Here
                  </h2>
                  <p className='text-sm text-black-400'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sed vulputate mi sit ame.
                  </p>
                  <a
                    href='#'
                    className='mt-3 block font-heading text-sm font-semibold text-primary-500'
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div
                className='relative h-[380px] rounded-[20px]'
                style={{
                  background: 'url("/images/bg/get-involved.jpg") no-repeat',
                }}
              >
                <div className='absolute bottom-[20px] left-[3%] mx-auto w-[94%] rounded-[20px] bg-white px-6 py-6 text-black-600'>
                  <div className='mb-2 flex justify-between text-[0.75em]'>
                    <span className='text-black-300'>Mar 16, 2024</span>
                    <span className='text-primary-500'>Category</span>
                  </div>
                  <h2 className='mb-3 text-[1.3em] font-semibold'>
                    Blog Title Here
                  </h2>
                  <p className='text-sm text-black-400'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sed vulputate mi sit ame.
                  </p>
                  <a
                    href='#'
                    className='mt-3 block font-heading text-sm font-semibold text-primary-500'
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='text-center'>
            <a
              href='#'
              className='btn inline-block rounded-full border border-primary-500 bg-primary-500 px-6 py-2 font-heading text-white hover:text-white'
            >
              View All Blogs
            </a>
          </div>
        </div>
      </section>

      {/** Tweets and Gallery section */}
      <section className='mb-24'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-2 grid-rows-1 items-center md:gap-[150px]'>
            <div className=''>
              <h2 className='mb-4 text-[2.25em] font-semibold leading-[120%] text-black-500 before:relative before:bottom-[-5px] before:block before:font-body before:text-[16px] before:uppercase before:text-primary-500 before:content-["Insights"]'>
                Our Latest Tweets
              </h2>
              <div className='mt-4 lg:mt-16'>
                <div className='lg:hidden'>
                  <a
                    className='twitter-timeline'
                    data-height='500'
                    href='https://twitter.com/Gendermobile_NG?ref_src=twsrc%5Etfw'
                  >
                    Tweets by Gendermobile_NG
                  </a>
                </div>
                <div className='hidden lg:block'>
                  <a
                    className='twitter-timeline'
                    data-height='750'
                    href='https://twitter.com/Gendermobile_NG?ref_src=twsrc%5Etfw'
                  >
                    Tweets by Gendermobile_NG
                  </a>
                </div>
                <Script src='https://platform.twitter.com/widgets.js' />
              </div>
            </div>
            <div className=''>
              <h2 className='mb-4 text-[2.25em] font-semibold leading-[120%] text-black-500 before:relative before:bottom-[-5px] before:block before:font-body before:text-[16px] before:uppercase before:text-primary-500 before:content-["Gallery"]'>
                Experience Our Impact
              </h2>
              <div className='mt-6 lg:mt-16'>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
                  <div className='grid gap-4'>
                    <div>
                      <img
                        className='h-auto max-w-full rounded-lg'
                        src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'
                        alt='gallery image'
                      />
                    </div>
                    <div>
                      <img
                        className='h-auto max-w-full rounded-lg'
                        src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'
                        alt='gallery image'
                      />
                    </div>
                    <div>
                      <img
                        className='h-auto max-w-full rounded-lg'
                        src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'
                        alt='gallery image'
                      />
                    </div>
                  </div>
                  <div className='grid gap-4'>
                    <div>
                      <img
                        className='h-auto max-w-full rounded-lg'
                        src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'
                        alt='gallery image'
                      />
                    </div>
                    <div>
                      <img
                        className='h-auto max-w-full rounded-lg'
                        src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'
                        alt='gallery image'
                      />
                    </div>
                    <div>
                      <img
                        className='h-auto max-w-full rounded-lg'
                        src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'
                        alt='gallery image'
                      />
                    </div>
                  </div>
                  <div className='grid gap-4'>
                    <div>
                      <img
                        className='h-auto max-w-full rounded-lg'
                        src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'
                        alt='gallery image'
                      />
                    </div>
                    <div>
                      <img
                        className='h-auto max-w-full rounded-lg'
                        src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'
                        alt='gallery image'
                      />
                    </div>
                    <div>
                      <img
                        className='h-auto max-w-full rounded-lg'
                        src='https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'
                        alt='gallery image'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-8'>
                <a
                  href='#'
                  className='btn inline-block rounded-full border border-primary-500 bg-primary-500 px-6 py-2 font-heading text-white hover:text-white'
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** Donation Banner */}
      <section className='pb-20'>
        <div className='container mx-auto'>
          <DonationBanner />
        </div>
      </section>
      {/** Footer */}
      <Footer />
    </>
  );
}
