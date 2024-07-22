export function DonationBanner() {
  return (
    <div className='banner flex min-h-[250px] items-center justify-start rounded-[20px] bg-[url("/images/bg/banner-2-mobile.png")] px-16 py-16 md:bg-[url("/images/bg/banner-2.png")] lg:min-h-[450px] lg:px-24 lg:py-24'>
      <div className='w-1/2 text-white'>
        <h2 className='mb-4 text-[2.5em] font-semibold leading-[120%]'>
          Your donation will go a long <br /> way
        </h2>
        <p className='leading-[160%] text-black-50'>
          Today&apos;s input is tomorrow&apos;s output. Donate Now
        </p>
        <div className='pb-6 pt-10'>
          <a
            href='#'
            className='btn inline-block rounded-full border border-white px-6 py-2 font-heading text-white hover:bg-white hover:text-black-500'
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
}

export function HelpBanner() {
  return (
    <div className='banner flex min-h-[250px] items-center justify-end rounded-[20px] bg-[url("/images/bg/banner-1-mobile.png")] px-16 py-16 md:bg-[url("/images/bg/banner-1.png")] lg:min-h-[450px] lg:px-24 lg:py-24'>
      <div className='w-1/2 text-white'>
        <h2 className='mb-4 text-[2.5em] font-semibold leading-[120%]'>
          Do you Need help? <br /> Gender Mobile is just a call away.
        </h2>
        <p className='leading-[160%] text-black-50'>
          Reach out to our dedicated team of experts who are here to support you
          every step of the way. Whether you need advice, resources, or just a
          listening ear, we&apos;re ready to assist you.
        </p>
        <div className='pb-6 pt-10'>
          <a
            href='#'
            className='btn inline-block rounded-full border border-white px-6 py-2 font-heading text-white hover:bg-white hover:text-black-500'
          >
            Request a Call
          </a>
        </div>
      </div>
    </div>
  );
}
