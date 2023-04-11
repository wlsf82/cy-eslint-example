describe('eslint-plugin-cypress rules', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('lint error when assigning a cy command to a variable', () => {
    cy.get('h1')
  })

  it('lint error when waiting for an arbitrary number in ms', () => {
    /**
     * Instead, use a combination of `cy.intercetp()` with an alias (e.g., `.as`)
     * Then, use `cy.wait('@alias')`
     * For an example, visit the following URL shorturl.at/cgkoO
     */
  })

  it('fails when using `async` and `await`', function() {
    cy.get('h1')
  })

  it('lint error when chaining unsafe to chain commands', () => {
    cy.get('input[type="text"]')
      .as('textField')
      .clear()
    cy.get('@textField')
      .type('Walmyr')
  })

  it('lint error when using { force: true }', () => {
    cy.get('input[type="text"]').focus()
    cy.get('button').click()
  })

  it('lint error when taking a screenshot before an assertion', () => {
    cy.get('h1').should('be.visible')
    cy.contains('label', 'Nome:').should('be.visible')
    cy.get('input[type="text"]').should('be.visible')
    cy.contains('button', 'Enviar').should('be.visible')
    cy.screenshot('test')
  })

  it('lint warning when not using a data-* attribute for selecting elements', () => {
    cy.get('[data-test="name-text-field"]').should('be.visible')
  })

  it('lint error when leaving a cy.pause() command', () => {
    // Does something that does not pause the test.
  })
})
