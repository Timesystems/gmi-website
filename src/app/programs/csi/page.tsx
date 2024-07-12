import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import TabElement from '@/ui/TabElement';

export default function CampusSafetyInitiativePage() {
  const tabContents = [
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Executive Summary
      </h3>
      <p>
        Sexual harassment has unfortunately become a pervasive issue within
        learning environments, particularly in tertiary institutions across
        Nigeria. Shocking statistics from a study on Community Health Education
        by Owoaje E.T. and Olusola Taiwo revealed that 69.8% of respondents
        experienced sexual harassment during their time as students in tertiary
        institutions. Perpetrators often include male classmates and lecturers,
        highlighting the urgent need for intervention.
      </p>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Problems
      </h3>
      <p>
        Sexual harassment has unfortunately become a pervasive issue within
        learning environments, particularly in tertiary institutions across
        Nigeria. Shocking statistics from a study on Community Health Education
        by Owoaje E.T. and Olusola Taiwo revealed that 69.8% of respondents
        experienced sexual harassment during their time as students in tertiary
        institutions. Perpetrators often include male classmates and lecturers,
        highlighting the urgent need for intervention.
      </p>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Our Approachs
      </h3>
      <p>
        Sexual harassment has unfortunately become a pervasive issue within
        learning environments, particularly in tertiary institutions across
        Nigeria. Shocking statistics from a study on Community Health Education
        by Owoaje E.T. and Olusola Taiwo revealed that 69.8% of respondents
        experienced sexual harassment during their time as students in tertiary
        institutions. Perpetrators often include male classmates and lecturers,
        highlighting the urgent need for intervention.
      </p>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Impacts We&apos;ve made
      </h3>
      <p>
        Sexual harassment has unfortunately become a pervasive issue within
        learning environments, particularly in tertiary institutions across
        Nigeria. Shocking statistics from a study on Community Health Education
        by Owoaje E.T. and Olusola Taiwo revealed that 69.8% of respondents
        experienced sexual harassment during their time as students in tertiary
        institutions. Perpetrators often include male classmates and lecturers,
        highlighting the urgent need for intervention.
      </p>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        What we&apos;ve delivered
      </h3>
      <p>
        Sexual harassment has unfortunately become a pervasive issue within
        learning environments, particularly in tertiary institutions across
        Nigeria. Shocking statistics from a study on Community Health Education
        by Owoaje E.T. and Olusola Taiwo revealed that 69.8% of respondents
        experienced sexual harassment during their time as students in tertiary
        institutions. Perpetrators often include male classmates and lecturers,
        highlighting the urgent need for intervention.
      </p>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Learnings
      </h3>
      <p>
        Sexual harassment has unfortunately become a pervasive issue within
        learning environments, particularly in tertiary institutions across
        Nigeria. Shocking statistics from a study on Community Health Education
        by Owoaje E.T. and Olusola Taiwo revealed that 69.8% of respondents
        experienced sexual harassment during their time as students in tertiary
        institutions. Perpetrators often include male classmates and lecturers,
        highlighting the urgent need for intervention.
      </p>
    </>,
  ];

  return (
    <>
      <Header />
      <PageIntro title='Campus Safety Initiative' />
      <SpacedSection bottom top>
        <Container className='pb-28 md:px-8'>
          <div className='md:flex md:gap-x-10'>
            <div className='md:w-[55%] lg:w-[60%]'>
              <TabElement
                name='csi'
                tabs={[
                  'Summary',
                  'Problem',
                  'Approach',
                  'Impact',
                  'Deliverables',
                  'Learnings',
                ]}
                tabContent={tabContents}
              />
            </div>
            <div className='border border-green-600 md:w-[45%] lg:w-[40%]'>
              <div>statistics</div>
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
