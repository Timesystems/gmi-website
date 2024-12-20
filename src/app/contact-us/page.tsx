'use client';
import Header from '@/ui/Header';
import { useRef, useState } from 'react';
import { Container, SpacedSection } from '@/ui/Layouts';
import { PageIntro } from '@/ui/Blocks';
import Footer from '@/ui/Footer';
import { DonationBanner } from '@/ui/Banners';
import { HeadingTitle } from '@/ui/Elements';
import { Input, Textarea, Select } from '@headlessui/react';
import { reachUs } from '@/data/site-data';
import { RequestACall, ReportACase, ContactForm } from '@/ui/Contact';

export default function GalleryPage() {
  const [requestCall, setRequestCall] = useState(false);
  const [reportCase, setReportCase] = useState(false);
  const handleRequestCall = (e: boolean) => {
    setRequestCall(e);
  };
  const handleReportCase = (e: boolean) => {
    setReportCase(e);
  };

  const messageInputRef = useRef<HTMLInputElement>(null);
  const handleSendMessageClick = () => {
    messageInputRef.current?.focus();
  };
  const handleFunctions = (id: number) => {
    switch (id) {
      case 1:
        handleRequestCall(true);
        break;
      case 2:
        handleSendMessageClick();
        break;
      case 3:
        handleReportCase(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <PageIntro title='Contact Us' />
      <SpacedSection bottom top>
        <Container>
          <div className='mx-3 mt-4 flex flex-wrap items-start justify-center gap-y-6 text-black-500 md:flex-nowrap md:gap-x-10 md:gap-y-0 lg:gap-x-16'>
            {/** Help links */}
            <div className='rounded-primary w-full border border-black-100 px-8 py-8 text-[1.1rem] md:w-[350px] lg:w-[420px]'>
              <h3 className='mb-3 text-xl font-semibold leading-[1.8rem] md:text-2xl md:leading-[2rem]'>
                There are various means to reach us.
              </h3>

              {reachUs?.map(({ id, title, description }) => {
                return (
                  <button
                    key={id}
                    className='w-full border-t border-black-100 py-4 text-left md:py-3'
                    onClick={() => handleFunctions(id)}
                  >
                    <h5 className='my-2 text-lg font-semibold text-primary-500 md:my-1'>
                      {title}
                    </h5>
                    <span>{description}</span>
                  </button>
                );
              })}
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
              <ContactForm messageInputRef={messageInputRef} />
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
      {/** Modals  */}
      <RequestACall
        isOpen={requestCall}
        handleModalStatus={(e) => handleRequestCall(e)}
      />
      <ReportACase
        isOpen={reportCase}
        handleModalStatus={(e) => handleReportCase(e)}
      />
    </>
  );
}
