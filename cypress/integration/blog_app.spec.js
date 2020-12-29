describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'Cypress Tester',
      username: 'c_tester',
      password: 'secretPassword'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
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

  describe('Login',function() {
    beforeEach(function() {
      localStorage.removeItem('loggedBlogAppUser')
      cy.reload()
    })

    it('succeeds with correct credentials', function() {
      cy.get('#username').type('c_tester')
      cy.get('#password').type('secretPassword')
      cy.get('#login-button').click()

      cy.get('#notification')
        .should('contain', 'Login succesful')
        .and('have.css', 'color', 'rgb(0, 128, 0)')
        .and('have.css', 'border-style', 'solid')
        .and('not.contain', 'wrong username or password')
    })

    it('fails with wrong credentials', function() {
      cy.get('#username').type('wrong_username')
      cy.get('#password').type('wrong_secretPassword')
      cy.get('#login-button').click()

      cy.get('#notification')
        .should('contain', 'wrong username or password')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
        .and('have.css', 'border-style', 'solid')
        .and('not.contain', 'Login succesful')
    })
  })

  describe.only('When logged in', function() {
    beforeEach(function() {
      cy.request('POST', 'http://localhost:3001/api/login', {
        username: 'c_tester', password: 'secretPassword'
      }).then(response => {
        localStorage.setItem('loggedBlogAppUser', JSON.stringify(response.body))
        cy.visit('http://localhost:3000')
      })
    })

    it('A blog can be created', function() {
      cy.contains('New Blog').click()
      cy.get('#title').type('cypress blog')
      cy.get('#author').type('cypress author')
      cy.get('#url').type('https://www.urlbycypress.com')
      cy.get('#create-blog-button').click()

      cy.contains('cypress blog')
        .should('have.css', 'border-style', 'solid')
        .parent()
        .should('contain', 'view')

      cy.get('#notification')
        .should('contain', 'a new blog cypress blog by cypress author added')
        .and('have.css', 'color', 'rgb(0, 128, 0)')
        .and('not.contain', 'blog creation failed')
    })
  })
})