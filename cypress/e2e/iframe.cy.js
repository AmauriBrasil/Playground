describe('Iframe', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/iframe', 'IFrame')
    })

    it('Deve preencher o nome em uma página que tem Iframe', () => {
        cy.get('[data-cy="iframe-inputs"]')
            .its('0.contentDocument.body') // acessa o body do conteúdo do iframe.
            .should('not.be.empty') // Garantir que o body não está vazio antes de prosseguir
            .then(cy.wrap) // Embrulha o 'body' para que possa usar comandos do Cypress (find, type, etc.) diretamente nele.
            .find('#fullname')
            .type('Fernando Papito')
    })
})