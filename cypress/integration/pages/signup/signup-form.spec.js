/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('the Sign in page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signup');
  });

  it('loads the Sign up page with a <Form /> component', () => {
    cy.get('.form__Container-sc-7952rh-0').should('exist');
  });

  const signupForm = '.form__Container-sc-7952rh-0';

  it('displays the correct form fields', () => {
    cy.get(signupForm).find('h1').should('have.text', 'Sign Up');
    cy.get(`${signupForm} > form > :nth-child(1)`).should('have.attr', 'placeholder', 'First Name');
    cy.get(`${signupForm} > form > :nth-child(2)`).should('have.attr', 'placeholder', 'Email Address');
    cy.get(`${signupForm} > form > :nth-child(3)`).should('have.attr', 'placeholder', 'Password');
    cy.get(`${signupForm} > form`).find('button').should('have.text', 'Sign Up');
    cy.get(`${signupForm} > form> :nth-child(5)`).should('have.text', 'Already a user? Sign in now.');
    cy.get(`${signupForm} > form> :nth-child(5)`).find('a').should('have.text', 'Sign in now.');
    cy.get(`${signupForm} > form> :nth-child(6)`).should(
      'have.text',
      `This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.`
    );
  });

  it('correctly displays an active/inactive submit button', () => {
    cy.get('[data-testid=sign-up]').should('have.attr', 'disabled');
    cy.get('[data-testid=sign-up]').should('have.css', 'opacity');
    cy.get('[placeholder="Email Address"]').type('Email address');
    cy.get('[placeholder="Password"]').type('Password');
    cy.get('[data-testid=sign-up]').should('not.have.attr', 'disabled', 0.5);
    cy.get('[data-testid=sign-up]').should('not.have.css', 'opacity', 0);
  });
});
