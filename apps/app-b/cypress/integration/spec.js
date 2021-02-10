/// <reference types="cypress" />
describe('App B', () => {
  it('loads', () => {
    cy.visit('/')
    cy.contains('App B').should('be.visible')
  })
})
