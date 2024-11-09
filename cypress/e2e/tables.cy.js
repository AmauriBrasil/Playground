describe('Tables', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/tables', 'Tables')
    })

    it('Deve validar a linha do Github', () => {
        cy.contains('table tbody tr', '1004')
            .should('contain', 'Github')
            .and('contain', 'papitodev')
            .and('contain', 'Ativo')
    })

    it('Deve excluir o Facebook', () => {

        const name = 'Facebook'

        cy.contains('table tbody tr', '1002')
            .find('.remove-item')
            .click()

        cy.contains('button', 'Excluir')
            .click()

        cy.get('table tbody')
            .should('not.contain', name)
    })

    // Validação de multiplas abas
    it('Deve validar o link que abre o instagram em outra aba', () => {
        const id = 'instapapito'

        cy.contains('table tbody tr', id)
            .contains('a', 'Visitar') // Busca o elemento do tipo 'a' que contém o texto 'Visitar'
            .should('have.attr', 'href', 'https://instagram.com/instapapito')
            .and('have.attr', 'target', '_blank')
    })
})