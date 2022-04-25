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


    it('Alert usando mock', () => {
        const stub = cy.stub().as('Alerta')//Dando nome objeto (Alias)
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() => {//Fazendo acertiva usando Then.
            expect(stub.getCall([0])).to.be.calledWith('Alert Simples')
        })

    })

    it('Confirm', () => {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Confirmado')
        })
    })

    it('Deny', () => {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
            return false;
        })
        cy.on('window:alert', msg =>{
            expect(msg).to.be.equal('Negado')
        })
    })

    it.only('Prompt', () => {
        cy.window().then(win => {//o metodo window retorna o objeto ques esta gerenciando toda a pagina
            cy.stub(win, 'prompt').returns('42')
        }) 
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Era 42?')
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal(':D')
        })
        cy.get('#prompt').click()
    })
})