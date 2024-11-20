import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2"; // Importamos el componente de gráfico de barras
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registramos los componentes necesarios de Chart.js para el gráfico de barras
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

function ResultadosEncuestas() {
  const [resultados, setResultados] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Obtener los resultados de las encuestas completadas
    const obtenerResultados = async () => {
      try {
        const response = await fetch("https://backopt-production.up.railway.app/resultados", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const data = await response.json();

          // Verificar que data contiene los resultados
          if (data && data.data && Array.isArray(data.data)) {
            setResultados(data.data); // Almacenar los resultados de las encuestas
          } else {
            console.error("La respuesta no contiene un arreglo de resultados");
            setResultados([]); // Manejo de error si la respuesta no es válida
          }
        } else {
          alert("Error al obtener los resultados");
        }
      } catch (error) {
        console.error("Error al obtener los resultados:", error);
        alert("Hubo un error al obtener los resultados");
      } finally {
        setCargando(false); // Finalizar el estado de carga
      }
    };

    obtenerResultados();
  }, []);

  if (cargando) {
    return <div>Cargando resultados...</div>;
  }

  // Procesar las respuestas para construir los datos de la gráfica
  const procesarDatos = () => {
    const respuestasPorCalificacion = { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 };

    // Contamos las respuestas por calificación
    resultados.forEach((encuesta) => {
      const { respuestas } = encuesta;

      // Contamos las respuestas de cada calificación
      Object.entries(respuestas).forEach(([calificacion, cantidad]) => {
        respuestasPorCalificacion[calificacion] += cantidad; // Incrementamos el contador
      });
    });

    // Asignamos colores diferentes a cada calificación
    const colores = ["#FF6F61", "#FF9F40", "#FFCD44", "#4BC0C0", "#36A2EB"]; // Colores para las barras

    // Creamos los datos para el gráfico de barras
    return {
      labels: ["1", "2", "3", "4", "5"], // Las respuestas posibles
      datasets: [
        {
          label: "Distribución de Respuestas",
          data: Object.values(respuestasPorCalificacion), // Datos de cada calificación
          backgroundColor: colores, // Asignamos los colores diferentes a cada barra
          borderColor: '#D66F58', // Color de los bordes de las barras
          borderWidth: 1,
        },
      ],
    };
  };

  // Contamos el total de encuestas
  const totalEncuestas = resultados.reduce((total, encuesta) => total + Object.values(encuesta.respuestas).reduce((sum, cantidad) => sum + cantidad, 0), 0);

  const data = procesarDatos();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Resultados de Encuestas</h1>
      {resultados.length === 0 ? (
        <p>No se han completado encuestas aún.</p>
      ) : (
        <div>
          {/* Mostrar el total de encuestas */}
          <p className="text-xl mb-4">Total de Encuestas Completadas: {totalEncuestas}</p>

          <Bar
            data={data}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: "Distribución Total de Respuestas de sitio web", // Título del gráfico
                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      const label = context.dataset.label || '';
                      return `${label}: ${context.raw}`; // Mostrar valor de cada barra en el tooltip
                    },
                  },
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Calificación', // Título de la escala X
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Cantidad de Respuestas', // Título de la escala Y
                  },
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ResultadosEncuestas;
