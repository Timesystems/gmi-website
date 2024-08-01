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
        The Adolescent Wellness Hub, a program initiated by the Gender Mobile
        Initiative, is dedicated to preventing sexual and gender-based violence
        (SGBV) among adolescents aged 12 to 19 in Ekiti State. Our mission is to
        equip adolescents with the knowledge, skills, and resources necessary to
        foster gender equality and create safer communities for all.
      </p>
      <h4 className='mb-1 text-base font-semibold text-black-500'>
        Understanding the Need
      </h4>
      <p>
        Through a survey conducted in 2019, we identified a concerning
        prevalence of school-related sexual and gender-based violence among
        adolescents in Ekiti State. In response, we developed a modular manual
        and trained 42 volunteers to deliver it effectively.
      </p>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Our Approach
      </h3>
      <p className='mb-5'>The Adolescent Hub project focuses on:</p>
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
        Impact and Achievements
      </h3>
      <ul className='tab-content-list'>
        <li>
          Program Funding: Initially funded by the Pollination Grant, the
          project has received support from various sources, including the
          Global Youth Mobilization fund.
        </li>
        <li>
          Reach: Since 2019, we have visited 17 secondary schools across three
          local government areas, reaching over 13,250 adolescents.
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
        Addressing Mental Health Challenges
      </h3>
      <p className='mb-5'>
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
        Objectives
      </h3>
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
        Activities
      </h3>
      <p className='mb-5'>
        The Gender Mobile team visited 8 secondary schools in Gbonyin Local
        Government Area in Ekiti State, to carry out a baseline study using
        questionnaires as a tool on students between ages 12 -19 years prior to
        the commencement of the adolescent hub project. Analyzed data indicated
        the prevalence of violence and the need for an intervention to nip it in
        the bud. A total of 55 facilitators were trained by the Nigeria Girls
        Guide and Kids & Teens Resource Centre. The first phase of the
        Adolescent Hub Project covered 7 secondary schools in 7 rural
        communities of Gbonyin Local Government Area of Ekiti State, in South
        West Nigeria.
      </p>
      <h4 className='mb-1 text-base font-semibold text-black-500'>
        Project Scope:
      </h4>
      <p>
        Gender Mobile administered a module for 7 weeks in rural communities.
        This exposes adolescents to information on gender based violence,
        identifying patterns of violence, demystifying harmful myths, exposing
        patterns of sexual harassment and it consequences, life skills for
        adolescents on assertive communication and negotiating skills,
        leadership, and social responsibility. These modules are administered by
        volunteer facilitators trained by The Nigerian Girls Guide, Kids & Teens
        Resource Centre, and other partner organizations, with support of The
        Pollination Project.
      </p>
    </>,
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
                  'Approach',
                  'Impact',
                  'Problem',
                  'Objectives',
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
