import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import { HeadingTitle, TeamMemberBio, TeamMemberImage } from '@/ui/Elements';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import PartnerSlider from '@/ui/PartnerSlider';

export default function OurTeamPage() {
  return (
    <>
      <Header />
      <PageIntro
        title='Our Team'
        subtitle='Meet our dedicated team members who ensure that we drive action towards having a gender equitable society devoid of all forms of sexual and gender-based violence'
      />

      {/** Executive Director section */}
      <SpacedSection top bottom>
        <Container>
          <div className='justify-between md:flex'>
            <div className='md:w-[50%] lg:w-[58%]'>
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
            <div className='md:w-[45%] lg:w-[40%]'>
              <div className='size-full rounded-primary bg-[url("/images/team/omowunmi.png")] bg-cover bg-center bg-no-repeat' />
            </div>
          </div>
        </Container>
      </SpacedSection>
      {/** Partner slider */}
      <Container className='px-4 py-10'>
        <PartnerSlider />
      </Container>

      {/** Rest of the Team section */}
      <SpacedSection top bottom>
        <Container>
          <div className='mb-10 md:mb-14'>
            <HeadingTitle>Team Members</HeadingTitle>
          </div>

          <div className='justify-between md:flex'>
            <div className='md:w-[45%] lg:w-[40%]'>
              <div className='size-full rounded-primary bg-[url("/images/team/feyishola.png")] bg-cover bg-center bg-no-repeat' />
            </div>
            <div className='md:w-[50%] lg:w-[58%]'>
              <TeamMemberBio
                name='Dr. Feyishola Kadiri'
                role='Research and Policy Lead'
                email='feyishola.kadiri@gendermobile.org'
                linkedin='https://linkedin.com/in/ionware'
                biography={[
                  `Dr. Feyishola Kadiri is currently the Research and Policy Lead at Gender Mobile Initiative. Dr. Kadiri is a result-oriented development professional expert with an interest in sustainability at the intersection of economy, society and culture. Presently, Dr. Kadiri has demonstrated experience in gender equality and gender-based violence and extensive experience in policy research and project management.`,
                  `Dr. Kadiri is a Fellow of the Higher Education Academy in the UK, holds a PhD in Management Studies from the University of Essex, an MSc degree in Development Economics and Policy from the University of Manchester, UK, an MBA in General Management from the University of Lagos and a BSc (Hons) in Economics from Ajayi Crowther University.`,
                ]}
                prevClick={{}}
                nextClick={{}}
              />
            </div>
          </div>
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
