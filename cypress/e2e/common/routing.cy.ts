import { selectByTestId } from '../../helpers/selectByTestId'

describe('template spec', () => {
  describe('Пользователь не авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/')
      cy.get(selectByTestId('MainPage')).should('exist')
    })

    it('Переход открывает страницу профиля', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('MainPage')).should('exist')
    })

    it('Переход открывает не существующую страницу', () => {
      cy.visit('/nor-found-page')
      cy.get(selectByTestId('NotFoundPage')).should('exist')
    })
  })

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login('testUser', 'testPassword')
    })

    it('Переход открывает страницу профиля', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('ProfilePage')).should('exist')
    })

    it('Переход открывает страницу со списком статей', () => {
      cy.visit('/articles')
      cy.get(selectByTestId('ArticlesPage')).should('exist')
    })
  })
})
