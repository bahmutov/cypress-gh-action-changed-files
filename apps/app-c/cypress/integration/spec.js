/// <reference types="cypress" />
describe('App C', () => {
  it('loads', () => {
    cy.visit('/')
    cy.contains('App C').should('be.visible')
  })
})
