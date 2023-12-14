import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import HereToHelp from '../../../components/HereToHelp';

import SwiperProjects from './SwiperProjects';

const SelectedProject = () => {
  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 1 },
          scrollTrigger: {
            trigger: '#selected',
            animation: tl.current,
            start: 'top 80%',
            end: '+=3000px',
            toggleActions: 'restart none none reverse',
          },
        })
        .from('#selected > h2', { y: -80, duration: 0.7, ease: 'back' });

      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 0.5 },
          scrollTrigger: {
            trigger: '#cards',
            animation: tl.current,
            start: 'top 70%',
            end: '+=3000px',
            toggleActions: 'restart none none reverse',
          },
        })
        .from('#cards img', {
          scale: 0,
          stagger: 0.1,
          opacity: 0,
        })
        .from(
          '#cards .overlay',
          {
            scale: 0,
            stagger: 0.1,
            opacity: 0,
          },
          '<'
        );
    },
    { scope: container }
  );

  return (
    <section ref={container}>
      <div id='selected' className='max-w-[1264px] mx-auto'>
        <h2 className='text-3xl md:text-[56px] text-center font-extrabold text-text-default font-grotesk leading-none mb-6'>
          Selected projects
        </h2>
        <SwiperProjects />
        <HereToHelp />
      </div>
    </section>
  );
};

export default SelectedProject;
