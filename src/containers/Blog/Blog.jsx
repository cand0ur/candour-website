import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { featuredArticle, featuredArticleMobile } from '../../constants/assets';
import BlogPostContent from '../../constants/BlogPostContent';

const Blog = () => {
  const [category, setCategory] = useState('All');

  const container = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          defaults: { opacity: 0, duration: 0.7 },
        })
        .from('#featured', { scale: 0 })
        .from('#featured h1', { yPercent: 100 }, '-=0.1')
        .from('#featured p', { scale: 0 }, '-=0.4')
        .from('button', { opacity: 0 }, '-=0.5')
        .from('#post img', { scale: 0, duration: 0.5 }, '-=0.7')
        .from('#post h1', { yPercent: 100, duration: 0.5 }, '-=0.4');
    },
    { scope: container }
  );

  return (
    <section ref={container} className='max-w-[1264px] mx-auto'>
      <div
        id='featured'
        className='pt-24 lg:pt-36 px-4 xl:px-0 max-w-[398px] mx-auto md:max-w-full'>
        <Link
          to='migrating-applications-and-servers-to-microsoft-azure-a-comprehensive-guide'
          className='relative'>
          <img
            src={featuredArticleMobile}
            alt='featured article'
            className='md:hidden mx-auto'
          />
          <img
            src={featuredArticle}
            alt='featured article'
            className='hidden md:block'
          />
          <div className='text-white absolute bottom-12 sm:bottom-[72px] mx-6 z-10 '>
            <p className='text-sm rounded-sm bg-darkGray200 w-fit py-1 px-2 mb-3 lg:mb-6'>
              Featured Article
            </p>
            <h1 className='text-2xl md:text-[40px] lg:text-[52px] font-bold md:font-extrabold font-grotesk leading-[36px] md:leading-tight'>
              Migrating Applications and Servers to Microsoft Azure: A
              Comprehensive Guide
            </h1>
          </div>
          <div className='max-w-[398px] mx-auto md:max-w-full bg-darkGrayBlack/70 hover:bg-transparent absolute top-0 right-0 md:right-1 bottom-0 md:bottom-2 left-0 md:left-1 rounded-2xl transition-all ease-in-out duration-300' />
        </Link>
      </div>
      <div className='overflow-x-scroll button'>
        <div className='flex gap-2 lg:gap-14 whitespace-nowrap mx-auto w-fit mt-8 lg:mt-12 mb-8 px-4 xl:pt-0'>
          {['All', 'Company', 'Cloud Hosting', 'Infrastructure'].map(
            (label) => (
              <button
                key={label}
                onClick={() => setCategory(label)}
                className={`py-2 px-5  rounded-lg ${
                  category === label
                    ? 'text-white bg-[#0A0A0A] transition-colors ease-in-out duration-300'
                    : 'bg-white transition-colors ease-in-out duration-300'
                }`}>
                {label}
              </button>
            )
          )}
        </div>
      </div>

      <div
        id='post'
        className='flex justify-center lg:justify-normal flex-wrap gap-6 mb-32 px-4 xl:px-0'>
        {BlogPostContent.filter((post) => post.category.includes(category)).map(
          (post) => {
            return (
              <Link
                to={`/blog/${post.href}`}
                key={post.title}
                className='w-fit max-w-[398px]'>
                <img
                  src={post.imagePC}
                  alt={post.title}
                  className='hidden lg:block'
                />
                <img
                  src={post.imageMobile}
                  alt={post.title}
                  className='lg:hidden'
                />
                <h1 className='text-lg lg:text-2xl mt-2 text-text-secondary font-semibold lg:font-extrabold font-grotesk lg:leading-tight max-w-[620px]'>
                  {post.title}
                </h1>
              </Link>
            );
          }
        )}
        {BlogPostContent.filter((post) => post.category.includes(category))
          .length === 0 && (
          <p className='mx-auto my-24 lg:text-2xl text-center font-semibold'>
            No posts available for the {category} category!
          </p>
        )}
      </div>
    </section>
  );
};

export default Blog;
