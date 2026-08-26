describe('Vue 3 example application', () => {
  it('renders every component example route', () => {
    const pages = [
      ['/#/prefilled', 'Prefilled Form'],
      ['/#/advancedselects', 'Select with Search'],
      ['/#/tags', 'Select existing Tags only'],
      ['/#/nestedcheckbox', 'Nested Checkbox'],
      ['/#/upload', 'Single File Upload'],
      ['/#/multiupload', 'Multi File Upload'],
      ['/#/dropzone', 'Dropzone'],
      ['/#/datepicker', 'Date Picker'],
    ]

    for (const [path, heading] of pages) {
      cy.visit(path)
      cy.contains('h3', heading)
    }
  })

  it('loads, submits validation errors, and clears a dirty field error', () => {
    cy.visit('/')
    cy.contains('h3', 'Basic Form')

    cy.get('.fvl-submit-button').click()
    cy.contains('Please enter your Name')

    cy.get('input[name="name"]').type('John Doe').blur()
    cy.contains('Please enter your Name').should('not.exist')
  })
})
