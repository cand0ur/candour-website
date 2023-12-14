import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Divide as Hamburger } from 'hamburger-react';
import NavItems from '../../constants/NavItems';
import AnimatedLogo from '../../utils/AnimateLogo';

const MobileNav = () => {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [color, setColor] = useState({
    logo: pathname === '/' ? '#fff' : '#151717',
    background: pathname === '/' ? 'transparent' : 'white',
    backdrop: pathname === '/' ? 'backdrop-blur-md' : '',
  });

  const height = useRef(window.innerHeight);

  const determineColor = (path, scrollY) => {
    if (path === '/') {
      return scrollY > height.current
        ? { logo: '#151717', background: 'white', backdrop: '' }
        : {
            logo: '#fff',
            background: 'transparent',
            backdrop: 'backdrop-blur-md',
          };
    } else {
      return { logo: '#151717', background: 'white', backdrop: '' };
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newColor = determineColor(pathname, scrollY);
    setColor(newColor);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, height]);

  return (
    <>
      <nav
        className={`md:hidden fixed w-screen px-4 py-2 flex justify-between items-center z-30 bg-${color.background} ${color.backdrop} transition-all duration-200 ease-in-out`}>
        <Link to='/' className='cursor-pointer'>
          <AnimatedLogo className='w-24' color={color.logo} />
        </Link>
        <Hamburger
          toggled={showMenu}
          toggle={setShowMenu}
          rounded
          size={30}
          color={color.logo}
          label='Show menu'
        />
      </nav>

      <div className='md:hidden'>
        <AnimatePresence>
          {showMenu && (
            <motion.ul
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='navAnimate px-6 py-4 space-y-6 fixed top-16 left-0 right-0 bg-surface-default rounded-b-lg z-20 shadow-2xl'>
              {NavItems.map(({ title, path, subRoute }, idx) => {
                const activeTab = pathname === path;
                return (
                  <a
                    href={path}
                    key={path}
                    onClick={() => setShowMenu(false)}
                    className={`${
                      activeTab || (pathname.includes(path) && subRoute)
                        ? 'text-action-primary-default'
                        : 'text-text-default'
                    } mobile-items text-lg font-medium w-full h-8 transition-all ease-in-out duration-300 block`}>
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 150,
                        damping: 20,
                        delay: 0.1 + idx / 15,
                      }}>
                      {title}
                    </motion.span>
                  </a>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MobileNav;
