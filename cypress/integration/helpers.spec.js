/// <Reference types="cypress" />

//Trabalhando com promises com Wrap
//Deixar as promises serem gerenciada pelo Cypress usando then ou should

describe('Helpers', () => {

    it('Wrap', () => {
        const obj = { nome: 'User', idade: '30' }
        expect(obj).to.have.property('nome')
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        /* cy.get('#formNome').then($el => {//uso de promise jquery
             cy.wrap($el).type('Se chegou aqui funciona!')//usando cypress com metodo wrap
         }) */

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => console.log('Cheguei aqui!'))
        cy.wrap(promise).then(ret => console.log(ret))// forma correta de tratar promise sincronizada com scripts
        cy.get('#buttonList').then(() => console.log('Cheguei aqui também!'))


    })

    it('Its', () => {// tras a propiedade dos objetos que estão em meio a cadeia do cypress
        const obj = {nome: 'Teste', idade: 40}
        cy.wrap(obj).should('have.property', 'nome', 'Teste' )// Pega o obj completo e apenas a propiedade nome e faz a comparação
        cy.wrap(obj).its('nome').should('be.equal', 'Teste')

        const obj2 = {nome: 'User', idade: 30, endereco: {rua: 'Capitão de areia'}}
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')// Dentro de endereco verifica se existe a propiedade rua
        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'areia')// Encadeando os Its sendo endereco ainda um objeto
        cy.wrap(obj2).its('endereco.rua').should('contain', 'Capitão')// Melhor forma de se fazer quando se usa o should evitando rety no ultimo comando

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.equal', 20)// Verifica se o titulo tem o tamanho de 20 caracteres
    })

    it.only('Invoke', () =>{
        const getValue = () => 1;
        const soma = (a,b) => a + b;
        
        cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1)
        cy.wrap({fn: soma}).invoke('fn', 2,5).should('be.equal', 7)

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val', 'Enviando texto via Invoke')
        cy.window().invoke('alert', 'Exibindo aqui!')
        cy.get('#resultado')
            .invoke('html', '<input type="button" value="Hakudão!"/>')
    })
})