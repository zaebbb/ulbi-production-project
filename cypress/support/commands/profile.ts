import { User } from "../../../src/entities/User";

export const updateProfile = (firstname: string = 'new data', lastname: string = 'new data') => {
  cy.getByTestId('editable-profile-card-header-edit-button').click()
  cy.getByTestId('profile-card-firstname').clear().type(firstname)
  cy.getByTestId('profile-card-lastname').clear().type(lastname)
  cy.getByTestId('editable-profile-card-header-edit-save').click()
}

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
      authorization: 'test-token'
    },
    body: {
      id: "5",
      first: "test",
      lastname: "test",
      age: 2021,
      currency: "RUB",
      country: "Russia",
      city: "Ekb",
      username: "test",
      avatar: "https://randomwordgenerator.com/img/picture-generator/53e0d3424353ac14f1dc8460962e33791c3ad6e04e50744172277fd7924fcd_640.jpg"
    },
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<User>
      resetProfile(profileId: string): Chainable<User>
    }
  }
}
