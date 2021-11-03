import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import { Link, animateScroll as scroll } from 'react-scroll';
import  LogoSvg  from '../../icons/logo.svg';

const toggleHome = () => {
  scroll.scrollToTop();
};

const Logo = ({ ...props }) => (
  <StyledLogo {...props}>
    <Link to="/" onClick={toggleHome}>
      <LogoSvg />
    </Link>
  </StyledLogo>
);

export default Logo;

/* STYLE */

const StyledLogo = styled.div`
  a {
    cursor: pointer;
    width: 100%;

    svg {
      max-height: 82px;
      //padding-right: 0.6em;
    }

    &:hover {
      transform: scale(1.05);
      transition: 0.3s;
    }
  }

  @media ${breakpoints.lg} {
    a {
      svg {
        max-height: 100%;
        width: 100%;
      }
    }
  }
`;
