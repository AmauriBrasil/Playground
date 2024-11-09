// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Comando de validação (url + resolução da tela + titulo da tela)
Cypress.Commands.add('goHome', () => {
    
    // Após inserir a resolução da tela em "cy.config", não é mais preciso chamar o "cy.viewport"
    //cy.viewport(1920, 1080)
    
    //Após inserir a url dentro de "cy.config", poderá deixar apenas uma "/" no "cy.visit"
    cy.visit('/')
    cy.contains('h2', 'Faça login')
        .should('be.visible')
})

// Comando utilizado quando a massa de teste (email e senha do usuário) é fixa
Cypress.Commands.add('doLogin', () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
})

// Comando de validação de login (email + senha + acessar)
Cypress.Commands.add('login', (email, password) => {
    if (email) {
        cy.get('[data-cy="email"]').type(email)
    }

    if (password) {
        cy.get('[data-cy="password"]').type(password)
    }
    cy.get('[data-cy="login-button"]').click()
})

// Comando de validação da tela home
Cypress.Commands.add('userLoggedIn', () => {
    cy.get('[data-cy="welcome-title"]')
        .should('be.visible')
        .and('have.text', 'Boas vindas ao Cypress Playground')
})

// Comando de validação de texto
Cypress.Commands.add('noticeHave', (text) => {
    cy.get('.notice p')
        .should('be.visible')
        .and('have.text', text)
})

// Comando de validação do menu lateral
Cypress.Commands.add('goTo', (route, title) => {
    cy.get(`nav a[href="${route}"]`)
        .click()

    cy.contains('h2', title)
        .should('be.visible')
})