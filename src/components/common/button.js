import React from 'react';
import styled, {css} from 'styled-components';
import theme from '../../utils/theme'


const Button = ({children, ...props}) => {
  return (
    <StyledButton {...props}>{children}</StyledButton>
  )
}

export default Button;

/* Style  default = outlined, secondary color*/

const StyledButton = styled.button`
  width: 244px;
  height: 56px;
  font-family: orbitron;
  text-transform: uppercase;
  border: 3px solid ${theme.secondary};
  border-radius: 8px;
  background: ${theme.light};
  color: ${theme.secondary};
  background-image: linear-gradient(90deg, ${theme.secondary} 50%, transparent 50%);
  background-position: 100% 0;
  background-size: 300%;
  line-height: 30px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s;

  :hover {
    background-position: 0 100%;
    color: ${theme.light};
  }

  /* Style light = outlined, light color */

  ${props => props.light && css`
    border: 3px solid ${theme.light};
    background: transparent;
    color: ${theme.light};
    background-image: linear-gradient(90deg, ${theme.light} 50%, transparent 50%);
    background-position: 100% 0;
    background-size: 300%;

    :hover {
    background-position: 0 100%;
    color: ${theme.secondary};
  }
  `}
`