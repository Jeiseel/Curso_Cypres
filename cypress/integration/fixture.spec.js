/// <Reference types="cypress" />

describe('Fixture teste', () => {
   /*  before(() => { //Será executado antes do primeiro teste
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    }) */

    it('Pegando dados de um arquivo', function() {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html') 
        
        cy.fixture('userData').as('usuario').then(() => {//Metodo que busca dados mocados em um json 
        cy.get('#formNome').type(this.usuario.nome)
        cy.get('#formSobrenome').type(this.usuario.sobreNome)
        cy.get(`[name=formSexo][value=${this.usuario.sexo}]`).click()
        cy.get(`[name=formComidaFavorita][value=${this.usuario.comida}]`).click()
        cy.get('#formEscolaridade').select(this.usuario.escolaridade)
        cy.get('#formEsportes').select(this.usuario.esportes)
        })
        cy.get('#formCadastrar').click()//So funciona assim pq todos os comandos são do cypress
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    })

})