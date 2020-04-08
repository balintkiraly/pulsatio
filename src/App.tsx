import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import React from 'react';
import logo from './logo.svg';

export const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <img src={logo} className="App-logo" alt="logo" />
    </ThemeProvider>
  );
};
