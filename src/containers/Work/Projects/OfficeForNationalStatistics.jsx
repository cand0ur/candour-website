import {
  arrowLeft,
  office,
  office2,
  office3,
  office4,
  office5,
  officeMobile,
} from '../../../constants/assets';

const backgroundStyle = {
  backgroundImage: `url(${office})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '688px',
  width: '100vw',
};

const OfficeForNationalStatiscs = () => {
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
        src={officeMobile}
        alt='office'
        className='mt-6 md:hidden mx-auto mb-8'
      />

      {/* SECTION TWO */}
      <div>
        <h1 className='text-[40px] md:text-[54px] font-extrabold text-text-default mx-auto font-grotesk leading-tight'>
          Office for National Statistics (ONS)
        </h1>
        <p className='py-4 text-text-default text-2xl font-semibold'>
          Office for National Statistics (ONS)
        </p>
      </div>

      {/* SECTION THREE */}
      <div className='flex flex-col md:flex-row mt-8 lg:mt-16'>
        <h1 className='flex-1 text-[24px] md:text-[54px] font-bold text-text-default md:mx-auto font-grotesk leading-tight'>
          Overview
        </h1>
        <p className='flex-1 text-text-secondary leading-8'>
          Candour collaborated with the Office for National Statistics (ONS) to
          create an innovative web application and API that supersedes the
          services previously provided by the Royal Mail. The application's core
          function is to verify UK addresses and deliver a corresponding UPRN.
          With versatile search capabilities, users can opt for single or bulk
          searches. The system is accessible via a user-friendly front end and a
          well-documented API.
        </p>
      </div>

      {/* SECTION FOUR */}
      <div className='flex items-center justify-center w-full bg-surface-subdued py-8 my-8 lg:my-16'>
        <img src={office2} alt='office image' />
      </div>

      {/* SECTION FIVE */}
      <div className='flex flex-col md:flex-row'>
        <h1 className='flex-1 text-[24px] md:text-[54px] font-bold text-text-default md:mx-auto font-grotesk leading-tight'>
          The Challenge
        </h1>
        <ul className='flex-1 list-disc ml-6 lg:ml-0'>
          {[
            'Transitioning from a well-established service to a novel, efficient platform.',
            ' Ensuring high accuracy and speed in address verification.',
            'Building a system capable of handling vast volumes of queries, both single and bulk.',
            'Incorporating both front-end and API access to accommodate varied user preferences.',
          ].map((text, index) => (
            <li key={index} className='text-text-secondary mb-4 leading-8'>
              {text}
            </li>
          ))}
        </ul>
      </div>

      {/* SECTION SIX */}
      <div className='flex items-center justify-center w-full bg-surface-subdued py-8 my-8 lg:my-16'>
        <img src={office3} alt='office image' />
      </div>

      {/* SECTION SEVEN */}
      <div className='flex flex-col md:flex-row'>
        <h1 className='flex-1 text-[24px] md:text-[54px] font-bold text-text-default md:mx-auto font-grotesk leading-tight'>
          How we delivered
        </h1>
        <ul className='flex-1 list-disc ml-6 lg:ml-0'>
          {[
            "Candour's team utilised advanced data science methodologies, ensuring the application had superior matching accuracy.",
            'The backbone of the application was meticulously designed to be robust, scalable, and efficient.',
            ' User engagement sessions were conducted, resulting in a documentation that encompassed Themes, Features, User Personas, and User Stories, ensuring the final product was tailored to user needs.',
            'We initiated the project by developing UI wireframes and prototypes. This was followed by the development of the API and web application, leveraging technologies such as Java, Scala, AWS, and Cloudera.',
            ' A detailed API document was created using Swagger, ensuring that any external integration would be seamless.',
          ].map((text, index) => (
            <li key={index} className='text-text-secondary mb-4 leading-8'>
              {text}
            </li>
          ))}
        </ul>
      </div>

      {/* SECTION EIGHT */}
      <div className='flex items-center justify-center w-full bg-surface-subdued py-8 my-8 lg:my-16'>
        <img src={office4} alt='office image' />
      </div>

      {/* SECTION NINE */}
      <div className='flex items-center justify-center w-full bg-surface-subdued py-8 mb-8 lg:mb-16'>
        <img src={office5} alt='office image' />
      </div>

      {/* SECTION TEN */}
      <div className='flex flex-col md:flex-row mb-20'>
        <h1 className='flex-1 text-[24px] md:text-[54px] font-bold text-text-default md:mx-auto font-grotesk leading-tight'>
          The benefits
        </h1>
        <ul className='flex-1 list-disc ml-6 lg:ml-0'>
          {[
            'ONS no longer had to continue the recurring Royal Mail license fees, leading to substantial long-term savings.',
            'By sourcing data from the Postal Address File (PAF) and National Address Gazetteer (NAG), Address Index system outperformed Royal Mail in terms of accuracy.',
            "The platform's dual accessibility via the front end and the API ensured that users could interact with the system in a manner most convenient to them.",
            'Implementing state-of-the-art security protocols, the new system guaranteed the confidentiality and integrity of user data.',
            'The feedback from ONS was overwhelmingly positive. They appreciated the tangible benefits in terms of cost savings, accuracy, and system performance.',
            'The digital verification process reduced the carbon footprint by minimising the use of paper and physical resources.',
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

export default OfficeForNationalStatiscs;
