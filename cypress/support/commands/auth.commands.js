import loc from '../locators'

Cypress.Commands.add('login', () => {
  const email = Cypress.env('email');    
  const password = Cypress.env('password'); 
  cy.visit(Cypress.env('baseUrl'));
  cy.wait(100);
  cy.get(loc.LOGIN.USER).should('be.visible').type(email);
  cy.get(loc.LOGIN.PASSWORD).type(password);
  cy.get(loc.LOGIN.BTN_LOGIN).click();
  cy.get(loc.MESSAGE).should('be.visible').and('contain', 'Bem vindo'); 
  
});

Cypress.Commands.add('validateToast', (message) => {
  cy.get(loc.MESSAGE).should('contain', message);
});