import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { Provider } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'

import App from './App';
import './index.css';

// Usa el modo oscuro o claro a tu gusto, incluso para switchear entre ellos
// Podras encontrar los archivos iniciales en la carpeta themes e ir configurandolos a tu gusto!
import { darkTheme } from './themes/darkTheme';
import { lightTheme } from './themes/lightTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

