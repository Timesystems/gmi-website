import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import TabElement from '@/ui/TabElement';

export default function SkillUpWomenGirlsPage() {
  const tabContents = [
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Executive Summary
      </h3>
      <p className='mb-5'>
        The Food Hub Initiative in Ekiti State uncovered a stark reality: many
        women lacked access to contraceptives and essential reproductive health
        services. Through our helpline, women reached out for support, revealing
        not only their limited access to contraceptives but also their struggles
        with poverty and large families they found difficult to support.
      </p>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Addressing the Gap
      </h3>
      <p className='mb-4'>
        Recognizing the urgent need to address this issue, we launched an
        initiative to promote access to contraceptives and other preventive
        measures. Our goal was not only to empower women with control over their
        reproductive health but also to alleviate the burden of poverty
        exacerbated by unplanned pregnancies and large families.
      </p>

      <p>
        The initiative, aptly named SWAG aims to raise awareness about sexual
        and reproductive health and rights (SRHR) among women in Ekiti State.
        Through SWAG, we provide comprehensive information and access to a range
        of contraceptives and reproductive health services.
      </p>
    </>,
    <>
      <h3 className='mb-3 text-2xl font-semibold text-black-500 md:mb-5'>
        Our Approach
      </h3>
      <p className='mb-5'>
        SWAG operates on multiple fronts to ensure that women have the knowledge
        and resources they need to make informed decisions about their health
        and well-being. Our approach includes:
      </p>
      <ul className='tab-content-list'>
        <li>
          <h6>Education and Awareness</h6>
          We conduct outreach programs and community workshops to educate women
          about the importance of SRHR, family planning, and contraceptive
          options available to them.
        </li>
        <li>
          <h6>Access to Contraceptives</h6>
          We collaborate with healthcare providers and local authorities to make
          contraceptives readily available and affordable to women in Ekiti
          State.
        </li>
        <li>
          <h6>Empowerment and Support</h6>
          We offer counseling and support services to women, empowering them to
          take control of their reproductive health and make decisions that are
          best for themselves and their families.
        </li>
      </ul>
    </>,
  ];

  return (
    <>
      <Header />
      <PageIntro title='Skill Up Women and Girls' />
      <SpacedSection bottom top>
        <Container className='pb-28 md:px-8'>
          <div className='md:flex md:gap-x-10'>
            <div className='md:w-[55%] lg:w-[60%]'>
              <TabElement
                name='skillup'
                tabs={['Summary', 'Problem', 'Approach']}
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
