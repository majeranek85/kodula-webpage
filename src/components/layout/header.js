import React from 'react';
import styled from 'styled-components';
import Logo from '../common/logo';
import MainMenu from '../features/mainMenu';

const Header = () => {
  return (
    <StyledHeader>
      <Logo title='logo'/>
      <MainMenu/>
    </StyledHeader>
  )
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
`;