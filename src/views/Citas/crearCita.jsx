import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify"; 
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameDay,
  isSameMonth,
  addMonths,
  subMonths,
  addDays,
} from "date-fns";
import { es } from "date-fns/locale";
import axios from "axios";
import useFetchHorarios from "./horariosDisp";
import Barra from "../../components/Navegacion/barra";
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

const CrearCita = () => {
  const [mesActual, setMesActual] = useState(new Date());
  const [selectFecha, setSelectFecha] = useState(null);
  const [selectHora, setSelectHora] = useState("");
  const [idCliente, setIdCliente] = useState("");
  const [idTipoCita, setIdTipoCita] = useState("");
  const [costo, setCosto] = useState("");
  const { horarios, loading, error } = useFetchHorarios(
    selectFecha ? format(selectFecha, "yyyy-MM-dd") : null
  );

  // Datos de los tipos de citas
  const tiposCita = [
    { id: 1, nombre: "Examen de vista", costo: 100 },
    { id: 2, nombre: "Ajuste de Gafas", costo: 150 },
    { id: 3, nombre: "Examen de Lentes de Contacto", costo: 120 },
    { id: 4, nombre: "Examen de Salud Ocular", costo: 160 },
  ];

  useEffect(() => {
    // Verificar el tipo de usuario al cargar la página
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = parseJwt(token);
      setIdCliente(decodedToken.clienteId);
    }
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const handleDateClick = (day) => {
    setSelectFecha(day);
    setSelectHora(""); // Resetear la hora seleccionada al cambiar la fecha
  };

  const handleNextMonth = () => {
    setMesActual(addMonths(mesActual, 1));
  };

  const handlePrevMonth = () => {
    setMesActual(subMonths(mesActual, 1));
  };

  const handleTipoCitaChange = (e) => {
    const tipoCitaSeleccionada = tiposCita.find(
      (tipo) => tipo.id === parseInt(e.target.value)
    );
    if (tipoCitaSeleccionada) {
      setIdTipoCita(tipoCitaSeleccionada.id);
      setCosto(tipoCitaSeleccionada.costo);
    }
  };

  const handleSubmit = async () => {
    if (selectFecha && selectHora && idCliente && idTipoCita && costo) {
      try {
        // Crear la cita
        const citaResponse = await axios.post("http://localhost:3000/cita", {
          Fecha: format(selectFecha, "yyyy-MM-dd"),
          Hora: selectHora,
          IdCliente: idCliente,
          IdTipoCita: idTipoCita,
          Costo: costo,
          IdEstadoCita: 1,
        });

        if (citaResponse.status === 201) {
          // Reservar el horario
          try {
            const reservaResponse = await axios.post(
              "http://localhost:3000/horarios/reservar",
              {
                Fecha: format(selectFecha, "yyyy-MM-dd"),
                Hora: selectHora,
              }
            );

            if (reservaResponse.status === 200) {
              toast.success("Cita agendada y horario reservado exitosamente");
            } else {
              toast.error(
                "Cita agendada, pero hubo un problema al reservar el horario"
              );
            }
          } catch (reservaError) {
              toast.error(
                `Cita agendada, pero hubo un problema al reservar el horario: ${reservaError.message}`
              );
          }
        } else {
          toast.error("Hubo un problema al agendar la cita");
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 409) {
            toast.error("La hora y fecha seleccionada ya están ocupadas");
          } else if (error.response.data && error.response.data.message) {
            toast.error(`Error: ${error.response.data.message}`);
          } else {
            toast.error("Hubo un problema al agendar la cita");
          }
        } else {
          toast.error(`Error: ${error.message}`);
        }
      }
    } else {
      toast.error("Por favor, completa todos los campos");
    }
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center">
        <button onClick={handlePrevMonth} className="text-xl lg:text-2xl">
          &lt;
        </button>
        <span className="text-xl lg:text-2xl font-bold uppercase">
          {format(mesActual, "MMMM yyyy", { locale: es })}
        </span>
        <button onClick={handleNextMonth} className="text-xl lg:text-2xl">
          &gt;
        </button>
      </div>
    );
  };

  const renderDays = () => {
    return (
      <div className="grid grid-cols-7 gap-2 text-center mt-4">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-sm lg:text-lg font-semibold">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(mesActual);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d", { locale: es });
        const cloneDay = day;
        days.push(
          <div
            key={day}
            className={`p-2 lg:p-3 text-center cursor-pointer text-lg lg:text-xl ${
              !isSameMonth(day, monthStart) ? "text-gray-300" : ""
            } ${
              isSameDay(day, selectFecha)
                ? "bg-blue-500 text-white rounded-full"
                : "hover:bg-blue-200 rounded-full"
            }`}
            onClick={() => handleDateClick(cloneDay)}
          >
            <span>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1); // Incrementa el día correctamente
      }
      rows.push(
        <div className="grid grid-cols-7 gap-2" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="flex flex-col items-center mt-28 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <Barra/>
      <div className="px-4 bg-white rounded-xl shadow-md space-y-2 w-full max-w-md lg:max-w-lg xl:max-w-xl">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
      <div className="px-6 mt-6 space-y-4 w-full max-w-xs md:max-w-md">
        {selectFecha && (
          <>
            <div>
              <label
                htmlFor="hourSelect"
                className="block text-lg lg:text-xl font-medium mb-2"
              >
                Horas disponibles:
              </label>
              <select
                id="hourSelect"
                value={selectHora}
                onChange={(e) => setSelectHora(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-lg text-lg lg:text-xl"
              >
                <option value="" disabled>
                  Selecciona una hora
                </option>
                {horarios
                  .filter(
                    (horario) =>
                      horario.Fecha === format(selectFecha, "yyyy-MM-dd")
                  )
                  .map((horario) => (
                    <option key={horario.IdHorarios} value={horario.Hora}>
                      {horario.Hora}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="idTipoCita"
                className="block text-lg lg:text-xl font-medium text-gray-700 mb-2"
              >
                Tipo de Cita:
              </label>
              <select
                id="idTipoCita"
                value={idTipoCita}
                onChange={handleTipoCitaChange}
                className="block w-full p-2 lg:p-3 border border-gray-300 rounded-lg text-lg lg:text-xl"
              >
                <option value="" disabled>
                  Selecciona un tipo de cita
                </option>
                {tiposCita.map((tipo) => (
                  <option key={tipo.id} value={tipo.id}>
                    {tipo.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="costo"
                className="block text-lg lg:text-xl font-medium text-gray-700 mb-2"
              >
                Costo:
              </label>
              <input
                type="text"
                id="costo"
                value={costo}
                onChange={(e) => setCosto(e.target.value)}
                className="block w-full p-2 lg:p-3 border border-gray-300 rounded-lg text-lg lg:text-xl"
                readOnly
              />
            </div>
          </>
        )}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-lg lg:text-xl"
          >
            Agendar Cita
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default CrearCita;
