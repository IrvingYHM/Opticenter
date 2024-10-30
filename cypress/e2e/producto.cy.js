  describe('Página de productos', () => {

  //Carga y muestra de productos
    it('Carga y muestra productos', () => {
      cy.visit('/lentes'); 
      cy.contains('¡Descubre nuestra colección de lentes!'); 
      cy.get('.w-80').should('have.length.greaterThan', 0); 
    });

  // verificar que carguen las imagenes correctamente
    it('Verifica que las imágenes de los productos se carguen correctamente', () => {
      cy.visit('/lentes'); 
      cy.get('.w-80').each(($el) => {
        cy.wrap($el).find('img').should('have.attr', 'src').and('not.be.empty'); 
      });
    });

  //Que funcione correctamente el boton de detalle producto
    it('El botón de detalle funciona correctamente', () => {
      cy.visit('/lentes'); 
      cy.get('.w-80').first().find('a').click(); 
      cy.url().should('include', '/productoDetalle/'); 
    });
    
  });
  