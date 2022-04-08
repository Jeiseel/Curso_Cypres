/// <Reference types="cypress" />

//Trabalhando com primises com Wrap
//Deixar as primises serem gerenciada pelo Cypress usando then ou should

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
})