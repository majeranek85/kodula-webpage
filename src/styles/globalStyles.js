import { createGlobalStyle } from 'styled-components';
import './normalize.css';
import '@fontsource/lato';
import '@fontsource/orbitron';
import theme from '../utils/theme';

const GlobalStyle = createGlobalStyle`

  /* Document level adjustments */
  html {
    font-size: 18px;
    box-sizing: border-box;
    font-family: lato;
  }

  body {
    //background: ${theme.secondary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    font-weight: 300;
  }

  h1 {
    margin-top: 0;
  }

  @media (max-width: 900px) {
    html { font-size: 16px; }
  }

  @media (max-width: 400px) {
    html { font-size: 14px; }
  }

  /* Modules will scale with document */
  .header {
    font-size: 1.5rem;
  }

  .footer {
    font-size: 0.75rem;
  }

  .sidebar {
    font-size: 0.85rem;
  }

  /* Type will scale with modules */
  h1 {
    font-size: 3.25em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 2em;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }


  h1, h2, h3, h4, h5, span {
    margin: 0;
  }

  h1, h2, h3, h4, h5 {
    font-family: orbitron;
    font-weight: 700;
  }

  button {
    padding: 0;
    cursor: pointer;

    &:focus {
      outline: thin dotted;
    }
  }

  ul {
    padding: 0;
    margin: 0;
  }

  p {
    line-height: 1.45;
  }

  a {
    text-decoration: none;
    display: inline-block;
    text-align: center;

    &:focus {
      outline: thin dotted;
    }
  }

  div.container {
    padding-left: 0;
    padding-right: 0;
  }

  div.container-fluid {
    padding-left: 0;
    padding-right: 0;
  }

  div.row {
      margin-right: 0px;
      margin-left: 0px
  }

  div.col-lg-1,div.col-lg-10,div.col-lg-11,div.col-lg-12,div.col-lg-2,div.col-lg-3,div.col-lg-4,div.col-lg-5,div.col-lg-6,div.col-lg-7,div.col-lg-8,div.col-lg-9,
  div.col-md-1,div.col-md-10,div.col-md-11,div.col-md-12,div.col-md-2,div.col-md-3,div.col-md-4,div.col-md-5,div.col-md-6,div.col-md-7,div.col-md-8,div.col-md-9,
  div.col-sm-1,div.col-sm-10,div.col-sm-11,div.col-sm-12,div.col-sm-2,div.col-sm-3,div.col-sm-4,div.col-sm-5,div.col-sm-6,div.col-sm-7,div.col-sm-8,div.col-sm-9,
  div.col-xs-1,div.col-xs-10,div.col-xs-11,div.col-xs-12,div.col-xs-2,div.col-xs-3,div.col-xs-4,div.col-xs-5,div.col-xs-6,div.col-xs-7,div.col-xs-8,div.col-xs-9 {
      padding-left: 0;
      padding-right: 0;
  }
`;

export default GlobalStyle;
