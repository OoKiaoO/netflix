/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('The home page Header component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has a Header component', () => {
    cy.get('[data-testid="header-bg"]').should('exist');
  });

  const homeHeader = '[data-testid="header-bg"]';

  it('has a Neflix logo', () => {
    cy.get(homeHeader).find('img.header__Logo-sc-djltcn-4').should('have.attr', 'alt', 'Netflix');
    cy.get(homeHeader).find('img.header__Logo-sc-djltcn-4').should('have.attr', 'src');
  });

  it("has a 'Sign In' button", () => {
    cy.get(homeHeader).find('a.header__ButtonLink-sc-djltcn-5').should('have.attr', 'href', '/signin');
    cy.get(homeHeader).find('a.header__ButtonLink-sc-djltcn-5').should('have.text', 'Sign In');
  });

  it('should contain appropriate Feature text', () => {
    cy.get(homeHeader)
      .find('.feature__Title-sc-6swrp6-1')
      .should('have.text', 'Unlimited films, TV programmes and more.');
    cy.get(homeHeader)
      .find('.feature__SubTitle-sc-6swrp6-2')
      .should('have.text', 'Watch anywhere. Cancel at any time.');
    cy.get(homeHeader)
      .find('.opt-form__Text-sc-8oudnm-3')
      .should('have.text', 'Ready to watch? Enter your email to create or restart your membership');
  })

  it('has an Opt in form input', () => {
    cy.get(homeHeader).find('input').should('have.attr', 'placeholder', 'Email Address');
    cy.get(homeHeader).find('input').type('Hello').should('have.value', 'Hello');
  })

  it("has a 'Try it now' button", () => {
    cy.get(homeHeader).find('button').should('have.text', 'Try it Now');
    cy.get(homeHeader).find('button').should('have.css', 'text-transform', 'uppercase');
  })
});
