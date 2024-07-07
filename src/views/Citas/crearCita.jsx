import React, { useState } from "react";
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
import useFetchHorarios from "./horarios";

const CrearCita = () => {
  const { horarios, loading, error } = useFetchHorarios();
  const [mesActual, setMesActual] = useState(new Date());
  const [selectFecha, setSelectFecha] = useState(null);
  const [selectHora, setSelectHora] = useState("");

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

  const handleSubmit = () => {
    if (selectFecha && selectHora) {
      alert(
        `Cita agendada para el ${format(selectFecha, "dd/MM/yyyy", {
          locale: es,
        })} a las ${selectHora}`
      );
    } else {
      alert("Por favor, selecciona una fecha y una hora.");
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
          <div
            key={day}
            className="text-sm lg:text-lg font-semibold"
          >
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

  // Filtrar horarios disponibles según el día seleccionado
  const horariosDelDia = selectFecha
    ? horarios.filter(
        (horario) => new Date(selectFecha).getDay() === horario.Dia
      )
    : [];

  return (
    <div className="flex flex-col items-center mt-28 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="px-4 bg-white rounded-xl shadow-md space-y-2 w-full max-w-md lg:max-w-lg xl:max-w-xl">
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </div>
      <div className="px-6 mt-6 space-y-4 w-full max-w-xs md:max-w-md">
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
            {horariosDelDia.map((horario, index) => (
              <option key={index} value={horario.Hora}>
                {horario.Hora}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-lg lg:text-xl"
          >
            Agendar Cita
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrearCita;
