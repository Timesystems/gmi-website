'use client';
import Header, { programsList } from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';

import { DonationBanner } from '@/ui/Banners';

import Image from 'next/image';

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
                <div
                  className='rounded-primary relative h-[400px] w-full overflow-hidden'
                  key={i}
                >
                  <div className='flex-auto'>
                    <a
                      href={item.href}
                      className='block h-full w-full'
                      target='_blank'
                    >
                      <div className='absolute inset-0 z-20 flex items-end bg-gradient-to-b from-transparent to-[#0B0B09] p-5 md:p-10'>
                        <div className='font-sans text-xl font-bold text-white'>
                          {item?.name}
                        </div>
                      </div>
                      <Image
                        src={`/images/program/p_${i + 1}.png`}
                        alt='Gallery Image'
                        fill
                        className='rounded-primary relative'
                        style={{
                          objectFit: `cover`,
                          objectPosition: `center`,
                        }}
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </SpacedSection>

      {/** Donation Banner  for preview */}
      <SpacedSection bottom top>
        <Container>
          <DonationBanner />
        </Container>
      </SpacedSection>

      <Footer />
    </>
  );
}

// : (
//   <Link href={item.href} className='block'>
//     <Image
//       src={`/images/programs/Image_${i + 1}.png`}
//       alt='Gallery Image'
//       fill
//       className='rounded-primary'
//       style={{
//         objectFit: `cover`,
//         objectPosition: `center`,
//       }}
//     />
//   </Link>
// )
