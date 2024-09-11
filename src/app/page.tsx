import Header from '@/ui/Header';
import Image from 'next/image';
import clsx from 'clsx';
import Script from 'next/script';
import type { Metadata } from 'next';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';
import HomePageImage from '@/assets/images/lady-on-homepage.png';
import PartnerSlider from '@/ui/PartnerSlider';
import Footer from '@/ui/Footer';
import { SpacedSection, Container } from '@/ui/Layouts';
import GenderMobileStatisticCounterUp from '@/ui/GMStatisticCounter';
import TestimonialSlider, { TestimonialHeading } from '@/ui/Testimonial';
import { AboutUs } from '@/ui/Blocks';
import { DonationBanner, HelpBanner } from '@/ui/Banners';
import { BlogClip } from '@/ui/Blog';
import { HeadingTitle } from '@/ui/Elements';
import moment from 'moment';

export const metadata: Metadata = {
  title: `Advancing Gender Equality and Combating Gender-Based Violence `,
  description: `Learn how Gender Mobile Initiative is transforming systems, culture, and practices to achieve intersectional gender equality and eliminate sexual and gender-based violence through policy interventions, research, awareness, education, and technology adoption.`,
  keywords: [
    `gender equality`,
    `gender-based violence`,
    `women's empowerment`,
    `intersectional gender equality`,
    `systems change`,
    `policy interventions`,
    `research`,
    `awareness`,
    `education`,
    `technology adoption`,
  ],
};

function chunkify(items: any[], size: number) {
  if (items.length < 1) return items;

  let result = [];
  let current = [];

  items.forEach((item) => {
    if (current.length == size) {
      result.push(current);
      current = [];
    }

    current.push(item);
  });

  if (current.length) result.push(current);

  return result;
}

