import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import colors from '../utils/colors';
import Header from '../components/layout/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Element } from 'react-scroll';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <Element name='home'>
        <Header/>
      </Element>
      {children}
    </ThemeProvider>
  );
};

export default Layout;
