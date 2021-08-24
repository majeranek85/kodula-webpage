import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import Button from '../common/button'
import theme from '../../utils/theme';
import Section from '../layout/section';

const Splash = () => {
  return (
    <Section ClassName='splash'>
      <Container fluid>
        <Row>
          <Col xs={{ order: 2 }} md={6}>
            <StyledImage>
              <img src={'../../splashimg.jpg'} alt='splash'/>
            </StyledImage>
          </Col>
          <Col xs={{ order: 1 }} md={{ span: 6, order: 2 }} >
            <StyledText>
              <h1> TWORZENIE STRON INTERNETOWYCH </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adiscing elit.</p>
              <p>Facilisis dui lacus mauris eu magna lectus sit ligula.</p>
              {document.documentElement.clientWidth > 768
                ? <Button className='btn'>Zamawiam</Button> : ''
              }
            </StyledText>
          </Col>
          {document.documentElement.clientWidth < 768
            ? <StyledBtn xs={{ order: 3 }} md={0}>
                <Button>Zamawiam</Button>
              </StyledBtn>
            : ''
          }
        </Row>
      </Container>
    </Section>
  )
}

export default Splash;

// const StyledSection = styled.section`
//   //margin: 7rem 2rem 0rem 2rem;
// `;



const StyledImage = styled.div`
  height: 250px;
  width: 250px;
  background: lightgray;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }

  @media ${breakpoints.md} {
    width: 700px;
    height: 700px;
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

    ::after{
      position: absolute;
      content:'';
      background: ${theme.secondaryLight};
      width: 92px;               ;
      height: 5px;
      bottom: -20px;
      left: 0;
    }
  }

  p {
    font-family: 'Orbitron';
    font-size: 1.12rem;
  };

  .btn {
    margin-top: 2rem;
  }

  @media ${breakpoints.md} {
    h1 {
      font-size: 3.25rem;
      ::after{
        width: 267px;
      }
    };

    p {
      font-size: 1.75rem;
      padding-left: 4rem;
      padding-right: 4rem;
    };

    .btn {
      margin-top: 4rem;
    }
  }
`;
const StyledBtn = styled(Col)`
  display: flex;
  justify-content: center;
`;