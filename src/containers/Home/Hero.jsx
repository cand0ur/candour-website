import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  arrowRightBlue,
  arrowRightWhite,
  backgroundVideo,
} from '../../constants/assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const container = useRef();

  useGSAP(
    () => {
      gsap
        .timeline()
        .from('.background', { opacity: 0, duration: 0.5 })
        .from('.short-tagline', {
          xPercent: -100,
          duration: 0.8,
          opacity: 0,
        })
        .from('.long-tagline', { y: '100', ease: 'back', opacity: 0 })
        .from('a', { y: '100', ease: 'back', opacity: 0 });
    },
    { scope: container }
  );

  return (
    <section ref={container}>
      <div className='background h-screen flex flex-col gap-8 md:items-center justify-center px-4 xl:px-0 bg-gradient-to-r from-[#5723E7CC] from-0% to-[#5723E7CC] to-100% relative'>
        <h1 className='text-surface-default text-[3rem] md:text-8xl leading-[60px] md:leading-none font-extrabold font-grotesk max-w-[818px] text-left md:text-center'>
          <span className='short-tagline font-medium italic text-left inline-block'>
            Creating&nbsp;
          </span>
          <span className='long-tagline inline'>
            amazing digital products and IT solutions
          </span>
        </h1>
        <div>
          <Link
            to='/contact-us'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='flex gap-2 items-center text-action-primary-default hover:text-surface-default bg-surface-default w-fit hover:bg-action-primary-hovered px-6 py-4 rounded-lg text-sm font-semibold'>
            <span>Let's Talk</span>
            <img
              src={isHovered ? arrowRightWhite : arrowRightBlue}
              alt='arrow right'
            />
          </Link>
        </div>
        {/* <div className='h-screen overflow-hidden absolute top-0 left-0 bottom-0 -z-10 object-cover'>
          <video
            src={backgroundVideo}
            autoPlay
            muted
            loop
            height='100%'
            width='100%'
            style={{ objectFit: 'cover', height: '100vh', width: '100vw' }}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
