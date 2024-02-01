/// <reference types="cypress"/>

it('Visit page and assert in title', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
    cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .should('contain', 'Campo');
        let syncTitle

     cy.title().then(title => {
        console.log(title)

        cy.get('#formNome').type(title)

        syncTitle = title
     })
})

it('Find element and click', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
    cy.get('#buttonSimple')
        .click()
        .should('have.value','Obrigado!');
})