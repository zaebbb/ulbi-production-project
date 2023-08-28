import { commandLogin } from './commands/login'

Cypress.Commands.add('login', commandLogin)

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<void>
    }
  }
}

export {}
