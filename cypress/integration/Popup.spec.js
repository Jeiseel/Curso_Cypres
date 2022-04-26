/// <Reference types="cypress" />

//O Cypress mão consegue trabalhar diretamente com Popup's porém existem outros meios de se fazer.
describe('Trabalhando com Popup', () => {

    it('Testando Popup diretamente', () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!') //Verifica se a mensagem exibida no alerta é igual a mensagem passada no parametro do equal
            })

    })

    it.only('Verifica se o Popup foi invocado', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.window().then(win =>{
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')
    })

})