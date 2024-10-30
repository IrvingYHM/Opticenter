describe("Validación de Campos", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  it("Mostrar error cuando el correo está vacío en el formulario de inicio de sesión", () => {
    cy.visit("/inicioS"); // Ruta a la página de login
    cy.get('input[placeholder="Correo electronico"]').clear();
    cy.get('input[placeholder="Contraseña"]').type("password123");
    cy.get('button[type="submit"]').click();
    cy.contains("El campo es requerido"); // Mensaje de error esperado
  });

  it("Mostrar error cuando la contraseña está vacía en el formulario de inicio de sesión", () => {
    cy.visit("/inicioS");
    cy.get('input[placeholder="Correo electronico"]').type("test@example.com");
    cy.get('input[placeholder="Contraseña"]').clear();
    cy.get('button[type="submit"]').click();
    cy.contains("El campo es requerido"); // Mensaje de error esperado para contraseña
  });

  it("Iniciar sesión exitosamente con credenciales válidas", () => {
    cy.visit("/inicioS");
    cy.get('input[placeholder="Correo electronico"]').type("20210709@uthh.edu.mx");
    cy.get('input[placeholder="Contraseña"]').type("Maxo0121@");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/inicio"); // Redirige al usuario a la página de inicio o dashboard después de iniciar sesión
  });
});
