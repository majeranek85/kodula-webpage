import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from "../../images/logo.svg";
import smallLogo from '../../images/logo-small.svg'

const toggleHome = () => {
  scroll.scrollToTop();
};

const Logo = ({...props }) =>
  <StyledLogo {...props}>
    <Link to='/' onClick={toggleHome}>
      <img src={document.documentElement.clientWidth < 768 ? smallLogo : logo} alt='logo'/>
    </Link>
  </StyledLogo>

export default Logo;

const StyledLogo = styled.div`

  @media ${breakpoints.md} {
   a {
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;