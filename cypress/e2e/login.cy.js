describe("Validación de Campos", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  //Prueba de mostrar error cuando el campo de correo electronico esta vacio
  it("Mostrar error cuando el correo está vacío en el formulario de inicio de sesión", () => {
    cy.visit("/inicioS"); 
    cy.get('input[placeholder="Correo electronico"]').clear();
    cy.get('input[placeholder="Contraseña"]').type("password123");
    cy.get('button[type="submit"]').click();
    cy.contains("El campo es requerido"); 
  });

  //Prueba de error cuando el campo de la contraseña esta vacio en el formulario
  it("Mostrar error cuando la contraseña está vacía en el formulario de inicio de sesión", () => {
    cy.visit("/inicioS");
    cy.get('input[placeholder="Correo electronico"]').type("test@example.com");
    cy.get('input[placeholder="Contraseña"]').clear();
    cy.get('button[type="submit"]').click();
    cy.contains("El campo es requerido"); 
  });

  //Prueba cuando la contraseña tiene menos caracteres del minimo requerido
  it('Mostrar error cuando la contraseña tiene menos caracteres que el mínimo requerido', () => {
    cy.visit('/inicioS');
    cy.get('input[placeholder="Correo electronico"]').type('test@example.com');
    cy.get('input[placeholder="Contraseña"]').type('123');
    cy.get('button[type="submit"]').click();
    cy.contains('La contraseña debe tener al menos 8 caracteres'); 
  });

  //Prueba de que los campos de correo y contraseña estan vacios.
  it('Mostrar error cuando los campos de correo y contraseña están vacíos', () => {

    cy.intercept('POST', '**/recaptcha/api/siteverify', {
      statusCode: 200,
      body: { success: true }, 
    }).as('verifyCaptcha');
  
    cy.visit('/inicioS');
    cy.get('input[placeholder="Correo electronico"]').clear();
    cy.get('input[placeholder="Contraseña"]').clear();
    cy.get('button[type="submit"]').click();
  
    // Verificar que ambos mensajes de error existen
    cy.contains('El campo es requerido').should('exist'); 
    cy.contains('El campo es requerido').should('exist'); 
  });


  //Prueba para verificar las credenciales exitosas.
  it("Iniciar sesión exitosamente con credenciales válidas", () => {
    cy.visit("/inicioS");
    cy.get('input[placeholder="Correo electronico"]').type("20210709@uthh.edu.mx");
    cy.get('input[placeholder="Contraseña"]').type("Maxo0121@");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/inicio");
  });
});
