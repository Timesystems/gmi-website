import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import TabElement from '@/ui/TabElement';

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
        The Strategies we implored
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
        The Impacts we&apos;ve made
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
  ];

  return (
    <>
      <Header />
      <PageIntro title='Ending Violence against Women and Girls' />
      <SpacedSection bottom top>
        <Container className='pb-28 md:px-8'>
          <div className='md:flex md:gap-x-10'>
            <div className='md:w-[55%] lg:w-[60%]'>
              <TabElement
                name='girl-women-violence'
                tabs={['Summary', 'Strategies', 'Impact']}
                tabContent={tabContents}
              />
            </div>
            <div className='md:w-[45%] lg:w-[40%]'>
              <div className='relative h-[400px] rounded-3xl bg-[url("/images/bg/ocean-side-cleaning.jpg")] bg-cover bg-center bg-no-repeat md:h-[400px] lg:h-[450px]' />
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
