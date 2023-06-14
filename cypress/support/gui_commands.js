Cypress.Commands.add('baseUrlAlura', () => {
    cy.visit('https://www.alura.com.br')
})

Cypress.Commands.add('baseUrlAlurapic', () => {
    cy.visit('https://alura-fotos.herokuapp.com/#/home')
})

Cypress.Commands.add('loginPage', (usuario, senha) => {
    cy.get('input[formcontrolname="userName"]').type(usuario)
    cy.get('input[formcontrolname="password"]').type(senha)
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('paginaDeRegistro', () => {
    cy.contains('a', 'Register now').click()
    cy.contains('button.btn', 'Register').click()
})

Cypress.Commands.add('pesquisaCurso', (curso) => {
    cy.get('#header-barraBusca-form-campoBusca').type(curso)
    cy.get('.header-barraBusca-form-submit').click()
})