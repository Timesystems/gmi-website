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
      question: `What is the question?`,
      answer: `Lorem ipsum dolor sit amet consectus. Lorem ipsum dolor sit amet consectiusdl lorem Lorem ipsum dolor sit amet consectus. Lorem ipsum dolor sit amet consectiusdl lorem is.`,
    },
    {
      question: `What is the question?`,
      answer: `Lorem ipsum dolor sit amet consectus. Lorem ipsum dolor sit amet consectiusdl lorem Lorem ipsum dolor sit amet consectus. Lorem ipsum dolor sit amet consectiusdl lorem is.`,
    },
    {
      question: `What is the question?`,
      answer: `Lorem ipsum dolor sit amet consectus. Lorem ipsum dolor sit amet consectiusdl lorem Lorem ipsum dolor sit amet consectus. Lorem ipsum dolor sit amet consectiusdl lorem is.`,
    },
    {
      question: `What is the question?`,
      answer: `Lorem ipsum dolor sit amet consectus. Lorem ipsum dolor sit amet consectiusdl lorem Lorem ipsum dolor sit amet consectus. Lorem ipsum dolor sit amet consectiusdl lorem is.`,
    },
    {
      question: `What is the question?`,
      answer: `Lorem ipsum dolor sit amet consectus. Lorem ipsum dolor sit amet consectiusdl lorem Lorem ipsum dolor sit amet consectus. Lorem ipsum dolor sit amet consectiusdl lorem is.`,
    },
    {
      question: `What is the question?`,
      answer: `Lorem ipsum dolor sit amet consectus. Lorem ipsum dolor sit amet consectiusdl lorem Lorem ipsum dolor sit amet consectus. Lorem ipsum dolor sit amet consectiusdl lorem is.`,
    },
  ];
  return (
    <div className='justify-between py-10 text-black-400 md:py-16 lg:flex lg:py-24'>
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
      <div className='lg:w-[52%]'>
        <div className='w-full divide-y divide-black-100 rounded-xl'>
          {faqItems.map(({ question, answer }, index) => (
            <Disclosure as='div' className='py-4 md:py-6' key={`qA-${index}`}>
              <DisclosureButton className='group flex w-full items-center justify-between'>
                <h6 className='font-semibold'>{question}</h6>
                <ChevronDownIcon className='size-5 text-primary-500 group-data-[open]:rotate-180' />
              </DisclosureButton>
              <DisclosurePanel className='mt-2 text-sm/5'>
                {answer}
              </DisclosurePanel>
            </Disclosure>
          ))}
          {/* <Disclosure as='div' className='p-6'>
            <DisclosureButton className='group flex w-full items-center justify-between'>
              <span className='text-sm/6 font-medium'>
                Do you offer technical support?
              </span>
              <ChevronDownIcon className='size-5 fill-white/60 group-data-[open]:rotate-180 group-data-[hover]:fill-white/50' />
            </DisclosureButton>
            <DisclosurePanel className='mt-2 text-sm/5'>No.</DisclosurePanel>
          </Disclosure> */}
        </div>
      </div>
    </div>
  );
}
