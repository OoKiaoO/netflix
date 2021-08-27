import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
// Styles
import { GlobalStyles } from './global-styles';
import 'normalize.css';
// Database seed
import { firebase } from './lib/firebase.prod';

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
