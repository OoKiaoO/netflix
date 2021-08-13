import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
// Styles
import { GlobalStyles } from './global-styles';
import 'normalize.css';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
