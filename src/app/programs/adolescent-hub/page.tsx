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
    absolute: `Adolescent Hub | Preventing Gender-Based Violence`,
  },
  description: `Learn about our Adolescent Hub, a program dedicated to preventing sexual and gender-based violence among adolescents in Ekiti State through education, skill enhancement, and support services.`,
  keywords: [
    `adolescent wellness`,
    `gender-based violence`,
    `prevention`,
    `education`,
    `skill enhancement`,
    `support services`,
    `mental health`,
    `substance abuse`,
    `Ekiti State`,
  ],
};

export default function AdolescentHubPage() {
  const tabContents = [
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Executive Summary
      </h3>
      <p className='mb-5'>
        The Adolescent Hub is laser focused on preventing sexual and
        gender-based violence (SGBV) among adolescents aged 12 to 19. Our
        mission is to equip adolescents with the knowledge, skills, and
        resources necessary to foster gender equality and create safer
        communities for all.
      </p>
      <h4 className='mb-1 text-base font-semibold text-black-500'>
        Understanding the Need
      </h4>
      <p>
        The findings on violence as reported by UNICEF shows that 6 out of every
        10 children have experienced physical, sexual or emotional violence
        before the age of 18 in Nigeria. This profound finding represents this
        as a problem that requires context specific intervention. The adolescent
        hub sexual and gender-based violence prevention program was borne out of
        the finding from a study conducted by Gender Mobile Initiative in 5
        secondary schools in Ekiti State and the need to undertake a
        school-based sexual and gender-based violence prevention for adolescents
        between the ages of 12 to 19.
      </p>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Our Approach
      </h3>
      <ul className='tab-content-list'>
        <li>
          Education: Providing adolescents with knowledge on improving gender
          equality and understanding patterns of violence.
        </li>
        <li>
          Skill Enhancement: Enhancing adolescents&apos; skills in reporting GBV
          incidents.
        </li>
      </ul>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Our Strategies
      </h3>
      <ul className='tab-content-list'>
        <li>
          Improving the learning experiences and well-being of adolescents in
          and out of school through scholarship, support groups, counseling and
          facilitating access to gender-based violence preventative information
          and confidential reporting through our technology-based platforms
          which will grant adolescents the opportunity to learn, grow and
          thrive.
        </li>
        <li>
          Peer based approach to equip adolescents with knowledge on advancing
          gender equality in their community, building knowledge on GBV
          prevention and reporting, creating safe spaces, developing life
          skills, promoting active bystanders intervention, and promoting the
          collective sense of social responsibility to prevent and respond to
          sexual and gender-based violence.
        </li>
      </ul>
      <h4 className='mb-1 mt-2 text-base font-semibold text-black-500'>
        Objectives
      </h4>
      <ul className='tab-content-list'>
        <li>
          To mobilize campaigns, drive action towards ending violence against
          boys and girls.
        </li>
        <li>To provide a safe learning environment unimpeded by violence.</li>
        <li>To create a network of violence free and healthy adolescents.</li>
        <li>
          To raise young advocates and champions against gender -based violence.
        </li>
      </ul>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        The Impact
      </h3>
      <p className='mb-5'>
        Program Funding: Initially funded by the Pollination Grant, the project
        has received support from various sources, including the Global Youth
        Mobilization fund.
      </p>
      <ul className='tab-content-list'>
        <li>
          Reach: We have implemented in 21 secondary schools and graduated
          13,250 adolescents across 9 communities in 3 Local Government Areas.
        </li>
        <li>
          Support Services: We have improved the learning experiences of
          in-school adolescents through support groups, counseling, and access
          to confidential reporting via technology-based platforms.
        </li>
      </ul>
    </>,
  ];

  return (
    <>
      <Header />
      <PageIntro title='Adolescent Hub' />
      <SpacedSection bottom top>
        <Container className='pb-28 md:px-8'>
          <div className='md:flex md:gap-x-10'>
            <div className='mb-6 px-4 md:mb-0 md:w-[55%] md:px-0 lg:w-[60%]'>
              <TabElement
                name='adolescent-wellness'
                tabs={['Summary', 'Approach', 'Strategies', 'Impact']}
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
      {/* <SpacedSection bottom top>
        <Container>
          <DonationBanner />
        </Container>
      </SpacedSection> */}

      <Footer />
    </>
  );
}
