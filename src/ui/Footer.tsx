import Image from 'next/image';
import Logo from '@/assets/images/logo_light.svg';
import { Container, SpacedSection } from '@/ui/Layouts';
import { BsTwitterX, BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';

function Footer() {
  return (
    <SpacedSection>
      <Container className='rounded-[20px] bg-primary-50 px-8 py-10 text-black-400 md:px-10 md:py-16'>
        <div className='grid grid-cols-7 grid-rows-1 gap-20 border-b border-black-100 py-4 text-[0.88em] md:pb-10 md:pt-6'>
          <div className='col-span-2'>
            <Image src={Logo} alt='GenderMobile logo' />
            <p className='mt-2'>
              We envision a gender-equitable society devoid of all forms of
              sexual and gender-based violence.
            </p>
          </div>
          <div>
            <h5 className='text-base font-semibold text-black-200'>
              Quick Links
            </h5>
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Contact Us</a>
              </li>
              <li>
                <a href='#'>Jobs</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className='text-base font-semibold text-black-200'>
              Resources
            </h5>
            <ul>
              <li>
                <a href='#'>Annual Reports</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
              <li>
                <a href='#'>Press Release</a>
              </li>
              <li>
                <a href='#'>Publications/Research</a>
              </li>
            </ul>
          </div>
          <div>
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
                <a href='#'>Make a Donation</a>
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
          </div>
        </div>
        <div className='flex justify-between py-4 text-[0.88em]'>
          <div className='col-span-3 grid grid-cols-4 grid-rows-1 gap-10'>
            <div>
              <p>
                3, S.D Dan Iya Close, <br />
                Guzape, FCT, Abuja.
              </p>
            </div>
            <div className='col-span-2'>
              <p>
                Wuraola House, Ori- Apata, <br />
                Fiyinfoluwa Street, Ado-Ekiti, Ekiti State.
              </p>
            </div>
            <div className=''>
              <p>
                <a href='tel:0700 000 0002'>0700 000 0002</a> <br />
                <a href='mailtoinfo@gendermobile.org'>info@gendermobile.org</a>
              </p>
            </div>
          </div>
          <div className='col-span-2 grid grid-cols-2 grid-rows-1'>
            <div>
              <ul>
                <li className='mr-3 inline-block'>
                  <a
                    href='#endregion'
                    className='inline-block rounded-full border border-primary-500 px-2 py-2 text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
                  >
                    <ImFacebook />
                  </a>
                </li>
                <li className='mr-3 inline-block'>
                  <a
                    href='#endregion'
                    className='inline-block rounded-full border border-primary-500 px-2 py-2 text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li className='mr-3 inline-block'>
                  <a
                    href='#endregion'
                    className='inline-block rounded-full border border-primary-500 px-2 py-2 text-primary-500 transition-colors duration-300 hover:bg-primary-500 hover:text-white'
                  >
                    <BsTwitterX />
                  </a>
                </li>
                <li className='mr-3 inline-block'>
                  <a
                    href='#endregion'
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
