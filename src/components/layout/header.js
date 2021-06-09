import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import theme from '../../utils/theme';
import Logo from '../common/logo';
import MainMenu from '../features/mainMenu';

const Header = () => {
  return (
      <StyledHeader>
        <Logo className='logo' title='KODULA'/>
        <MainMenu />
      </StyledHeader>
  )
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  background: ${theme.light};
  padding: 1em 0;
  //width: 100vw;
  //flex-direction: column;
  position: relative;
  z-index: 999;
  border-bottom: 5px solid ${theme.secondaryLight};

  @media ${breakpoints.md} {
    border-bottom: 0;
  }

`;