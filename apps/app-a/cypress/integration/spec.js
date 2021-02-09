/// <reference types="cypress" />
describe('App A', () => {
  it('loads', () => {
    cy.visit('index.html')
    cy.contains('App A').should('be.visible')
  })
})
