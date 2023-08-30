export const addComment = (commentText: string) => {
  cy.getByTestId('add-comment-form-input').type(commentText)
  cy.getByTestId('add-comment-form-button').click()
}

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>
    }
  }
}
