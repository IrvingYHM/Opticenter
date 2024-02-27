import Fot from "../../components/Footer";
import { useForm } from "react-hook-form";
import { useContext, useState, useEffect } from "react";
import { RegistroContext } from "./RegistroContext";

const RContraseña = ({ onNext, onBack, onValidationChange }) => {
  const { state, dispatch } = useContext(RegistroContext);
  const [isValid, setIsValid] = useState(false); // Estado local de validación

  const handleInfoChange = (info) => {
    dispatch({ type: "UPDATE_RCONTRASEÑA", payload: info });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm(); // Agrega 'watch' a la desestructuración

  const onSubmit = (data) => {
    console.log(data);
    onNext();
    // Aquí puedes manejar la lógica de envío del formulario
  };

  const passwordValidation = (value) => {
    // Agrega tus propias validaciones para la contraseña
    const minLength = 8; // Mínimo 6 caracteres
    if (value.length < minLength) {
      return `La contraseña debe tener al menos ${minLength} caracteres`;
    }
    // Puedes agregar más validaciones según tus necesidades
    return true;
  };

  const selectedQuestion = watch("question"); // Obtener el valor seleccionado de la pregunta

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
              Formulario de contraseña del contacto
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="contraseña"
                  className="block text-sm font-medium text-gray-800 -translate-x-28"
                >
                  Contraseña:
                </label>

                <input
                  type="password"
                  id="contraseña"
                  name="contraseña"
                  onChange={(e) =>
                    handleInfoChange({ contraseña: e.target.value })
                  }
                  required
                  {...register("contraseña", {
                    validate: passwordValidation,
                  })}
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                  placeholder="Contraseña"
                />
              </div>
              {errors.contraseña && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.contraseña.message}
                </span>
              )}

              <div className="mb-4">
                <label
                  htmlFor="confirContra"
                  className="block text-sm font-medium text-gray-800 -translate-x-9"
                >
                  Ingresa nuevamente tu contraseña:
                </label>
                <input
                  type="password"
                  id="confirContra"
                  name="confirContra"
                  onChange={(e) =>
                    handleInfoChange({ confirContra: e.target.value })
                  }
                  required
                  {...register("confirContra", {
                    validate: (value) =>
                      value === watch("contraseña") ||
                      "Las contraseñas no coinciden",
                  })}
                  className="mt-1 p-2 border rounded-md w-72 text-center"
                  placeholder="Confirma tu contraseña"
                />
              </div>
              {errors.confirContra && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.confirContra.message}
                </span>
              )}

              {/* Pregunta secreta y respuesta */}
              <div className="mb-4">
                <label
                  htmlFor="question"
                  className="block text-sm font-medium text-gray-800 mb-2 -translate-x-9"
                >
                  Selecciona una pregunta secreta:
                </label>
                <select
                  id="question"
                  name="question"
                  onChange={(e) =>
                    handleInfoChange({ question: e.target.value })
                  }
                  {...register("question")}
                  className="border border-gray-300 py-4 rounded-lg focus:border-indigo-500 outline-none focus:right-1 focus:ring-indigo-500 w-72 select-selected text-sm "
                >
                  <option disabled>Selecciona la pregunta secreta</option>
                  <option value="color">
                    ¿Cuál es tu color favorito?
                  </option>
                  <option value="amigo">
                    ¿Cuál es el nombre de tu mejor amigo?
                  </option>
                  <option value="mascota">
                    ¿Cuál es el nombre de tu mascota?
                  </option>
                  <option value="comida">¿Cuál es tu comida favorita?</option>
                </select>
              </div>
              {selectedQuestion !== "" && (
                <div>
                  <label
                    htmlFor="answer"
                    className="block text-sm font-medium text-gray-800 -translate-x-28"
                  >
                    Respuesta:
                  </label>
                  <input
                    type="text"
                    id="respuesta"
                    name="respuesta"
                    onChange={(e) =>
                      handleInfoChange({ respuesta: e.target.value })
                    }
                    {...register("answer")}
                    className="mt-1 p-2 border rounded-md w-72 text-center"
                    placeholder="Ingresa tu respuesta"
                  />
                </div>
              )}
              <br />

              {/* <button
                style={{ backgroundColor: "green", color: "white" }}
                className="bg-blue-700 border-2 border-black hover:bg-green-400 text-white rounded-md font-bold flex px-4 py-2 justify-center mx-auto items-center"
                type="submit"
              >
                Guardar
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
                Siguiente
              </button>
            </form>
          </div>
        </div>
      </div>
      <Fot />
    </>
  );
};

export default RContraseña;
