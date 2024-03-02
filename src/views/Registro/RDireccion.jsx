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
      <div className="my-28 text-center">
        <div className="container ml-auto mr-auto flex items-center justify-center">
          <div>
            <p className="sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4">
              Formulario de direccion del contacto
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="codPostal"
                  className="block text-sm font-medium text-gray-800 -translate-x-24"
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
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                  placeholder="Codigo Postal"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="ciudad"
                  className="block text-sm font-medium text-gray-800 -translate-x-28"
                >
                  Ciudad:
                </label>
                <input
                  type="text"
                  id="ciudad"
                  name="ciudad"
                  onChange={(e) => handleInfoChange({ ciudad: e.target.value })}
                  required
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                  placeholder="Ciudad"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="colonia"
                  className="block text-sm font-medium text-gray-800 -translate-x-28"
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
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                  placeholder="Colonia"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="calle"
                  className="block text-sm font-medium text-gray-800 -translate-x-28"
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
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                  placeholder="calle"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="numExterior"
                  className="block text-sm font-medium text-gray-800 -translate-x-20"
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
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                  placeholder="Numero exterior"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="numInterior"
                  className="block text-sm font-medium text-gray-800 -translate-x-20"
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
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                  placeholder="Numero interior"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="estadp"
                  className="block text-sm font-medium text-gray-800 -translate-x-28"
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
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                  placeholder="Estado"
                />
              </div>
            </form>

            {/* <button
              className="bg-green-700 border-2 border-black hover:bg-green-400 text-white rounded-md font-bold flex px-4 py-2 justify-center mx-auto items-center"
              type='submit'
            >
              <Link to="">Guardar</Link>
            </button> */}

            <button
              type="button"
              onClick={onBack}
              className="bg-gray-500 text-white p-2 mr-2 rounded-md"
            >
              Regresar
            </button>
            <button
              type="submit"
              className="bg-blue-700 text-white p-2 rounded-md"
              disabled={Object.keys(errors).length > 0}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RDireccion;
