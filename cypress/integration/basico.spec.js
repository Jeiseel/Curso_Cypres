/// <Reference types="cypress" />

describe('Cypress Basic', () => {
    it.only('Visitando site e comparando o titulo', () => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        //cy.pause() // execução com pausas planejadas 

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')//.debug() pegar informações da pagina com detalhes.

        cy.title().then(title => {//then é usado quando o variavel está dentro de uma promise
            console.log(title)

            cy.get('#formNome').type(title)

            cy.get('[data-cy=dataSobrenome]').then($el => {
                $el.val(title)
            })


            cy.get('#elementosForm\\:sugestoes').then($el => {
                cy.wrap($el).type(title)
            })
        })

        
        
        
    })

    it('Intereção com os elementos', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})