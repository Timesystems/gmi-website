import Header from '@/ui/Header';
import Image from 'next/image';
import Link from 'next/link';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import clsx from 'clsx';
import { ResourceClip } from '@/ui/Elements';

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const res = await fetch(
    `${process.env.API_URL}/gallery/photos?page=${searchParams['page'] || 1}`
  );
  const response = await res.json();
  let photos = [];

  if (Array.isArray(response.data) && response.data.length) {
    photos = response.data.map(({ id, caption, link }) => ({
      id,
      caption,
      link,
    }));
  }

  return (
    <>
      <Header />
      <PageIntro title='Gallery' />

      <SpacedSection bottom top>
        <Container>
          <div>
            <div className='no-scrollbar mb-8 flex justify-center gap-x-5 overflow-x-scroll text-center md:mb-14'>
              <button className='rounded-full border border-primary-500 bg-primary-500 px-4 py-1 font-heading text-[0.9rem] text-black-500 text-white transition-colors duration-300'>
                Images
              </button>
              <Link
                href='/gallery/videos'
                className='rounded-full border border-black-100 px-4 py-1 font-heading text-[0.9rem] text-black-500 transition-colors duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white'
              >
                Videos
              </Link>
            </div>
            <div className='xl:px-20'>
              <div className='flex flex-wrap items-center justify-center gap-4 md:gap-8'>
                {photos.map(
                  ({
                    id,
                    caption,
                    link,
                  }: {
                    id: string | number;
                    caption?: string;
                    link: string;
                  }) => (
                    <div
                      key={id}
                      className='md:rounded-primary group relative h-[200px] w-[40%] grayscale hover:grayscale-0 sm:h-[300px] md:h-[400px] md:w-[30%]'
                    >
                      <Image
                        src={link}
                        alt='Gallery Image'
                        layout='fill'
                        className='md:rounded-primary'
                        style={{ objectFit: `cover`, objectPosition: `center` }}
                      />
                      {caption ? (
                        <div className='relative z-10 hidden h-[100%] w-[100%] flex-col justify-end transition-all duration-300 group-hover:flex'>
                          <span className='rounded-b-primary relative bottom-0 z-10 h-[auto] bg-black-400 py-3 text-center text-sm text-white opacity-80'>
                            {caption}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  )
                )}
              </div>
            </div>

            {response.last_page > 1 ? (
              <div className='mt-6 py-6 text-center'>
                {Array(response.last_page)
                  .fill(1)
                  .map((_, index) => {
                    const page = index + 1;
                    const isCurrentPage = page == response.current_page;

                    return (
                      <Link
                        key={`blog-page-${page}`}
                        href={`${isCurrentPage ? '#' : `/gallery?page=${page}`}`}
                        className={clsx('btn mr-2 px-4 py-2', {
                          'btn-primary-outline': isCurrentPage,
                          'btn-primary': !isCurrentPage,
                        })}
                      >
                        {page}
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
        </Container>
      </SpacedSection>

      {/* <SpacedSection bottom>
        <Container>
          <DonationBanner />
        </Container>
      </SpacedSection> */}

      {/** Footer */}
      <Footer />
    </>
  );
}
