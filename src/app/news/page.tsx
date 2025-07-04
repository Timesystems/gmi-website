import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import { BlogClip } from '@/ui/Blog';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import moment from 'moment';
import Link from 'next/link';
import clsx from 'clsx';

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
              {blogs.map((_, index) => (
                <BlogClip
                  key={index}
                  title={_.title}
                  description={_.description}
                  category={_.category}
                  coverImage={_.coverImage}
                  link={_.link}
                  date={_.date}
                />
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
