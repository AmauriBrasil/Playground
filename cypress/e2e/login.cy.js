describe('Login', () => {

  beforeEach(() => {
    cy.goHome()
  })

  it('Deve logar com sucesso', () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
  })

  it('Não deve logar com e-mail incorreto', () => {
    cy.login('404@cyskills.com.br', 'showtime')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com senha incorreta', () => {
    cy.login('papito@cyskills.com.br', '404a404')
    cy.noticeHave('E-mail ou senha incorreto. Por favor, tente novamente!')
  })

  it('Não deve logar com formato de e-mail incorreto', () => {
    cy.login('abc.cyskills.com.br', 'showtime')
    cy.noticeHave('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
  })

  it('Não deve logar com senha com menos de 6 caracteres', () => {
    cy.login('papito@cyskills.com.br', 'abc')
    cy.noticeHave('A senha precisa ter pelo menos 6 caracteres. Vamos tentar de novo!')
  })

  it('Não deve logar sem o e-mail', () => {
    cy.login('', ('abc12345'))
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  })

  it('Não deve logar sem a senha', () => {
    cy.login('amauri@teste.com.br', (''))
    cy.noticeHave('Por favor, digite sua senha para continuar.')
  })

  it('Não deve logar sem o email e sem a senha', () => {
    cy.login('', (''))
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  })
});