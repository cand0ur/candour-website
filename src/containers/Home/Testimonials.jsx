import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { testimonial } from '../../constants/assets';

const Testimonials = () => {
  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 1 },
          scrollTrigger: {
            trigger: '#testimonial',
            animation: tl.current,
            start: 'top 80%',
            end: '+=3000px',
            toggleActions: 'restart none none reverse',
          },
        })
        .from('h2', { xPercent: -100 })
        .from('p', { xPercent: 100 }, '<')
        .from('img', { scale: 0, ease: 'back' });
    },
    { scope: container }
  );

  return (
    <section ref={container}>
      <div
        id='testimonial'
        className='max-w-[1264px] mx-auto my-32 px-4 xl:px-0'>
        <h2 className='text-[40px] md:text-[56px] text-center font-extrabold text-text-default font-grotesk leading-none w-fit mx-auto'>
          Testimonials
        </h2>
        <p className='text-text-secondary text-center mt-2 w-fit mx-auto'>
          Here is what some of our clients have to say about us
        </p>
        <img src={testimonial} alt='map' className='mt-24' />
      </div>
    </section>
  );
};

export default Testimonials;
