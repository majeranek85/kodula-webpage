import React from 'react';
import Layout from '../components/layout';
//import Button from '../components/common/button';
import Tabs from '../components/common/tabs';

/* DATA */
const services = [
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
];

const Home = () => {
  return (
    <Layout>
      {/*<Tabs>
        {services.map((service) => (
          <article key={service.name} label={service.name}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </Tabs>*/}
    </Layout>
  );
}

export default Home;
