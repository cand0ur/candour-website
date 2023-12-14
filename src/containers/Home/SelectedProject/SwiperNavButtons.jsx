import { useSwiper } from 'swiper/react';
import { arrowLeftBlack } from '../../../constants/assets';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className='flex justify-end gap-5 mr-5 mt-8 lg:hidden'>
      <button onClick={() => swiper.slidePrev()}>
        <img
          src={arrowLeftBlack}
          alt='arrowleft'
          className='p-2 bg-[#EDEDED] rounded-full'
        />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <img
          src={arrowLeftBlack}
          alt='arrowleft'
          className='p-2 bg-[#EDEDED] rounded-full rotate-180'
        />
      </button>
    </div>
  );
};
