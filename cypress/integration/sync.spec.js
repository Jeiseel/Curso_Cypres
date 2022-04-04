/// <Reference types="cypress" />

describe('Sincronas...', ()=>{

    before(() => { //Será executado antes do primeiro teste
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })
    
    beforeEach(()=>{ // Vai ser executado antes de cada um dos testes, sem deixar sujeira dos testes anteriores
        cy.reload()
    })


    it('Aguarda elemento ficar disponivel', () =>{
        cy.get('#novoCampo').should('not.exist')// acertiva para validar se o campo já existe
        cy.get('#buttonDelay').click()//clica no botão 
        cy.get('#novoCampo').should('not.exist')// acertiva para validar se o campo já existe
        cy.get('#novoCampo').should('exist')// acertiva para o campo existente
        cy.get('#novoCampo').type('Se Chegou Aqui Tá Bom!')//Escreve no campo que agora existe
    })

    it.only('Retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            .should('exist')
            .type('Retrys')
    })
})