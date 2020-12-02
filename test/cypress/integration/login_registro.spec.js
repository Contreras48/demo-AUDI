'use stric'

describe('Pruebas de login y registro',() => {

    afterEach(() => {
        cy.visit('/login')
    })

    it('Debe cargar el login', () => {
        
    })

    it('Debe registrar un usuario', () => {
        cy.contains('Crear una cuenta').click()
        cy.get('#name').type('Usuario')
        cy.get('#title').type('Prueba')
        cy.get('#email2').type('test@test.com')
        cy.get('#password2').type('test1234')
        cy.contains('.button', 'Registrarse').click()
        cy.wait(2000)
        cy.get('.error-msg').should('not.be.visible')
    })

    it('No debe registrar un usuario existente', () => {
        cy.contains('Crear una cuenta').click()
        cy.get('#name').type('Usuario')
        cy.get('#title').type('Prueba')
        cy.get('#email2').type('test@test.com')
        cy.get('#password2').type('test1234')
        cy.contains('.button', 'Registrarse').click()
        cy.wait(1000)
        cy.get('.error-msg').should('be.visible')
    })

    it('Debe logear un usuario', () => {
        cy.get('#email1').type('test@test.com')
        cy.get('#password1').type('test1234')
        cy.contains('.button', 'Ingresar').click()
        cy.wait(500)
    })

    it('Debe fallar con un usuario erroneo', () => {
        cy.get('#email1').type('fail@test.com')
        cy.get('#password1').type('test1234')
        cy.contains(".button", 'Ingresar').click()
        cy.wait(500)
        cy.get('.error-msg').should('be.visible')
    })

    it('Debe fallar con una contraseña erronea', () => {
        cy.get('#email1').type('test@test.com')
        cy.get('#password1').type('T3st1236')
        cy.contains(".button", 'Ingresar').click()
        cy.wait(500)
        cy.get('.error-msg').should('be.visible')
    })
})
