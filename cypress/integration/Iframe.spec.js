/// <Reference types="cypress" />

describe('Trabalhando com Iframes', () => {

    it('Deve preencher campo de texto', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').click().then(iframe => {
            const body = iframe.contents().find('body')//o Contests trás os filhos dos elementos
            cy.wrap(body).find('#tfield').type('funciona').should('have.value', 'funciona')

            cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Alert Simples') //Verifica se a mensagem exibida no alerta é igual a mensagem passada no parametro do equal
            })
            cy.wrap(body).find('#otherButton').click()
        })
    })

    
})