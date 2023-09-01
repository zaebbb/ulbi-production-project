
let articleId = ''

describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.commandLogin('testUser', 'testPassword')
    cy.createArticle().then(article => {
      articleId = article.id
      cy.visit(`/articles/${articleId}`)
    })
  })

  afterEach(() => {
    cy.removeArticle(articleId)
  })

  it('Просмотр содержимого статьи', () => {
    cy.getByTestId('ArticleDetails').should('exist')
  })

  it('Просмотр списка рекомендаций', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist')
  })

  it('Отправка комментария', () => {
    cy.getByTestId('ArticleDetails')
    cy.getByTestId('AddCommentForm').scrollIntoView()
    cy.addComment('text')
    cy.getByTestId('CommentCard').should('have.length', 1)
  })

  it('Оставить оценку', () => {
    cy.getByTestId('ArticleDetails')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(4, 'feedback').scrollIntoView()
    cy.get('[data-selected=true]').should('have.length', 4)
  })

  it('Оставить оценку на стабах', () => {
    cy.intercept('GET', '**/articles/*', {
      fixture: 'article-details.json',
    })

    cy.getByTestId('ArticleDetails')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(4, 'feedback').scrollIntoView()
    cy.get('[data-selected=true]').should('have.length', 4)
  })
})
