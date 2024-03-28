import { useForm } from "react-hook-form";
import React, { useContext, useState, useEffect } from "react";
import { RegistroContext } from "./RegistroContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import PasswordChecklist from "react-password-checklist";

const RContraseña = ({ onNext, onBack, onValidationChange }) => {
  const { state, dispatch } = useContext(RegistroContext);
  const [isValid, setIsValid] = useState(false); // Estado local de validación
  const [showPassword, setShowPassword] = useState(false); // Estado local para mostrar/ocultar la contraseña
  const [showConfirPass, setShowConfirPass] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [passwordChecklistValid, setPasswordChecklistValid] = useState(false); // Estado local para validar el checklist de la contraseña

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

  useEffect(() => {
    const isValid = Object.keys(errors).length === 0 && passwordChecklistValid; // Verificar la validez del checklist de la contraseña
    setIsValid(isValid);
    // Verificar si onValidationChange está definida antes de llamarla
    if (typeof onValidationChange === "function") {
      onValidationChange(isValid);
    }
  }, [errors, onValidationChange, passwordChecklistValid]);

  return (
    <>
      <div className="pt-24 text-center rounded-lg shadow-md overflow-hidden">
        <div className="container ml-auto mr-auto">
          <div className="bg-white px-12">
            <p className="sm:text-2xl md:text-base lg:text-2xl text-cyan-950 font-bold mb-4">
              Formulario de contraseña del contacto
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1"
            >
              <div className="mb-4 relative">
                <label
                  htmlFor="contraseña"
                  className="block text-gray-800 text-left font-bold"
                >
                  Contraseña:
                </label>

                <input
                  type={showPassword ? "text" : "password"}
                  id="contraseña"
                  placeholder="Ingrese una contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  maxLength={16}
                  className="mt-1 p-2 border rounded-md w-full"
                />
                <button
                  type="button"
                  className="absolute right-2 top-5/8 transform"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
              {errors.contraseña && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.contraseña.message}
                </span>
              )}

              <div className="mb-4 relative">
                <label
                  htmlFor="confirContra"
                  className="block text-gray-800 text-left font-bold"
                >
                  Ingresa nuevamente tu contraseña:
                </label>
                <input
                  type={showConfirPass ? "text" : "password"}
                  id="confirContra"
                  placeholder="Ingresa nuevamente la contraseña"
                  value={passwordConf}
                  onChange={(e) => setPasswordConf(e.target.value)}
                  required
                  maxLength={16}
                  className="mt-1 p-2 border rounded-md w-full"
                />
                <button
                  type="button"
                  className="absolute right-2 top-5/8 transform"
                  onClick={() => setShowConfirPass(!showConfirPass)}
                >
                  <FontAwesomeIcon icon={showConfirPass ? faEyeSlash : faEye} />
                </button>
              </div>
              {errors.confirContra && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.confirContra.message}
                </span>
              )}

              <PasswordChecklist
                className="text-left"
                rules={[
                  "minLength",
                  "specialChar",
                  "number",
                  "capital",
                  "letter",
                  "match",
                ]}
                minLength={8}
                value={password}
                valueAgain={passwordConf}
                onChange={(isValid) => setPasswordChecklistValid(isValid)} // Actualizar el estado de validación del checklist
                messages={{
                  minLength: "La contraseña tiene más de 8 caracteres.",
                  specialChar: "La contraseña tiene caracteres especiales.",
                  number: "La contraseña tiene un número.",
                  capital: "La contraseña tiene una letra mayúscula.",
                  letter: "La contraseña tiene una letra minúsculas.",
                  match: "Las contraseñas coinciden.",
                }}
              />
              <br />

              {/* Pregunta secreta y respuesta */}
              <div className="mb-4">
                <label
                  htmlFor="question"
                  className="block text-gray-800 text-left font-bold"
                >
                  Selecciona una pregunta secreta:
                </label>
                <select
                  id="question"
                  required
                  onChange={(e) =>
                    handleInfoChange({ question: e.target.value })
                  }
                  {...register("question")}
                  defaultValue=""
                  className="mt-1 p-2 border rounded-md w-full"
                >
                  <option disabled value="">
                    Selecciona la pregunta secreta
                  </option>
                  <option value="color">¿Cuál es tu color favorito?</option>
                  <option value="amigo">
                    ¿Cuál es el nombre de tu mejor amigo?
                  </option>
                  <option value="mascota">
                    ¿Cuál es el nombre de tu mascota?
                  </option>
                  <option value="comida">¿Cuál es tu comida favorita?</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="answer"
                  className="block text-gray-800 text-left font-bold"
                >
                  Respuesta:
                </label>
                <input
                  type="text"
                  id="respuesta"
                  required
                  onChange={(e) =>
                    handleInfoChange({ respuesta: e.target.value })
                  }
                  {...register("answer")}
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Ingresa tu respuesta"
                />
              </div>

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
                  disabled={!isValid} // Deshabilitar el botón si no es válido
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

export default RContraseña;
