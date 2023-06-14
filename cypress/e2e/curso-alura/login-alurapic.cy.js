describe('Login no site Alurapic', () => {
    beforeEach('Acessar página do alurapic', () => {
        cy.baseUrlAlurapic()
    })

    it.only('Login sem sucesso', () => {
        cy.loginPage('willi', '1234')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })

    it('Login com sucesso', () => {
        cy.loginPage('will', 12345678)
        cy.contains('a', 'Logout').should('be.visible')
    })
})