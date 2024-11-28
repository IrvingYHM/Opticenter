import { useState, useEffect } from "react";
import Barra from "../components/Navegacion/barra";
import Slider from "../home/slider";
import Fot from "../components/Footer";
import Scrool from "../components/scroll";
import imagen from "../img/Venta.png";
import imagen2 from "../img/lentes2.png";
import lente from "../img/3d.jpg";
import Encuesta from "../views/feedback/encuesta";

// Función para decodificar el JWT y obtener el clienteId
function getClienteIdFromToken() {
  const token = localStorage.getItem("token");

  if (token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    const decodedToken = JSON.parse(jsonPayload);
    return decodedToken.clienteId;
  }

  return null;
}

function App() {
  const [mostrarEncuesta, setMostrarEncuesta] = useState(false); // Estado para la encuesta pendiente
  const [idUsuario, setIdUsuario] = useState(null); // Estado para idUsuario (inicializado como null)
  const [encuesta, setEncuesta] = useState(null); // Estado para almacenar la información de la encuesta

  const [mostrarElemento, setMostrarElemento] = useState(false);
  const [mostrarElemento2, setMostrarElemento2] = useState(false);
  const [mostrarElemento3, setMostrarElemento3] = useState(false);
  const [isZoomed1, setIsZoomed1] = useState(false);
  const [isZoomed2, setIsZoomed2] = useState(false);
  const [isZoomed3, setIsZoomed3] = useState(false);

  const handleMouseOver1 = () => {
    setIsZoomed1(true);
  };

  const handleMouseOut1 = () => {
    setIsZoomed1(false);
  };

  const handleMouseOver2 = () => {
    setIsZoomed2(true);
  };

  const handleMouseOut2 = () => {
    setIsZoomed2(false);
  };

  const handleMouseOver3 = () => {
    setIsZoomed3(true);
  };

  const handleMouseOut3 = () => {
    setIsZoomed3(false);
  };

  // Función para verificar si el usuario tiene una encuesta pendiente
  const obtenerEncuestaPendiente = async (idUsuario) => {
    try {
      const response = await fetch("https://backopt-production.up.railway.app/feedback/pendiente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idUsuario }),
      });

      const data = await response.json();

      if (data.estado === "Pendiente") {
        return {
          estado: "Pendiente",
          id_encuesta: data.id_encuesta,
          mensaje: data.mensaje,
        };
      } else {
        return { estado: "Completado", mensaje: data.mensaje };
      }
    } catch (error) {
      console.error("Error al obtener la encuesta pendiente:", error);
      return {
        estado: "Error",
        mensaje: "No se pudo verificar la encuesta pendiente.",
      };
    }
  };

  useEffect(() => {
    const id = getClienteIdFromToken();
    if (id) {
      setIdUsuario(id);
    } else {
      console.error("No se pudo obtener el idUsuario del token.");
    }
  }, []);

  useEffect(() => {
    if (idUsuario) {
      const verificarEncuesta = async () => {
        const encuesta = await obtenerEncuestaPendiente(idUsuario);
        if (encuesta.estado === "Pendiente") {
          setEncuesta(encuesta); // Guardamos la encuesta pendiente
          setMostrarEncuesta(true); // Mostramos la encuesta
        }
      };
      verificarEncuesta();
    }
  }, [idUsuario]);

  return (
    <>
      <Barra />

      {mostrarEncuesta && encuesta && (
        <div className="fixed top-1/2 left-1/2  z-50 bg-white p-6 rounded-lg shadow-lg">
          <Encuesta encuesta={encuesta} />
        </div>
      )}

      {/* Contenido de la página */}
      <div className="flex-center text-center mt-16">
        <div className="my-32 ">
          <div>
            <Slider />
          </div>
          <br />
          <div className="flex justify-around mb-5">
            <div>
              <img
                src={imagen2}
                alt="Imagen 2"
                className="rounded-lg w-80 h-60 object-cover"
              />
            </div>
            <div>
              <img
                src={imagen}
                alt="Imagen"
                className="rounded-lg w-80 h-60 object-cover"
              />
            </div>
          </div>
          <br />
          <div className="mb-16">
            <h2 className="font-extrabold text-center text-3xl text-indigo-800 mb-5">
              ¡Estás a un paso de obtener lo que necesitas!
            </h2>
            <p className="text-xl text-center text-gray-500">
              Encuentra tus productos ópticos favoritos y realiza tu compra de
              forma fácil y rápida.
            </p>
          </div>
        </div>
      </div>
      <Scrool />
      <Fot />
    </>
  );
}

export default App;
