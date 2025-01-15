import Header from '@/ui/Header';
import type { Metadata } from 'next';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';
import { RiBankLine } from 'react-icons/ri';
import { MdGroups, MdEditDocument, MdCalendarMonth } from 'react-icons/md';
import { HiDocumentDuplicate, HiCash } from 'react-icons/hi';
import { DonationBanner } from '@/ui/Banners';
import TabElement from '@/ui/TabElement';

export const metadata: Metadata = {
  title: {
    absolute: `Campus Safety Initiative | Preventing Sexual Harassment in Higher Education`,
  },
  description: `Learn about our comprehensive approach to tackling sexual harassment in Nigerian tertiary institutions through research, bystander intervention, preventative education, and technology integration.`,
  keywords: [
    `campus safety`,
    `sexual harassment`,
    `higher education`,
    `Nigeria`,
    `preventative education`,
    `technology integration`,
    `bystander intervention`,
    `research and policies`,
  ],
};

export default function CampusSafetyInitiativePage() {

  const tabContents = [

    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Executive Summary
      </h3>
      <p>
        Sexual harassment in higher education institutions is a significant gendered experience that has long- term debilitating mental and physical impact, impairs victim’s learning and educational outcomes and potentially results in lower grades or withdrawal from the Institution. The epidemic proportion of the problem as emblematic of today’s system is represented by the disturbing statistics of the World Bank which further elevates our social consciousness on the disproportionate impact on over 3million women and girls who are increasingly deprived of an equitable, safe and healthy access to education due to experiences of sexual harassment. Sexual harassment is deeply entrenched in Higher education institutions and protected by processes.
      </p>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Understanding the Problem
      </h3>
      <p>
        The prevalence of sexual harassment can be attributed to various
        factors, including:
      </p>
      <ul className='tab-content-list'>
        <li>Unequal power relations.</li>
        <li>
          Lack of comprehensive legal and policy frameworks.
        </li>
        <li>
          Poor implementation of existing policy and legal frameworks.
        </li>
        <li>
          Lack of a survivor-centred grievance redress mechanism.
        </li>
        <li>
          Lack of a survivor-centred reporting channel.
        </li>
      </ul>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Our Approach
      </h3>
      <p className='mb-3'>
        The Campus Safety Initiative aims to tackle sexual harassment in higher
        educational institutions through a comprehensive approach. Our strategy
        is built on four key pillars
      </p>
      <ul className='tab-content-list'>
        <li>
          Research and Policies : We advocate for the enactment and institutionalization of policy and legal frameworks at the national, sub-national, and institutional levels.
        </li>
        <li>
          Bystander Intervention: It is built on a competency framework that supports students, faculty, and staff to assume the social responsibility of preventing and responding to sexual harassment.

        </li>
        <li>
          Preventative Education: It is a co-creation process that mainstreams prevention into institutional practices and culture through various methodologies.

        </li>
        <li>
          Technology Integration: Leveraging technology for case reporting, data
          collection, access to information services, and dissemination of
          institutional policies.
        </li>
      </ul>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Outcomes
      </h3>
      <p>Anticipated outcomes are across systems, people, and organizational levels. </p>
      <ul className='tab-content-list'>
        <li>
          The enactment/formulation of legal and policy frameworks for adoption and implementation across all Tertiary Education institutions.
        </li>
        <li>
          Strengthened institutional accountability mechanisms.

        </li>
        <li>
          Mainstreamed preventative education

        </li>
        <li>
          Empowered and supported students to report and access justice.
        </li>
        <li>
          Reduced vulnerability and increased feeling of safety of students

        </li>
        <li>
          Active participation of female students in decision making process on prevention and response.
        </li>
      </ul>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Goal
      </h3>
      <p>
        We have an aspirational goal of ending sexual harassment in educational environments by ensuring that women and girls have healthy, safe, and equitable access to education without experiences of sexual harassment.

      </p>

    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Learning Points
      </h3>
      <ul className='tab-content-list'>
        <li>
          External effort to address sexual harassment should be participatory
          to enable institutions take ownership of the process.
        </li>
        <li>
          When Institutions own such processes, they will create an enabling
          environment for such policy frameworks to thrive.
        </li>
        <li>
          Adopting the bottom-top approach has proven more effective in
          mobilizing interest of key stakeholders.
        </li>
        <li>
          Institutions are more interested in efforts that will strengthen their
          institutional capacity to be more responsive.
        </li>
      </ul>
    </>,
  ];

  return (
    <>
      <Header />
      <PageIntro title='Campus Safety Initiative' />
      <SpacedSection bottom top>
        <Container className='pb-28 md:px-8'>
          <div className='md:flex md:gap-x-10'>
            <div className='mb-6 px-4 md:mb-0 md:w-[55%] md:px-0 lg:w-[60%]'>
              <TabElement
                name='csi'
                tabs={[
                  'Summary',
                  'Problem',
                  'Approach',
                  'Outcome',
                  'Goal',
                  'Learnings',
                ]}
                tabContent={tabContents}
              />
            </div>
            <div className='shadow-primary rounded-primary mx-auto w-[95%] border-tiny border-black-100 p-6 text-black-400 md:w-[45%] md:p-10 lg:w-[40%]'>
              <div>
                <div className='inline-flex flex-col items-start justify-start gap-5'>
                  <div className='inline-flex items-start justify-start gap-5 self-stretch'>
                    <div className='inline-flex shrink grow basis-0 flex-col items-start justify-center gap-3'>
                      <div className='inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary-50 p-[15px] text-primary-500'>
                        <RiBankLine />
                      </div>
                      <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                        <h3 className='font-heading text-4xl font-semibold text-black-500'>
                          20
                        </h3>
                        <div className='shrink grow basis-0 leading-none capitalize'>
                          subnational   <br />
                          regions
                        </div>
                      </div>
                    </div>
                    {/* second col */}
                    <div className='w-[0.50px] self-stretch bg-[#b3b3b3]' />
                    <div className='inline-flex shrink grow basis-0 flex-col items-start justify-center gap-3'>
                      <div className='inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary-50 p-[15px] text-primary-500'>
                        <MdGroups />
                      </div>
                      <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                        <h3 className='font-heading text-4xl font-semibold text-black-500'>
                          107

                        </h3>
                        <div className='shrink grow basis-0 leading-none capitalize'>
                          tertiary <br /> institutions
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* thrid col */}
                  <div className='h-[0.50px] self-stretch bg-[#b3b3b3]' />
                  <div className='inline-flex items-start justify-start gap-5 self-stretch'>
                    <div className='inline-flex shrink grow basis-0 flex-col items-start justify-center gap-3'>
                      <div className='inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary-50 p-[15px] text-primary-500'>
                        <MdEditDocument />
                      </div>
                      <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                        <h3 className='font-heading text-4xl font-semibold text-black-500'>
                          88
                        </h3>
                        <div className='shrink grow basis-0 leading-none capitalize'>
                          MoUs
                          <br />
                          co-executed
                        </div>
                      </div>
                    </div>
                    <div className='w-[0.50px] self-stretch bg-[#b3b3b3]' />
                    <div className='inline-flex shrink grow basis-0 flex-col items-start justify-center gap-3'>
                      <div className='inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary-50 p-[15px] text-primary-500'>
                        <HiDocumentDuplicate />
                      </div>
                      <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                        <h3 className='font-heading text-4xl font-semibold text-black-500'>
                          36

                        </h3>
                        <div className='shrink grow basis-0 leading-none capitalize'>
                          sub-nationals -
                          <br />
                          Policy Dissemination
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* forth col */}
                  <div className='h-[0.50px] self-stretch bg-[#b3b3b3]' />
                  <div className='inline-flex items-start justify-start gap-5 self-stretch'>
                    <div className='inline-flex shrink grow basis-0 flex-col items-start justify-center gap-3'>
                      <div className='inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary-50 p-[15px] text-primary-500'>
                        <MdCalendarMonth />
                      </div>
                      <div className='inline-flex items-start justify-start gap-2 self-stretch'>
                        <h3 className='font-heading text-4xl font-semibold text-black-500'>
                          889
                        </h3>
                        <div className='shrink grow basis-0 leading-none capitalize'>
                          Campus <br /> Champions
                          {/* <br />
                          Policy Dissemination */}
                        </div>
                      </div>
                    </div>
                    <div className='w-[0.50px] self-stretch bg-[#b3b3b3]' />
                    <div className='inline-flex shrink grow basis-0 flex-col items-start justify-center gap-3'>
                      <div className='inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary-50 p-[15px] text-primary-500'>
                        <HiCash />
                      </div>
                      <div className='inline-flex items-start justify-start gap-2 self-stretch'>
                        <h3 className='font-heading text-4xl font-semibold text-black-500'>
                          75
                        </h3>
                        <div className='shrink grow basis-0 leading-none capitalize'>
                          operational policies
                          <span className="opacity-0" >this is just to hold the line </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
