import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedInicio: null,
      selectedVenta: null,
      selectedFinalizar: null,
      selectedFuturo: null,
      fechasInicio: [
        "1 de enero del 2024",
        "1 de febrero del 2024",
        "1 de marzo del 2024",
      ],
      fechasFinalizar: [
        "1 de febrero del 2024",
        "1 de marzo del 2024",
        "1 de abril del 2024",
      ],
      fechasFuturas: [
        "1 de mayo del 2024",
        "1 de junio del 2024",
        "1 de julio del 2024",
        "1 de agosto del 2024",
        "1 de septiembre del 2024",
        "1 de octubre del 2024",
        "1 de noviembre del 2024",
        "1 de diciembre del 2024",
      ],
      fechasVentas: ["Venta 1", "Venta 2", "Venta 3"],
      ventasInicio: {
        "1 de enero del 2024": 124,
        "1 de febrero del 2024": 160,
        "1 de marzo del 2024": 200,
      },
      ventasFinalizar: {
        "1 de febrero del 2024": 160,
        "1 de marzo del 2024": 200,
        "1 de abril del 2024": 152,
      },
      ventasFuturo: {},
    };
  }

  calcularVentasFuturo = (inicio, finalizar, futuro) => {
    const CI = this.state.ventasInicio[inicio];
    const K = this.state.ventasFinalizar[finalizar];
    const t1 = 4;
    const t2 = 6;
    const t = (t2 - t1) / (1000 * 60 * 60 * 24 * 30); // Calcula el tiempo en meses

    const r = Math.log(K / CI) / t; // Calcula la tasa de crecimiento
    const ventasFuturo = CI * Math.pow(Math.E, r * t); // Calcula las ventas futuras
    return ventasFuturo.toFixed(2);
  };

  render() {
    const {
      selectedInicio,
      selectedVenta,
      selectedFinalizar,
      selectedFuturo,
      ventasInicio,
      ventasFinalizar,
      ventasFuturo,
    } = this.state;

    return (
      <div className="py-24">
        <h1 className="text-2xl font-bold text-center">
          Calculo de las reseñas y valoraciones de los clientes en las ventas:
        </h1>

        <div className="text-center mt-2">
          <label htmlFor="SeleccionInicio">Selecciona la fecha a iniciar</label>
        </div>
        <select
          value={selectedInicio}
          onChange={(e) => this.setState({ selectedInicio: e.target.value })}
          className="block mx-auto my-8 p-2 border border-gray-300 rounded-md"
        >
          <option value="">Selecciona una fecha</option>
          {this.state.fechasInicio.map((fecha, index) => (
            <option key={index} value={fecha}>
              {fecha}
            </option>
          ))}
        </select>

        {selectedInicio && (
          <>
            <table className="mx-auto border-collapse mt-6">
              <tbody>
                <tr>
                  <td className="border px-4 py-2 text-center font-semibold">
                    Datos
                  </td>
                  <td className="border px-4 py-2 text-center font-semibold">
                    V = ventas
                  </td>
                  <td className="border px-4 py-2 text-center font-semibold">
                    t = tiempo
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CMI</td>
                  <td className="border px-4 py-2">
                    {ventasInicio[selectedInicio]}
                  </td>
                  <td className="border px-4 py-2">{selectedInicio}</td>
                </tr>
              </tbody>
            </table>
            <div className="text-center mt-2">
              <label htmlFor="SeleccionVenta">
                Selecciona la fecha a finalizar
              </label>
            </div>
            <select
              value={selectedFinalizar}
              onChange={(e) =>
                this.setState({ selectedFinalizar: e.target.value })
              }
              className="block mx-auto my-4 p-2 border border-gray-300 rounded-md"
            >
              <option value="">Selecciona una fecha</option>
              {this.state.fechasFinalizar.map((fecha, index) => (
                <option key={index} value={fecha}>
                  {fecha}
                </option>
              ))}
            </select>

            {selectedFinalizar && (
              <table className="mx-auto border-collapse mt-8">
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-center font-semibold">
                      Datos
                    </td>
                    <td className="border px-4 py-2 text-center font-semibold">
                      V = ventas
                    </td>
                    <td className="border px-4 py-2 text-center font-semibold">
                      t = tiempo
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">K</td>
                    <td className="border px-4 py-2">
                      {ventasFinalizar[selectedFinalizar]}
                    </td>
                    <td className="border px-4 py-2">{selectedFinalizar}</td>
                  </tr>
                </tbody>
              </table>
            )}

            <div className="text-center mt-2">
              <label htmlFor="SeleccionFuturo">
                Selecciona una fecha futura
              </label>
            </div>
            <select
              value={selectedFuturo}
              onChange={(e) =>
                this.setState({ selectedFuturo: e.target.value })
              }
              className="block mx-auto my-4 p-2 border border-gray-300 rounded-md"
            >
              {this.state.fechasFuturas.map((fecha, index) => (
                <option key={index} value={fecha}>
                  {fecha}
                </option>
              ))}
            </select>

            {selectedFuturo && (
              <>
                <h2 className="text-xl font-bold text-center mt-8">
                  Cálculo de la venta en el tiempo futuro
                </h2>
                <table className="mx-auto border-collapse mt-4">
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 text-center font-semibold">
                        Datos
                      </td>
                      <td className="border px-4 py-2 text-center font-semibold">
                        V = ventas
                      </td>
                      <td className="border px-4 py-2 text-center font-semibold">
                        t = tiempo
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">CI</td>
                      <td className="border px-4 py-2">
                        {ventasInicio[selectedInicio]}
                      </td>
                      <td className="border px-4 py-2">{selectedInicio}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">K</td>
                      <td className="border px-4 py-2">
                        {ventasFinalizar[selectedFinalizar]}
                      </td>
                      <td className="border px-4 py-2">{selectedFinalizar}</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">P1</td>
                      <td className="border px-4 py-2">
                        {this.calcularVentasFuturo(
                          selectedInicio,
                          selectedFinalizar,
                          selectedFuturo
                        )}
                      </td>
                      <td className="border px-4 py-2">{selectedFuturo}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

export default App;
