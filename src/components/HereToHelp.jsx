import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import PrimaryButton from './PrimaryButton';

const HereToHelp = () => {
  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 0.7 },
          scrollTrigger: {
            trigger: '#hereToHelp',
            animation: tl.current,
            start: 'top 75%',
            end: '+=3000px',
            toggleActions: 'restart none none reverse',
          },
        })
        .from('h2', { xPercent: -100 })
        .from('p', { xPercent: 100 }, '-=0.7')
        .from('a', { scale: 0, ease: 'back' });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div
        id='hereToHelp'
        className='flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0 mb-10 px-4 xl:px-0 my-12 lg:my-24'>
        <h2 className='flex-1 text-3xl md:text-[56px] font-extrabold text-text-default font-grotesk leading-none mb-2 md:mb-0 md:mr-24'>
          Whatever stage of your journey, we’re here to help
        </h2>
        <div className='flex-1'>
          <p className='text-text-secondary text-base mb-10 leading-8'>
            Our expert teams are ready to assist you at every business phase.
            Whether navigating through Data Analytics, exploring Cloud Services,
            managing IT services, or tailoring Software Development, we offer
            technological help and business advice whenever needed.
          </p>
          <PrimaryButton>Talk To Us For Free</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default HereToHelp;
