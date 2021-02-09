/// <reference types="cypress" />
describe('App C', () => {
  it('loads', () => {
    cy.visit('index.html')
    cy.contains('App C').should('be.visible')
  })
})
