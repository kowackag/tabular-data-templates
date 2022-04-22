import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import App from './App';

import {theme} from './styled/theme';
import ResetStyle from './styled/Reset';
import GlobalStyle from './styled/Global';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);