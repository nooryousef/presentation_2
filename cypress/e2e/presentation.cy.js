/// <reference types= "cypress" />

Cypress.Commands.add("almosaferUrl", () => {
  cy.visit("https://www.almosafer.com/ar");
 
  cy.get(".cta__saudi").click();
});

const day= new Date();
const today = day.getDate();
const x=today+1
const y=today+2
const str = x.toString();
const str2=y.toString()

describe('assertion for', () => {
  it('pass the Date', () => {
  cy.almosaferUrl();

  cy.get('[data-testid="FlightSearchBox__FromDateButton"] > .sc-eSePXt').invoke('text').should('have.string',str)

  cy.get('[data-testid="FlightSearchBox__ToDateButton"] > .sc-eSePXt').invoke('text').should('have.string',str2)

  cy.get('[data-testid="Header__LanguageSwitch"]').click()
  cy.get('.sc-jWxkHr').find('.sc-imDfJI').invoke('text').should('include','Economy')
  })

})