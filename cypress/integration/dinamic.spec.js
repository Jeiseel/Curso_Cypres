/// <Reference types="cypress" />

describe('Testes dinamicos', () => {
    beforeEach(() => { 
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    const foods = [' Carne', 'Frango', 'Pizza', 'Vegetariano']

    foods.forEach(food => {
        it('Cadastrando comidas váriadas', () => {
            cy.get('#formNome').type('Jeiseel')
            cy.get('#formSobrenome').type('Rodrigues')
            cy.get(`[name=formSexo][value=M]`).click()
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`).click()
            cy.get('#formEscolaridade').select('Superior')
            cy.get('#formEsportes').select('Karate')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    
        })
    })
    
})