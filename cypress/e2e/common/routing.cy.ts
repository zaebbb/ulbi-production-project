describe('template spec', () => {
  describe('Пользователь не авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/')
      cy.getByTestId('MainPage').should('exist')
    })

    it('Переход открывает страницу профиля', () => {
      cy.visit('/profile/1')
      cy.getByTestId('MainPage').should('exist')
    })

    it('Переход открывает не существующую страницу', () => {
      cy.visit('/nor-found-page')
      cy.getByTestId('NotFoundPage').should('exist')
    })
  })

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.commandLogin('testUser', 'testPassword')
    })

    it('Переход открывает страницу профиля', () => {
      cy.visit('/profile/1')
      cy.getByTestId('ProfilePage').should('exist')
    })

    it('Переход открывает страницу со списком статей', () => {
      cy.visit('/articles')
      cy.getByTestId('ArticlesPage').should('exist')
    })
  })
})
