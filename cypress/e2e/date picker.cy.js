describe('Date Picker', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/date-picker', 'Date Picker')
    })

    it('Deve selecionar uma data (dd/mm/yyy)', () => {
        cy.get('input[placeholder="Escolha uma data"][readonly]')
            .click()

        cy.get('select[aria-label="Month"]') // Seleciona o mês
            .select('Novembro')

        cy.get('input[aria-label="Year"]') // Seleciona o ano
            .type('2025')

        cy.get('span[aria-label="Novembro 18, 2025"]') // Seleciona o dia 
            .click()
    })
})