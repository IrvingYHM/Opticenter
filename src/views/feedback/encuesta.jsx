import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Función para decodificar JWT
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

function EncuestaCitas() {
  const [respuestas, setRespuestas] = useState({});
  const [enviada, setEnviada] = useState(false);
  const [cargando, setCargando] = useState(true); // Estado para indicar que se está verificando
  const [encuestaCompletada, setEncuestaCompletada] = useState(false); // Estado para verificar si ya se completó la encuesta
  const navigate = useNavigate();

  const preguntas = [
    "¿Qué tan fácil fue encontrar la información que buscabas?",
    "¿Cómo calificarías la facilidad de uso del sistema para agendar tu cita?",
    "¿Qué tan satisfecho estás con el proceso de agendar una cita?",
    "¿Qué tan rápido te pareció el sistema para agendar tu cita?",
    "¿Qué tan claro fue el mensaje de confirmación de tu cita?",
  ];

  useEffect(() => {
    // Recuperar el token del localStorage
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = parseJwt(token);
      const idUsuario = decodedToken.clienteId; // Asumimos que el idUsuario está en el campo `id`

      // Verificar si la encuesta ya fue completada
      const verificarEncuesta = async () => {
        try {
          const response = await fetch(`http://localhost:3000/Encuesta/completada?idUsuario=${idUsuario}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });

          if (response.ok) {
            const data = await response.json();
            if (data.completada) {
              setEncuestaCompletada(true); // Establecer que la encuesta ya fue completada
            }
          }
        } catch (error) {
          console.error("Error al verificar encuesta:", error);
        } finally {
          setCargando(false); // Finaliza el estado de carga
        }
      };

      verificarEncuesta();
    } else {
      // Si no hay token, redirigir al login o manejar el error
      navigate("/login");
    }
  }, [navigate]);

  const handleRespuestaChange = (index, value) => {
    setRespuestas((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(respuestas).length !== preguntas.length) {
      alert("Por favor responde todas las preguntas antes de enviar.");
      return;
    }

    const token = localStorage.getItem("token");
    const decodedToken = parseJwt(token);
    const idUsuario = decodedToken.clienteId;

    try {
      const response = await fetch("http://localhost:3000/Encuesta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idUsuario, // Usar el id del usuario decodificado del JWT
          respuestas,
          preguntas, // Envía las preguntas al backend
        }),
      });

      if (response.ok) {
        setEnviada(true);

        // Redirigir al inicio después de 3 segundos
        setTimeout(() => {
          navigate("/ver-cita");
        }, 3000);
      } else {
        alert("Hubo un error al enviar tu feedback. Intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al enviar tu feedback. Intenta nuevamente.");
    }
  };

  if (cargando) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-white text-xl">Cargando...</div>
      </div>
    );
  }

  if (encuestaCompletada) {
    setTimeout(() => {
      navigate("/ver-cita"); // Redirigir a la página de cita después de un breve retraso
    }, 2000); // 2 segundos de espera antes de redirigir
    return null; // No renderizar nada, solo redirigir
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="py-16 px-8 bg-white shadow-lg rounded-lg max-w-lg w-full h-auto overflow-y-auto max-h-[80vh]">
        {enviada ? (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">¡Gracias por tu feedback!</h2>
            <p>Hemos recibido tus respuestas. Serás redirigido al inicio.</p>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center">Encuesta</h1>
            <form onSubmit={handleSubmit}>
              {preguntas.map((pregunta, index) => (
                <div key={index} className="mb-6">
                  <label className="block font-medium mb-2">{pregunta}</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((estrella) => (
                      <button
                        key={estrella}
                        type="button"
                        className={`text-2xl ${respuestas[index] >= estrella ? "text-yellow-500" : "text-gray-400"}`}
                        onClick={() => handleRespuestaChange(index, estrella)}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded mt-4"
                >
                  Enviar Encuesta
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default EncuestaCitas;
