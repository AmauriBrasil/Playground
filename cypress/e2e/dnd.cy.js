describe('Drag and Drop', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/tasks', 'Task Board')
    })

    it('Deve finalizar uma tarefa', () => {
        const task = 'Definir requisitos do projeto'

        // Para este teste deverá instanciar uma classe nativa do JavaScript
        const dataTransfer = new DataTransfer() // "dataTransfer" é um elemento que trabalha com transfêrencia de dados no JavaScript

        // Sempre que for testar Drag and Drop, utilizar sempre o elemento "draggable" que contem o valor "true"
        // Antes (não está sendo usado a constante "Task")
        //cy.get('[data-cy="1002"]')
        //    .trigger('dragstart', { // Irá simular o "clicar + arrastar"
        //        dataTransfer
        //    })

        // Depois (utilizando a constante "Task")
        cy.contains('div[draggable="true"]', task)
            .trigger('dragstart', { // Irá simular o "clicar + arrastar"
                dataTransfer
            })

        cy.contains('h4', 'Done')
            .parent()
            .trigger('drop', {  // Simula o "soltar"
                dataTransfer
            })

        //verifica se esta tarefa moveu para coluna Done
        cy.contains('h4', 'Done')
            .parent()
            .contains('div[draggable="true"]', task)
            .should('be.visible')
    })
})