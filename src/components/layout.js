import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import colors from '../utils/colors'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
