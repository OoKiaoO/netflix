// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/* eslint-disable no-undef */
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDMMmIpoblsUkqAnvvAQc2SP-y7Yq7e2ms',
  authDomain: 'netflix-a34e7.firebaseapp.com',
  projectId: 'netflix-a34e7',
  storageBucket: 'netflix-a34e7.appspot.com',
  messagingSenderId: '383905196367',
  appId: '1:383905196367:web:9494fee3d2bfb5c99cfd3a',
};
firebase.initializeApp(firebaseConfig);

Cypress.Commands.add('logout', () => firebase.auth().signOut());
