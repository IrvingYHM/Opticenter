import { useForm } from "react-hook-form";
import React, { useContext, useState, useEffect } from "react";
import { RegistroContext } from "./RegistroContext";

function InfoPersonal({ onNext, onBack, onValidationChange }) {
  const { state, dispatch } = useContext(RegistroContext);
  const [isValid, setIsValid] = useState(false); // Estado local de validación

  /* console.log(state); // Verifica el estado aquí */

  const handleInfoChange = (info) => {
    dispatch({ type: "UPDATE_INFO_PERSONAL", payload: info });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const isValid = Object.keys(errors).length === 0;
    setIsValid(isValid);
    // Verificar si onValidationChange está definida antes de llamarla
    if (typeof onValidationChange === "function") {
      onValidationChange(isValid);
    }
  }, [errors, onValidationChange]);

  const onSubmit = (data) => {
    const fechaNacim = new Date(data.fechaNacim);
    const fechaActual = new Date();

    // Calcular la diferencia de años entre la fecha de nacimiento y la fecha actual
    let diferenciaAnios = fechaActual.getFullYear() - fechaNacim.getFullYear();

    // Ajustar la diferencia de años si el cumpleaños todavía no ha pasado este año
    if (
      fechaActual.getMonth() < fechaNacim.getMonth() ||
      (fechaActual.getMonth() === fechaNacim.getMonth() &&
        fechaActual.getDate() <= fechaNacim.getDate())
    ) {
      diferenciaAnios--;
    }

    // Verificar si la diferencia de años es menor que 18
    if (diferenciaAnios < 18) {
      alert("Debes tener al menos 18 años para registrarte.");
      return; // Detener la función aquí si hay un error
    } else {
      onNext(); // Pasar al siguiente paso si el formulario es válido
    }
  };


  return (
    <>
      <div className="my-28 text-center">
        <div className="container ml-auto mr-auto flex items-center justify-center">
          <div>
            <p className="sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4">
              Formulario de informacion personal
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-800 -translate-x-32"
                >
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  onChange={(e) => {
                    const value = e.target.value.replace(/[0-9]/g, ""); // Eliminar números de la entrada
                    handleInfoChange({ nombre: value }); // Actualizar el estado con el valor limpio
                  }}
                  onKeyDown={(e) => {
                    if (!/[A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(e.key)) {
                      e.preventDefault(); // Prevenir la entrada si no es una letra o un espacio en blanco
                    }
                  }}
                  required
                  {...register("nombre", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                    minLength: {
                      value: 3,
                      message: "El nombre debe tener al menos 3 caracteres",
                    },
                    pattern: {
                      value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, // Permite letras y espacios en blanco
                      message:
                        "Solo se permiten letras de la A a la Z y espacios",
                    },
                  })}
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                />
              </div>
              {errors.nombre && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.nombre.message}
                </span>
              )}

              <div className="mb-4">
                <label
                  htmlFor="apPaterno"
                  className="block text-sm font-medium text-gray-800 -translate-x-24"
                >
                  Apellido Paterno:
                </label>
                <input
                  type="text"
                  id="apPaterno"
                  name="apPaterno"
                  onChange={(e) => {
                    const value = e.target.value.replace(/[0-9]/g, ""); // Eliminar números de la entrada
                    handleInfoChange({ apPaterno: value }); // Actualizar el estado con el valor limpio
                  }}
                  onKeyDown={(e) => {
                    if (!/[A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(e.key)) {
                      e.preventDefault(); // Prevenir la entrada si no es una letra o un espacio en blanco
                    }
                  }}
                  required
                  {...register("apPaterno", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                    minLength: {
                      value: 3,
                      message: "El nombre debe tener al menos 3 caracteres",
                    },
                    pattern: {
                      value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, // Permite letras y espacios en blanco
                      message:
                        "Solo se permiten letras de la A a la Z y espacios",
                    },
                  })}
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                />
              </div>
              {errors.apPaterno && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.apPaterno.message}
                </span>
              )}

              <div className="mb-4">
                <label
                  htmlFor="apMaterno"
                  className="block text-sm font-medium text-gray-800 -translate-x-24"
                >
                  Apellido Materno:
                </label>
                <input
                  type="text"
                  id="apMaterno"
                  name="apMaterno"
                  onChange={(e) => {
                    const value = e.target.value.replace(/[0-9]/g, ""); // Eliminar números de la entrada
                    handleInfoChange({ apMaterno: value }); // Actualizar el estado con el valor limpio
                  }}
                  onKeyDown={(e) => {
                    if (!/[A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(e.key)) {
                      e.preventDefault(); // Prevenir la entrada si no es una letra o un espacio en blanco
                    }
                  }}
                  required
                  {...register("apMaterno", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                    minLength: {
                      value: 3,
                      message: "El nombre debe tener al menos 3 caracteres",
                    },
                    pattern: {
                      value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, // Permite letras y espacios en blanco
                      message:
                        "Solo se permiten letras de la A a la Z y espacios",
                    },
                  })}
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                />
              </div>
              {errors.apMaterno && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.apMaterno.message}
                </span>
              )}

              <div className="mb-4">
                <label
                  htmlFor="fechaNacim"
                  className="block text-sm font-medium text-gray-800 -translate-x-20"
                >
                  Fecha de nacimiento
                </label>
                <input
                  type="date"
                  id="fechaNacim"
                  name="fechaNacim"
                  max={new Date().toISOString().split("T")[0]} // Restringe la fecha máxima a la fecha actual
                  onChange={(e) =>
                    handleInfoChange({ fechaNacim: e.target.value })
                  }
                  required
                  {...register("fechaNacim", {
                    required: "El campo es requerido",
                  })}
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                />
              </div>
              {errors.fechaNacim && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.fechaNacim.message}
                </span>
              )}
              <br />
              
              <button
                type="submit"
                className="bg-blue-700 border border-black hover:bg-blue-600 text-white rounded-lg font-bold flex px-4 py-2 justify-center mx-auto items-center"
                disabled={Object.keys(errors).length > 0}
              >
                Siguiente
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoPersonal;
