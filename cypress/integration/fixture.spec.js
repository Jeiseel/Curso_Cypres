/// <Reference types="cypress" />

describe('Fixture teste', () => {
   /*  before(() => { //Será executado antes do primeiro teste
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    }) */

    it('Pegando dados de um arquivo', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').type('Jeiseel')
        cy.get('#formSobrenome').type('Rodrigues')
        cy.get('#formSexoMasc')
        cy.get('#formComidaCarne')

        cy.get('#formEsportes')

    })

})