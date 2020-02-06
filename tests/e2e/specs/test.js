// https://docs.cypress.io/api/introduction/api.html

describe( 'Load Example Page', () => {
  it( 'Visits the app root url', () => {
    cy.visit( '/' )
    cy.contains( 'h3', 'Basic Form' )
  } )
  it( 'Submit empty form and get errors', () => {
    cy.get( '.fvl-submit-button' ).click()
    cy.contains( 'Type your name' )
  } )
  it( 'Fix first input error and assert error message is gone', () => {
    cy.get( ':nth-child(2) > .fvl-input-group > .fvl-input' ).focus().type( 'John Doe' ).blur()
    cy.contains( 'Type your name' ).should( 'not.exist' )
  } )
} )