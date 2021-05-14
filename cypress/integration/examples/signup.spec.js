/// <reference types="cypress" />

describe('Signup page', () => {
    let logindetais
    beforeEach(() => {
      cy.visit('/')
      cy.url().should('include','blaze')    
      cy.fixture('testdata').then(function (data) {
        logindetais = data;
      })
    })
  
    it('Blaze demo signup page', () => {
        
        cy.get('#signin2').should('have.text','Sign up')
        cy.get('#signin2').click()
        cy.wait(3000)
        cy.get('#sign-username').type(logindetais.username)
        cy.get('#sign-password').type(logindetais.password)
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    })

    it('Login to Blaze and add items to cart', () => {
        
        cy.get('#login2').should('have.text','Log in')
        cy.get('#login2').click()
        cy.wait(3000)
        cy.get('#loginusername').type(logindetais.username)
        cy.get('#loginpassword').type(logindetais.password)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(3000)
        cy.get('#logout2').should('have.text','Log out')
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').should('have.text', 'Samsung galaxy s6')
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click({force: true});
        cy.get('.name').should('have.text', 'Samsung galaxy s6')
        cy.get('.col-sm-12 > .btn').click()
        cy.get('#cartur').click()
        cy.get('.success > :nth-child(2)').should('have.text','Samsung galaxy s6')


    })
  })
  