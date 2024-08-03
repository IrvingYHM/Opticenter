import { useState, useEffect } from "react";
import PasswordChecklist from "react-password-checklist";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PasswordStrengthBar from "react-password-strength-bar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fot from "../../components/Footer";
import Barra from "../../components/Navegacion/barra";

const CambioContrasena = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [clienteId, setClienteId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = parseJwt(token);
      setClienteId(decodedToken.clienteId);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const toggleShowPassword = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  async function cambiarContraseña(nuevaContraseña) {
    try {
      const response = await fetch(
        `https://backopt-production.up.railway.app/clientes/${clienteId}/password`, // Modificado para incluir el id del cliente
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newPassword: nuevaContraseña }), // Cambiado para enviar newPassword
        }
      );

      const data = await response.json();
      return data;
    } catch (error) {
      toast.error("Error al cambiar la contraseña: " + error.message); // Añadido error.message
      throw error;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Chequear si las contraseñas coinciden
    if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    // Validar la contraseña
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial."
      );
      return;
    }

    try {
      await cambiarContraseña(confirmPassword);
      // Limpiar los campos de contraseña
      setPassword("");
      setConfirmPassword("");
      toast.success("Contraseña cambiada exitosamente");
      setTimeout(() => {
        window.location.href = "/inicio";
      }, 1500);
    } catch (error) {
      toast.error("Error al cambiar la contraseña");
    }
  };

  return (
    <div className="py-16">
      <Barra />
      <div className="bg-gray-100 py-4 px-6 rounded-lg shadow-md max-w-md mx-auto mt-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-800 mb-1"
            >
              Nueva contraseña:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="newPassword"
                name="password"
                className="border border-gray-300 rounded-md py-2 px-3 w-full"
                placeholder="Nueva contraseña"
                value={password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center"
                onClick={() => toggleShowPassword("password")}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <PasswordStrengthBar
              password={password}
              minLength={8} // Longitud mínima de la contraseña
              minScore={1} // Puntuación mínima para considerar la contraseña válida
              scoreWords={[
                "débil",
                "aceptable",
                "buena",
                "fuerte",
                "muy fuerte",
              ]} // Palabras para describir los niveles de puntuación
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-800 mb-1"
            >
              Confirmar contraseña:
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className="border border-gray-300 rounded-md py-2 px-3 w-full"
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 flex items-center"
                onClick={() => toggleShowPassword("confirmPassword")}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <PasswordChecklist
              rules={["minLength", "specialChar", "number", "capital", "match"]}
              minLength={8}
              value={password}
              valueAgain={confirmPassword}
              messages={{
                minLength: "La contraseña tiene más de 8 caracteres.",
                specialChar: "La contraseña tiene caracteres especiales.",
                number: "La contraseña tiene un número.",
                capital: "La contraseña tiene una letra mayúscula.",
                match: "Las contraseñas coinciden.",
              }}
              iconSize={9} // Tamaño de los iconos
              style={{
                fontSize: "10px", // Tamaño de fuente
                lineHeight: "1.5", // Altura de línea
                backgroundColor: "white",
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "10px",
                marginTop: "5px",
              }}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Cambiar contraseña
          </button>
        </form>
      </div>
      <Fot />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
      />
    </div>
  );
};

export default CambioContrasena;
