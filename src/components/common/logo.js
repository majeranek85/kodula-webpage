import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import theme from '../../utils/theme';
import { Link } from 'react-scroll';

const Logo = ({ title, ...props }) =>
  <StyledLogo {...props}>
    <Link to='home' href='/'>{title}</Link>
  </StyledLogo>

export default Logo;

const StyledLogo = styled.div`
  background: lightgray;
  color: ${theme.text};
  font-weight: 700;
  font-size: 2.5rem;
  width: 190px;
  height: 82px;
  text-align: center;

  @media ${breakpoints.md} {
    width: 100%;
    height: 100%;
  }
`;