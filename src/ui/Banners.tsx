import Link from 'next/link';

export function DonationBanner() {
  return (
    <div className='banner md:rounded-primary block min-h-[250px] items-center justify-start bg-[url("/images/bg/banner-2-mobile.png")] px-8 py-8 md:flex md:bg-[url("/images/bg/banner-2.png")] md:px-16 md:py-16 lg:min-h-[450px] lg:px-24 lg:py-24'>
      <div className='text-white lg:w-1/2'>
        <h2 className='mb-4 text-[1.6em] font-semibold leading-[120%] md:text-[2.5em]'>
          Every norm we break. Every voice we protect. Starts with you.
          {/* <br /> way */}
        </h2>
        <p className='leading-[160%] text-black-50'>
          Your support fuels the frontline; from campuses to communities. This
          isn’t just a donation. It’s an act of defiance against silence.
        </p>
        <div className='pb-6 pt-10'>
          <Link
            href='/make-donation'
            className='btn inline-block rounded-full border border-white px-6 py-2 font-heading text-white hover:bg-white hover:text-black-500'
          >
            Fuel the Change
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
          Need Support? <br /> We’re Just a Call Away.
        </h2>
        <p className='leading-[160%] text-black-50'>
          At Gender Mobile, you’re never alone. Our dedicated team is here to
          walk with you, whether you need guidance, trusted resources, or simply
          someone who will listen. Reach out. We’re ready when you are.
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
