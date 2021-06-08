import React from 'react';
import styled from 'styled-components';
import Section from '../layout/section'

const Splash = () => {
  return (
    <Section>
      <StyledImage>Image</StyledImage>
      <StyledText>
        <h1> TWORZENIE STRON INTERNETOWYCH </h1>
      </StyledText>
      
    </Section>
  )
}

export default Splash;

const StyledImage = styled.div`
  flex: 40%;
`;
const StyledText = styled.div`
  flex: 60%;
`;