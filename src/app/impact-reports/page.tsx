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
      title: 'GMI Impact Report 2023',
      link: 'https://drive.google.com/file/d/12rLhJLKM4QSbSNR6mNuG0_4D4_u1Q9WY/view?usp=drive_link',
      image: '/images/report/report_2023.jpg',
    },
    {
      id: 2,
      title: 'GMI Impact Report 2022',
      link: 'https://drive.google.com/file/d/1vYGVP49PrwL3eR0ZH68Fd4E85V0xkiBh/view?usp=drive_link',
      image: '/images/report/report_2022.jpg',
    },
    {
      id: 3,
      title: 'GMI Impact Report 2021',
      link: 'https://drive.google.com/file/d/1f7_ncwVl940E0Z0brgOWCRaHb_xYJegz/view?usp=drive_link',
      image: '/images/report/report_2021.jpg',
    },
    {
      id: 4,
      title: 'GMI Impact Report 2020',
      link: 'https://drive.google.com/file/d/1bwe7kgKaAzgWAtI9CKX2SzAPzDhyljRU/view?usp=drive_link',
      image: '/images/report/report_2020.jpg',
    },
    {
      id: 5,
      title: 'GMI Impact Report 2019',
      link: 'https://drive.google.com/file/d/1YXv9cj3HPwq9yHzuADK7_XopRHAnvDe9/view?usp=drive_link',
      image: '/images/report/report_2019.jpg',
    },
    {
      id: 6,
      title: 'GMI Impact Report 2018',
      link: 'https://drive.google.com/file/d/1ZS9JMvanRrwDngdjAOzAZjE3eqE67e_c/view?usp=drive_link',
      image: '/images/report/report_2018.jpg',
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
