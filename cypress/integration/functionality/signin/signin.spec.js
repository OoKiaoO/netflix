/* eslint-disable no-undef */
/// <reference types="cypress" />
const authUser = require('../../../fixtures/auth-user.json');

describe('The signin page', () => {
  it('should sign in with email and password', () => {
    // destructuring the data from the JSON file for easier access
    const { email, password } = authUser;

    cy.visit('http://localhost:3000/signin');
    cy.get('[placeholder="Email Address"]').type(email);
    cy.get('[placeholder="Password"]').type(password);
    cy.get('[data-testid=sign-in]').click();
    cy.url().should('eq', 'http://localhost:3000/browse');
    // add logout
  });
});
