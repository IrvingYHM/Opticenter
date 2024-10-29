describe('Validación de Campos', () => {
    it('Mostrar error cuando el correo está vacío en el formulario de inicio de sesión', () => {
      cy.visit('/inicioS'); // Ruta a la página de login
      cy.get('input[placeholder="Correo electronico"]').clear();
      cy.get('input[placeholder="Contraseña"]').type('password123');
      cy.get('button[type="submit"]').click();
      cy.contains('El campo es requerido'); // Mensaje de error esperado
    });
  });
  