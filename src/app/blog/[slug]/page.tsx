import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import { RelatedBlogClip } from '@/ui/Blog';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';

export default function BlogListPage() {
  const relatedBlogs = [
    {
      title: `Implementation of the School related gender-based violence prevention program in Ijanmodu High school, Ekiti State. Photo credit: Gender Mobile Initiative`,
      link: `#`,
      coverImage: `/images/blog/related-blog-1.png`,
    },
    {
      title: `Image credit: Nigeria Health Watch`,
      link: `#`,
      coverImage: `/images/blog/related-blog-2.png`,
    },
    {
      title: `Gender Mobile Initiative convenes important actors involved in the fight against sexual and gender-based violence to proffer actionable solutions to the problem. Photo Credit — Gender Mobile Initiative`,
      link: `#`,
      coverImage: `/images/blog/related-blog-3.png`,
    },
  ];
  return (
    <>
      <Header />
      <PageIntro
        title='Power in Her Hands: Breaking the Culture of Silence Surrounding Sexual and Gender Based Violence Through Technology'
        subtitle='By Chibuike Alagboso'
      />
      <SpacedSection bottom>
        <Container>
          <div className='px-6 py-10 md:flex md:gap-16'>
            <div className='blog-body md:w-[65%]'>
              <h3>
                Gender-based violence happens to our acquaintances, colleagues,
                friends and, yes, family members.” Anita Hill.
              </h3>

              <p>
                The United Nations Children Fund (UNICEF) puts the number of
                girls who experience sexual violence in Nigeria at one in every
                four. Data makes it possible to measure the true scale of the
                problem. However, for Omowumi Ogunrotimi, the founder and
                Executive Directive of Gender Mobile Initiative (GMI), ‘one in
                every four’ is more than just a statistic, it represents any
                man, woman or child whose life has been forever changed by
                sexual violence.
              </p>

              <p>
                At age 14, Ogunrotimi was sexually abused by a trusted neighbor.
                Despite seeking professional help with the support of her
                family, she was still made to keep silent about the incident;
                the same culture of silence that is perhaps one of the biggest
                challenges to addressing Sexual and Gender-Based Violence
                (SGBV). Two years later, her best friend lost her life while
                trying to terminate a pregnancy that resulted from rape.
                Ogunrontimi said the inability of her friend’s family to afford
                quality medical care after she was raped opened her eyes to how
                social stigma and the culture of “domestic silence” can impede
                access to life-saving healthcare interventions.
              </p>

              <p>
                 Motivated by her experience, engagements with younger girls in
                her community, as well as the current disturbing SGBV trend,
                after completing law school Ogunrotimi and her team set up a
                platform with a simple vision — to build a just and equitable
                society devoid of all forms of gender-based violence. With teams
                now operating out of the Federal Capital Territory (FCT) and
                Ekiti State, GMI has since its inception in October 2017,
                supported SGBV survivors and their families to access emergency
                response services.
              </p>

              <h5>Listening to data</h5>
              <p>
                GMI started as a 24/7 call centre and a web-based platform where
                people could call in to report SGBV cases and are followed up
                with psychosocial, medical, and legal support. Within one year
                of running the call centre, the organisation found that over 80%
                of reports they received came from campus communities. The BBC
                investigative documentary “Sex for Grades” exposed the
                prevalence of sexual abuse in higher education institutions and
                laid bare the power dynamics between lecturers and students that
                enabled the sexual exploitation of female students.
              </p>

              <p>
                GMI then channeled their interventions towards universities
                because, “we adopt a data-driven approach to ensure that
                whatever interventions we are pushing out as a product responds
                to actual problems,” Ogunrotimi said. Their initial idea was a
                simple platform where people can receive information and are
                connected to resources, but they quickly realised that an
                effective response to SGBV cases required them to employ varying
                approaches.
              </p>

              <p>
                In April 2021, they launched the ‘Campus Pal’ mobile app as part
                of their Campus safety initiative. The app leverages technology
                for confidential reporting of SGBV incidents in schools. The
                initiative also involved policy engagements with senior
                management of universities to strengthen their internal
                mechanisms for addressing sexual harassment cases. Dr Helena
                Tsaninomi Emikp-Agbajor, the Director of Linkages and Gender
                Studies at the College of Education, Warri, Delta State said the
                awareness created by GMI has helped to significantly reduce
                cases of sexual harassment in the institution. “GMI initiated
                the idea of the sexual harassment prohibition policy which was
                non-existent in the school before. With the policy, students
                know there’s a system in place to protect them. We hardly hear
                of these cases again,” she said. The management has approved for
                copies of the policy to be printed for distribution to students
                and staff, she proudly added.
              </p>

              <p>
                The campus safety initiative also involves engaging and training
                Campus Ambassadors to support the process of reporting sexual
                abuse in their respective schools. Modupe Adetiba, president of
                the National Association of Female Students is one of the
                ambassadors. She joins GMI on advocacy visits to university
                leadership and recommends universities without sexual harassment
                policies to GMI. This way, GMI can support the drafting of the
                policy and provide technical support for implementation.
              </p>
            </div>
            <div className='md:w-[35%]'>
              {relatedBlogs.map(({ title, link, coverImage }, index) => (
                <div key={`${title}-${index}`} className='mb-4 md:mb-8'>
                  <RelatedBlogClip
                    title={title}
                    link={link}
                    coverImage={coverImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SpacedSection>
      <SpacedSection bottom>
        <Container>
          <DonationBanner />
        </Container>
      </SpacedSection>

      {/** Footer */}
      <Footer />
    </>
  );
}
