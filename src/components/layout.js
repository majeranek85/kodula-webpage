import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import colors from '../utils/colors';
import Header from '../components/layout/header'
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <Header/>
      {children}
    </ThemeProvider>
  );
};

export default Layout;
