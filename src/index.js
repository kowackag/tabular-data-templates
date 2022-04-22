import React from 'react';
import { createRoot } from 'react-dom/client';
import {ThemeProvider} from 'styled-components';

import App from './App';

import {theme} from './styled/theme';
import ResetStyle from './styled/Reset';
import GlobalStyle from './styled/Global';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);