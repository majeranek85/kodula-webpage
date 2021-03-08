import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import theme from '../../utils/theme';
import Logo from '../common/logo';
import MainMenu from '../features/mainMenu';
import Container from '../layout/container'

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <Logo className='logo' title='KODULA'/>
        <MainMenu />
      </StyledHeader>
    </Container>
  )
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  background: ${theme.light};
  padding: 1em;
  //width: 100vw;
  //flex-direction: column;
  position: relative;
  z-index: 999;
  border-bottom: 5px solid ${theme.secondaryLight};

  @media ${breakpoints.md} {
    border-bottom: 0;
  }

`;