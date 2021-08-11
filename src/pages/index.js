import React from 'react';
import Layout from '../components/layout';
//import Button from '../components/common/button';
//import Tabs from '../components/common/tabs';
import Splash from '../components/sections/splash'
import TimePriceDetails from '../components/sections/timePriceDetails';

/* DATA */
/*const services = [
  {
    name: 'strony internetowe',
    description: 'Lorem ipsum Strony internetowe',
  },
  {
    name: 'pozycjonowanie',
    description: 'Lorem ipsum Pozycjonowanie',
  },
  {
    name: 'social media',
    description: 'Lorem ipsum Social media',
  },
];*/

const Home = () => {
  return (
    <Layout>
      <Splash />
      <TimePriceDetails />
    </Layout>
  );
}

export default Home;
