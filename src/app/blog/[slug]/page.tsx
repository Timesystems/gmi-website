import type { Metadata } from 'next';
import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import { RelatedBlogClip } from '@/ui/Blog';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import { BlogComment } from '@/ui/BlogComment';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const res = await fetch(`${process.env.API_URL}/blog/${params.slug}`);
  const response = await res.json();
  if (!response) return {};

  const { title, summary, meta, featured_image } = response.data;

  return {
    title,
    description: summary,
    openGraph: {
      title: meta?.title || title,
      description: meta?.description || summary,
      url: `https://gendermobile.org/blog/${params.slug}`,
      siteName: `Gendermobile`,
      locale: `en_US`,
      type: `website`,
      images: featured_image ? [{ url: featured_image }] : [],
    },
  };
}

export default async function BlogViewPage({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(`${process.env.API_URL}/blog/${params.slug}`);
  const response = await res.json();
  if (!response) return null;

  const { id, title, summary, body, read_time, meta } = response.data;

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
      <PageIntro title={title} subtitle={`GenderMobile`} />
      <SpacedSection bottom>
        <Container>
          <div className='gap-5 px-6 py-10 md:flex md:gap-16'>
            <div className='w-full max-w-[47.625rem]'>
              <div
                className='blog-body'
                dangerouslySetInnerHTML={{ __html: body }}
              />

              <BlogComment />
            </div>

            <div className='mt-6 md:mt-0 md:w-[35%]'>
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
      {/* <SpacedSection bottom>
        <Container>
          <DonationBanner />
        </Container>
      </SpacedSection> */}

      {/** Footer */}
      <Footer />
    </>
  );
}
