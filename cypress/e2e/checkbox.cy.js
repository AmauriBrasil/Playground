describe('Checkbox', () => {

    beforeEach(() => {
        cy.goHome() //Valida a aplicação ou site
        cy.doLogin() //Valida usuário e senha
        cy.goTo('/checkbox', 'Checkbox') //Valida o menu lateral da home
    })

    it('Deve marcar as opções de linguagens que usam Node.Js', () => {
        cy.get('label[for="javascript"]')
            .click()
    
        cy.get('label[for="typescript"]')
            .click()
    })

    it('Deve marcar todas as opções', () => {
        // const -> Constante para looping (quando vai clicar em todas as opções disponíveis)
        // langs e lang -> linguagens/linguagem
        const langs = ['javascript', 'python', 'rust', 'go', 'typescript']

        langs.forEach(lang => {
            cy.get(`label[for="${lang}"]`)
                .click()
        })
    })
})