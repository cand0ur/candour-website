import { lazy } from 'react';
import Hero from './Hero';
import OurServices from './OurServices';
import SelectedProject from './SelectedProject/SelectedProject';
const Testimonials = lazy(() => import('./Testimonials'));

const Home = () => {
  return (
    <div>
      <Hero />
      <OurServices />
      <SelectedProject />
      <Testimonials />
    </div>
  );
};

export default Home;
