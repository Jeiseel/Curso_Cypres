/// <Reference types="cypress" />

describe('Sincronas...', () => {

    before(() => { //Será executado antes do primeiro teste
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { // Vai ser executado antes de cada um dos testes, sem deixar sujeira dos testes anteriores
        cy.reload()
    })


    it('Aguarda elemento ficar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')// acertiva para validar se o campo já existe
        cy.get('#buttonDelay').click()//clica no botão 
        cy.get('#novoCampo').should('not.exist')// acertiva para validar se o campo já existe
        cy.get('#novoCampo').should('exist')// acertiva para o campo existente
        cy.get('#novoCampo').type('Se Chegou Aqui Tá Bom!')//Escreve no campo que agora existe
    })

    it('Retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            .should('exist')
            .type('Retrys')
    })

    it('Usando o Find', () => {
        cy.get('#buttonList').click()
        cy.get('#Lista Li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#Lista Li span')
            .should('contain', 'Item 2')

    })

    it('Timeout', () => {
        //cy.get('#buttonListDOM').click('')
       //cy.wait(5000)//pausa a execução do script pelo tempo informado no escopo do metodo, nesse caso 5 segundos. Só usar em casos extremos
        //cy.get('#Lista Li span', {timeout:30000})
        //   .should('contain', 'Item 2')

        cy.get('#buttonListDOM').click('')
        cy.get('#Lista Li span', {timeout:30000})
            .should('have.length', 2)
    })

    it('Click retry', () => {
        cy.get('#buttonCount').click()
            .should('have.value', '11')

    })
    it.only('shold Vs Then', () => {
        cy.get('#buttonListDOM').should($el =>{
            expect($el).to.have.length(1)
            return 2
        }).and('have.id', 'buttonListDOM')
    })
})