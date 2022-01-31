/// <Reference types="cypress" />

describe('Cypress Basic', () => {
    it.only('Visitando site e comparando o titulo', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        //cy.pause() // execução com pausas planejadas 
        
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')//.debug() pegar informações da pagina com detalhes.
    })

    it('Intereção com os elementos', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple').click()
    })
})