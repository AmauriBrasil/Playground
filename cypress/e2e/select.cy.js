describe('Select', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/select', 'Select')
    })

    it('Deve selecionar um framework', () => {
        cy.contains('label', 'Selecione um Framework de Testes')
            .parent()
            .find('select')
            .select('Cypress')
    })

    it('Deve selecionar dois ou mais linguagens de programação', () => {
        // "option-item" é uma classe e sempre que for automatizar por uma classe, usar '.' antes
        // Quando tiver ocasiões onde terá que selecionar 2 ou mais opções, utilizar sempre o 'const langs' e depois 'forEach'
        const langs = ['JavaScript', 'TypeScript',]

        // Ao invés de colocar ('input[placeholder="Linguagens de programação..."]')
        // Os 3 pontos finais pode ser substituído por "^" antes do sinal de igual
        cy.get('input[placeholder^="Linguagens de programação"]')
            .click()

        // Utilizar o "new RegExp("^" + lang + "$")"
        // Quando tiver 2 palavras ou mais que tenham o mesmo começo como por exemplo: 'Java' e 'JavaScript'
        langs.forEach(lang => {

            cy.contains('.option-item', new RegExp("^" + lang + "$"))
                .click()
        })

        cy.get('.language-item')
            .should('have.length', langs.length)
    })
})