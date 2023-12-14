import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Sent = ({ toggleModel }) => {
  return (
    <motion.div className='flex flex-col items-center justify-center text-center bg-white relative rounded-xl py-12 h-full w-full max-w-5xl'>
      <button
        onClick={toggleModel}
        className='absolute top-3 right-5 px-3 py-1 rounded-full bg-black text-white font-bold text-2xl'>
        X
      </button>
      <motion.svg
        width='300'
        height='250'
        viewBox='0 -20 50 100'
        initial='hidden'
        animate='visible'>
        <motion.circle
          stroke='#009444'
          strokeWidth={3}
          fill='transparent'
          cx={26}
          cy={26}
          r={28}
          variants={draw}
        />
        <motion.path
          stroke='#009444'
          strokeWidth={3}
          strokeLinecap='round'
          variants={draw}
          fill='transparent'
          d='M14.1 27.2l7.1 7.2 16.7-16.8'
        />
      </motion.svg>
      <span className='text-lg text-paragraph'>Message Sent Successfully!</span>
    </motion.div>
  );
};

export default Sent;
