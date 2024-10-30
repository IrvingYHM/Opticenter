describe('Mi primera prueba', () => {
  //Primera prueba de pagina de inicio
  it('Visita la página de inicio del sitio web', () => {
    cy.visit('https://opticenter-hu.vercel.app');
  });

  //Prueba de zoom en las imagenes
  it("Debería mostrar el zoom en la imagen al pasar el mouse", () => {
    cy.visit("/");
    cy.get('img[alt="Sunset in the mountains"]').first().trigger("mouseover"); 
    cy.get('img[alt="Sunset in the mountains"]').first().should("have.class", "zoom");
    cy.get('img[alt="Sunset in the mountains"]').first().trigger("mouseout"); 
    cy.get('img[alt="Sunset in the mountains"]').first().should("not.have.class", "zoom"); 
  });



  //Prueba de mostrar el footer
  it("Debería mostrar el footer en la página", () => {
    cy.visit("/");
    cy.get("footer").should("exist"); 
  });
  

});
