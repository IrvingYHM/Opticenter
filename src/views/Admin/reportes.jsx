import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2"; // Importamos el componente de gráfico de pastel
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Registramos los componentes necesarios de Chart.js para el gráfico de pastel
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

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
    const respuestasPorPregunta = {};

    // Contamos las respuestas por pregunta
    resultados.forEach((encuesta) => {
      const { pregunta, respuestas } = encuesta;

      // Si la pregunta no existe en el objeto, la inicializamos
      if (!respuestasPorPregunta[pregunta]) {
        respuestasPorPregunta[pregunta] = { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 };
      }

      // Contamos las respuestas de la calificación para cada pregunta
      Object.entries(respuestas).forEach(([calificacion, cantidad]) => {
        respuestasPorPregunta[pregunta][calificacion] += cantidad; // Incrementamos el contador
      });
    });

    // Creamos los datos para el gráfico de pastel
    const labels = Object.keys(respuestasPorPregunta); // Las preguntas
    const datasets = labels.map((pregunta) => {
      const totalRespuestas = Object.values(respuestasPorPregunta[pregunta]).reduce((a, b) => a + b, 0); // Total de respuestas por pregunta
      return {
        label: pregunta,
        data: Object.values(respuestasPorPregunta[pregunta]), // Los valores de cada calificación
        backgroundColor: ['#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1'], // Colores para el gráfico
      };
    });

    return {
      labels: ['1', '2', '3', '4', '5'], // Respuestas posibles
      datasets,
    };
  };

  const data = procesarDatos();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Resultados de Encuestas</h1>
      {resultados.length === 0 ? (
        <p>No se han completado encuestas aún.</p>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center">
          {data.datasets.map((dataset, index) => (
            <div key={index} className="flex-1 max-w-sm p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{`Pregunta: ${dataset.label}`}</h3>
              <div className="w-full h-[400px]"> {/* Altura ajustada */}
                <Pie
                  data={{
                    labels: data.labels, // Respuestas posibles
                    datasets: [dataset],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        display: true,
                        text: "Distribución de Respuestas",
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResultadosEncuestas;
