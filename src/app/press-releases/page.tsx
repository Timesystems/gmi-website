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

export default async function PressReleasePage({
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

  const pressReleases = [
    {
      title: 'Condemning the Unizik Violent Incident',
      link: 'https://drive.google.com/open?id=1Kr4y77O3zm-Qe2Jk8No-FUc-arDKefYJ&usp=drive_copy',
    },
    {
      title:
        'Investigation on Senator Natasha s Allegations of Sexual Harassment',
      link: 'https://drive.google.com/open?id=1pQ8A6Um39QOuQ56FRqwRODb_LSKnKQli&usp=drive_copy',
    },
    {
      title: 'Calling for Transparency - BAB FAFUTA Sex-For-Marks Scandal S...',

      link: 'https://drive.google.com/open?id=1a2RYt4mazmTQgfVZIb0m170WmGNVXpve&usp=drive_copy',
    },
    {
      title: 'Applauding LASUSTECH Dismissal of Lecturers on SA Charges',
      link: 'https://drive.google.com/open?id=17jYSjX0-FyjLSF1dmu371JM9gIiYYJ_u&usp=drive_copy',
    },
    {
      title: 'Applauding ATBU Dismissal of Senior Lecturer on SA Charges',
      link: 'https://drive.google.com/open?id=18CjtJTy12z1k8ygHL5UPRCHMaTLRDPFs&usp=drive_copy',
    },
    {
      title: 'Condemning Speed Darlington',
      link: 'https://drive.google.com/open?id=1zl52RmD6v8-5hncjnZtUqmiK50k73GYe&usp=drive_copy',
    },
    {
      title: 'Commending Clifford University',
      link: 'https://drive.google.com/open?id=1wHz3Sj7BZa1t_opAucJ4EOQLbPXjEv43&usp=drive_copy',
    },
    {
      title: 'Calling for Accountability at Afe Babalola University',
      link: 'https://drive.google.com/open?id=1n4kEEBjZJVIXdT-MNzPRCAk7orsaQh9v&usp=drive_copy',
    },
  ];

  return (
    <>
      <Header />
      <PageIntro
        title='Press Releases'
        subtitle='Press Releases: Stay up-to-date on the latest company news and announcements.'
      />
      <SpacedSection top bottom>
        <Container>
          <div className='mx-auto px-6 md:w-[90%] md:px-0 lg:w-[80%]'>
            <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-6'>
              {pressReleases.map((_, i) => (
                <div
                  key={`press-${i}`}
                  className='relative h-[300px] w-full max-w-[36.875rem] md:h-[430px] md:w-full'
                >
                  <ResourceClip
                    title={_.title}
                    link={_.link}
                    linkText='Read More'
                    image={`/images/press/pr_${i + 1}.png`}
                    grayscale={false}
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
