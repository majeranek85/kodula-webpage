import React from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import theme from '../../utils/theme';

import MainMenu from '../features/mainMenu';

const Header = () => {
  return (
    <StyledHeader>
      <MainMenu />
    </StyledHeader>
  )
}

export default Header;

const StyledHeader = styled.header`
  background: ${theme.light};
  margin: 0 30px;
  position: relative;
  z-index: 999;
  border-bottom: 5px solid ${theme.secondaryLight};

  @media ${breakpoints.md} {
    border-bottom: 0;
  }
`;