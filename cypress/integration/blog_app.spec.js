describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function() {
    cy.contains('Log in to application')

    cy.get('#loginForm')
      .should('contain', 'username')
      .should('contain', 'password')

    cy.get('#username').should('exist')
    cy.get('#username').should('exist')

    cy.get('#login-button')
      .should('contain', 'login')

    cy.get('#notification')
      .should('not.exist')

    cy.contains('blogs')
      .should('not.exist')
  })
})