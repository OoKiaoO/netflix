/* eslint-disable no-undef */
/// <reference types="cypress" />
const signupUser = require('../../../fixtures/signup-user.json');

describe('The signup page', () => {
  it('should sign up a new user', () => {
    // destructuring the data from the JSON file for easier access
    const { name, email, password } = signupUser;

    cy.logout();
    cy.visit('http://localhost:3000/signup');
    cy.get('[placeholder="First Name"]').type(name);
    cy.get('[placeholder="Email Address"]').type(email);
    cy.get('[placeholder="Password"]').type(password);
    cy.get('[data-testid=sign-up]').click();
    cy.url().should('eq', 'http://localhost:3000/browse');
    cy.logout();
  });
});
