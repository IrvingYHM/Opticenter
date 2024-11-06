import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Importa MemoryRouter
import Barra from "../src/components/Navegacion/barra"; // Ajusta la ruta según tu estructura de archivos
import "@testing-library/jest-dom";

describe("Barra de navegacion", () => {
  //Renderizado correctamente en el DOM y que el logo aparezca
  test("Renderizacion de barra de componentes", () => {
    render(
      <MemoryRouter>
        <Barra />
      </MemoryRouter>
    );

    const logoElement = screen.getByAltText(/icono/i);
    expect(logoElement).toBeInTheDocument();
  });
  test('Renderizacion de links de navegacion', () => {
    render(
      <MemoryRouter>
        <Barra />
      </MemoryRouter>
    );
    
    const homeLink = screen.getAllByText(/inicio/i); // Ajusta el texto según lo que esperas en el enlace
    const LentesLink = screen.getAllByText(/lentes/i); // Ajusta el texto según lo que esperas en el enlace

    expect(homeLink.length).toBe(2);
    expect(LentesLink.length).toBe(2);

  });


});
