import type { Metadata } from 'next';
import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import TabElement from '@/ui/TabElement';

export const metadata: Metadata = {
  title: {
    absolute: `Adolescent Wellness Hub | Preventing Gender-Based Violence`,
  },
  description: `Learn about our Adolescent Wellness Hub, a program dedicated to preventing sexual and gender-based violence among adolescents in Ekiti State through education, skill enhancement, and support services.`,
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

export default function AdolescentWellnessHubPage() {
  const tabContents = [
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Executive Summary
      </h3>
      <p className='mb-5'>
        In furtherance of our work on GBV prevention, the adolescent wellness
        hub project promotes mental wellness among adolescents. This is owing to
        our experience interacting with different groups of adolescents and
        identifying the effects of GBV and other social issues on their mental
        health.
      </p>
      <h4 className='mb-1 text-base font-semibold text-black-500'>
        Understanding the Need
      </h4>
      <p>
        According to the World Health Organization, one in seven, 10 - 19 years
        old experience mental disorders and account for 13% of the global burden
        of disease in this age group. The myths on mental illness, shortage of
        mental health practitioners and care givers, limited budgetary
        allocation on mental health in Nigeria, accounts for a high caseload of
        depression, and ranks Nigeria 15th in the global index of suicide
        occurrence. Our experience working with adolescents in Ekiti State,
        identified that low socioeconomic status, positive history of sexual
        abuse, family dysfunction, witnessed frequent violence, death of a
        mother are significantly and independently associated to depression in
        children and adolescents
      </p>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Our Approach
      </h3>
      <ul className='tab-content-list'>
        <li>
          Education: Providing adolescents with knowledge on improving mental
          wellness.
        </li>
        <li>
          Skill Enhancement: Enhancing adolescents&apos; skills in seeking
          professional support on mental health challenges
        </li>
        <li>
          Sports and Games: Utilizing recreational activities to build
          confidence and create a safe space for expression.
        </li>
        <li>
          Media Sensitization: Using traditional media to scale up the
          project&apos;s reach to more members of the community.
        </li>
      </ul>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        The Problem
      </h3>
      <p>
        In recognition of the exacerbating prevalence of mental illness among
        adolescents, our project funded by the Global Youth Mobilization fund
        aims to:
      </p>
      <ul className='tab-content-list'>
        <li>
          Combat Substance Abuse: Addressing the prevalence of drug and
          substance abuse through peer education, school and media
          sensitization, and awareness campaigns.
        </li>
        <li>
          Promote Mental Wellness: Utilizing innovative approaches such as
          football for mental wellness awareness to prevent GBV, teenage
          pregnancy, and other risky behaviors.
        </li>
      </ul>
    </>,

    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        The Impact
      </h3>
      <p className='mb-3'>
        Program Funding: Initially funded by the Global Youth Mobilization fund
      </p>
      <ul className='tab-content-list'>
        <li>
          Reach: In 2022, we have built the capacities of over 1500 students and
          45 in-school adolescents as peer educators on mental health wellness.
        </li>
        <li>
          Support Services: We have improved the learning experiences of
          in-school adolescents through support groups, counseling, and access
          to confidential reporting via technology-based platforms.
        </li>
      </ul>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Activities
      </h3>
      <p className='mb-3'>
        Gender Mobile Initiative implemented these projects in phases,
        activities were carried out in All Souls’ Grammar School, AUD Grammar
        School and Olaoluwa Muslim Grammar School in Ado Ekiti.
        Capacity-building sessions were undertaken over the course of 4 weeks in
        schools on the Concept of Mental Health and Mental Disorder,
        predisposing Factors, Symptoms, and Stigmatization Associated with
        Mental Challenges and Mental Healthcare seeking Behaviour.
      </p>
      <p className='mb-3'>
        A Peer Educators training was also organized which trained 45 in-school
        adolescents across secondary schools in Ado Ekiti on mental wellness.
        The program has also enhanced participants&apos; knowledge of the
        predisposing factors responsible for mental health challenges,
        demystified myths and misconceptions around mental health challenges,
        and provided access to counseling and psychosocial support to those in
        need.
      </p>
      <p className='mb-3'>
        A friendly football match themed ‘Football for Mental Wellness’ was
        organized in partnership with the Ekiti Football Association (EFA) at
        Baptist Comprehensive High School, Ado-Ekiti. Participants involved
        pupils from the three beneficiary schools of the Adolescent Wellness Hub
        (ADH). The match highlighted the importance of extracurricular
        activities such as sports in the promotion of adolescent mental
        well-being.
      </p>
    </>
  ];

  return (
    <>
      <Header />
      <PageIntro title='Adolescent Wellness Hub' />
      <SpacedSection bottom top>
        <Container className='pb-28 md:px-8'>
          <div className='md:flex md:gap-x-10'>
            <div className='mb-6 px-4 md:mb-0 md:w-[55%] md:px-0 lg:w-[60%]'>
              <TabElement
                name='adolescent-wellness'
                tabs={[
                  'Summary',
                  'Problem',
                  'Approach',
                  'Impact',
                  'Activities',
                ]}
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
