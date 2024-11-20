import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../views/iniciarS'; // Ruta al componente
import { AuthContext } from '../views/AuthContext'; // Si usas contexto
import { BrowserRouter } from 'react-router-dom'; // Importa el Router necesario

// Mock de ReCAPTCHA
vi.mock('react-google-recaptcha', () => ({
  __esModule: true,
  default: () => <div data-testid="recaptcha-mock">ReCAPTCHA Mock</div>,
}));

// Mock de la función login si es necesario
const mockLogin = vi.fn();

describe('App', () => {
  it('debería renderizar el formulario de login con ReCAPTCHA', () => {
    render(
      <AuthContext.Provider value={{ login: mockLogin }}>
        <BrowserRouter> 
          <App />
        </BrowserRouter>
      </AuthContext.Provider>
    );
    
    // Verificar que los elementos del formulario están presentes
    expect(screen.getByLabelText(/Correo Electronico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
    
    // Verificar que el ReCAPTCHA se muestra correctamente
    expect(screen.getByTestId('recaptcha-mock')).toBeInTheDocument();
  });

});
