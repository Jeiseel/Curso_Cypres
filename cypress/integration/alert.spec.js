/// <Reference types="cypress" />

describe('Trabalhando com Alerts', () => {
    before(() => { 
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Alert', () =>{
        cy.get('#alert').click()
        //O metodo ON pega eventos que ocorrem na tela
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples') //Verifica se a mensagem exibida no alerta é igual a mensagem passada no parametro do equal

        })
    })
})