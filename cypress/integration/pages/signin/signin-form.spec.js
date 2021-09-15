/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('the Sign in page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signin');
  });

  it('loads the Sign in page with a <Form /> component', () => {
    cy.get('.form__Container-sc-7952rh-0').should('exist');
  });

  const signinForm = '.form__Container-sc-7952rh-0';

  it('displays the correct form fields', () => {
    cy.get(signinForm).find('h1').should('have.text', 'Sign In');
    cy.get(`${signinForm} > form > :nth-child(1)`).should('have.attr', 'placeholder', 'Email Address');
    cy.get(`${signinForm} > form > :nth-child(2)`).should('have.attr', 'placeholder', 'Password');
    cy.get(`${signinForm} > form`).find('button').should('have.text', 'Sign In');
    cy.get(`${signinForm} > form> :nth-child(4)`).should('have.text', 'New to Netflix? Sign up now.');
    cy.get(`${signinForm} > form> :nth-child(4)`).find('a').should('have.text', 'Sign up now.');
    cy.get(`${signinForm} > form> :nth-child(5)`).should(
      'have.text',
      `This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.`
    );
  });

  it('correctly displays an active/inactive submit button', () => {
    cy.get('[data-testid=sign-in]').should('have.attr', 'disabled');
    cy.get('[data-testid=sign-in]').should('have.css', 'opacity');
    cy.get('[placeholder="Email Address"]').type('Email address');
    cy.get('[placeholder="Password"]').type('Password');
    cy.get('[data-testid=sign-in]').should('not.have.attr', 'disabled', 0.5);
    cy.get('[data-testid=sign-in]').should('not.have.css', 'opacity', 0);
  });
});
