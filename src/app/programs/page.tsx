'use client';
import Header, { programsList } from '@/ui/Header';
import type { Metadata } from 'next';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';
import { RiBankLine } from 'react-icons/ri';
import { MdGroups, MdEditDocument, MdCalendarMonth } from 'react-icons/md';
import { HiDocumentDuplicate, HiCash } from 'react-icons/hi';
import { DonationBanner } from '@/ui/Banners';
import TabElement from '@/ui/TabElement';
import Image from 'next/image';
import Link from 'next/link';

// export const metadata: Metadata = {
//   title: `Gender Equality and Combating Gender-Based Violence Programs `,
//   description: `Learn how Gender Mobile Initiative is transforming systems, culture, and practices to achieve intersectional gender equality and eliminate sexual and gender-based violence through policy interventions, research, awareness, education, and technology adoption.`,
//   keywords: [
//     `gender equality`,
//     `gender-based violence`,
//     `women's empowerment`,
//     `intersectional gender equality`,
//     `systems change`,
//     `policy interventions`,
//     `research`,
//     `awareness`,
//     `education`,
//     `technology adoption`,
//   ],
// };
export default function AllProgramsPage() {
  return (
    <>
      <Header />
      <PageIntro title='Gender Mobile Programs' boxWidth='max-w-[22.5rem]' />
      <SpacedSection bottom top>
        <Container className='px-4 pb-28 md:px-8'>
          <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
            {programsList?.slice(0, 7)?.map((item, i) => {
              return (
                <div className='relative h-[400px] w-full' key={i}>
                  <div className='flex-auto'>
                    {item.external ? (
                      <a href={item.href} className='block' target='_blank'>
                        <Image
                          src={`/images/programs/Image_${i + 1}.png`}
                          alt='Gallery Image'
                          fill
                          className='rounded-primary'
                          style={{
                            objectFit: `cover`,
                            objectPosition: `center`,
                          }}
                        />
                      </a>
                    ) : (
                      <Link href={item.href} className='block'>
                        <Image
                          src={`/images/programs/Image_${i + 1}.png`}
                          alt='Gallery Image'
                          fill
                          className='rounded-primary'
                          style={{
                            objectFit: `cover`,
                            objectPosition: `center`,
                          }}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
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
