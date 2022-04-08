import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainTheme from './themes/MainTheme';
import App from './App';




ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={MainTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

