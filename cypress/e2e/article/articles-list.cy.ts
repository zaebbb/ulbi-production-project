describe('Пользователь заходит на страницу статей', () => {
  beforeEach(() => {
    cy.commandLogin('testUser', 'testPassword')
  })

  it('Загрузка списка статей', () => {
    cy.visit('/articles').should('exist')
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })
})