import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../utils/theme';

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

/* BUTTON STYLES */

/* light = props that change color to light for darker backgrounds */

/* default = outlined, secondary color */

const StyledButton = styled.button`
  padding: 0 1em;
  height: 56px;
  font-family: orbitron;
  text-transform: uppercase;
  border-radius: 8px;
  background: ${(props) => (props.light ? theme.secondary : theme.light)};
  color: ${(props) => (props.light ? theme.light : theme.secondary)};
  border: 3px solid ${(props) => (props.light ? theme.light : theme.secondary)};
  ${(props) => (props.light ? gradient(theme.light) : gradient(theme.secondary))};
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
    color: ${(props) => (props.light ? theme.secondary : theme.light)};
  }

  /* social = outlined, round, secondary color */

  ${(props) => props.social && social}
`;

/* Mixins */

const gradient = (color) =>
  css`
    background-image: linear-gradient(90deg, ${color} 50%, transparent 50%);
  `;

const social = css`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
`;
