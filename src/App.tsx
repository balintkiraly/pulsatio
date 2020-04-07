import React from 'react';
import logo from './logo.svg';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

export const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <img src={logo} className="App-logo" alt="logo" />
    </ThemeProvider>
  );
};
