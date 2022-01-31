/// <Reference types="cypress" />

describe('Elementos basicos', () => {
    it('Text', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('body').should('contain','Cuidado')
        cy.get('span').should('contain', 'Cuidado')
    })
})