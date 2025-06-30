import type { Metadata } from 'next';
import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import TabElement from '@/ui/TabElement';
import ImageIllustration from '../ImageIllustration';

export const metadata: Metadata = {
  title: `Ending Violence against Women and Girls`,
  description: `Learn about our efforts to combat violence against women and girls in Nigeria, including sexual harassment and female genital mutilation (FGM), through community engagement, leadership mobilization, and survivor support.`,
  keywords: [
    `violence against women`,
    `girls`,
    `sexual harassment`,
    `female genital mutilation`,
    `FGM`,
    `community engagement`,
    `leadership mobilization`,
    `survivor support`,
    `Nigeria`,
  ],
};

export default function GirlWomenViolencePage() {
  const tabContents = [
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Executive Summary
      </h3>
      <p className='mb-5'>
        As an organization driven to contribute meaningfully towards ending
        Violence Against Women and Girls, we implemented the Ending Violence
        Against Women and Girls (E/VAWG) project supported by the Nigerian Women
        Trust Fund (NWTF).
      </p>
      <h4 className='mb-1 text-base font-semibold text-black-500'>
        Understanding the need.
      </h4>
      <p>
        World Health Organisation study indicates that globally 1 in 3 (30%) of
        women worldwide have been subjected to either physical and/or sexual
        intimate partner violence or non-partner sexual violence in their
        lifetime. Violence against women – particularly intimate partner
        violence and sexual violence – is a major public health problem and a
        violation of women&apos;s human rights.
      </p>
    </>,
    <>
      {/* <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Our strategies include
      </h3> */}
      <ul className='tab-content-list'>
        <li>
          Education: Providing 100 women and girls with knowledge and skills on
          combating violence against women and girls.
        </li>
        <li>
          Survivor Empowerment: Strengthening the agency of survivors and
          empowering them to foster community level accountability.
        </li>
      </ul>
    </>,
    <>
      <p>
        Program Funding: Initially funded by NWTF, the training created and
        strengthened a network of young women with improved knowledge of
        community mobilization, leadership and strategic actions geared towards
        ending violence against women and girls.
      </p>
      {/* <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Impact and Achievements
      </h3> */}
    </>,
  ];

  return (
    <>
      <Header />
      <PageIntro title='Ending Violence against Women and Girls' />
      <SpacedSection top>
        <Container className='pb-28 md:px-8'>
          <div className='md:flex md:gap-x-10'>
            <div className='mb-6 px-4 md:mb-0 md:w-[55%] md:px-0 lg:w-[60%]'>
              <TabElement
                name='girl-women-violence'
                tabs={['Summary', 'Approach', 'Impact']}
                tabContent={tabContents}
              />
            </div>

            <ImageIllustration
              images={[
                '/images/placeholder/p_4.jpg',
                '/images/placeholder/p_5.jpg',
                '/images/placeholder/p_6.jpg',
              ]}
            />
            {/* <div className='md:w-[45%] lg:w-[40%]'>
              <div className='relative mx-auto h-[400px] w-[95%] rounded-3xl bg-[url("/images/bg/ocean-side-cleaning.jpg")] bg-cover bg-center bg-no-repeat md:h-[400px] md:w-full lg:h-[450px]' />
            </div> */}
          </div>
        </Container>
      </SpacedSection>

      {/** Donation Banner */}
      {/* <SpacedSection bottom top>
        <Container>
          <DonationBanner />
        </Container>
      </SpacedSection> */}

      <Footer />
    </>
  );
}
