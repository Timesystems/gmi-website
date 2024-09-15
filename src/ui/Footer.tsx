import Image from 'next/image';
import Logo from '@/assets/images/logo_light.svg';
import Link from 'next/link';
import { Container, SpacedSection } from '@/ui/Layouts';
import { BsTwitterX, BsYoutube, BsInstagram } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import NewsLetterForm from '@/ui/NewsLetterForm';

function Footer() {
  return (
    <SpacedSection>
      <Container className='rounded-[20px] bg-primary-50 px-8 py-10 text-black-400 md:px-10 md:py-16'>
        <div className='grid-cols-1 grid-rows-5 gap-20 border-b border-black-100 py-4 text-[0.88em] md:grid md:pb-10 md:pt-6 lg:grid-cols-7 lg:grid-rows-1'>
          <div className='col-span-2 mb-4 lg:mb-0'>
            <Image src={Logo} alt='GenderMobile logo' />
            <p className='mt-2'>
              We envision a gender-equitable society devoid of all forms of
              sexual and gender-based violence.
            </p>
          </div>
          <div className='mb-4 lg:mb-0'>
            <h5 className='text-base font-semibold text-black-200'>
              Quick Links
            </h5>
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About Us</Link>
              </li>
              <li>
                <Link href='/contact-us'>Contact Us</Link>
              </li>
              <li>
                <a href='#'>Jobs</a>
              </li>
            </ul>
          </div>
          <div className='mb-4 lg:mb-0'>
            <h5 className='text-base font-semibold text-black-200'>
              Resources
            </h5>
            <ul>
              <li>
                <Link href='/impact-reports'>Annual Reports</Link>
              </li>
              <li>
                <Link href='/blog'>Blog</Link>
              </li>
              <li>
                <Link href='/blog'>Press Release</Link>
              </li>
              <li>
                <Link href='/blog'>Publications/Research</Link>
              </li>
            </ul>
          </div>
          <div className='mb-4 lg:mb-0'>
            <h5 className='text-base font-semibold text-black-200'>Actions</h5>
            <ul>
              <li>
                <a href='#'>Report a Case</a>
              </li>
              <li>
                <a href='#'>Request Call</a>
              </li>
              <li>
                <a href='#'>Become a Volunteer</a>
              </li>
              <li>
                <Link href='/make-donation'>Make a Donation</Link>
              </li>
            </ul>
          </div>
          <div className='col-span-2'>
            <h3 className='text-[1.2em] font-semibold text-black-500'>
              Subscribe to Our Newsletter
            </h3>
            <p className='mb-4 mt-2'>
              Subscribe to our newsletter to receive the latest updates and
              exclusive offers.
            </p>
            <NewsLetterForm />
          </div>
        </div>
        <div className='justify-between py-4 text-[0.88em] lg:flex'>
          <div className='col-span-3 grid-cols-4 grid-rows-1 gap-10 lg:grid'>
            {/** Mobile address show only */}
            <div className='mb-4 flex justify-between gap-x-6 lg:hidden'>
              <div className=''>
                <p>
                  3, S.D Dan Iya Close, <br />
                  Guzape, FCT, Abuja.
                </p>
              </div>
              <div className=''>
                <p>
                  Wuraola House, Ori- Apata, <br />
                  Fiyinfoluwa Street, Ado-Ekiti, Ekiti State.
                </p>
              </div>
            </div>
            {/** Mobile address show ends */}

            <div className='mb-4 hidden lg:mb-0 lg:inline-block'>
              <p>
                3, S.D Dan Iya Close, <br />
                Guzape, FCT, Abuja.
              </p>
            </div>
            <div className='col-span-2 hidden lg:inline-block'>
              <p>
                Wuraola House, Ori- Apata, <br />
                Fiyinfoluwa Street, Ado-Ekiti, Ekiti State.
              </p>
            </div>
            <div className='mb-4 lg:mb-0'>
              <p>
                <a href='tel:0700 000 0002'>0700 000 0002</a> <br />
                <a href='mailto:info@gendermobile.org'>info@gendermobile.org</a>
              </p>
            </div>
          </div>

          <div className='col-span-2 mt-10 grid grid-cols-1 grid-rows-2 text-center lg:mt-0 lg:grid-cols-2 lg:grid-rows-1 lg:text-left'>
            <div>
              <ul>
                <li className='mr-3 inline-block'>
                  <a
                    href='https://facebook.com/gendermobile'
                    target='_blank'
                    className='inline-block rounded-full border border-primary-500 px-2 py-2 text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
                  >
                    <ImFacebook />
                  </a>
                </li>
                <li className='mr-3 inline-block'>
                  <a
                    href='https://instagram.com/gendermobile'
                    target='_blank'
                    className='inline-block rounded-full border border-primary-500 px-2 py-2 text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li className='mr-3 inline-block'>
                  <a
                    href='https://x.com/gendermobile_ng'
                    target='_blank'
                    className='inline-block rounded-full border border-primary-500 px-2 py-2 text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
                  >
                    <BsTwitterX />
                  </a>
                </li>
                <li className='mr-3 inline-block'>
                  <a
                    href='https://www.youtube.com/@gendermobile/'
                    target='_blank'
                    className='inline-block rounded-full border border-primary-500 px-2 py-2 text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
                  >
                    <BsYoutube />
                  </a>
                </li>
              </ul>
            </div>
            <div className='copyright text-black-300'>
              <span>Copyright © GMI. All rights reserved.</span>
            </div>
          </div>
        </div>
      </Container>
    </SpacedSection>
  );
}

export default Footer;
