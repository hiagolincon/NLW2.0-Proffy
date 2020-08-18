import React, { useCallback } from "react";

import { ThemeProvider, DefaultTheme } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import usePersistedState from './utils/usePersistedState';

import light from './stylesGlobal/themes/light';
import dark from './stylesGlobal/themes/dark';
import GlobalStyle from './stylesGlobal/global';
import "./assets/styles/global.css";
import Routes from "./routes";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(
    () => setTheme(theme.title == 'light' ? dark : light),
     [theme]
  )
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer />
      <Routes toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
