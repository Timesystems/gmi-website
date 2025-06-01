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

  return (
    <>
      <Header />
      <PageIntro title='Impact Reports' />
      <SpacedSection top bottom>
        <Container>
          <div className='px-4 md:px-20'>
            <div className='grid auto-rows-max grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8'>
              {reportList?.map(({ id, title, link, image }) => (
                <div
                  key={`report-${id}`}
                  className='relative h-[300px] w-full md:h-[430px] md:w-[430px]'
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
