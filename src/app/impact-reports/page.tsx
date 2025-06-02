import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import { ResourceClip } from '@/ui/Elements';

export default async function ImpactReportPage() {
  const res = await fetch(`${process.env.API_URL}/impact-reports`);
  const response = await res.json();
  let reportList = [];
  if (response.status && Array.isArray(response.data) && response.data.length) {
    reportList = response.data.map(
      ({
        id,
        title,
        document,
      }: {
        id: string | number;
        title: string;
        document: string;
      }) => ({
        id,
        title,
        link: document,
        image: `/images/bg/ocean-side-cleaning.jpg`,
      })
    );
  }

  const report = [
    {
      id: 1,
      title: 'GMI Impact Report 2019',
      link: '#',
      image: '/images/bg/ocean-side-cleaning.jpg',
    },
    {
      id: 1,
      title: 'GMI Impact Report 2019',
      link: '#',
      image: '/images/bg/ocean-side-cleaning.jpg',
    },
    {
      id: 1,
      title: 'GMI Impact Report 2019',
      link: '#',
      image: '/images/bg/ocean-side-cleaning.jpg',
    },
    {
      id: 1,
      title: 'GMI Impact Report 2019',
      link: '#',
      image: '/images/bg/ocean-side-cleaning.jpg',
    },
  ];

  return (
    <>
      <Header />
      <PageIntro title='Impact Reports' />
      <SpacedSection top bottom>
        <Container>
          <div className='px-4 md:px-20'>
            <div className='md:grid-co ls-3 grid auto-rows-max grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8'>
              {report?.map(({ title, link, image }, i) => (
                <div
                  key={`report-${i}`}
                  className='relative h-[300px] w-full max-w-[36.875rem] md:h-[430px] md:w-full'
                >
                  <ResourceClip
                    title={title}
                    link={link}
                    linkText='Read Report'
                    image={image}
                  />
                </div>
              ))}
            </div>
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
