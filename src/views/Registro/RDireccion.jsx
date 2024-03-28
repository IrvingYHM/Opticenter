import { useForm } from "react-hook-form";
import React, { useContext, useState, useEffect } from "react";
import { RegistroContext } from "./RegistroContext";

const RDireccion = ({ onNext, onBack, onValidationChange }) => {
  const { state, dispatch } = useContext(RegistroContext);
  const [isValid, setIsValid] = useState(false); // Estado local de validación

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleInfoChange = (info) => {
    dispatch({ type: "UPDATE_RDIRECCION", payload: info });
  };

  // Definir onSubmit en el mismo ámbito que handleNextClick
  const onSubmit = (data) => {
    console.log("datos almacenados", state);
    onNext();
  };

  useEffect(() => {
    const isValid = Object.keys(errors).length === 0;
    setIsValid(isValid);
    // Verificar si onValidationChange está definida antes de llamarla
    if (typeof onValidationChange === "function") {
      onValidationChange(isValid);
    }
  }, [errors, onValidationChange]);

  return (
    <>
      <div className="pt-24 text-center rounded-lg shadow-md overflow-hidden">
        <div className="container ml-auto mr-auto">
          <div className="bg-white px-12">
            <p className="sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4">
              Formulario de direccion del contacto
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="codPostal"
                  className="block text-gray-800 text-left font-bold"
                >
                  Codigo Postal:
                </label>
                <input
                  type="text"
                  id="codPostal"
                  name="codPostal"
                  onChange={(e) =>
                    handleInfoChange({ codPostal: e.target.value })
                  }
                  required
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Codigo Postal"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="ciudad"
                  className="block text-gray-800 text-left font-bold"
                >
                  Ciudad:
                </label>
                <input
                  type="text"
                  id="ciudad"
                  name="ciudad"
                  onChange={(e) => handleInfoChange({ ciudad: e.target.value })}
                  required
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Ciudad"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="colonia"
                  className="block text-gray-800 text-left font-bold"
                >
                  Colonia:
                </label>
                <input
                  type="text"
                  id="colonia"
                  name="colonia"
                  onChange={(e) =>
                    handleInfoChange({ colonia: e.target.value })
                  }
                  required
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Colonia"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="calle"
                  className="block text-gray-800 text-left font-bold"
                >
                  Calle:
                </label>
                <input
                  type="text"
                  id="calle"
                  name="calle"
                  onChange={(e) => handleInfoChange({ calle: e.target.value })}
                  required
                  max="2004-12-31"
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="calle"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="numExterior"
                  className="block text-gray-800 text-left font-bold"
                >
                  Numero exterior:
                </label>
                <input
                  type="text"
                  id="numExterior"
                  name="numExterior"
                  onChange={(e) =>
                    handleInfoChange({ numExterior: e.target.value })
                  }
                  required
                  max="2004-12-31"
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Numero exterior"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="numInterior"
                  className="block text-gray-800 text-left font-bold"
                >
                  Numero interior:
                </label>
                <input
                  type="text"
                  id="numInterior"
                  name="numInterior"
                  onChange={(e) =>
                    handleInfoChange({ numInterior: e.target.value })
                  }
                  required
                  max="2004-12-31"
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Numero interior"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="estadp"
                  className="block text-gray-800 text-left font-bold"
                >
                  Estado:
                </label>
                <input
                  type="text"
                  id="estado"
                  name="estado"
                  onChange={(e) => handleInfoChange({ estado: e.target.value })}
                  required
                  max="2004-12-31"
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Estado"
                />
              </div>
            </form>

            <div className="grid grid-cols-2">
              <button
                type="button"
                onClick={onBack}
                className="bg-gray-500 border border-black hover:bg-gray-400 text-white rounded-lg font-bold flex px-4 py-2 my-5 justify-center mx-auto items-center"
              >
                Regresar
              </button>
              <button
                type="submit"
                className="bg-blue-700 border border-black hover:bg-blue-600 text-white rounded-lg font-bold flex px-4 py-2 my-5 justify-center mx-auto items-center"
                disabled={Object.keys(errors).length > 0}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
       {/* Agrega esto para imprimir el estado actual */}
    <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

export default RDireccion;
