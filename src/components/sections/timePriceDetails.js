import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import theme from '../../utils/theme';
import Section from '../layout/section'

const TimePriceDetails = () => {
  return (
    <Section>
      <Container>
        <Row>
          <StyledCol md={6}>
            <h2>ILE KOSZTUJE STRONA?</h2>
            <p>Strona HTML - <span>od 1000zł</span></p>
            <p>Strona z CMS - <span>od 1600zł</span></p>
          </StyledCol>
          <StyledCol md={6}>
            <h2>JAKI JEST CZAS REALIZACJI?</h2>
            <p>Strona HTML - <span>do 4 dni</span></p>
            <p>Strona z CMS - <span>do 7 dni</span></p>
          </StyledCol>
        </Row>
      </Container>
    </Section>
  )
}

export default TimePriceDetails;

const StyledCol = styled(Col)`
  margin-top: 1rem;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;

    span {
      color: ${theme.primary};
      font-weight: 500;
    }
  }
`