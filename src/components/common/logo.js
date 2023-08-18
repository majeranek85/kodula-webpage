import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';
import  LogoSvg  from '../../icons/logo.svg';

const toggleHome = () => {
  scroll.scrollToTop();
};

const Logo = ({ ...props }) => (
  <StyledLogo {...props}>
    <Link to="/" onClick={toggleHome}>
      <LogoSvg viewBox='110 0 100 100' height='82' />
    </Link>
  </StyledLogo>
);

export default Logo;

/* STYLE */

const StyledLogo = styled.div`
  a {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: start;

    &:hover {
      transform: scale(1.05);
      transition: 0.3s;
    }
  }
`;
