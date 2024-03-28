import { useForm } from 'react-hook-form';
import React, { useContext, useState, useEffect } from "react";
import { RegistroContext } from './RegistroContext';

const RCorreo = ({ onNext, onBack, onValidationChange }) => {
  const { state, dispatch } = useContext(RegistroContext);
  const [isValid, setIsValid] = useState(false); // Estado local de validación

  const handleInfoChange = (info) => {
    dispatch({ type: "UPDATE_RCORREO", payload: info });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Verificar si hay errores en los campos
    if (Object.keys(errors).length === 0) {
      onNext();
      /* window.alert("Datos guardados", data); */
    } else {
      // Hay errores, no hacer nada o puedes mostrar mensajes de error adicionales si lo deseas
    }
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
              Formulario de correo electrónico del contacto
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1"
            >
              <div className="mb-4">
                <label
                  htmlFor="correo"
                  className="block text-gray-800 text-left font-bold"
                >
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  onChange={(e) => handleInfoChange({ correo: e.target.value })}
                  required
                  {...register("correo", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                    pattern: {
                      value:
                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,3}$/,
                      message: "El formato de correo electrónico no es válido",
                    },
                  })}
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Correo Electrónico"
                />
              </div>
              {errors.correo && (
                <span className="text-red-500 text-base -mt-3 mb-2">
                  *{errors.correo.message}
                </span>
              )}

              <div className="mb-4">
                <label
                  htmlFor="telefono"
                  className="block text-gray-800 text-left font-bold"
                >
                  Número de teléfono:
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^\d]/g, ""); // Eliminar todos los caracteres que no sean dígitos
                    handleInfoChange({ telefono: value }); // Actualizar el estado con el valor limpio
                  }}
                  onKeyDown={(e) => {
                    if (!/\d/.test(e.key) && e.key !== "Backspace") {
                      e.preventDefault(); // Prevenir la entrada si no es un dígito o la tecla de retroceso
                    }
                  }}
                  required
                  maxLength={10}
                  {...register("telefono", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                    minLength: {
                      value: 10,
                      message: "El teléfono debe tener al menos 10 dígitos",
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Solo se permiten números",
                    },
                  })}
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Número de teléfono"
                />
              </div>
              {errors.telefono && (
                <span className="text-red-500 text-base -mt-3 mb-2">
                  *{errors.telefono.message}
                </span>
              )}

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
                  Siguiente
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RCorreo;
