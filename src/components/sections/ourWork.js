import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Container, Row, Col } from 'react-bootstrap';
import Section from '../layout/section';
import styled from 'styled-components';
//import Button from '../common/button';
//import theme from '../../utils/theme';

const OurWork = () => {

  /* DATA */

  const data = useStaticQuery(graphql`
  {
    allImageSharp {
      nodes {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  console.log(data);

  const images = data.allImageSharp.nodes

  return (
    <Section bgLightSecond>
      <Container>
        <StyledTitle>NASZE REALIZACJE</StyledTitle>
        <Row>
          {images.map((item, id) => (
            <Col xs={12} md={4} key={id}>
              <StyledFigure>
              <Img fluid={item.fluid} alt="hero" />
                {/* <figcaption>{item.name}</figcaption> */}
              </StyledFigure>
            </Col>
          ))}
        </Row>
        {/* <StyledBtn>ZOBACZ DALEJ</StyledBtn> */}
      </Container>
    </Section>
  );
};

export default OurWork;

/* STYLE */

const StyledTitle = styled.h2`
  margin-bottom: 2rem;
`;

const StyledFigure = styled.figure`
  background: lightgray;
  height: 276px;
  margin: 1em;
`;

// const StyledBtn = styled(Button)`
//   margin: 3rem auto;
//   background: transparent;
// `;
