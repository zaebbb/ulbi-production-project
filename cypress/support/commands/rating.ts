export const setRate = (stars: number = 5, feedback: string) => {
  cy.getByTestId(`star-rating-${stars}`).click()
  cy.getByTestId('rating-card-input').type(feedback ?? '')
  cy.getByTestId('rating-card-send').click()
}

declare global {
  namespace Cypress {
    interface Chainable {
      setRate(stars: number, feedback?: string): Chainable<void>
    }
  }
}
