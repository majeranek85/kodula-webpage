import React from 'react';
import styled from 'styled-components'

const Section = ({children}) => {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  )
}

export default Section;

const StyledSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;