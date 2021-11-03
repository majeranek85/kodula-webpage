import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import Button from '../common/button';
import theme from '../../utils/theme';
import Section from '../layout/section';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Splash = () => {

  /* DATA */

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "splashimg.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  // console.log(data);

  return (
    <Section paddingBottomNone fullHeight ClassName="splash">
      <Container fluid>
        <Row>
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
            <StyledImage>
              <Img fluid={data.image.childImageSharp.fluid} alt="hero" />
            </StyledImage>
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
            <StyledText>
              <h1> TWORZENIE STRON INTERNETOWYCH </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.</p>
              <p>Facilisis dui lacus mauris eu magna lectus sit ligula.</p>
              <StyledBtnDesktop className="btn">Zamawiam</StyledBtnDesktop>
            </StyledText>
          </Col>
          <StyledBtnMobile xs={{ order: 3 }}>
            <Button>Zamawiam</Button>
          </StyledBtnMobile>
        </Row>
      </Container>
    </Section>
  );
};

export default Splash;

/* STYLE */

const StyledImage = styled.div`
  height: 100%;
  width: 100%;
  background: lightgray;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${breakpoints.lg} {
    max-width: 450px;
    max-height: 450px;
  }

  @media ${breakpoints.xl} {
    max-width: 700px;
    max-height: 700px;
  }
`;

const StyledText = styled.div`
  h1 {
    font-size: 1.7rem;
    font-weight: bold;
    margin-top: 3rem;
    margin-bottom: 3rem;
    position: relative;
    letter-spacing: 2px;

    ::after {
      position: absolute;
      content: '';
      background: ${theme.secondaryLight};
      width: 92px;
      height: 5px;
      bottom: -20px;
      left: 0;
    }
  }

  p {
    font-family: 'Orbitron';
    font-size: 1.12rem;
  }

  .btn {
    margin-top: 2rem;
  }

  @media ${breakpoints.md} {
    h1 {
      font-size: 2rem;
    }
  }

  @media ${breakpoints.lg} {
    h1 {
      font-size: 2rem;
      ::after {
        width: 267px;
      }
    }

    p {
      font-size: 1.5rem;
    }

    .btn {
      margin-top: 4rem;
    }
  }

  @media ${breakpoints.xl} {
    h1 {
      font-size: 3.25rem;
    }
  }
`;

const StyledBtnDesktop = styled(Button)`
  display: none;

  @media ${breakpoints.lg} {
    display: block;
  }
`;

const StyledBtnMobile = styled(Col)`
  display: flex;
  justify-content: center;

  @media ${breakpoints.lg} {
    display: none;
  }
`;
