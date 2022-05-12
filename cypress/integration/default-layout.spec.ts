describe('DefaultLayout', () => {
  it('should have a logo that is a link to a homepage', () => {
    cy.visit('/');
    cy.contains('Bazarek');
    cy.get('[data-test-logo]')
      .should('have.attr', 'href')
      .and('include', '/');
  });
});
