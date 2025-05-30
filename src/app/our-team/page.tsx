import Header from '@/ui/Header';
import type { Metadata } from 'next';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import { HeadingTitle, TeamMemberBio, TeamMemberImage } from '@/ui/Elements';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import PartnerSlider from '@/ui/PartnerSlider';
import TeamMembers from './TeamMembers';

export const metadata: Metadata = {
  title: `Meet Our Team`,
  description: `Get to know our team of dedicated professionals led by Omowumi Ogunrotimi, Esq., a renowned feminist lawyer and systems leader, working together to advance intersectional gender equality.`,
  keywords: [
    `gender equality`,
    `intersectional gender equality`,
    `feminist lawyer`,
    `systems leader`,
    `Omowumi Ogunrotimi`,
    `team`,
    `professionals`,
    `gender-based violence`,
  ],
};

export default function OurTeamPage() {
  return (
    <>
      <Header />
      <PageIntro
        title='Our Team'
        subtitle='Meet our dedicated team members who ensure that we drive action towards having a gender equitable society devoid of all forms of sexual and gender-based violence'
      />

      {/** Executive Director section */}
      {/* <SpacedSection top bottom>
        <Container>
          <div className='flex flex-wrap justify-between md:flex-nowrap'>
            <div className='order-2 w-full md:w-[50%] lg:w-[58%]'>
              <TeamMemberBio
                name='Omowumi Ogunrotimi Esq'
                role='Executive Lead'
                email='omowumi.ogunrotimi@gendermobile.org'
                linkedin='https://linkedin.com/in/ionware'
                biography={[
                  `Omowumi Ogunrotimi is a systems leader and feminist lawyer with an academic background in gender and development studies.`,
                  `She is the founder of Gender Mobile Initiative, an organization working at the intersection of gender, technology and education to advance intersectional gender equality and eliminate gender-based violence through the pillars of intersectionality, women's leadership, accountability, learning and measurement.`,
                ]}
              />
            </div>
            <div className='order-1 h-[350px] w-full md:h-auto md:w-[45%] lg:w-[40%]'>
              <div className='md:rounded-primary size-full bg-[url("/images/team/omowunmi.png")] bg-cover bg-center bg-no-repeat' />
            </div>
          </div>
        </Container>
      </SpacedSection> */}
      {/** Partner slider */}
      {/* <Container className='px-4 py-10'>
        <PartnerSlider />
      </Container> */}

      {/** Rest of the Team section */}
      <SpacedSection top bottom>
        <Container>
          <TeamMembers />
        </Container>
      </SpacedSection>

      {/** Donation Banner */}
      <SpacedSection top bottom>
        <Container>
          <DonationBanner />
        </Container>
      </SpacedSection>

      <Footer />
    </>
  );
}
