import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import PrimaryButton from '../../components/PrimaryButton';
import { checkMark, ourProcess } from '../../constants/assets';
import { OurServices, ServicesContent } from '../../constants/ServicesContent';

const Services = () => {
  const [customers, setCustomers] = useState(0);
  const [projects, setProjects] = useState(0);

  const container = useRef();
  const tl = useRef();
  const sectionRefs = useRef([]);

  const animationValues = [0, 0];

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ defaults: { opacity: 0, duration: 0.7, ease: 'back' } })
        .from('#sectionOne h1', { yPercent: -100 })
        .from('#sectionOne #hereToHelpButton', { xPercent: 100 })
        .from('#sectionOne div .desc div p', { opacity: 0, duration: 1 })
        .from('#sectionOne div .desc div div', { y: 50 }, '<');

      tl.current = gsap
        .timeline({ defaults: { duration: 1.5, delay: 1.12 } })
        .to(animationValues, {
          0: 1200,
          1: 2400,
          onUpdate: () => {
            setCustomers(Math.floor(animationValues[0]));
            setProjects(Math.floor(animationValues[1]));
          },
        });

      sectionRefs.current.forEach((sectionRef) => {
        const sectionTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef,
            animation: tl,
            start: 'top 80%',
            end: '+=500px',
            scrub: true,
            toggleActions: 'restart none none reverse',
          },
        });

        sectionTimeline
          .from(`${sectionRef} #content`, { opacity: 0, duration: 0.2 })
          .from(`${sectionRef} img`, { scale: 0 }, '<');
      });

      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 0.5 },
          scrollTrigger: {
            trigger: '#sectionThree',
            animation: tl.current,
            start: 'top 70%',
            end: '+=3000px',
            toggleActions: 'restart none none reverse',
          },
        })
        .from('#sectionThree h2', { xPercent: -100 }, '<')
        .from('#sectionThree #desc', { xPercent: 100 }, '<')
        .from('#sectionThree img', { scale: 0, duration: 1 })
        .from('#sectionThree #content h3', { x: -100, stagger: 0.1 }, '<')
        .from('#sectionThree #content p', { x: 100, stagger: 0.1 }, '-=0.8');
    },
    {
      scope: container,
    }
  );

  return (
    <section ref={container}>
      <section
        id='sectionOne'
        className='pt-32 pb-13 lg:h-screen flex items-center max-w-[1264px] mx-auto px-4 xl:px-0 overflow-hidden'>
        <div>
          <h1 className='flex-1 text-4xl md:text-[56px] font-extrabold text-text-default font-grotesk leading-tight max-w-3xl mb-8'>
            We offer our customers various IT solutions that are tailored to
            their business needs.
          </h1>
          <PrimaryButton>Discuss a Project</PrimaryButton>
          <div className='flex gap-6 [&>span>span]:text-text-secondary [&>span>span]:text-base [&>span>p]:text-2xl md:[&>span>p]:text-xl [&>span>p]:font-bold mt-12 lg:mt-16 desc'>
            <div>
              <p>{customers}</p>
              <div>Satisfied customers</div>
            </div>
            <div>
              <p>{projects}</p>
              <div>Projects completed</div>
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-[1440px] mx-auto mt-16 lg:mb-16'>
        {ServicesContent.map(
          ({ id, title, description, image, items }, index) => (
            <div
              key={id}
              id={`sectionTwo-${index}`}
              ref={() => (sectionRefs.current[index] = `#sectionTwo-${index}`)}
              className={`flex flex-col items-center justify-between gap-4 lg:gap-0 ${
                id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}>
              <div
                id='content'
                className='px-4 xl:px-0 flex-1 grid place-content-center'>
                <div>
                  <h3 className='text-text-default text-2xl font-bold font-grotesk mb-2'>
                    {title}
                  </h3>
                  {description.map(({ id, text }) => (
                    <p
                      key={id}
                      className='text-text-secondary mb-4 leading-8 max-w-[532px]'>
                      {text}
                    </p>
                  ))}
                  <div className='grid md:grid-cols-2 gap-6 whitespace-nowrap max-w-[532px] mt-8'>
                    {items?.map((text) => (
                      <span
                        key={text}
                        className='flex gap-2 text-base text-text-secondary'>
                        <img src={checkMark} alt='checkmark' />
                        <p>{text}</p>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className='flex-1 mb-8 lg:mb-0'>
                <img src={image} alt='title' />
              </div>
            </div>
          )
        )}
      </section>
      <section
        id='sectionThree'
        className='max-w-[1264px] mx-auto mb-16 px-4 lg:px-0'>
        <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row mb-8'>
          <h2 className='flex-1 text-3xl md:text-[56px] font-extrabold text-text-default font-grotesk leading-none md:mx-auto lg:mx-0'>
            Our Process
          </h2>
          <p
            id='desc'
            className='flex-1 lg:text-xl lg:font-medium text-left md:text-center lg:text-left mx-auto max-w-2xl lg:max-w-full'>
            Whether you want to consult on an idea, hand over a project or
            expand your team, we have a process that would work perfectly.
          </p>
        </div>
        <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-0'>
          <div id='content' className='flex-1 space-y-4'>
            {OurServices.map(({ id, title, description }) => (
              <div key={id} className='flex gap-6'>
                <h3 className='text-text-default text-2xl font-bold font-grotesk mb-2'>
                  0{id}.
                </h3>
                <div>
                  <h3 className='text-text-default text-2xl font-bold font-grotesk '>
                    {title}
                  </h3>
                  <p className='text-text-secondary leading-8 max-w-[532px]'>
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex-1'>
            <img src={ourProcess} alt='title' />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
