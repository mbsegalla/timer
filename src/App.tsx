import React from 'react';
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";
import { CyclesContextProvider } from './contexts/CyclesContext';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
