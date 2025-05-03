Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://demoqa.com/selectable');

  cy.get('#demo-tab-grid').click();

  cy.contains('.list-group-item', 'Two').click();
  cy.contains('.list-group-item', 'Four').click();
  cy.contains('.list-group-item', 'Six').click();
  cy.contains('.list-group-item', 'Eight').click();

  cy.contains('.list-group-item', 'Two').should('have.class', 'active');
  cy.contains('.list-group-item', 'Four').should('have.class', 'active');
  cy.contains('.list-group-item', 'Six').should('have.class', 'active');
  cy.contains('.list-group-item', 'Eight').should('have.class', 'active');

  cy.contains('.list-group-item', 'One').should('not.have.class', 'active');
  cy.contains('.list-group-item', 'Three').should('not.have.class', 'active');
  cy.contains('.list-group-item', 'Five').should('not.have.class', 'active');
  cy.contains('.list-group-item', 'Seven').should('not.have.class', 'active');
  cy.contains('.list-group-item', 'Nine').should('not.have.class', 'active');
});
