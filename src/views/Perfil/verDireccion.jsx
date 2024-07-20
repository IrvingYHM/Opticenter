import React, { useState, useEffect } from "react";
import Fot from "../../components/Footer";
import Barra from "../../components/Navegacion/barra";

function VerEditarDireccion() {
  const [direccioncli, setDireccioncli] = useState({});
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/clientes/clientes/4/direccion")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener la dirección del cliente");
        }
        return response.json();
      })
      .then((data) => {
        // Suponemos que data es un objeto con los datos de la dirección del cliente
        setDireccioncli(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Función para manejar cambios en los campos de dirección
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDireccioncli({
      ...direccioncli,
      [name]: value,
    });
  };

  // Función para guardar los cambios editados
  const guardarCambios = () => {
    fetch(`http://localhost:3000/clientes/clientes/4/direccion`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(direccioncli),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al actualizar la dirección del cliente");
      }
      return response.json();
    })
    .then((data) => {
      setDireccioncli(data);
      setEditando(false); // Termina el modo de edición
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <Barra/>
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Dirección del Cliente
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Información actual de la dirección del cliente.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Calle y Número
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                    {editando ? (
                      <input
                        type="text"
                        name="Calle"
                        value={direccioncli.Calle}
                        onChange={handleChange}
                        className="block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    ) : (
                      <span>{direccioncli.Calle}</span>
                    )}
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Colonia</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                    {editando ? (
                      <input
                        type="text"
                        name="Colonia"
                        value={direccioncli.Colonia}
                        onChange={handleChange}
                        className="block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    ) : (
                      <span>{direccioncli.Colonia}</span>
                    )}
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Ciudad</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                    {editando ? (
                      <input
                        type="text"
                        name="Municipio"
                        value={direccioncli.Municipio}
                        onChange={handleChange}
                        className="block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    ) : (
                      <span>{direccioncli.Municipio}</span>
                    )}
                  </dd>
                </div>

                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Estado</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                    {editando ? (
                      <input
                        type="text"
                        name="Estado"
                        value={direccioncli.Estado}
                        onChange={handleChange}
                        className="block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    ) : (
                      <span>{direccioncli.Estado}</span>
                    )}
                  </dd>
                </div>

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Código Postal
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                    {editando ? (
                      <input
                        type="text"
                        name="CP"
                        value={direccioncli.CP}
                        onChange={handleChange}
                        className="block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    ) : (
                      <span>{direccioncli.CP}</span>
                    )}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              {editando ? (
                <>
                  <button
                    onClick={guardarCambios}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-2"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={() => setEditando(false)}
                    className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Cancelar
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setEditando(true)}
                  className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Editar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Fot />
    </div>
  );
}

export default VerEditarDireccion;
