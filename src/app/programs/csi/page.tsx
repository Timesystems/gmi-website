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
        Understanding the Problem
      </h3>
      <p>
        The prevalence of sexual harassment can be attributed to various
        factors, including:
      </p>
      <ul className='tab-content-list'>
        <li>Poor Responses: Both at individual and institutional levels.</li>
        <li>
          Lack of Comprehensive Policies: Many institutions lack clear policies
          addressing sexual harassment.
        </li>
        <li>
          Ineffective Implementation: Even when policies exist, they are often
          poorly implemented.
        </li>
        <li>
          Lack of Reporting Channels: Students may feel reluctant to report
          incidents due to a lack of accessible reporting channels.
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
          Research and Policies: We advocate for the development and
          implementation of robust policies to address sexual harassment on
          campuses.
        </li>
        <li>
          Bystander Intervention: Encouraging students and staff to intervene
          and support victims when witnessing instances of harassment.
        </li>
        <li>
          Preventative Education: Providing educational programs and workshops
          to raise awareness about sexual harassment and empower individuals to
          recognize and prevent it.
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
        Our Impact
      </h3>
      <p>
        Drawing from personal angle stories collected from various Nigerian
        institutions, including Afe Babalola University, Ado-Ekiti, Ede
        Polytechnic, Tai Solarin University, and Lagos State University, we
        understand the urgency of addressing this issue. By implementing
        sustainable strategies that complement and reinforce one another, we aim
        to create safer and more respectful learning environments for all
        students.
      </p>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Deliverables of the Project
      </h3>
      <ul className='tab-content-list'>
        <li>
          Provide technical support to institutions through their policy
          validation process.
        </li>
        <li>
          Provide a mini grant to support logistical demands during the process
        </li>
        <li>
          Print up to 100 copies of the policy to be distributed across faculty
          libraries
        </li>
        <li>
          Build the capacity of 100 Campus Ambassadors in each Institution.
        </li>
        <li>
          Support Institutions to set up an independent Sexual Harassment
          Prohibition Committee. 
        </li>
        <li>Handover the Mobile Application Platform to each Institution.</li>
      </ul>
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
                  'Impact',
                  'Deliverables',
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
                          101
                        </h3>
                        <div className='shrink grow basis-0 leading-none'>
                          Interested <br />
                          Institutions
                        </div>
                      </div>
                    </div>
                    <div className='w-[0.50px] self-stretch bg-[#b3b3b3]' />
                    <div className='inline-flex shrink grow basis-0 flex-col items-start justify-center gap-3'>
                      <div className='inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary-50 p-[15px] text-primary-500'>
                        <MdGroups />
                      </div>
                      <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                        <h3 className='font-heading text-4xl font-semibold text-black-500'>
                          62
                        </h3>
                        <div className='shrink grow basis-0 leading-none'>
                          Management <br /> Meeting Held
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='h-[0.50px] self-stretch bg-[#b3b3b3]' />
                  <div className='inline-flex items-start justify-start gap-5 self-stretch'>
                    <div className='inline-flex shrink grow basis-0 flex-col items-start justify-center gap-3'>
                      <div className='inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary-50 p-[15px] text-primary-500'>
                        <MdEditDocument />
                      </div>
                      <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                        <h3 className='font-heading text-4xl font-semibold text-black-500'>
                          38
                        </h3>
                        <div className='shrink grow basis-0 leading-none'>
                          Institutions with
                          <br />
                          Signed MOU
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
                          16
                        </h3>
                        <div className='shrink grow basis-0 leading-none'>
                          Institutions with
                          <br />
                          Policy Template
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='h-[0.50px] self-stretch bg-[#b3b3b3]' />
                  <div className='inline-flex items-start justify-start gap-5 self-stretch'>
                    <div className='inline-flex shrink grow basis-0 flex-col items-start justify-center gap-3'>
                      <div className='inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary-50 p-[15px] text-primary-500'>
                        <MdCalendarMonth />
                      </div>
                      <div className='inline-flex items-start justify-start gap-2 self-stretch'>
                        <h3 className='font-heading text-4xl font-semibold text-black-500'>
                          17
                        </h3>
                        <div className='shrink grow basis-0 leading-none'>
                          Institutions <br />
                          with Scheduled Management Meeting
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
                          10
                        </h3>
                        <div className='shrink grow basis-0 leading-none'>
                          Institutions that <br />
                          have Received the <br />
                          Mini Grant
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
