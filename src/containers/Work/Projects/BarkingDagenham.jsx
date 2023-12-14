import {
  arrowLeft,
  barking,
  barkingMobile,
  barking2,
  barking3,
  barking4,
  barking5,
} from '../../../constants/assets';

const backgroundStyle = {
  backgroundImage: `url(${barking})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '688px',
  width: '100vw',
};

const BarkingDagenham = () => {
  return (
    <div className='max-w-[1264px] mx-auto px-4 xl:px-0'>
      <button
        onClick={() => history.back()}
        className='pt-16 lg:pt-28 flex gap-2 items-center py-4 cursor-pointer'>
        <img src={arrowLeft} alt='arrowleft' />
        <span>Back</span>
      </button>

      {/* SECTION ONE */}
      <div
        className='hidden md:block mx-auto mt-6 mb-16 h-[688px] max-w-[1264px] rounded-2xl background-cover background-center'
        style={backgroundStyle}
      />
      <img
        src={barkingMobile}
        alt='department'
        className='mt-6 md:hidden mx-auto mb-8'
      />

      {/* SECTION TWO */}
      <div>
        <h1 className='text-[40px] md:text-[54px] font-extrabold text-text-default mx-auto font-grotesk leading-tight'>
          Website redesign
        </h1>
        <p className='py-4 text-text-default text-2xl font-semibold'>
          London Borough of Barking and Dagenham
        </p>
      </div>

      {/* SECTION THREE */}
      <div className='flex flex-col md:flex-row mt-8 lg:mt-16'>
        <h1 className='flex-1 text-[24px] md:text-[54px] font-bold text-text-default md:mx-auto font-grotesk leading-tight'>
          The Challenge
        </h1>
        <p className='flex-1 text-text-secondary leading-8'>
          Candour undertook redesigning the website for London Borough of
          Barking and Dagenham, a project that demanded a thoughtful blend of
          aesthetics and functionality. The initiative was especially critical
          as a means to ensure that the digital platform fully reflected the
          locale's progressive and dynamic nature. The website needed to be
          user-friendly, easily navigable, and reflective of the LBBD identity,
          providing a seamless digital experience for residents, businesses, and
          visitors exploring the site.
        </p>
      </div>

      {/* SECTION FOUR */}
      <div className='flex items-center justify-center w-full bg-surface-subdued py-8 my-8 lg:my-16'>
        <img src={barking2} alt='department image' />
      </div>

      {/* SECTION FIVE */}
      <div className='flex flex-col md:flex-row'>
        <h1 className='flex-1 text-[24px] md:text-[54px] font-bold text-text-default md:mx-auto font-grotesk leading-tight'>
          How we delivered
        </h1>
        <span className='flex-1'>
          <p className='text-text-secondary mb-4 leading-8'>
            Candour worked with the stakeholders in LBBD to realise the vision
            for the Barking and Dagenham website redesign. Engaging with
            stakeholders, we captured the business requirements and managed
            expectations regarding deliverable facets.
          </p>
          <p className='text-text-secondary leading-8'>
            Our skilled team methodically carried out the project in stages. We
            started with user research to understand needs, then designed
            wireframes followed by detailed high-fidelity prototypes. After
            creating the website's front end, we ran User Acceptance Testing
            (UAT) and automation testing. Each task was thoroughly reviewed to
            ensure quality, and everything was prepped and primed for a
            successful launch.
          </p>
        </span>
      </div>

      {/* SECTION SIX */}
      <div className='flex flex-col xl:flex-row items-center justify-center w-full bg-surface-subdued py-8 my-8 lg:my-16'>
        <img src={barking3} alt='department image' className='' />
        <img src={barking4} alt='department image' />
      </div>

      {/* SECTION SEVEN */}
      <div className='flex items-center justify-center w-full bg-surface-subdued py-8'>
        <img src={barking5} alt='department image' />
      </div>

      {/* SECTION EIGHT */}
      <div className='flex flex-col md:flex-row mt-8 mb-16'>
        <h1 className='flex-1 text-[24px] md:text-[54px] font-bold text-text-default md:mx-auto font-grotesk leading-tight'>
          The benefits
        </h1>
        <ul className='flex-1 list-disc ml-6 lg:ml-0'>
          {[
            'User-Friendly Experience: A streamlined and intuitive user journey throughout the website.',
            'Scalability: A robust and scalable web application tailored to accommodate future growth and development.',
            'Reflective Identity: The redesigned website mirrors the vibrant and progressive spirit of Barking and Dagenham, providing an accurate digital representation.',
            'Enhanced Accessibility: The platform provides easy access and comprehensive information to residents, visitors, and businesses, enriching their digital interaction with LBBD.',
          ].map((text, index) => (
            <li key={index} className='text-text-secondary mb-4 leading-8'>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BarkingDagenham;
