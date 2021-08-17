import React from 'react';
import { Container } from 'react-bootstrap';
import Section from '../layout/section';
import Tabs from '../common/tabs';

/* DATA */

const services = [
  {
    name: 'strony internetowe',
    description: 'Lorem ipsum Strony internetowe Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus congue diam purus enim nibh. Neque, cras id aliquet urna scelerisque arcu condimentum vitae sed. Erat dis augue sed tempus, urna. Adipiscing enim amet, mauris libero, tristique tristique accumsan vitae aliquam. Cursus consectetur ultricies quam eget eros. Elementum nisi, arcu iaculis integer ultrices id duis. Molestie habitant ac dictumst viverra. Aenean risus, felis ut mi ridiculus nam tellus pharetra diam. Adipiscing eu purus netus lacus nulla. Sed eu viverra ac tellus. Orci, sit quis vitae amet amet nam mi aenean. Sed est est diam laoreet ac imperdiet. Vestibulum velit auctor massa amet. Tincidunt a ultrices massa augue vestibulum eget nisl, sem libero. Vestibulum nulla eu eu volutpat. Dictum quis in diam magna arcu lorem gravida vestibulum faucibus. Mauris mauris amet erat aliquam. Leo nunc nec nibh adipiscing elit posuere id tortor. Velit amet, vestibulum semper tristique maecenas facilisis suspendisse et aliquam. In faucibus odio facilisi massa mollis euismod. Sagittis ultrices convallis tellus arcu nisl amet eu lobortis odio. Elementum, ullamcorper et lectus nunc, amet nisi massa. Vel tempor nunc, ullamcorper sapien praesent sodales vulputate feugiat orci.',
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