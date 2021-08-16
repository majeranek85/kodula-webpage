import React from 'react';
import { Container } from 'react-bootstrap';
import Section from '../layout/section';
import Tabs from '../common/tabs';

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

const Services = () => {
  return (
    <Section>
      <Container fluid>
        <Tabs>
          {services.map((service) => (
            <article key={service.name} label={service.name}>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
            </article>
          ))}
        </Tabs>
      </Container>
    </Section>
  )
}

export default Services;