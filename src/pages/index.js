import React from 'react';
import Layout from '../components/layout';
import OurWork from '../components/sections/ourWork';
import Services from '../components/sections/services';
import Splash from '../components/sections/splash'
import TimePriceDetails from '../components/sections/timePriceDetails';
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <Layout>
      <Element name='splash'>
        <Splash />
        <TimePriceDetails />
      </Element>
      <Element name='services'>
        <Services/>
      </Element>
      <Element name='our-work'>
        <OurWork/>
      </Element>
    </Layout>
  );
}

export default Home;
