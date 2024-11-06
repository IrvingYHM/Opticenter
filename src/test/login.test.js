import React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../src/views/iniciarS.jsx'; 
import { AuthProvider } from '../src/views/AuthContext.jsx';
import '@testing-library/jest-dom';

describe('Componente Login', () => {
  test('Renderizar el formulario de inicio de sesión correctamente', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>
    );

    // Verifica que el campo de correo electrónico se renderiza
    const emailInput = screen.getByLabelText(/Correo electronico/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');

    // Verifica que el campo de contraseña se renderiza
    const passwordInput = screen.getByLabelText(/Contraseña/i);
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('type', 'password');

    // Verifica que el botón de iniciar sesión se renderiza
    const loginButton = screen.getByRole('button', { name: /Ingresar/i });
    expect(loginButton).toBeInTheDocument();
  });


  //renderizar el captcha
  test('Renderizar el captcha', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>
    );
  
    const captchaElement = screen.getByRole('checkbox'); 
    expect(captchaElement).toBeInTheDocument();
  });

  //Para que empieze la prueba del recapcha
  test('Activar el captcha al hacer clic en el checkbox', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>
    );
  
    const captchaElement = screen.getByRole('checkbox');
    expect(captchaElement).not.toBeChecked();
    fireEvent.click(captchaElement);
    // Verifica que el captcha esté marcado
    expect(captchaElement).toBeChecked();
  });
  
  

});
