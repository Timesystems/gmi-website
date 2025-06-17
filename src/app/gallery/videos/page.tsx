import Header from '@/ui/Header';
import Image from 'next/image';
import Link from 'next/link';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import { ResourceClip } from '@/ui/Elements';
import clsx from 'clsx';

export default async function GalleryVideosPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const res = await fetch(
    `${process.env.API_URL}/gallery/videos?page=${searchParams['page'] || 1}`
  );
  const response = await res.json();
  let ytList = [];

  if (Array.isArray(response.data) && response.data.length) {
    ytList = response.data.map((video) => ({
      title: video.title,
      link: video.link,
      image: video.thumbnail,
      id: video.id,
    }));
  }

  const youtList = [
    {
      id: 1,
      title: 'Video Title Here',
      link: '#',
      image: '/images/blog/related-blog-2.png',
    },
    {
      id: 1,
      title: 'Video Title Here',
      link: '#',
      image: '/images/blog/related-blog-2.png',
    },
    {
      id: 1,
      title: 'Video Title Here',
      link: '#',
      image: '/images/blog/related-blog-2.png',
    },
    {
      id: 1,
      title: 'Video Title Here',
      link: '#',
      image: '/images/blog/related-blog-2.png',
    },
  ];
  return (
    <>
      <Header />
      <PageIntro title='Gallery' />

      <SpacedSection bottom top>
        <Container>
          <div>
            <div className='no-scrollbar mb-8 flex justify-center gap-x-5 overflow-x-scroll text-center md:mb-14'>
              <Link
                href='/gallery'
                className='rounded-full border border-black-100 px-4 py-1 font-heading text-[0.9rem] text-black-500 transition-colors duration-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white'
              >
                Images
              </Link>
              <button className='rounded-full border border-primary-500 bg-primary-500 px-4 py-1 font-heading text-[0.9rem] text-white transition-colors duration-300'>
                Videos
              </button>
            </div>
            <div className='md:px-20'>
              <div className='md:grid-c ols-3 grid auto-rows-max grid-cols-1 gap-4 px-6 md:grid-cols-2 md:gap-8 md:px-0'>
                {/* {ytList.map(({ title, link, image }, i) => ( */}
                {youtList.map(({ title, link, image }, i) => (
                  <div
                    key={`video-${i}`}
                    className='relative h-[300px] w-full md:h-[430px] md:w-full'
                  >
                    <ResourceClip
                      title={title}
                      link={link}
                      linkText='Watch on YouTube'
                      image={image}
                      youtube
                    />
                  </div>
                ))}
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
                        href={`${isCurrentPage ? '#' : `/gallery/videos?page=${page}`}`}
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

      <SpacedSection bottom>
        <Container>
          <DonationBanner />
        </Container>
      </SpacedSection>

      {/** Footer */}
      <Footer />
    </>
  );
}
