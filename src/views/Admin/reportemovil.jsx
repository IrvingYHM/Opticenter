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

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

function ResultadosEncuestas() {
  const [resultados, setResultados] = useState([]);
  const [totalPersonas, setTotalPersonas] = useState(0); // Nuevo estado para personas únicas
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
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

          if (data && data.data && Array.isArray(data.data)) {
            setResultados(data.data);
            setTotalPersonas(data.totalPersonas || 0); // Guardar el total de personas únicas
          } else {
            console.error("La respuesta no contiene un arreglo de resultados");
            setResultados([]);
            setTotalPersonas(0);
          }
        } else {
          alert("Error al obtener los resultados");
        }
      } catch (error) {
        console.error("Error al obtener los resultados:", error);
        alert("Hubo un error al obtener los resultados");
      } finally {
        setCargando(false);
      }
    };

    obtenerResultados();
  }, []);

  if (cargando) {
    return <div>Cargando resultados...</div>;
  }

  const procesarDatos = () => {
    const respuestasPorPregunta = {};

    resultados.forEach((encuesta) => {
      const { pregunta, respuestas } = encuesta;

      if (!respuestasPorPregunta[pregunta]) {
        respuestasPorPregunta[pregunta] = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      }

      Object.entries(respuestas).forEach(([calificacion, cantidad]) => {
        respuestasPorPregunta[pregunta][calificacion] += cantidad;
      });
    });

    const labels = Object.keys(respuestasPorPregunta);
    const datasets = labels.map((pregunta) => {
      return {
        label: pregunta,
        data: Object.values(respuestasPorPregunta[pregunta]),
        backgroundColor: [
          "#FF6F61",
          "#6B5B95",
          "#88B04B",
          "#F7CAC9",
          "#92A8D1",
        ],
      };
    });

    return {
      labels: ["1", "2", "3", "4", "5"], // Mantenemos las etiquetas originales (números)
      datasets,
    };
  };

  const estrellas = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"]; // Representación de estrellas

  const data = procesarDatos();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Resultados de Encuesta Movil</h1>

      {/* Mostrar cantidad de personas únicas que han respondido */}
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
              <h3 className="text-xl font-semibold mb-2">{`${dataset.label}`}</h3>
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
