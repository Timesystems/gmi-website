import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import { BlogClip } from '@/ui/Blog';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';

export default function BlogListPage() {
  const blogs = [
    {
      title: ``,
      description: ``,
      link: `/blog/ending-genderbased-violence`,
      category: ``,
      coverImage: ``,
      date: ``,
    },
    {
      title: ``,
      description: ``,
      link: `/blog/ending-genderbased-violence`,
      category: ``,
      coverImage: ``,
      date: ``,
    },
    {
      title: ``,
      description: ``,
      link: `/blog/ending-genderbased-violence`,
      category: ``,
      coverImage: ``,
      date: ``,
    },
    {
      title: ``,
      description: ``,
      link: `/blog/ending-genderbased-violence`,
      category: ``,
      coverImage: ``,
      date: ``,
    },
    {
      title: ``,
      description: ``,
      link: `/blog/ending-genderbased-violence`,
      category: ``,
      coverImage: ``,
      date: ``,
    },
    {
      title: ``,
      description: ``,
      link: `/blog/ending-genderbased-violence`,
      category: ``,
      coverImage: ``,
      date: ``,
    },
    {
      title: ``,
      description: ``,
      link: `/blog/ending-genderbased-violence`,
      category: ``,
      coverImage: ``,
      date: ``,
    },
    {
      title: ``,
      description: ``,
      link: `/blog/ending-genderbased-violence`,
      category: ``,
      coverImage: ``,
      date: ``,
    },
    {
      title: ``,
      description: ``,
      link: `/blog/ending-genderbased-violence`,
      category: ``,
      coverImage: ``,
      date: ``,
    },
    {
      title: ``,
      description: ``,
      link: `/blog/ending-genderbased-violence`,
      category: ``,
      coverImage: ``,
      date: ``,
    },
  ];

  return (
    <>
      <Header />
      <PageIntro
        title='Blog Posts'
        subtitle='Dive into the GMI blog to discover thought-provoking articles, inspiring stories, and actionable tips on gender and sexual based violence.'
      />
      <SpacedSection top bottom>
        <Container>
          <div className='mx-auto px-6 md:w-[90%] md:px-0 lg:w-[80%]'>
            <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-6'>
              {blogs.map((_, index) => (
                <BlogClip
                  key={index}
                  title='Effect of CO2 in our Environment'
                  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sed vulputate mi sit ame.'
                  category='AutoMobile'
                  coverImage='/images/bg/get-involved.jpg'
                  link={_.link}
                  date='Mar 16, 2024'
                />
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
