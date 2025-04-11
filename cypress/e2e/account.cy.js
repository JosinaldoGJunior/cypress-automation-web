import { v4 as uuid_account } from 'uuid';


describe('Account', () => {

  beforeEach(() => {
    cy.login();
})
  it('Should create account with sucess', () => {
    const accountName = `Account-${uuid_account()}`;
    cy.createAccount(accountName);
    cy.validateToast('Conta inserida com sucesso')
  });

  it('Should edit account with sucesso', () => {
    const accountName = `Account-${uuid_account()}`;
    const accountNameEdit = `Editx-${uuid_account()}`;
    cy.createAccount(accountName);
    cy.contains('tr', accountName).should('exist');
    cy.editAccount(accountName,accountNameEdit);
    cy.validateToast('Conta atualizada')

  });


  it('Should not create an account with same name', () => {
    const accountName = `Account-${uuid_account()}`;
    const name = accountName
    cy.createAccount(name);
    cy.wait(1000)
    cy.createAccount(name);
    cy.validateToast('code 400')

  });

});