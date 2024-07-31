import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { HeadingTitle } from '@/ui/Elements';

function Example() {
  return <div className='h-screen w-full px-4 pt-32'>hey</div>;
}

export default function Faq({ className = '' }: { className?: string }) {
  const faqItems = [
    {
      question: `What is the mission and vision of Gender Mobile Initiative?`,
      answer: `Our mission is facilitating equitable systems and access to justice, forging collaborative advocacy, driving education and re-orientation for prevention and community ownership. Our vision is a gender-equitable society devoid of all forms of gender-based violence. `,
    },
    {
      question: `What are the main focus areas or strategies of Gender Mobile Initiative?`,
      answer: `Our main strategies include Legal Reform and policy advocacy, Research, Technology Adoption, Service Delivery and support, Capacity building and strengthening, Preventative education, Legal Empowerment, and Economic Empowerment.`,
    },
    {
      question: `How can I report a case of abuse or violence?`,
      answer: `We encourage reporting cases of abuse. You can use our helpline or mobile application to report incidents. Remember, don't keep silent.`,
    },
    {
      question: `How can I access the CampusPal Mobile application?`,
      answer: `The CampusPal Mobile application can be downloaded from the Apple App Store and Google Play Store. Links are available on our website. `,
    },
    {
      question: `How can I become a volunteer for Gender Mobile Initiative?`,
      answer: `You can sign up to become a volunteer through our website. We're looking for individuals committed to creating a world devoid of discrimination and violence. `,
    },
    {
      question: `How can I donate to Gender Mobile Initiative?`,
      answer: `You can donate through our website. Your donation will contribute to building a gender-equitable society. `,
    },
    {
      question: `How can I contact Gender Mobile Initiative?`,
      answer: `You can contact us through our website, social media platforms (Instagram, Twitter, Facebook, LinkedIn), or our helpline. `,
    },
  ];
  return (
    <div className='justify-between px-6 py-10 text-black-400 md:px-0 md:py-16 lg:flex lg:py-24'>
      <div className='lg:w-[38%]'>
        <HeadingTitle className='before:content-["FAQ"]'>
          Got Questions? <br />
          We&apos;ve Got Answers!
        </HeadingTitle>
        <p>
          Find answers to commonly asked questions about Gender Mobile
          Initiative, what we do, and how to make become one of us.
        </p>
      </div>
      <div className='mt-6 md:mt-0 lg:w-[52%]'>
        <div className='w-full divide-y divide-black-100 rounded-xl'>
          {faqItems.map(({ question, answer }, index) => (
            <Disclosure as='div' className='py-4 md:py-6' key={`qA-${index}`}>
              <DisclosureButton className='group flex w-full items-start justify-between'>
                <h6 className='text-left font-semibold'>{question}</h6>
                <ChevronDownIcon className='size-5 text-primary-500 group-data-[open]:rotate-180' />
              </DisclosureButton>
              <DisclosurePanel className='mt-2 text-sm/5'>
                {answer}
              </DisclosurePanel>
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}
