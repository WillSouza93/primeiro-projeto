describe('Teste de registro inválido', () => {
    beforeEach('Acessar página do alurapic', () => {
        cy.baseUrlAlurapic()
        cy.paginaDeRegistro()
    })

    it('verificar mensagens de validação', () => {
        cy.contains('button.btn', 'Register').click()
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    })

    it('verificar campos invalidos', () => {
        cy.get('input[formcontrolname="email"]').type('willian')
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
        cy.get('input[formcontrolname="fullName"]').type('w{enter}')
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible')
        cy.get('input[formcontrolname="userName"]').type('w{enter}')
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible')
        cy.get('input[formcontrolname="password"]').type('1234567{enter}')
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
    })

    it('verificar mensagem que o nome de usuário deve estar em minúsculo', () => {
        cy.get('input[formcontrolname="userName"]').type('WILL{enter}')
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')
    })
})

describe('Teste de registro válido', () => {
    beforeEach('Acessar página do alurapic', () => {
        cy.baseUrlAlurapic()
        cy.paginaDeRegistro()
    })

    it.only('Registro com sucesso', () => {
        cy.get('input[formcontrolname="email"]').type('teste01@email.com')
        cy.get('input[formcontrolname="fullName"]').type('Teste01')
        cy.get('input[formcontrolname="userName"]').type('teste01')
        cy.contains('small[class="text-success"]', 'User available').should('be.visible')
        cy.get('input[formcontrolname="password"]').type('12345678')
        cy.contains('button.btn', 'Register').click()
        cy.get('h4.text-center').should('contain', 'Login')
    })
})
