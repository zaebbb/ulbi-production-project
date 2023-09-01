describe('Пользователь заходит на страницу статей', () => {
  beforeEach(() => {
    cy.commandLogin('testUser', 'testPassword')
  })

  it('Загрузка списка статей', () => {
    cy.visit('/articles').should('exist')
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })

  it('Загрузка списка статей на стабах (фикстурах)', () => {
    cy.intercept('GET', '**/articles?*', {
      fixture: 'articles-list.json',
    })

    cy.visit('/articles').should('exist')
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })

  it.skip('Пример пропуска теста', () => {
    cy.visit('/articles').should('exist')
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    cy.get('not-found-element').should('exist')
  })
})
