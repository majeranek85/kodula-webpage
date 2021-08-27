import React from 'react';
import styled from 'styled-components'
import { breakpoints } from '../../utils/breakpoints';
import theme from '../../utils/theme';

const Section = ({ children, ...props }) => {
  return (
    <StyledSection {...props}>
      {children}
    </StyledSection>
  )
}

export default Section;

const StyledSection = styled.section`
  //display: flex;
  //margin: 3rem 2rem 0 2rem;
  /* padding: ${(props) => (props.paddingBottomNone ? '5rem 2rem 0 2rem' : '3rem 2rem')}; */
  padding: 5rem 2rem;
  padding-bottom: ${(props => (props.paddingBottomNone ? '0' : '5rem'))};
  background: ${(props) => (props.bgLightSecond ? theme.secondaryLight : 'white')};

  @media ${breakpoints.lg} {
    /* padding: ${(props) => (props.paddingBottomNone ? '5rem 2rem 0 2rem' : '6rem 2rem')}; */
    padding: 5rem auto;
  }
`;