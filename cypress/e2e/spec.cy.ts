describe('Tests the application.', () => {
  it('Visits the page.', () => {
    cy.visit('http://localhost:5173')
    cy.get('img').should('have.length', 20);
    cy.get('input').type('charmander');
    cy.get('form').submit();
    cy.get('#pokemon-name').should('have.text', 'charmander')
    cy.get('input').clear();
    cy.get('#change-search-type-button').click();
    cy.get('input').type('003');
    cy.get('form').submit();
    cy.get('#pokemon-id').should('have.text', '#003')
    cy.get('input').clear();
    cy.get('form').submit();
    cy.get('#pokemon-preview').should('be.visible').click();
    cy.get('#pokemon-img').click();
    cy.wait(3000)
    cy.get('#infocard').should('be.visible')
    cy.get('#right-arrow').click();
    cy.get('#left-arrow').click();
    cy.get('#infocard-pokemon-id').should('have.text', '#001')
  })
})