import React, { Suspense, lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import SmoothScroll from '../utils/SmoothScroll';
import Layout from '../containers/Layout/Layout';
import Footer from '../containers/Layout/Footer';
import AnimatedLogo from '../utils/AnimateLogo';

const HomePage = lazy(() => import('../pages/HomePage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const WorkPage = lazy(() => import('../pages/WorkPage'));
const WorkProjectsPage = lazy(() => import('../pages/WorkProjectsPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const BlogPostPage = lazy(() => import('../pages/BlogPostPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));

const routes = () => {
  return (
    <Suspense
      fallback={
        <div className='flex items-center justify-center h-screen bg-white'>
          <AnimatedLogo
            className='w-[10rem] md:w-[20rem] lg:w-[30rem]'
            color='#151717'
          />
        </div>
      }>
      <Routes>
        <Route
          path=''
          element={
            <>
              <Layout>
                <SmoothScroll>
                  <Outlet />
                  <Footer />
                </SmoothScroll>
              </Layout>
            </>
          }>
          <Route index element={<HomePage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/work' element={<WorkPage />} />
          <Route path='/work/:project' element={<WorkProjectsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:post' element={<BlogPostPage />} />
          <Route path='/contact-us' element={<ContactPage />} />
        </Route>
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};

export default routes;
