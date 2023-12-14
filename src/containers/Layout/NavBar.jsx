import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import NavItems from '../../constants/NavItems';
import AnimatedLogo from '../../utils/AnimateLogo';

const NavBar = () => {
  const { pathname } = useLocation();
  const container = useRef();

  useGSAP(
    () => {
      gsap
        .timeline()
        .from('ul', {
          scale: 0,
          duration: 0.4,
          delay: 0.5,
          opacity: 0,
          ease: 'back(2)',
        })
        .from('ul a', {
          yPercent: 50,
          stagger: 0.1,
          ease: 'back',
          duration: 0.5,
          opacity: 0,
        });
    },
    { scope: container }
  );

  return (
    <nav id='navbar' className='hidden md:block'>
      <Link
        to='/'
        className='absolute top-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-10'>
        <AnimatedLogo
          className='w-24'
          color={pathname === '/' ? '#fff' : '#151717'}
        />
      </Link>

      <div ref={container}>
        <ul className='box-wrapper flex gap-10 px-6 py-3 rounded-lg fixed bottom-16 w-fit left-1/2 transform -translate-x-1/2 bg-surface-default/80 nav-shadow z-50 overflow-hidden'>
          {NavItems.map(({ title, path, subRoute }) => {
            const activeTab = pathname === path;

            return (
              <a
                href={path}
                key={path}
                className={`${
                  activeTab || (pathname.includes(path) && subRoute)
                    ? 'text-action-primary-default after:block after:content-[" "] after:h-[3px] after:bg-action-primary-default after:w-full after:scale-x-100'
                    : 'text-text-default'
                }  text-sm whitespace-nowrap font-medium px-2 py-1 hover:text-action-primary-default`}>
                {title}
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
