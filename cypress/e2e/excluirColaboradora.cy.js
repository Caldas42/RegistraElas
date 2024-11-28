describe('Excluindo colaboradora', () => {
    it('Excluindo colaboradora com sucesso', () => {
        cy.visit('/delete_cypress/')
        cy.get('.button').click()
        cy.get('a > h1').click()
        cy.get('[href="/login/"]').click()
        cy.get('p > a').click()
        cy.get('#username').type('cypress')
        cy.get('#password').type('abc123')
        cy.get('#password_confirm').type('abc123')
        cy.get('.button').click()
        cy.get('#username').type('cypress')
        cy.get('#password').type('abc123')
        cy.get('.button').click()
        cy.get('[href="/aplicacao/home_cadastros/"] > .card').click();
        cy.get('.novo-cadastro-card').click()
        cy.get('#textFormNome').type('Andressa')
        cy.get('#numberFormIdade').type('30')
        cy.get('#numberFormCpf').type('65390182170')
        cy.get('#numberFormCelular').type('81994350921')
        cy.get('#textFormEmail').type('andressa@gmail.com')
        cy.get('#numberFormCep').type('51089472')
        cy.get('#textFormCidade').type('Recife')
        cy.get('#textFormBairro').type('Boa Viagem')
        cy.get('#textFormRua').type('Rua conde')
        cy.get('#numberFormNumero').type('456')
        cy.get('#textFormComplemento').type('bloco 1 apt 201')
        cy.get('#textFormEscolaridade').type('Ensino médio completo')
        cy.get('#textFormExperiencia').type('nunca trabalhei')
        cy.get('#textFormDisponibilidade').type('tempo integral')
        cy.get('#textFormInteresse').type('não tenho')
        cy.get('[for="selectSkillCostura"]').click()
        cy.get('[for="selectSkillCostura"]').click()
        cy.get('.button').click()
        cy.get('.delete-btn').click()
    })

    it('cenario2', () => {
        //steps do cenario2
    })

    it('cenario3', () => {
        //steps do cenario3
    })
})