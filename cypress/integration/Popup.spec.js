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

    it('Verifica se o Popup foi invocado', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.window().then(win =>{
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')
    })

    //Validar se o link está apontando para o canto correto
    describe.only('Trabalhando com links de Popup',() => {
        beforeEach(() => {
            cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        })

        it('Checando Popup url', () => {
            cy.contains('Popup2').should('have.prop', 'href')//have.prop retona a propiedade
                .and('equal', 'https://www.wcaquino.me/cypress/frame.html')
        })

        it('Acessando Popup dinamicos', () => {//verifica popup de forma dinamica
            cy.contains('Popup2').then($a => {
                const href = $a.prop('href')
                cy.visit(href)
                cy.get('#tfield').type('Se Chegou aqui tá OK!')
            })
        })

        it('Forcando abertura de link em uma pagina', () => {
            cy.contains('Popup2')
                .invoke('removeAttr', 'target')
                .click()
            cy.get('#tfield').type('To aqui de novo!')
        })

    })

})