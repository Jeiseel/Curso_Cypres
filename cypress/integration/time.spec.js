/// <Reference types="cypress" />

describe('Usando Clock', () => {
    before(() => { 
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    it('Usando o Clock para voltar ao passado', () => {

        const date = new Date(2020, 0, 30, 30, 40, 23)// o mês é indexado do zero.
        cy.clock(date.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '31/01/2020')

       /*  cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '16/05/2022') */

       /*  cy.clock()
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '31/12/1969')*/
        

    })

    it.only('Avançando o tempo usando Tick', () => {
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gt', 1652729982248)

        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 0)
        cy.wait(1000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte', 1000)

        cy.tick(5000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gte', 5000)

    })
})