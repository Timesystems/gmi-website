'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Logo from '@/assets/images/logo_light.svg';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { PiEnvelopeSimpleFill } from 'react-icons/pi';
import {
  BsFillTelephoneFill,
  BsEnvelopeAt,
  BsEnvelope,
  BsEnvelopeAtFill,
  BsEnvelopeFill,
  BsTelephone,
} from 'react-icons/bs';

const aboutUs = [
  {
    name: `About Us`,
    href: `/about`,
  },
  {
    name: `Our Team`,
    href: `/our-team`,
  },
];

const programsList = [
  {
    name: `Campus Safety Initiative`,
    href: `/programs/csi`,
  },
  {
    name: `Ending Violence against Women and Girls`,
    href: `/programs/girl-women-violence`,
  },
  {
    name: `Adolescent Wellness Hub`,
    href: `/programs/adolescent-wellness`,
  },
  {
    name: `Skill Up Women and Girls`,
    href: `/programs/skillup`,
  },
  {
    name: `Food Hub`,
    href: `/programs/foodhub`,
  },
  {
    name: `WOWANi`,
    href: `#`,
  },
  {
    name: `CampusPal`,
    href: `#`,
  },
];

const resourcesList = [
  {
    name: `Impact Reports`,
    href: `#`,
  },
  {
    name: `Blog`,
    href: `#`,
  },
  {
    name: `Press Releases`,
    href: `#`,
  },
  {
    name: `Publications/Research`,
    href: `#`,
  },
  {
    name: `Interviews/Media Tour`,
    href: `#`,
  },
  {
    name: `News`,
    href: `#`,
  },
  {
    name: `Gallery`,
    href: `#`,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header({ background }: { background?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const pathname = usePathname();

  const sticky = () => {
    if (window.scrollY > 450) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', sticky);

    return () => window.removeEventListener('scroll', sticky);
  }, []);

  return (
    <header
      className={clsx(`font-heading text-[0.9em] text-black-300`, {
        'sticky top-0 z-50 bg-primary-50': isSticky,
        'bg-primary-50': background,
      })}
    >
      <nav
        className='container mx-auto flex items-center justify-between px-1 py-4'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>GenderMobile</span>
            <Image src={Logo} alt='GenderMobile' />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <PopoverGroup className='hidden lg:flex lg:gap-x-8'>
          <Link
            href='/'
            className={clsx(`text-sm leading-6 text-gray-900`, {
              'font-semibold text-primary-500': pathname == '/',
            })}
          >
            Home
          </Link>
          <Popover className='relative'>
            <PopoverButton
              className={clsx(
                `flex items-center gap-x-1 text-sm leading-6 text-gray-900`,
                {
                  'font-semibold text-primary-500':
                    pathname.match('about') || pathname.match('our-team'),
                }
              )}
            >
              About Us
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </PopoverButton>

            <Transition
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <PopoverPanel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-[180px] overflow-hidden rounded-[8px] bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className=''>
                  {aboutUs.map((item) => (
                    <div
                      key={item.name}
                      className='relative rounded-lg px-4 py-2 text-sm transition-colors duration-200 hover:bg-gray-50 hover:text-primary-500'
                    >
                      <div className='flex-auto'>
                        <Link href={item.href} className='block'>
                          {item.name}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <Popover className='relative'>
            <PopoverButton
              className={clsx(
                `flex items-center gap-x-1 text-sm text-gray-900`,
                {
                  'font-semibold text-primary-500': pathname.match('/programs'),
                }
              )}
            >
              Programs
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </PopoverButton>

            <Transition
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <PopoverPanel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-[360px] overflow-hidden rounded-[8px] bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className=''>
                  {programsList.map((item) => (
                    <div
                      key={item.name}
                      className='relative rounded-lg px-4 py-2 text-sm transition-colors duration-200 hover:bg-gray-50 hover:text-primary-500'
                    >
                      <div className='flex-auto'>
                        <Link href={item.href} className='block'>
                          {item.name}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
          <Popover className='relative'>
            <PopoverButton
              className={clsx(
                `flex items-center gap-x-1 text-sm text-gray-900`,
                {
                  'font-semibold text-primary-500': pathname == '/resources',
                }
              )}
            >
              Resources
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </PopoverButton>

            <Transition
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <PopoverPanel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-[250px] overflow-hidden rounded-[8px] bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className=''>
                  {resourcesList.map((item) => (
                    <div
                      key={item.name}
                      className='relative rounded-lg px-4 py-2 text-sm transition-colors duration-200 hover:bg-gray-50 hover:text-primary-500'
                    >
                      <div className='flex-auto'>
                        <a href={item.href} className='block'>
                          {item.name}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
          <a
            href='#'
            className={clsx(`text-sm text-gray-900`, {
              'font-semibold text-primary-500': pathname == '/contact-us',
            })}
          >
            Contact Us
          </a>
        </PopoverGroup>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <div className='flex items-center justify-center gap-x-3'>
            <a
              href='mailto:gendermobile@gmail.com'
              className='inline-block rounded-full border border-primary-500 px-2 py-2 text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
            >
              <PiEnvelopeSimpleFill />
            </a>
            <a
              href='tel:08032336192'
              className='inline-block rounded-full border border-primary-500 px-2 py-2 text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
            >
              <BsTelephone />
            </a>
            <a
              href='#'
              className='btn-primary inline-block px-4 py-2 font-heading text-[0.9em]'
            >
              Donate Now
            </a>
          </div>
        </div>
      </nav>
      <Dialog
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>GenderMobile</span>
              <Image src={Logo} alt='GenderMobile' />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <DisclosureButton className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Programs
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </DisclosureButton>
                      <DisclosurePanel className='mt-2 space-y-2'>
                        {programsList.map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm hover:bg-gray-50'
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base hover:bg-gray-50'
                >
                  Features
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base hover:bg-gray-50'
                >
                  Marketplace
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base hover:bg-gray-50'
                >
                  Company
                </a>
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50'
                >
                  Donate Now
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
