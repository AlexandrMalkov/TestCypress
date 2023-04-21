// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { ROUTES } from '../constants'

Cypress.Commands.add('login', (username , password) =>
 {

cy.get('#loginform-username').clear().type(username)
cy.get('#loginform-password').clear().type(password)
cy.get('[name="login-button"]').click()

})
