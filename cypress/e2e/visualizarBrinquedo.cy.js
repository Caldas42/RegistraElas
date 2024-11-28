describe('Visualizando brinquedo', () => {
    it('Visualizando brinquedo com sucesso', () => {
        cy.visit('/delete_cypress/')
        cy.get('.button').click()
        cy.get('[href="/login/"]').click()
        cy.get('p > a').click()
        cy.get('#username').type('cypress')
        cy.get('#password').type('abc123')
        cy.get('#password_confirm').type('abc123')
        cy.get('.button').click()
        cy.get('#username').type('cypress')
        cy.get('#password').type('abc123')
        cy.get('.button').click()
        cy.get('[href="/aplicacao/home_brinquedos/"] > .card').click()
        cy.wait(2000)
        cy.get('.adicionar').click()
        cy.wait(2000)
        cy.get('#textFormBrinquedoNome').type('Fantoche')
        cy.get('#textFormBrinquedoCategoria').type('Fantoche de mão')
        cy.get('#textFormBrinquedoMateriais').type('pano,botões,garrafa pet')
        cy.get('#textFormBrinquedoTematica').type('Fantasia')
        cy.get('#numberFormBrinquedoQuantidade').type(50)
        cy.get('.button').click()
        cy.get('.mensagem').invoke('text').should('have.string', "Brinquedo adicionado com sucesso!")
        cy.wait(2000)
        cy.get('.brinquedo-info > :nth-child(1)').click()
        cy.get('#cadastro-estilo').invoke('text').should('have.string', "Fantoche")
    })
})