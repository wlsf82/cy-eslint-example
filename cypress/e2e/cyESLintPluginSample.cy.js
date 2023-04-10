describe('eslint-plugin-cypress ruless', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('lint error when assigning a cy command to a variable', () => {
    const heading = cy.get('h1')
  })

  it('lint error when waiting for an arbitrary number in ms', () => {
    cy.wait(1000)
  })

  it('fails when using `async` and `await`', async function() {
    const heading = await cy.get('h1')
  })

  it('lint error when chaining unsafe to chain commands', () => {
    cy.get('input[type="text"]')
      .clear()
      .type('Walmyr')
  })

  it('lint error when using { force: true }', () => {
    cy.get('input[type="text"]').focus()
    cy.get('button').click({ force: true })
  })

  it('lint error when taking a screenshot before an assertion', () => {
    cy.screenshot('test')
  })

  it('lint warning when not using a data-* attribute for selecting elements', () => {
    cy.get('input[aria-label="name"]').should('be.visible')
  })

  it('lint error when leaving a cy.pause() command', () => {
    cy.pause()
  })
})
