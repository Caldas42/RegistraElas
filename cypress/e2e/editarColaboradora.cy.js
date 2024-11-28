describe('Editando colaboradora', () => {
    it('Editando uma colaboradora com sucesso', () => {
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
        cy.get('.editar-btn').click()
        cy.get('#numberFormIdade').clear()
        cy.get('#numberFormIdade').type('28')
        cy.get('.button').click()
    })

    it('Esquecendo de escrever alguma coisa na idade da colaboradora', () => {
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
        cy.get('.editar-btn').click()
        cy.get('#numberFormIdade').clear()
        cy.get('.button').click()
    })

    it('Editando o endereço da colaboradora', () => {
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
        cy.get('.editar-btn').click()
        cy.get('#textFormCep').clear()
        cy.get('#textFormCep').type('23958105')
        cy.get('#textFormCidade').clear()
        cy.get('#textFormCidade').type('Caruaru')
        cy.get('#textFormBairro').clear()
        cy.get('#textFormBairro').type('bom conselho')
        cy.get('#textFormRua').clear()
        cy.get('#textFormRua').type('rua amarilio pessoa')
        cy.get('#numberFormNumero').clear()
        cy.get('#numberFormNumero').type('1024')
        cy.get('#textFormComplemento').clear()
        cy.get('#textFormComplemento').clear('não tem')
        cy.get('.button').click()
    })
})