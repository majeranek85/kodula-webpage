import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Section from '../layout/section';
import styled from 'styled-components';
import Button from '../common/button';
//import theme from '../../utils/theme';

/* DATA */

const data = [
  {
    name: 'name',
    url: 'http//scarlet-uroda.pl',
    title: 'title',
    alt: 'scarlet',
  },
  {
    name: 'name',
    url: 'http//',
    title: 'title',
    alt: 'alter',
  },
  {
    name:'name',
    url: 'http//',
    title: 'title',
    alt: 'alter',
  },
];

const OurWork = () => {
  return (
    <Section bgLightSecond>
      <Container>
        <StyledTitle>NASZE REALIZACJE</StyledTitle>
        <Row>
          {data.map((item, id) => (
            <Col xs={12} md={4} key={id}>
              <StyledFigure>
                <img src={item.url} alt={item.alt}/>
                <figcaption>{item.name}</figcaption>
              </StyledFigure>
            </Col>
          ))}
        </Row>
        <StyledBtn>ZOBACZ WIĘCEJ</StyledBtn>
      </Container>
    </Section>
  )
}

export default OurWork;


const StyledTitle = styled.h2`
  margin-bottom: 2rem;
`;

const StyledFigure = styled.figure`
  background: lightgray;
  height: 276px;
  margin: 1em;
`;

const StyledBtn = styled(Button)`
  margin: 3rem auto;
  background: transparent;
`;