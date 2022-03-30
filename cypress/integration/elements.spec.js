/// <Reference types="cypress" />

describe('Elementos basicos', () => {
    before(() => { //Será executado antes do primeiro teste
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(()=>{ // Vai ser executado antes de cada um dos testes, sem deixar sujeira dos testes anteriores
        cy.reload()
    })

    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {// acessando links na pagina
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

    })

    it.only('TextFields', () => { //escrevendo nos campos de texto
        cy.get('#formNome').type('Teste automatizado com cypress')
        cy.get('#formNome').should('have.value', 'Teste automatizado com cypress')

        cy.get('#elementosForm\\:sugestoes') //- quando tiver um id contendo : ou '\' o cypress não entendo então antes da barra e do ponto usar duas barras '\\'
            .type('TextArea Aqui!')
            .should('have.value', 'TextArea Aqui!')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('Que nome de tabala grande da peste!')

        cy.get('[data-cy=dataSobrenome]')
            .type('Testando Com Cypress 123{backspace}{backspace}')
            .should('have.value', 'Testando Com Cypress 1')
        
        cy.get('#elementosForm\\:sugestoes') //- quando tiver um id contendo : ou '\' o cypress não entendo então antes da barra e do ponto usar duas barras '\\'
            .clear()
            .type('Esse texto aqui{selectall}Mas na verdade é esse texto', {delay:100} )
            .should('have.value', 'Mas na verdade é esse texto')
        

    })

})