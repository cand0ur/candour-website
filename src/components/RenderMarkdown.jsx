import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ReactMarkdown from 'react-markdown';
import { arrowLeft } from '../constants/assets';

const WorkProjectContent = ({ markdownContent, imagePC, imageMobile }) => {
  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 0.5 },
        })
        .from('.img', { scale: 0.8 })
        .from('button', { xPercent: 100 }, '-=0.5')
        .from('h1', { yPercent: 100 }, '-=0.1')
        .from('h2, h3, p, li', { opacity: 0 });
    },
    { scope: container }
  );

  const backgroundStyle = {
    backgroundImage: `url(${imagePC})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '688px',
    maxWidth: '1264px',
    borderRadius: '16px',
  };

  return (
    <div ref={container} className='px-4 xl:px-0'>
      <div className='max-w-[1264px] mx-auto'>
        <button
          onClick={() => history.back()}
          className='pt-[120px] flex gap-2 items-center py-4 cursor-pointer'>
          <img src={arrowLeft} alt='arrowleft' />
          <span>Back</span>
        </button>
      </div>
      <div
        className='img hidden md:block mx-auto mt-6 mb-16'
        style={backgroundStyle}
      />
      <img
        src={imageMobile}
        alt='department'
        className='img mt-6 md:hidden mx-auto mb-8'
      />
      <div className='max-w-[1264px] mx-auto'>
        <article className='prose lg:prose-h1:text-[54px] max-w-5xl mx-auto mb-16'>
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default WorkProjectContent;
