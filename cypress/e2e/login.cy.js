describe('Login with 4 Test Cases', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Login with Valid Data', () => {
    cy.readFile('cypress/fixtures/validLogin.json').then((account) => {
      cy.login(account.username, account.password)
      cy.get('.oxd-topbar-header').should('be.visible')
    })
  })

  it('Login with Invalid Data', () => {
    cy.readFile('cypress/fixtures/invalidLogin.json').then((account) => {
      cy.login(account.username, account.password)
      cy.get('.oxd-alert').should('be.visible')
    })
  })

  it('Login with Blank Data', () => {
    cy.get('.oxd-button').should('be.visible').click()
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('be.visible')
  })

  it.only('Forgot Password', () => {
    cy.get('.orangehrm-login-forgot > .oxd-text').should('be.visible').click()
    cy.get('.oxd-input').should('be.visible').type('anything')
    cy.get('.oxd-button--secondary').should('be.visible').click()
    cy.get('.oxd-text--h6').contains('Reset Password link sent successfully')
  })
})