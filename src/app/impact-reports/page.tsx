import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import { ResourceClip } from '@/ui/Elements';

export default function ImpactReportPage() {
  const reportList = [
    {
      title: `GMI Impact Report 2023`,
      link: `https://www.youtube.com/watch?v=JF5kc-0U834`,
      image: `/images/bg/ocean-side-cleaning.jpg`,
    },
    {
      title: `GMI Impact Report 2022`,
      link: `https://youtu.be/tmEHBNxp2h0?si=epS6emOV3zkaYE-w`,
      image: `/images/bg/get-involved.jpg`,
    },
    {
      title: `GMI Impact Report 2021`,
      link: `https://youtu.be/6sCu_7usLQE?si=34nBimefhN7nhmpW`,
      image: `/images/bg/ocean-side-cleaning.jpg`,
    },
    {
      title: `GMI Impact Report 2020`,
      link: `https://youtu.be/YO5_3b7LGik?si=H_ZpZdZDHZIftAGJ`,
      image: `/images/students-1.png`,
    },
    {
      title: `GMI Impact Report 2019`,
      link: `https://youtu.be/YO5_3b7LGik?si=H_ZpZdZDHZIftAGJ`,
      image: `/images/students-1.png`,
    },
    {
      title: `GMI Impact Report 2018`,
      link: `https://youtu.be/YO5_3b7LGik?si=H_ZpZdZDHZIftAGJ`,
      image: `/images/students-1.png`,
    },
  ];

  return (
    <>
      <Header />
      <PageIntro title='Impact Reports' />
      <SpacedSection top bottom>
        <Container>
          <div className='px-4 md:px-20'>
            <div className='grid auto-rows-max grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8'>
              {reportList.map(({ title, link, image }, i) => (
                <div
                  key={`report-${i}`}
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
