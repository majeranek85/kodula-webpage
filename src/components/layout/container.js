import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';
import theme from '../../utils/theme';

const Container = ({children}) =>
<StyledContainer>
  {children}
</StyledContainer>

export default Container;

const StyledContainer = styled.div`
  @media ${breakpoints.md} {
    width: 80vw;
    margin: 0 auto;
  }
`;