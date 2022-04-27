/// <Reference types="cypress" />

describe('Elementos basicos', () => {
    before(() => { //Será executado antes do primeiro teste
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=>{ // Vai ser executado antes de cada um dos testes, sem deixar sujeira dos testes anteriores
        cy.reload()
    })

    it('', () => {
        
    })
})