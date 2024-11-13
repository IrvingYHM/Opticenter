describe('Mi primera prueba', () => {
  //Primera prueba de pagina de inicio
  it('Visita la página de inicio del sitio web', () => {
    cy.visit('https://opticenter-hue.vercel.app/');
  });

  //Prueba de zoom en las imagenes
  it("Debería mostrar el zoom en la imagen al pasar el mouse", () => {
    cy.visit("/");
    cy.get('img[alt="Sunset in the mountains"]').first().trigger("mouseover"); 
    cy.get('img[alt="Sunset in the mountains"]').first().should("have.class", "zoom");
    cy.get('img[alt="Sunset in the mountains"]').first().trigger("mouseout"); 
    cy.get('img[alt="Sunset in the mountains"]').first().should("not.have.class", "zoom"); 
  });



/*   describe("Inicio del sitio web prueba", () => {
    it("Verifica que 'Ingresar a mi cuenta' redirige correctamente", () => {
      cy.visit("/home");
      cy.contains('Ingresar a mi cuenta').click(); // Busca por el texto
      cy.url().should('include', '/IniciaSesion'); // Verifica que redirige a la URL correcta
    });
  }); */
  

});
