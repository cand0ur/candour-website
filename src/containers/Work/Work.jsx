import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { WorkContent } from '../../constants/WorkContent';
import { officeImage } from '../../constants/assets';

const Work = () => {
  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 0.7 },
        })
        .from('#heading', { yPercent: -100 })
        .from('#desc', { yPercent: 100 }, '-=0.5')
        .from('#work > img', { scale: 0 }, '-=0.5');
    },
    { scope: container }
  );

  return (
    <section ref={container}>
      <div
        id='work'
        className='max-w-[1264px] mx-auto px-4 xl:px-0 pt-24 lg:pt-32'>
        <h1
          id='heading'
          className='text-4xl md:text-[60px] text-center font-extrabold text-text-default mx-auto font-grotesk md:leading-[64px] max-w-5xl mb-2 lg:mb-6'>
          We do great work that our customers are proud to show off
        </h1>
        <p
          id='desc'
          className='text-text-secondary max-w-4xl text-center mx-auto leading-8'>
          At Candour, we offer IT services that our customers appreciate. We
          support your business with quality IT solutions. Let's build success
          together!
        </p>
        <img src={officeImage} alt='image' className='mt-10 mb-8 lg:mb-16' />
        <h1 className='text-4xl md:text-[60px] text-center font-extrabold text-text-default mx-auto font-grotesk leading-tight'>
          Selected projects
        </h1>

        <div className='flex justify-center xl:justify-normal flex-wrap gap-6 mt-6 mb-32'>
          {WorkContent.map(({ id, image, description, tag, link }) => (
            <Link
              to={`/work/${link}`}
              key={id}
              className='relative bg-white rounded-2xl work-card-shadow cursor-pointer md:w-[500px] xl:w-fit'>
              <p className='absolute top-6 left-6 rounded-[4px] text-white text-sm py-1 px-2 bg-darkGray200'>
                {tag}
              </p>
              <span className='relative'>
                <img src={image} alt='image' className='w-full rounded-t-lg' />
                <div className='hidden lg:block bg-darkGrayBlack/70 hover:bg-transparent absolute top-0 right-0 bottom-0 left-0 rounded-t-lg transition-all ease-in-out duration-300' />
              </span>
              <p className='py-4 px-6 text-lg md:text-xl font-medium font-grotesk text-text-default'>
                {description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
