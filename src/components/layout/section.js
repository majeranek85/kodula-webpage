import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import theme from '../../utils/theme';

const Section = ({ children, ...props }) => {
  return <StyledSection {...props}>{children}</StyledSection>;
};

export default Section;

/* STYLE */

const StyledSection = styled.section`
  padding: 5rem 2rem 1rem 2rem;
  padding-bottom: ${(props) => (props.paddingBottomNone ? '0' : '1rem')};
  background: ${(props) => (props.bgLightSecond ? theme.secondaryLight : 'white')};

  @media ${breakpoints.lg} {
    padding: 5rem auto;
    padding-bottom: ${(props) => (props.paddingBottomNone ? '0' : '5rem')};
  }
`;
