describe('Upload', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/upload', 'Upload')
    })

    it('Deve selecionar um arquivo para upload', () => {
        cy.get('input[name="doc"]') // Busca do elemento (arquivo)
            .selectFile('cypress/fixtures/doc.pdf') // Seleção do arquivo
            .then(element => { // Vai manipular o arquivo dentro do callback
                expect(element[0].files[0].name).to.equal('doc.pdf') // Retorno (elemento) + (arquivo) + (nome do arquivo) = nome do arquivo inserido 
            })
    })

    it('Deve selecionar um arquivo de imagem', () => {
        cy.get('input[name="photo"]')
            .selectFile('cypress/fixtures/liga.jpg')
            .then(element => {
                expect(element[0].files[0].name).to.equal('liga.jpg')
            })

        cy.get('#image-upload') // Sempre usar "#" para id
            .find('img')
            .should('be.visible') // Verifica se está visível
            .should('have.attr', 'src') // Verifica a existência do atributo 'src'
            .and('include', 'blob') // Pergunta se dentro deste atributo contém texto blob, se sim, está correto
    })
})