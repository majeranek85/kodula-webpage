import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Section from '../layout/section';
import Tabs from '../common/tabs';
import DotsSvg from '../../icons/dots.svg'
import DotsUpDownSvg from '../../icons/dotsupdown.svg'
import { breakpoints } from '../../utils/breakpoints';

/* DATA */

const services = [
  {
    name: 'strony internetowe',
    description:
      'Strony internetowe tworzymy na Worpressie. Twoją stronę internetową wykonamy na systemie Wordpress. Jest to najpopularniejszy na świecie system przeznaczony do budowy nowoczesnych stron WWW. Jest on systemem CMS - posiada panel zarządzania treścią. Za jego pomocą stronę w przyszłości będzie można edytować myszką (wystarczy podstawowa znajomość obsługi komputera). Największym plusem strony na Wordpressie jest olbrzymie repozytorium dodatków. Dzięki nim w przyszłości można dowolnie rozbudować projektowaną stronę (np. o sklep internetowy)',
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
    <Section style={{position: 'relative', marginBottom: '50px'}}>

        <TopIcon />

      
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
  
        <BottomIcon />

      
    </Section>
  );
}; 

export default Services;


/* STYLE */

const TopIcon = styled(DotsSvg)`
  display: none;
  width: 70px;
  position: absolute;
  top: -10%;
  left: 0;

  @media ${breakpoints.md} {
    display: block;
    width: 120px;
  }
  @media ${breakpoints.lg} {
    width: 170px;
  }

`
const BottomIcon = styled(DotsUpDownSvg)`
  width: 70px;
  position: absolute;
  bottom: -8%;
  right: 0;

  @media ${breakpoints.md} {
    width: 120px;
    bottom: -15%;
  }
  @media ${breakpoints.lg} {
    width: 170px;
    bottom: 0  ;
  }

`
