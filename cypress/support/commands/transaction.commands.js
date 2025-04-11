const loc = require('../locators');

Cypress.Commands.add('creatTransaction', (nameTransaction) => {


  cy.get(loc.MENU.SETTINGS).click();
  cy.get(loc.MENU.TRANSACTION).click();
  cy.get(loc.TRANSACTION.DESCRIPTION).type('Desc')
  cy.get(loc.TRANSACTION.VALUE).type('123')
  cy.get(loc.TRANSACTION.INTERESTED).type(nameTransaction)
  cy.get(loc.TRANSACTION.ACCOUNT).select(nameTransaction)
  cy.get(loc.TRANSACTION.BTN_SAVE).click()
});


Cypress.Commands.add('deleteTransaction',() => {
  cy.get(loc.MENU.EXTRACT).click();
  cy.get('.list-group > li').first() 
    .find('.fa-trash-alt') 
    .click();
});