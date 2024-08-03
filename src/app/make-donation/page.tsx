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
      <PageIntro
        title='Become a Donor'
        subtitle='You can make your donation by using an online payment gateway to make instant donation or alternatively, you can make deposit to our Bank account. The former is easier, secure and seamless.'
      />
      <SpacedSection bottom top>
        <Container>
          <div className='mx-3 mt-4 flex flex-wrap items-start justify-center gap-y-6 text-black-500 md:flex-nowrap md:gap-x-10 md:gap-y-0 lg:gap-x-16'>
            {/** Contact Us form */}
            <div className='rounded-primary w-full border border-black-100 px-8 py-8 md:w-[50%] md:px-10 md:py-10'>
              <div>
                <HeadingTitle className='before:content-["Donate"]'>
                  Complete donation form
                </HeadingTitle>
                <p className='text-black-400'>
                  Fill the information below to donate now. We appreciate your
                  donation.
                </p>
              </div>
              <div>
                <div className='grid grid-cols-1 grid-rows-6 gap-y-4 md:grid-cols-4 md:grid-rows-3 md:items-end md:gap-x-8 md:gap-y-6 lg:gap-x-10'>
                  <div className='md:col-span-2'>
                    <Input
                      type='text'
                      placeholder='First Name'
                      className='w-full border-b border-black-100 py-3 placeholder:text-black-300 data-[focus]:border-primary-500 data-[focus]:placeholder:text-black-500'
                    />
                  </div>
                  <div className='md:col-span-2'>
                    <Input
                      type='text'
                      placeholder='Last Name'
                      className='w-full border-b border-black-100 py-3 placeholder:text-black-300 data-[focus]:border-primary-500 data-[focus]:placeholder:text-black-500'
                    />
                  </div>
                  <div className='md:col-span-2'>
                    <Input
                      type='text'
                      placeholder='Email'
                      className='w-full border-b border-black-100 py-3 placeholder:text-black-300 data-[focus]:border-primary-500 data-[focus]:placeholder:text-black-500'
                    />
                  </div>
                  <div className='md:col-span-2'>
                    <Input
                      type='text'
                      placeholder='Phone Number'
                      className='w-full border-b border-black-100 py-3 placeholder:text-black-300 data-[focus]:border-primary-500 data-[focus]:placeholder:text-black-500'
                    />
                  </div>
                  <div>
                    <Select
                      aria-label='Choose Currency'
                      className='w-full border-b border-black-100 py-3 placeholder:text-black-300 data-[focus]:border-primary-500 data-[focus]:placeholder:text-black-500'
                    >
                      <option value=''>Currency</option>
                      <option value='NGN'>Naira</option>
                      <option value='USD'>USD</option>
                      <option value='Others'>Ghana Cedis</option>
                    </Select>
                  </div>
                  <div className='md:col-span-3'>
                    <div>
                      <Input
                        type='number'
                        placeholder='Amount'
                        className='w-full border-b border-black-100 py-3 placeholder:text-black-300 data-[focus]:border-primary-500 data-[focus]:placeholder:text-black-500'
                      />
                    </div>
                  </div>
                </div>
                <div className='mt-4 grid grid-cols-1 grid-rows-2 gap-x-4 gap-y-4 md:mt-10 md:grid-cols-2 md:grid-rows-1'>
                  <button className='btn-primary block w-full md:py-3 lg:py-4'>
                    Donate Via Flutterwave
                  </button>
                  <button className='btn-primary-outline block w-full md:py-3 lg:py-4'>
                    Donate Via Paystack
                  </button>
                </div>
              </div>
            </div>

            {/** Bank details */}
            <div className='rounded-primary w-full border border-black-100 px-8 py-8 text-[1.1rem] md:w-[350px] lg:w-[420px]'>
              <h3 className='fpont-semibold mb-3 text-xl leading-[1.8rem] md:text-2xl md:leading-[2rem]'>
                Make Bank Deposit
              </h3>
              <div className='border-t border-black-100 py-4 md:py-3'>
                <h5 className='my-2 text-lg font-semibold text-primary-500 md:my-1'>
                  Bank Name
                </h5>
                <span>Guaranty Trust Bank</span>
              </div>
              <div className='border-t border-black-100 py-4 md:py-3'>
                <h5 className='my-2 text-lg font-semibold text-primary-500 md:my-1'>
                  Account Number
                </h5>
                <span>0259849574</span>
              </div>
              <div className='border-t border-black-100 py-4 md:py-3'>
                <h5 className='my-2 text-lg font-semibold text-primary-500 md:my-1'>
                  Account Name
                </h5>
                <span>Gender Mobile</span>
              </div>
            </div>
            {/** Bank Details end */}
          </div>
        </Container>
      </SpacedSection>

      {/** Footer */}
      <Footer />
    </>
  );
}
