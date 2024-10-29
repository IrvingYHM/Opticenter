//carga inicial y visualización de productos


describe('Página de productos', () => {
    it('Carga y muestra productos', () => {
      cy.visit('/lentes'); // Visita la ruta de productos
      cy.contains('¡Descubre nuestra colección de lentes!'); // Asegura que el mensaje de bienvenida esté visible
      cy.get('.w-80').should('have.length.greaterThan', 0); // Comprueba que al menos un producto esté visible
    });
  });
  