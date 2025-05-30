import Link from 'next/link';
import React from 'react';

const GalleryPanel = ({ gallery }: { gallery: unknown }) => {
  return (
    <div>
      {/** Tweets and Gallery section */}
      {/* <section className='mb-24'>
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
                </div>
              </div>
              <div className='mt-8'>
                <Link
                  href='/gallery'
                  className='btn inline-block rounded-full border border-primary-500 bg-primary-500 px-6 py-2 font-heading text-white hover:text-white'
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default GalleryPanel;
