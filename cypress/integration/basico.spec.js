/// <Reference types="cypress" />

describe('Cypress Basic', () => {
    it('Visitando site e comparando o titulo', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')
    })
})