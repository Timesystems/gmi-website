import Header from '@/ui/Header';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import { HeadingTitle } from '@/ui/Elements';
import { Input, Textarea, Select } from '@headlessui/react';

export default function GalleryPage() {
  return (
    <>
      <Header />
      <PageIntro title='Contact Us' />
      <SpacedSection bottom top>
        <Container>
          <div className='mx-3 mt-4 flex flex-wrap items-start justify-center gap-y-6 text-black-500 md:flex-nowrap md:gap-x-10 md:gap-y-0 lg:gap-x-16'>
            {/** Help links */}
            <div className='rounded-primary w-full border border-black-100 px-8 py-8 text-[1.1rem] md:w-[350px] lg:w-[420px]'>
              <h3 className='mb-3 text-xl fpont-semibold leading-[1.8rem] md:text-2xl md:leading-[2rem]'>
                There a various ways you can reach us!
              </h3>
              <div className='border-t border-black-100 py-4 md:py-3'>
                <h5 className='my-2 text-lg font-semibold text-primary-500 md:my-1'>
                  Request a call
                </h5>
                <span>Just request a call and we will call you</span>
              </div>
              <div className='border-t border-black-100 py-4 md:py-3'>
                <h5 className='my-2 text-lg font-semibold text-primary-500 md:my-1'>
                  Send a Message
                </h5>
                <span>We are here to listen and help</span>
              </div>
              <div className='border-t border-black-100 py-4 md:py-3'>
                <h5 className='my-2 text-lg font-semibold text-primary-500 md:my-1'>
                  Report a Case
                </h5>
                <span>We treat every case with urgency</span>
              </div>
            </div>
            {/** Help link ends */}

            {/** Contact Us form */}
            <div className='rounded-primary w-full border border-black-100 px-8 py-8 md:w-[50%] md:px-10 md:py-10'>
              <div>
                <HeadingTitle className='before:content-["Contact_Us"]'>
                  Need Assistance? <br />
                  We&apos;re Here to Help!
                </HeadingTitle>
                <p className='text-black-400'>
                  Fill the information below, and we will call you as quickly as
                  we can!
                </p>
              </div>
              <div>
                <div className='grid grid-cols-1 grid-rows-5 gap-y-4 md:grid-cols-2 md:grid-rows-3 md:items-end md:gap-x-8 md:gap-y-6 lg:gap-x-10'>
                  <div>
                    <Input
                      type='text'
                      placeholder='First Name / Last Name'
                      className='w-full border-b border-black-100 py-3 placeholder:text-black-300 data-[focus]:border-primary-500 data-[focus]:placeholder:text-black-500'
                    />
                  </div>
                  <div>
                    <Input
                      type='text'
                      placeholder='Email'
                      className='w-full border-b border-black-100 py-3 placeholder:text-black-300 data-[focus]:border-primary-500 data-[focus]:placeholder:text-black-500'
                    />
                  </div>
                  <div>
                    <Input
                      type='text'
                      placeholder='Phone Number'
                      className='w-full border-b border-black-100 py-3 placeholder:text-black-300 data-[focus]:border-primary-500 data-[focus]:placeholder:text-black-500'
                    />
                  </div>
                  <div>
                    <Select
                      aria-label='Select your Gender'
                      className='w-full border-b border-black-100 py-3 placeholder:text-black-300 data-[focus]:border-primary-500 data-[focus]:placeholder:text-black-500'
                    >
                      <option value=''>Gender</option>
                      <option value='Female'>Female</option>
                      <option value='Male'>Male</option>
                      <option value='Others'>Others</option>
                    </Select>
                  </div>
                  <div className='md:col-span-2'>
                    <Textarea
                      placeholder='Your Message'
                      rows={1}
                      className='w-full border-b border-black-100 py-3 placeholder:text-black-300 data-[focus]:border-primary-500 data-[focus]:placeholder:text-black-500'
                    />
                  </div>
                </div>
                <div className='mt-4 md:mt-6'>
                  <button className='btn-primary'>Send Message</button>
                </div>
              </div>
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
