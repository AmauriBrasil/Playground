describe('Iframe', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/iframe', 'IFrame')
    })

    it.only('Deve preencher o nome em uma página que tem Iframe', () => {
        cy.get('[data-cy="iframe-inputs"]')
            .its('0.contentDocument.body') // É usado para alcançar o body dentro do primeiro (e único) iframe encontrado no seletor
            .should('not.be.empty') // Verifica se o body não está vazio, garantindo que o conteúdo do iframe foi carregado
            .then((body) => { // Usa then para obter o body do iframe como um parâmetro (aqui chamado body)
                cy.wrap(body) //Embrulha" o body do iframe para que possamos usar comandos Cypress, como find e type, diretamente nele.
                    .find('#fullname') //Procura dentro do body do iframe o elemento com o ID
                    .type('Fernando Papito') //Insere o texto "Fernando Papito" no campo #fullname dentro do iframe
            })
    })
})
