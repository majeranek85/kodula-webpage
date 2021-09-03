import React from 'react';
import Layout from '../components/layout';
import Button from '../components/common/button';
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

const Styleguide = () => {
  return (
    <Layout>
      <h1>Hello world</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit <a href="\">lumpek</a> anim id est laborum.
      </p>
      <h2>H2 Hello world</h2>
      <h3>H3 Hello world</h3>
      <ul>
        <li>text</li>
        <li>text</li>
      </ul>

      <Button> zamawiam </Button>
      <Button light> zamawiam </Button>
      <Button social> f </Button>
      <Button social light>
        {' '}
        In{' '}
      </Button>

      <Tabs>
        {services.map((service) => (
          <article key={service.name} label={service.name}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </Tabs>
    </Layout>
  );
};

export default Styleguide;
