import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { work1, work2, work3, work4, work5 } from '../../../constants/assets';
import { SwiperNavButtons } from './SwiperNavButtons';

import 'swiper/css';
import 'swiper/css/navigation';

const SwiperProjects = () => {
  return (
    <div id='cards' className='overflow-hidden mx-auto relative'>
      <Swiper
        className='over-x-scroll px-4 mx-4 static'
        slidesPerView={'auto'}
        modules={[Navigation]}
        navigation={true}
        spaceBetween={20}>
        {[
          [work1, '/work/department-for-business'],
          [work2, '/work/barking-dagenham'],
          [work3, '/work/office-for-national-statistics'],
          [work4, '/work/traderzmart'],
          [work5, '/work/food-junkee'],
        ].map(([image, link]) => (
          <SwiperSlide key={link} style={{ width: 'fit-content' }}>
            <Link to={link}>
              <img
                src={image}
                alt='work1'
                className='w-[310px] h-[367px] lg:w-[550px] lg:h-full border border-white'
              />
            </Link>
            <div className='overlay hidden lg:block bg-darkGrayBlack/70 hover:bg-transparent absolute top-0 right-0 bottom-0 left-0 rounded-t-lg transition-all ease-in-out duration-300' />
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
      {[
        'hidden md:block absolute top-0 right-0 w-[110%] overflow-hidden z-10',
        'hidden md:block absolute bottom-0 left-0 w-[110%] overflow-hidden rotate-180 z-10',
      ].map((classNames, index) => (
        <div key={index} className={classNames}>
          <svg
            className='h-16 w-[calc(100%+100px)]'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'>
            <path
              d='M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z'
              fill='#fff'></path>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default SwiperProjects;
