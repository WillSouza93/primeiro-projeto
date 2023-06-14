describe('alura busca cursos', () => {
    const termoBusca = ['Java', 'Python', 'JavaScript']
    const itemBusca = [
        'Formação Aprenda Java com Orientação a Objetos', 
        'Formação Aprenda a programar em Python com Orientação a Objetos', 
        'Formação Mergulhe no JavaScript com TypeScript'
    ]

    beforeEach(() => {
        cy.baseUrlAlura()
    })

    termoBusca.forEach((termo, index) => {
        const curso = itemBusca[index]

        it(`Buscar curso de ${termo}`, () => {
            cy.pesquisaCurso(termo)
            cy.get('h4.busca-resultado-nome').should('contain', (curso))
        })
    })
})