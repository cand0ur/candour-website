import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { arrowRightGray, arrowRightWhite } from '../../constants/assets';

const OurServices = () => {
  const [hoveredLink, setHoveredLink] = useState(false);
  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 1 },
          scrollTrigger: {
            trigger: '#services',
            animation: tl.current,
            start: 'top 80%',
            end: '+=3000px',
            toggleActions: 'restart none none reverse',
          },
        })
        .from('h2', { xPercent: -100, duration: 1 })
        .from('#description', { xPercent: 100 }, '-=0.7');

      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 1 },
          scrollTrigger: {
            trigger: '#cards',
            animation: tl.current,
            start: 'top 70%',
            end: '+=3000px',
            toggleActions: 'restart none none reverse',
          },
        })
        .from(
          '#cards a',
          {
            yPercent: 100,
            stagger: 0.1,
            ease: 'back',
            opacity: 0,
          },
          '-=0.5'
        );
    },
    { scope: container }
  );

  return (
    <section ref={container}>
      <div id='services' className='mt-16 md:mt-24 mb-12 md:mb-24'>
        <div className='max-w-[1264px] mx-auto flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0 mb-10 px-4'>
          <h2 className='flex-1 text-3xl md:text-[56px] font-extrabold text-text-default font-grotesk leading-none'>
            Our services
          </h2>
          <p
            id='description'
            className='flex-1 text-text-secondary text-base text-[20px]'>
            At Candour, we are here to help with your IT challenges, providing
            simple solutions across domains like Data Analytics, Cloud Services,
            Managed IT Services, and Software Development. We don't just offer
            services; we create experiences that drive your business towards
            exponential growth and robust digital transformation. Let's work
            together to build and grow your business.
          </p>
        </div>
        <div
          id='cards'
          className='grid grid-cols-2 gap-2 max-w-[1440px] mx-auto'>
          {[
            ['Software Development', 0],
            ['Cloud Services', 1],
            ['Managed IT Services', 2],
            ['Data & Analytics', 3],
          ].map(([title, id]) => (
            <a
              key={id}
              href='/services'
              onMouseEnter={() => setHoveredLink(id)}
              onMouseLeave={() => setHoveredLink(null)}
              className='flex justify-center items-center gap-2 text-surface-default md:text-text-subdued hover:text-surface-default text-sm md:text-2xl md:font-semibold text-center font-grotesk py-4 md:py-16 bg-purple500 md:bg-surface-subdued hover:gap-6 hover:bg-purple500'>
              <p>{title} </p>
              <img
                src={hoveredLink === id ? arrowRightWhite : arrowRightGray}
                alt='arrow'
                className='hidden md:block'
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
