import { USER_LOCAL_STORAGE_KEY } from '../../../src/shared/const/localstorage'

export const commandLogin = (username: string = 'test', password: string = 'test') => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(body))

    cy.visit('/')
  })
}
