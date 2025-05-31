import type { Metadata } from 'next';
import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import TabElement from '@/ui/TabElement';
import ImageIllustration from '../ImageIllustration';

export const metadata: Metadata = {
  title: {
    absolute: `Skill Up Women and Girls (SWAG) | Empowering Reproductive Health`,
  },
  description: `Learn about our SWAG initiative, promoting access to contraceptives, reproductive health services, and education for women in Ekiti State, empowering them to take control of their health and well-being`,
  keywords: [
    `reproductive health`,
    `women's empowerment`,
    `contraceptives`,
    `family planning`,
    `SRHR`,
    `Ekiti State`,
    `education`,
    `awareness`,
    `access`,
    `empowerment`,
  ],
};

export default function SkillUpWomenGirlsPage() {
  const tabContents = [
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Executive Summary
      </h3>
      <p className='mb-5'>
        In commemorating the 16 Days of Activism 2020, Gender Mobile conducted a
        community outreach tagged ‘Skill Up Women and Girls (SWAG)’ in Irasa
        Community in Ado LG, Ekiti State. We mobilized and sensitized the
        community dwellers on the importance of Sexual Reproductive Health and
        Rights and provided 25 women with access to free family planning
      </p>
    </>,
    <>
      <p className='mb-4'>
        Community Outreach: We mobilized and sensitized the community dwellers
        on the importance of Sexual Reproductive Health and Rights and provided
        25 women with access to free family planning
      </p>

      <div className='mb-3'>
        <h6 className='font-semibold text-black-500'>
          Education and Awareness
        </h6>
        <p>
          We conduct outreach programs and community workshops to educate women
          about the importance of SRHR, family planning, and contraceptive
          options available to them.
        </p>
      </div>
      <div className='mb-3'>
        <h6 className='font-semibold text-black-500'>
          Access to Contraceptives
        </h6>
        <p>
          We collaborate with healthcare providers and local authorities to make
          contraceptives readily available and affordable to women in Ekiti
          State.
        </p>
      </div>
      <div className='mb-3'>
        <h6 className='font-semibold text-black-500'>
          Empowerment and Support
        </h6>
        <p>
          We offer counseling and support services to women, empowering them to
          take control of their reproductive health and make decisions that are
          best for themselves and their families.
        </p>
      </div>
    </>,
  ];

  return (
    <>
      <Header />
      <PageIntro title='Skill Up Women and Girls' />
      <SpacedSection bottom top>
        <Container className='pb-28 md:px-8'>
          <div className='md:flex md:gap-x-10'>
            <div className='mb-6 px-4 md:mb-0 md:w-[55%] md:px-0 lg:w-[60%]'>
              <TabElement
                name='skillup'
                tabs={['Summary', 'Approach']}
                tabContent={tabContents}
              />
            </div>

            <ImageIllustration />
            {/* <div className='md:w-[45%] lg:w-[40%]'>
              <div className='relative mx-auto h-[400px] w-[95%] rounded-3xl bg-[url("/images/bg/ocean-side-cleaning.jpg")] bg-cover bg-center bg-no-repeat md:h-[400px] md:w-full lg:h-[450px]' />
            </div> */}
          </div>
        </Container>
      </SpacedSection>

      {/** Donation Banner */}
      <SpacedSection bottom top>
        <Container>
          <DonationBanner />
        </Container>
      </SpacedSection>

      <Footer />
    </>
  );
}
