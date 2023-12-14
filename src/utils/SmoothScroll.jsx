import React, {
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useScroll, useTransform, useSpring, motion } from 'framer-motion';

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  const [pageHeight, setPageHeight] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );

    scrollRef && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useScroll();

  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);

  const physics = { damping: 15, mass: 0.27, stiffness: 60 };

  const spring = useSpring(transform, physics);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const shouldShowButton = scrollPosition > pageHeight / 4;

    setShowButton(shouldShowButton);
  }, [pageHeight]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (!showButton) {
      const timeoutId = setTimeout(() => {
        setShowButton(false);
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [showButton]);

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }}
        className='fixed top-0 left-0 w-full overflow-hidden will-change-transform'>
        {children}
      </motion.div>

      <div style={{ height: pageHeight }} />

      <motion.button
        style={{ opacity: showButton ? 1 : 0 }}
        className='fixed bottom-5 right-5 z-40 bg-black rounded-full p-1 cursor-pointer transition-opacity duration-300 animate-bounce'
        onClick={() => window.scrollTo({ top: 0 })}>
        <svg
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          className='-rotate-90 w-8 h-8'>
          <path
            d='M5 12H19M19 12L12 5M19 12L12 19'
            stroke='#fff'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </motion.button>
    </>
  );
};

export default SmoothScroll;
