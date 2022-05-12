/// <Reference types="cypress" />

describe('Fixture teste', () => {
   /*  before(() => { //Será executado antes do primeiro teste
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    }) */

    it('Pegando dados de um arquivo', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').type('Jeiseel')
        cy.get('#formSobrenome').type('Rodrigues')
        cy.get('[name=formSexo][value=M]').click()
        cy.get('[name=formComidaFavorita][value=pizza]').click()
        cy.get('#formEscolaridade').select('Superior')
        cy.get('#formEsportes').select('Karate')
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')

    })

})