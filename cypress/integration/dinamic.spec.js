/// <Reference types="cypress" />

describe('Testes dinamicos', () => {
    before(() => { 
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    const foods = [' Carne', 'Frango', 'Pizza', 'Vegetariano']

    foods.forEach(food => {
        it(`Cadastrando as comidas váriadas ${food}`, () => {
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

        it.only('Deve selecionar todos usando o each', () => {
            cy.get('#formNome').type('Jeiseel')
            cy.get('#formSobrenome').type('Rodrigues')
            cy.get(`[name=formSexo][value=M]`).click()
            cy.get('[name=formComidaFavorita').each($el => {//metodo each permite ser seletivo nas opções
                if($el.val() != 'vegetariano')
                    cy.wrap($el).click
            })
            cy.get('#formEscolaridade').select('Superior')
            cy.get('#formEsportes').select('Karate')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        })
    
})