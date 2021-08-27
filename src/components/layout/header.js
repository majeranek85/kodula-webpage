import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import theme from '../../utils/theme';

import MainMenu from '../features/mainMenu';

const Header = () => {
  return (
    <StyledContainer fluid>
      <StyledHeader>
        <MainMenu />
      </StyledHeader>
    </StyledContainer>
  )
}

export default Header;

const StyledContainer = styled(Container)`
  position: fixed;
  top: 0;
  background: white;
  z-index: 999;
`;

const StyledHeader = styled.header`
  background: ${theme.light};
  /* height: 82px; */
  margin: 0 2rem 1rem 2rem;
  position: relative;
  z-index: 999;
  border-bottom: 5px solid ${theme.secondaryLight};

  @media ${breakpoints.lg} {
    border-bottom: 0;
    margin: 0 3rem 0 3rem;
  }
`;