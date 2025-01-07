import Link from 'next/link';

export function DonationBanner() {
  return (
    <div className='banner md:rounded-primary block min-h-[250px] items-center justify-start bg-[url("/images/bg/banner-2-mobile.png")] px-8 py-8 md:flex md:bg-[url("/images/bg/banner-2.png")] md:px-16 md:py-16 lg:min-h-[450px] lg:px-24 lg:py-24'>
      <div className='text-white lg:w-1/2'>
        <h2 className='mb-4 text-[1.6em] font-semibold leading-[120%] md:text-[2.5em]'>
          Your donation will go a long <br /> way
        </h2>
        <p className='leading-[160%] text-black-50'>
          Today&apos;s input is tomorrow&apos;s output. Donate Now
        </p>
        <div className='pb-6 pt-10'>
          <Link
            href='/make-donation'
            className='btn inline-block rounded-full border border-white px-6 py-2 font-heading text-white hover:bg-white hover:text-black-500'
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export function HelpBanner() {
  return (
    <div className='banner md:rounded-primary block items-center justify-end bg-[url("/images/bg/banner-1-mobile.png")] px-8 py-8 md:flex md:min-h-[250px] md:bg-[url("/images/bg/banner-1.png")] md:px-20 md:py-20 lg:min-h-[450px] lg:px-24 lg:py-24'>
      <div className='text-white lg:w-1/2'>
        <h2 className='mb-4 text-[1.6em] font-semibold leading-[120%] md:text-[2.5em]'>
          Do you Need help? <br /> Gender Mobile is just a call away.
        </h2>
        <p className='leading-[160%] text-black-50'>
          Reach out to our dedicated team of experts who are here to support you
          every step of the way. Whether you need advice, resources, or just a
          listening ear, we&apos;re ready to assist you.
        </p>
        <div className='pb-4 pt-5 md:pb-6 md:pt-10'>
          <Link
            href='/contact-us'
            className='btn inline-block rounded-full border border-white px-6 py-2 font-heading text-white hover:bg-white hover:text-black-500'
          >
            Request a Call
          </Link>
        </div>
      </div>
    </div>
  );
}
