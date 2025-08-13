import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import { BlogClip } from '@/ui/Blog';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import moment from 'moment';
import Link from 'next/link';
import clsx from 'clsx';
import { ResourceClip } from '@/ui/Elements';

export default async function News({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const res = await fetch(
    `${process.env.API_URL}/topic/press-releases?page=${searchParams['page'] || 1}`
  );
  const response = await res.json();
  let blogList = response.data;
  let blogs = [];

  if (Array.isArray(blogList) && blogList.length) {
    blogs = blogList.map((blog) => ({
      title: blog.title,
      description: blog.summary,
      link: `/blog/${blog.slug}`,
      category: ``,
      coverImage: blog.featured_image,
      date: moment(blog.published_at).format(`MMM D, YYYY`),
    }));
  }

  const news = [
    {
      id: 1,
      title: 'The Brief (Q1 2025)',
      link: 'https://drive.google.com/file/d/1vYGVP49PrwL3eR0ZH68Fd4E85V0xkiBh/view?usp=drive_link',
      image: '/images/news/n_1.png',
    },
    {
      id: 2,
      title: 'The Brief (Q2 2025)',
      link: 'https://drive.google.com/file/d/1hiJksy4MVOSuvDIImUB_uWz5LOOANs-7/view?usp=drive_link',
      image: '/images/news/n_2.png',
    },
  ];

  return (
    <>
      <Header />
      <PageIntro
        title='News'
        subtitle='News: Stay up-to-date on the latest company news and announcements.'
      />
      <SpacedSection top bottom>
        <Container>
          <div className='mx-auto px-6 md:w-[90%] md:px-0 lg:w-[80%]'>
            <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-6'>
              {news?.map(({ title, link, image }, index) => (
                <div
                  key={`news-${index}`}
                  className='relative h-[300px] w-full max-w-[36.875rem] md:h-[430px] md:w-full'
                >
                  <ResourceClip
                    title={title}
                    link={link}
                    linkText='Read NewsLetter'
                    image={image}
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
                      href={`${isCurrentPage ? '#' : `/blog?page=${page}`}`}
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
