import type { Metadata } from 'next';
import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import TabElement from '@/ui/TabElement';

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
        Sexual harassment has unfortunately become a pervasive issue within
        learning environments, particularly in tertiary institutions across
        Nigeria. Shocking statistics from a study on Community Health Education
        by Owoaje E.T. and Olusola Taiwo revealed that 69.8% of respondents
        experienced sexual harassment during their time as students in tertiary
        institutions. Perpetrators often include male classmates and lecturers,
        highlighting the urgent need for intervention.
      </p>
      <h4 className='mb-1 text-base font-semibold text-black-500'>
        Combating Female Genital Mutilation (FGM)
      </h4>
      <p>
        Female Genital Mutilation is a harmful traditional practice that
        violates the bodily autonomy of girls and women, perpetuating
        deep-rooted gender inequalities. In Ekiti State, we&apos;ve mobilized
        significant efforts to prevent and respond to the prevalence of FGM.
        Through engagement with culture and faith leaders, survivor networks,
        and community mobilization, we&apos;ve worked tirelessly to end this
        practice.
      </p>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Our strategies include
      </h3>
      <ul className='tab-content-list'>
        <li>Engaging culture and faith leaders as norm entrepreneurs.</li>
        <li>
          Establishing survivor networks to provide comprehensive support.
        </li>
        <li>Sharing personal stories of those affected by FGM.</li>
        <li>
          Conducting house-to-house mobilization to pledge support for ending
          FGM.
        </li>
      </ul>

      <p className=''>
        Additionally, with support from AU-UNICEF, we&apos;ve prioritized
        bolstering the mental health and wellbeing of FGM survivors. Through
        impactful radio jingles and live sessions, we&apos;ve sensitized over
        50,000 listeners, extending awareness and support to those in need.
      </p>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Impact and Achievements
      </h3>
      <ul className='tab-content-list'>
        <li>
          Community Engagement: We&apos;ve reached ten communities and impacted
          over 347,000 individuals through reflective dialogues and community
          facilitator trainings.
        </li>
        <li>
          Pledges to End FGM: Our efforts have mobilized 347,000 pledges to end
          FGM, demonstrating a growing commitment to eradicating this harmful
          practice.
        </li>
        <li>
          Leadership Engagement: Five traditional rulers have assumed the role
          of norm entrepreneurs, denouncing FGM and mobilizing their communities
          for change.
        </li>
        <li>
          Youth Empowerment: Over 1,000 adolescents have been equipped with
          life-building and advocacy skills, empowering them to become agents of
          change in their communities.
        </li>
        <li>
          Survivor Support: We&apos;ve reached sixty FGM survivors, providing
          them with resources and support to advocate against the practice.
        </li>
        <li>
          Radio Sensitization: Fifty thousand radio listeners have been
          sensitized, leading to increased awareness and support for survivors.
        </li>
      </ul>
    </>,
  ];

  return (
    <>
      <Header />
      <PageIntro title='Ending Violence against Women and Girls' />
      <SpacedSection bottom top>
        <Container className='pb-28 md:px-8'>
          <div className='md:flex md:gap-x-10'>
            <div className='mb-6 px-4 md:mb-0 md:w-[55%] md:px-0 lg:w-[60%]'>
              <TabElement
                name='girl-women-violence'
                tabs={['Summary', 'Strategies', 'Impact']}
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
