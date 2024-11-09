describe('Textarea', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
    })

    it('Deve preencher o campo de área de texto', () => {
        cy.goTo('/textarea', 'Textarea')

        cy.get('textarea[name="message"]')
            .type('Bla Bla Bla')
    })
})