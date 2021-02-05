import {createGlobalStyle} from 'styled-components';
import './normalize.css';
import '@fontsource/lato';
import '@fontsource/orbitron';
import theme from '../utils/theme'

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
    font-size: 3em;
  }
  h2 {
    font-size: 2.5em;
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
    font-weight: 500;
  }

  button {
    padding: 0;
    cursor: pointer;
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
  }
`;

export default GlobalStyle;