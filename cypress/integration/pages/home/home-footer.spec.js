/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('the home page <Footer /> component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has a <Footer /> component', () => {
    cy.get('.footer__Container-sc-qu6i6-0').should('exist');
  });

  const footer = '.footer__Container-sc-qu6i6-0';

  it('displays the <Footer /> component with populated data', () => {
    cy.get(`${footer} > p`).first().should('have.text', 'Questions? Contact us.');
    cy.get(`${footer} > p`).last().should('have.text', 'Netflix Japan');

    cy.get(`${footer} > :nth-child(3) > :nth-child(1)`).contains('FAQ');
    cy.get(`${footer} > :nth-child(3) > :nth-child(1)`).contains('Investor Relations');
    cy.get(`${footer} > :nth-child(3) > :nth-child(1)`).contains('Ways to Watch');
    cy.get(`${footer} > :nth-child(3) > :nth-child(1)`).contains('Corporate Information');
    cy.get(`${footer} > :nth-child(3) > :nth-child(1)`).contains('Netflix Originals');

    cy.get(`${footer} > :nth-child(3) > :nth-child(2)`).contains('Help Centre');
    cy.get(`${footer} > :nth-child(3) > :nth-child(2)`).contains('Jobs');
    cy.get(`${footer} > :nth-child(3) > :nth-child(2)`).contains('Terms of Use');
    cy.get(`${footer} > :nth-child(3) > :nth-child(2)`).contains('Contact Us');

    cy.get(`${footer} > :nth-child(3) > :nth-child(3)`).contains('Account');
    cy.get(`${footer} > :nth-child(3) > :nth-child(3)`).contains('Redeem Gift Cards');
    cy.get(`${footer} > :nth-child(3) > :nth-child(3)`).contains('Privacy');
    cy.get(`${footer} > :nth-child(3) > :nth-child(3)`).contains('Speed Test');

    cy.get(`${footer} > :nth-child(3) > :nth-child(4)`).contains('Media Centre');
    cy.get(`${footer} > :nth-child(3) > :nth-child(4)`).contains('Buy Gift Cards');
    cy.get(`${footer} > :nth-child(3) > :nth-child(4)`).contains('Cookie Preferences');
    cy.get(`${footer} > :nth-child(3) > :nth-child(4)`).contains('Legal Notices');
  });
});
