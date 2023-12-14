import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { instagramLogo, linkedinLogo, xLogo } from '../../constants/assets';

const Footer = () => {
  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 0.5 },
          scrollTrigger: {
            trigger: '#footer',
            animation: tl.current,
            start: 'top 100%',
            end: '+=3000px',
            toggleActions: 'restart none none reverse',
          },
        })
        .from('#footer', { opacity: 0 });
    },
    { scope: container }
  );

  return (
    <footer ref={container}>
      <div
        id='footer'
        className='px-4 xl:px-0 bg-purple600 py-16 md:py-32 text-surface-default'>
        <div className='flex flex-col md:flex-row gap-6 max-w-[1264px] mx-auto'>
          <div className='md:w-[350px] lg:w-[400px] xl:w-[460px]'>
            <div>
              <h1 className='text-[56px] font-extrabold font-grotesk leading-none'>
                Candour
              </h1>
            </div>
            <div className='flex my-6 gap-4 [&>*]:cursor-pointer'>
              <img src={linkedinLogo} alt='linkedin logo' />
              <img src={xLogo} alt='x logo' />
              <img src={instagramLogo} alt='instagram logo' />
            </div>
            <p className='text-xs max-w-[300px] font-extralight'>
              Candour is offered by Candour Professional Services 2023. All
              rights reserved
            </p>
          </div>
          <div className='flex flex-wrap lg:flex-nowrap flex-row flex-1 justify-between text-sm font-extralight space-y-7 lg:space-y-0'>
            <div className='flex flex-col gap-4'>
              {[
                ['Home', '/'],
                ['Career', '/career'],
                ['About', '/about'],
                ['Contact', '/contact-us'],
                ['Blog', '/blog'],
              ].map(([title, href]) => (
                <Link key={href} to={href}>
                  {title}
                </Link>
              ))}
            </div>
            <ul className='flex flex-col gap-4'>
              {[
                ['Date & Analytics'],
                ['Cloud Services'],
                ['Manage IT Services'],
                ['Software Development'],
              ].map(([title]) => (
                <li key={title}>{title}</li>
              ))}
            </ul>
            <div>
              <p>Candour: info@candouritservices.com</p>
              <p className='max-w-[350px] mt-4 mb-6'>
                Trinity Place, 3 Kalabari Close, Ikoyi, Lagos, Nigeria
              </p>
              <p>Kemp House, 152 - 160 City Road, London, London, EC1V 2NX</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
