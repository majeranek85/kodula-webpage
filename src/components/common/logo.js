import React from 'react';
import styled from 'styled-components';
import theme from '../../utils/theme';

const Logo = ({title, ...props}) =>
<StyledLogo {...props}>
  <a href='/'>{title}</a>
</StyledLogo>

export default Logo;

const StyledLogo = styled.span`
  color: ${theme.text};
  font-weight: 700;
  font-size: 1.5rem;
  width: 30rem;
`;