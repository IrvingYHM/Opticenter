// Barra.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { expect, vi } from 'vitest'; // vitest proporciona 'expect' y 'vi' para mocks y spies
import Barra from '../components/Navegacion/barra'; 
import Busqueda from '../components/Navegacion/Busqueda'; 
import { MemoryRouter } from 'react-router-dom';

describe('Componente Barra', () => {

  // Test 1: Renderización del logo en la barra
  it('debe renderizar el logo', () => {
    render(
      <MemoryRouter>
        <Barra />
      </MemoryRouter>
    );

    // Verifica si el logo está presente en la pantalla
    const logo = screen.getByAltText('icono');
    expect(logo).toBeInTheDocument();
  });

  // Test 2: Comprobamos si el input de búsqueda se renderiza correctamente
  it('debe renderizar el campo de entrada de búsqueda', () => {
    render(
      <Busqueda busqueda="" setBusqueda={() => {}} handleSearch={() => {}} />
    );

    // Verifica si el input de búsqueda está presente
    const input = screen.getByPlaceholderText('Buscar');
    expect(input).toBeInTheDocument();
  });

  // Test 3: Probar el cambio de valor en el campo de búsqueda
  it('debe actualizar el valor de búsqueda cuando se escribe', () => {
    const setBusquedaMock = vi.fn();
    render(
      <Busqueda busqueda="" setBusqueda={setBusquedaMock} handleSearch={() => {}} />
    );

    const input = screen.getByPlaceholderText('Buscar');
    fireEvent.change(input, { target: { value: 'lentes' } });

    // Verifica que la función setBusqueda haya sido llamada con el nuevo valor
    expect(setBusquedaMock).toHaveBeenCalledWith('lentes');
  });

  // Test 4: Verificar si handleSearch es llamado al presionar "Enter"
  it('debe llamar a handleSearch cuando se presione "Enter"', () => {
    const handleSearchMock = vi.fn();
    render(
      <Busqueda busqueda="" setBusqueda={() => {}} handleSearch={handleSearchMock} />
    );

    const input = screen.getByPlaceholderText('Buscar');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    // Espera que handleSearch se haya llamado
    expect(handleSearchMock).toHaveBeenCalledTimes(1);
  });

  // Test 5: Verificar si handleSearch es llamado al hacer clic en el botón de búsqueda
  it('debe llamar a handleSearch cuando se haga clic en el botón de búsqueda', async () => {
    const handleSearchMock = vi.fn();
    render(
      <Busqueda busqueda="" setBusqueda={() => {}} handleSearch={handleSearchMock} />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => {
      // Espera que handleSearch se haya llamado cuando el botón sea clickeado
      expect(handleSearchMock).toHaveBeenCalledTimes(1);
    });
  });

});
