/// <reference types="cypress" />
describe('App B', () => {
  it('loads', () => {
    cy.visit('index.html')
    cy.contains('App B').should('be.visible')
  })
})
