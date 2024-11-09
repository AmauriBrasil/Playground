describe('CEP', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/cep', 'CEP (API dos Correios)')
    })

    it('Deve cadastrar um endereço consumindo a API dos Correios', () => {

        const address = {
            cep: '02308200',
            logradouro: 'Travessa Impressões do Crepúsculo',
            localidade: 'São Paulo',
            uf: 'SP'
        }

        //Criando um espião para validar a API
        cy.intercept('GET', `https://viacep.com.br/ws/${address.cep}/json/`, {
            statusCode: 200,
            body: address
        }).as('getCep')

        cy.get('input[name="cep"]').type(address.cep)
        cy.contains('button', 'Cadastrar').click()

        cy.wait('@getCep')

        //colocar timeout apenas para validação da informação quando o campo não é editavel
        cy.get('input[name="logradouro"]', { timeout: 7000 })
            .should('have.value', address.logradouro)

        cy.get('input[name="cidade"]', { timeout: 7000 })
            .should('have.value', address.localidade)

        cy.get('input[name="estado"]', { timeout: 7000 })
            .should('have.value', address.uf)
    })
})