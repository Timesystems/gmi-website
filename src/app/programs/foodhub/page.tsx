import type { Metadata } from 'next';
import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import TabElement from '@/ui/TabElement';

export const metadata: Metadata = {
  title: {
    absolute: `Food Hub | Supporting Vulnerable Women and Children`,
  },
  description: `Learn about our Food Hub model in Ekiti State, leveraging technology to connect donors with those in need, providing food security and support during public health emergencies.`,
  keywords: [
    `food security`,
    `public health emergencies`,
    `women's empowerment`,
    `children's welfare`,
    `Ekiti State`,
    `donor engagement`,
    `recipient support`,
    `community volunteers`,
  ],
};

export default function SkillUpWomenGirlsPage() {
  const tabContents = [
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Executive Summary
      </h3>
      <p className='mb-5'>
        Public health emergencies, such as the recent coronavirus outbreak, have
        had profound socioeconomic impacts on individuals, families, and entire
        nations. Evidence shows that women, girls, and children bear a
        disproportionate burden of these crises, facing challenges in areas such
        as food security, nutrition, healthcare, education, livelihoods, and
        protection. Even after the crisis subsides, the effects on women and
        girls can persist for years.
      </p>
      <p>
        In response to these challenges, Gendermobile has launched a Food Hub
        model in Ekiti State to support vulnerable women and children during the
        lockdown period prompted by the spread of the coronavirus, also known as
        &quote;Covid-19&quote;.
      </p>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Our Approach
      </h3>
      <p className='mb-4'>
        The Gender Mobile Initiative Food Hub leverages technology, including a
        dedicated helpline (07000000002) and other communication channels, to
        connect donors of cash and food items with those in need. Our model
        operates on a need basis, ensuring that resources are distributed to
        those who require assistance the most.
      </p>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        How It Works
      </h3>

      <ul className='tab-content-list'>
        <li>
          <h6>Donor Engagement</h6>
          We encourage individuals and organizations to contribute cash or food
          items to support vulnerable women and children in our community.
        </li>
        <li>
          <h6>Recipient Support</h6>
          Those in need can reach out to us through our helpline or other
          channels to request assistance. Our team assesses each request and
          provides support based on the level of need.
        </li>
        <li>
          <h6>Community Volunteer System</h6>
          We rely on a network of dedicated volunteers who assist with the
          coordination and distribution of resources to ensure efficient and
          effective support for our beneficiaries.
        </li>
      </ul>
    </>,
  ];

  return (
    <>
      <Header />
      <PageIntro title='Food Hub' />
      <SpacedSection bottom top>
        <Container className='pb-28 md:px-8'>
          <div className='md:flex md:gap-x-10'>
            <div className='mb-6 px-4 md:mb-0 md:w-[55%] md:px-0 lg:w-[60%]'>
              <TabElement
                name='foodhub'
                tabs={['Summary', 'Approach', 'Process']}
                tabContent={tabContents}
              />
            </div>
            <div className='md:w-[45%] lg:w-[40%]'>
              <div className='relative mx-auto h-[400px] w-[95%] rounded-3xl bg-[url("/images/bg/ocean-side-cleaning.jpg")] bg-cover bg-center bg-no-repeat md:h-[400px] md:w-full lg:h-[450px]' />
            </div>
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