export default async function Home() {
  const volunteerMembers = [
    { name: `Scott`, image: `/images/volunteers/image-1.png` },
    { name: `Olivia`, image: `/images/volunteers/image-2.png` },
    { name: `Jonah`, image: `/images/volunteers/image-3.png` },
    { name: `Ethan`, image: `/images/volunteers/image-4.png` },
    { name: `Clarke`, image: `/images/volunteers/image-5.png` },
    { name: `Kelly`, image: `/images/volunteers/image-6.png` },
  ];

  const res = await fetch(`${process.env.API_URL}`);
  const response = await res.json();
  let gallery = [];
  let blogs = [];

  if (response.status) {
    gallery = chunkify(response.data.gallery, 3);
    blogs = response.data.blog;
  }

  return (
    <>
      <Header background />
      <main className='overflow-hidden bg-white lg:px-4'>
        <div
          className='mx-auto flex flex-wrap overflow-hidden rounded-bl-[40px] rounded-br-[40px] bg-primary-700 px-4 py-4 pt-[40px] text-white lg:container md:px-20 lg:px-10 lg:pt-[200px]'
          role='hero-overlay'
        >
          <div className='lg:order-1 lg:h-[0%] lg:w-1/2'>
            <div className=''>
              <h1 className='pb-4 text-[42px] font-semibold leading-[47px] lg:text-[68px] lg:leading-[75px]'>
                We respond urgently to any form of Sexual and Gender-Based
                violence
              </h1>
              <p className='pb-10 text-[1.15rem] text-white'>
                We are commited to fostering a gender-equitable society devoid{' '}
                <br />
                of all forms of sexual and gender based violence.
              </p>

              <a
                href='//#endregion'
                className='btn-white-outline hidden md:inline-block'
              >
                Learn More
              </a>
            </div>

            <div className='flex items-center justify-between pt-2 md:block md:pt-16'>
              <a
                href='//#endregion'
                className='btn-white-outline inline-block md:hidden'
              >
                Learn More
              </a>
              <div>
                <span className='mr-4 inline-block rounded-full border border-white px-2 py-2'>
                  <HiOutlineArrowLeft />
                </span>
                <span className='mr-2 inline-block rounded-full border border-white px-2 py-2'>
                  <HiOutlineArrowRight />
                </span>
              </div>
            </div>
          </div>
          <div className='bottom-[20px] lg:relative lg:right-[50px] lg:top-[-20px] lg:order-2 lg:h-[550px] lg:w-1/2'>
            <Image
              src={HomePageImage}
              alt='Perplexed Lady'
              className='scale-110 lg:scale-110'
              style={{ objectFit: 'cover', objectPosition: `center` }}
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
          <div className='block md:flex md:items-center'>
            <div className='relative justify-end md:inline-flex lg:w-1/2'>
              <div className='before-bg-addon relative mx-auto h-[75%] min-h-[400px] w-[90%] rounded-3xl bg-[url("/images/bg/joyful-students.png")] before:left-[-30px] before:top-[-30px] before:bg-[url("/images/tiny/dotted-style.png")] md:w-[75%]'>
                <div className='absolute bottom-[-40px] right-[-20px] rounded-2xl bg-white py-2 pl-4 pr-0 text-sm text-black-500 shadow-md md:right-[-40px] md:py-4'>
                  <span className='text-sm md:text-base'>
                    Join 200+ Other Volunteers
                  </span>
                  <div className='mt-2'>
                    {volunteerMembers.map(({ name, image }, index) => (
                      <span
                        key={`volunteer ${name}`}
                        className={clsx(
                          `relative inline-block h-[46px] w-[46px] rounded-full border-[2px] border-white bg-cover bg-center bg-no-repeat md:h-[48px] md:w-[48px]`,
                          {
                            'left-[-10px]': index == 1,
                            'left-[-20px]': index == 2,
                            'left-[-30px]': index == 3,
                            'left-[-40px]': index == 4,
                            'left-[-50px]': index == 5,
                          }
                        )}
                      >
                        <Image
                          src={image}
                          alt=''
                          fill
                          className={clsx(`rounded-full`)}
                        />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-10 px-8 py-8 md:mt-0 md:px-24 md:py-24 lg:w-1/2'>
              <HeadingTitle className='before:content-["Volunteer"]'>
                You too can Get Involved
              </HeadingTitle>
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
        <div className='container mx-auto bg-primary-50 px-6 py-10 md:px-16 md:py-16'>
          <div className='mb-4 text-center md:mb-16'>
            <h2 className='mb-2 text-[1.6em] font-semibold leading-[120%] text-black-500 before:relative before:bottom-[-5px] before:block before:font-body before:text-[16px] before:uppercase before:text-primary-500 before:content-["Blog"] md:mb-4 md:text-[2.25em]'>
              Explore Our Latest Insights
            </h2>
            <span className='hidden text-black-400 md:block'>
              Dive into the GMI blog to discover thought-provoking articles,
              inspiring stories, <br />
              and actionable tips on gender and sexual based violence.
            </span>
            <span className='text-sm text-black-400 md:hidden'>
              Dive into the GMI blog to discover thought-provoking articles,
              inspiring stories, and actionable tips on gender and sexual based
              violence.
            </span>
          </div>

          {/** Blog List */}
          <div className='mb-5 md:mb-16 md:flex md:justify-center'>
            <div className='grid grid-cols-1 grid-rows-2 gap-2 md:grid-cols-2 md:grid-rows-1 md:gap-6 lg:w-[80%]'>
              {blogs.map((blog) => (
                <BlogClip
                  key={blog.slug}
                  title={blog.title}
                  description={blog.summary}
                  category='News'
                  coverImage={blog.featured_image}
                  link={`/blog/${blog.slug}`}
                  date={moment(blog.published_at).format(`MMM D, YYYY`)}
                />
              ))}
              {/* <BlogClip
                title='Effect of CO2 in our Environment'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sed vulputate mi sit ame.'
                category='AutoMobile'
                coverImage='/images/bg/get-involved.jpg'
                link='#'
                date='Mar 16, 2024'
              /> */}

              {/* <BlogClip
                title='Why Taxation?'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sed vulputate mi sit ame.'
                category='Government'
                coverImage='/images/bg/get-involved.jpg'
                link='#'
                date='Mar 16, 2024'
              /> */}
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
          <div className='items-center md:grid md:grid-cols-2 md:grid-rows-1 md:gap-[150px]'>
            <div className='mb-16 px-6 md:mb-0 md:px-0'>
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
            <div className='px-6 md:px-0'>
              <h2 className='mb-4 text-[2.25em] font-semibold leading-[120%] text-black-500 before:relative before:bottom-[-5px] before:block before:font-body before:text-[16px] before:uppercase before:text-primary-500 before:content-["Gallery"]'>
                Experience Our Impact
              </h2>
              <div className='mt-6 lg:mt-16'>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
                  {gallery.map((chunk, index) => {
                    return (
                      <div className='grid gap-4' key={`image-block-${index}`}>
                        {chunk.map((image, index) => (
                          <div key={`image-${index}`}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              className='h-auto max-w-full rounded-lg'
                              src={image.path}
                              alt='gallery image'
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })}
                  {/* <div className='grid gap-4'>
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
                  <div className='hidden gap-4 md:grid'>
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
                  </div> */}
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
