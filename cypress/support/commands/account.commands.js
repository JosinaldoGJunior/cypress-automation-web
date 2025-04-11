const loc = require('../locators');

Cypress.Commands.add('createAccount', (accountName) => {
  cy.get(loc.MENU.SETTINGS).click();
  cy.get(loc.MENU.ACCOUNT).click();
  cy.get(loc.ACCOUNT.NAME).type(accountName);
  cy.get(loc.ACCOUNT.BTN_SAVE).click();
  
});

Cypress.Commands.add('editAccount',(oldName, newName) => {
  cy.contains('tr', oldName).find('.fa-edit').click();
  cy.get(loc.ACCOUNT.NAME).clear().type(newName);
  cy.get(loc.ACCOUNT.BTN_SAVE).click();
  cy.contains('tr', newName).should('exist');
  cy.contains('tr', oldName).should('not.exist');
});




