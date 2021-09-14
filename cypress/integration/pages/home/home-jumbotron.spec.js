/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('the home page <Jumbotron /> component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has a <Jumbotron /> component', () => {
    cy.get('.jumbotron__Container-sc-es77m8-6').should('exist');
  });

  const jumbotron = '.jumbotron__Container-sc-es77m8-6';

  it('renders the <Jumbotron /> with populated data', () => {
    cy.get(jumbotron).find('h1').contains('Enjoy on your TV.').should('exist');
    cy.get(jumbotron)
      .find('h2')
      .contains('Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.')
      .should('exist');
    cy.get(jumbotron).children().first().find('img').should('have.attr', 'alt', 'Tiger King on Netflix');

    cy.get(jumbotron).find('h1').contains('Download your programmes to watch on the go.').should('exist');
    cy.get(jumbotron).find('h2').contains('Save your data and watch all your favourites offline.').should('exist');
    cy.get(jumbotron).children().first().next().find('img').should('have.attr', 'alt', 'Watch on mobile');

    cy.get(jumbotron).find('h1').contains('Watch everywhere.').should('exist');
    cy.get(jumbotron)
      .find('h2')
      .contains('Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.')
      .should('exist');
    cy.get(jumbotron).children().last().find('img').should('have.attr', 'alt', 'Money Heist on Netflix');
  });
});
