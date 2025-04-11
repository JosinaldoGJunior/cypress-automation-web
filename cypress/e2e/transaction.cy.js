const loc = require('../support/locators');
import { v4 as uuid_account } from 'uuid';


describe('Transactions', () => {
  beforeEach(() => {
    cy.login();
})



  it('Should create a transaction', () => {

  // 🚨 This test is expected to fail for Allure report demo.
  // To make it pass, uncomment the assertion below.
    
    const nameAccountTransaction = `Account-${uuid_account()}`;
    
    cy.createAccount(nameAccountTransaction);

    cy.creatTransaction(nameAccountTransaction)
    //cy.validateToast('Movimentação inserida com sucesso!')
    cy.validateToast('error!')
    cy.contains('.row', nameAccountTransaction).should('be.visible')
  });


  it('Should delete a transactions', () => {
    cy.deleteTransaction()
    cy.validateToast('Movimentação removida com sucesso!')
  });


});