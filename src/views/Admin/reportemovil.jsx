import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

function ResultadosEncuestas() {
  const [resultados, setResultados] = useState([]); // Datos de las encuestas
  const [totalPersonas, setTotalPersonas] = useState(0); // Total de personas que han respondido
  const [cargando, setCargando] = useState(true); // Estado de carga

  const mapeoPreguntas = {
    question1: "¿Qué tan fácil fue encontrar la información que buscabas?",
    question2: "¿Cómo calificarías la facilidad de uso del sistema para agendar tu cita?",
    question3: "¿Qué tan satisfecho estás con el proceso de agendar una cita?",
    question4: "¿Qué tan rápido te pareció el sistema para agendar tu cita?",
    question5: "¿Qué tan claro fue el mensaje de confirmación de tu cita?",
  };

  useEffect(() => {
    // Obtener los resultados de las encuestas
    const obtenerResultados = async () => {
      try {
        const response = await fetch(
          "https://backopt-production.up.railway.app/resultadosM",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.ok) {
          const data = await response.json();
          if (data) {
            setResultados(data.data || []); // Maneja los resultados de las encuestas
            setTotalPersonas(data.totalPersonas || 0); // Guarda el total de personas únicas
          } else {
            setResultados([]);
            setTotalPersonas(0);
          }
        } else {
          alert("Error al obtener los resultados");
        }
      } catch (error) {
        alert("Hubo un error al obtener los resultados");
        console.error("Error al obtener los resultados:", error);
      } finally {
        setCargando(false); // Finaliza la carga
      }
    };

    obtenerResultados(); // Llamar la función de obtención de resultados
  }, []);

  if (cargando) {
    return <div>Cargando resultados...</div>;
  }

  const procesarDatos = () => {
    if (typeof resultados !== "object" || Array.isArray(resultados)) {
      console.error("Los resultados no son un objeto:", resultados);
      return { labels: [], datasets: [] };
    }

    const respuestasPorPregunta = [];

    Object.entries(resultados).forEach(([pregunta, respuestas]) => {
      const preguntaReal = mapeoPreguntas[pregunta] || pregunta; // Usa el mapeo o la clave por defecto
      const respuestasArray = Object.values(respuestas);

      respuestasPorPregunta.push({
        label: preguntaReal,
        data: respuestasArray,
        backgroundColor: [
          "#FF6F61",
          "#6B5B95",
          "#88B04B",
          "#F7CAC9",
          "#92A8D1",
        ],
      });
    });

    return {
      labels: ["1", "2", "3", "4", "5"],
      datasets: respuestasPorPregunta,
    };
  };

  const estrellas = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"]; // Representación de estrellas
  const data = procesarDatos();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Resultados de Encuestas Movil</h1>

      {/* Mostrar el total de personas que han respondido */}
      <p className="text-lg font-semibold mb-6">
        Total de personas que han respondido: {totalPersonas}
      </p>

      {resultados.length === 0 ? (
        <p>No se han completado encuestas aún.</p>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center">
          {data.datasets.map((dataset, index) => (
            <div
              key={index}
              className="flex-1 max-w-sm p-6 bg-white rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{dataset.label}</h3>
              <div className="w-full h-[400px]">
                <Pie
                  data={{
                    labels: data.labels,
                    datasets: [dataset],
                  }}
                  options={{
                    responsive: true,
                    plugins: {
                      tooltip: {
                        callbacks: {
                          label: (tooltipItem) => {
                            const calificacion =
                              estrellas[tooltipItem.dataIndex]; // Convertir índice a estrellas
                            const value = dataset.data[tooltipItem.dataIndex];
                            return `${calificacion}: Personas que han respondido: ${value}`;
                          },
                        },
                      },
                      title: {
                        display: true,
                        text: `Respuestas por calificación`,
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
