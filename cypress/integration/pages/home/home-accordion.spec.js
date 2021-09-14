/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('the home page <Accordion /> component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has an <Accordion /> component', () => {
    cy.get('.accordion__Container-sc-l3iym9-0').should('exist');
  });

  const accordion = '.accordion__Container-sc-l3iym9-0';
  const accordionInner = '.accordion__Inner-sc-l3iym9-1';

  it('renders the <Accordion /> with populated data', () => {
    cy.get(accordion).find('h1').should('have.text', 'Frequently Asked Questions');
    cy.get(`${accordionInner} > :nth-child(2)`).should('have.text', 'What is Netflix?');
    cy.get(`${accordionInner} > :nth-child(3)`).should('have.text', 'How much does Netflix cost?');
    cy.get(`${accordionInner} > :nth-child(4)`).should('have.text', 'Where can I watch?');
    cy.get(`${accordionInner} > :nth-child(5)`).should('have.text', 'How do I cancel?');
    cy.get(`${accordionInner} > :nth-child(6)`).should('have.text', 'What can I watch on Netflix?');
  });

  it('renders the <OptForm /> component with populated data', () => {
    cy.get(accordionInner).find('input').should('have.attr', 'placeholder', 'Email Address');
    cy.get(accordionInner).find('button').should('have.text', 'Try it Now');
    cy.get(accordionInner)
      .find('p')
      .should('have.text', 'Ready to watch? Enter your email to create or restart your membership');
  });

  it('opens and closes the accordion container', () => {
    const whatIsNetflixBodyText = `Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!`;
    cy.get(`${accordionInner} > :nth-child(2) > .accordion__Body-sc-l3iym9-4`).should('not.exist');
    cy.get(`${accordionInner} > :nth-child(2)`).click();
    cy.get(`${accordionInner} > :nth-child(2) > .accordion__Body-sc-l3iym9-4`).should('exist');
    cy.get(`${accordionInner} > :nth-child(2) > .accordion__Body-sc-l3iym9-4`).should(
      'have.text',
      `${whatIsNetflixBodyText}`
    );

    const howMuchNetflixCostBodyText =
      'Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one low fixed monthly fee. Plans start from £5.99 a month. No extra costs or contracts.';
    cy.get(`${accordionInner} > :nth-child(3) > .accordion__Body-sc-l3iym9-4`).should('not.exist');
    cy.get(`${accordionInner} > :nth-child(3)`).click();
    cy.get(`${accordionInner} > :nth-child(3) > .accordion__Body-sc-l3iym9-4`).should('exist');
    cy.get(`${accordionInner} > :nth-child(3) > .accordion__Body-sc-l3iym9-4`).should(
      'have.text',
      `${howMuchNetflixCostBodyText}`
    );

    const whereCanIWatchBodyText = `Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`;
    cy.get(`${accordionInner} > :nth-child(4) > .accordion__Body-sc-l3iym9-4`).should('not.exist');
    cy.get(`${accordionInner} > :nth-child(4)`).click();
    cy.get(`${accordionInner} > :nth-child(4) > .accordion__Body-sc-l3iym9-4`).should('exist');
    cy.get(`${accordionInner} > :nth-child(4) > .accordion__Body-sc-l3iym9-4`).should(
      'have.text',
      `${whereCanIWatchBodyText}`
    );

    const howDoICancelBodyText =
      'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.';
    cy.get(`${accordionInner} > :nth-child(5) > .accordion__Body-sc-l3iym9-4`).should('not.exist');
    cy.get(`${accordionInner} > :nth-child(5)`).click();
    cy.get(`${accordionInner} > :nth-child(5) > .accordion__Body-sc-l3iym9-4`).should('exist');
    cy.get(`${accordionInner} > :nth-child(5) > .accordion__Body-sc-l3iym9-4`).should(
      'have.text',
      `${howDoICancelBodyText}`
    );

    const whatCanIWatchBodyText =
      'Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.';
    cy.get(`${accordionInner} > :nth-child(6) > .accordion__Body-sc-l3iym9-4`).should('not.exist');
    cy.get(`${accordionInner} > :nth-child(6)`).click();
    cy.get(`${accordionInner} > :nth-child(6) > .accordion__Body-sc-l3iym9-4`).should('exist');
    cy.get(`${accordionInner} > :nth-child(6) > .accordion__Body-sc-l3iym9-4`).should(
      'have.text',
      `${whatCanIWatchBodyText}`
    );
  });
});
