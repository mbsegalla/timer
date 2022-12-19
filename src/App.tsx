import React from 'react';
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
