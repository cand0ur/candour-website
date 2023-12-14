import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import HereToHelp from '../../components/HereToHelp';
import {
  about,
  aboutMobile,
  aboutOfficeImage,
  officeImage,
} from '../../constants/assets';

const About = () => {
  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 0.7 },
        })
        .from('mainHeading', { xPercent: -100 })
        .from('.mainImg', { xPercent: 100, duration: 0.5 }, '-=0.7');

      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 1 },
          scrollTrigger: {
            trigger: '#secondSection',
            animation: tl.current,
            start: 'top 80%',
            end: '+=3000px',
            toggleActions: 'restart none none reverse',
          },
        })
        .from('#secondSection', { opacity: 0, duration: 1 });

      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 0.7 },
          scrollTrigger: {
            trigger: '#thirdSection',
            animation: tl.current,
            start: 'top 70%',
            end: '+=3000px',
            toggleActions: 'restart none none reverse',
          },
        })
        .from('#thirdSection h2', { x: -200 })
        .from('#thirdSection p', { x: 200 }, '-=0.5')
        .from('#thirdSection img', { opacity: 0 }, '-=0.5');
    },
    { scope: container }
  );

  return (
    <section ref={container} className='pt-24 lg:pt-[140px]'>
      <div id='about'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-0 max-w-[1264px] mx-auto px-4 xl:px-0'>
          <h1
            id='mainHeading'
            className='text-4xl md:text-[56px] font-extrabold leading-[48px] md:leading-[72px] text-text-default font-grotesk md:pl-6 max-w-[610px]'>
            We are confident that investing in our solutions will drive your
            business growth.
          </h1>
          <img src={about} alt='about' className='mainImg hidden md:block' />
          <img
            src={aboutMobile}
            alt='about office'
            className='mainImg md:hidden'
          />
        </div>
        <div
          id='secondSection'
          className='mt-[71px] lg:mt-[162px] mb-4 md:mb-[72px] py-16 md:py-20 bg-purple600 px-4 xl:px-0'>
          <div className='max-w-[960px] mx-auto'>
            <div className='flex flex-col gap-2 md:gap-0 md:grid md:grid-flow-col grid-cols-3 mb-20'>
              <h2 className='text-white text-2xl'>Who we are</h2>
              <p className='col-span-2 text-text-alternate-secondary'>
                A technology company providing engineering-as-a-service
                solutions at scale to organizations across multiple industries.
                We are a team of product, engineering, and design experts
                helping organisations develop world-class products.
              </p>
            </div>

            <div className='max-w-[668px] mx-auto'>
              <p className='text-white w-[298px] text-2xl font-grotesk'>
                “We want to build a world where great ideas and products come to
                fruition quickly whilst achieving the required impact. With our
                expertise and support, we help turn these visions into reality.”
              </p>
              <p className='text-text-alternate-secondary mt-4 font-thin'>
                Taiwo Oshodi - CEO, Candour Professional Services
              </p>
            </div>
          </div>
        </div>
        <div id='thirdSection' className='max-w-[1264px] mx-auto'>
          <div className='px-4 xl:px-0'>
            <h2 className='text-[40px] md:text-[56px] text-center font-extrabold text-text-default font-grotesk leading-none'>
              Our winning formula
            </h2>
            <p className='text-text-secondary text-center mt-4 mb-8 max-w-[668px] mx-auto'>
              We're focused on understanding our customers' goals. When they
              come to us, we turn their ideas into ready-to-use market
              solutions.
            </p>
            <img
              src={aboutOfficeImage}
              alt='office image'
              className='mx-auto md:hidden'
            />
            <img
              src={officeImage}
              alt='office image'
              className='hidden md:block mx-auto'
            />
          </div>
          <div className='pb-8'>
            <HereToHelp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
