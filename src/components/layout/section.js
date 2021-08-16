import React from 'react';
import styled from 'styled-components'
import { breakpoints } from '../../utils/breakpoints';

const Section = ({ children }) => {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  )
}

export default Section;

const StyledSection = styled.section`
  display: flex;
  margin: 1rem 2rem;

  @media ${breakpoints.md} {
    margin: 5rem 5rem;
  }
`;