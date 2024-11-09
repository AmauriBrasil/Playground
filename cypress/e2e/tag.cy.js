describe('Tags', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/tags', 'Tags')
    })

    it('Deve adcionar tags para organizar idéias', () => {

        const tags = ['Cypress', 'JavaScript', 'Nodejs']

        // Looping para validar o preenchimento das tags
        tags.forEach(t => { // Neste caso, o 't' se refere a tag no singular
            cy.get('.new-tag')
                .type(`${t}{Enter}`)
                .should('have.value', '') // Value = Valor que foi digitado em um elemento input, seja email, numero, texto e etc
                                          // ('') aspas vazia = Verifica a garantia de após ser preenchido o campo,
                                          //      o mesmo continua mantendo em branco para próxima digitação
            cy.wait(500) // think time (delay ao escrever as tags)
        })

        tags.forEach(t => { //Looping para verificar as tags preenchidas
            cy.get('.tag-input')
                .should('contain', t)
        })
    })
})