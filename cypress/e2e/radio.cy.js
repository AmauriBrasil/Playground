describe('Radio Buttons', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/radio', 'Radio Buttons')
    })

    it('Deve selecionar a opção Cypress', () => {
        // Para este caso, deverá abrir um bug, pois não contém o'FOR' e 'VALUE'
        cy.contains('label', 'Cypress')
            .click()
    })

    it('Deve selecionar a opção Playwright', () => {
        cy.contains('label', 'Playwright')
            .click()
    })

    it('Deve selecionar a opção Selenium Webdriver', () => {
        cy.contains('label', 'Selenium Webdriver')
            .click()
    })

    it('Deve selecionar a opção Robot Framework', () => {
        cy.contains('label', 'Robot Framework')
            .click()
    })

    it('Deve selecionar a opção Jest', () => {
        cy.contains('label', 'Jest')
            .click()
    })
})